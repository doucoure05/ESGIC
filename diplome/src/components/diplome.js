import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button.js";
import AddDiplome from './AddDiplome';
import Modal from "react-bootstrap/Modal";
import '../css/diplome.css';
import Qrcode from 'qrcode.react';
export default class DiplomeList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            diplomes: [],
            tableRows: [],
            searchWord: "",
            qrcodeValue: "",
        };
    }
  
    //Methode to fetch data
    getDiplomes = async () => {
        const response = await axios.get('http://localhost:5000/diplomes');
        this.setState({
            diplomes: response.data,
            tableRows: response.data
        });
    };

    deleteDiplome = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/diplomes/${id}`);
            this.getDiplomes();
        } catch (error) {
            console.log(error);
        }
    };

    handleChange = (event) => {
        let fieldVal = event.target.value;
        this.setState({
            searchWord: fieldVal
        });
        console.log("searchWord: ", this.state.searchWord);
    };

    checkForm = () => {
        let isword = false;

        if (this.state.searchWord != null) {
            if (this.state.searchWord.length > 0) {
                isword = true;
            }
        }

        this.setState({
            formOK: isword,
        });
    };

    Qrcode = (ads) => {
        this.setState({
            qrcodeValue: "",
            qrcodeValue: ads,
        }, () => { console.log("the value in qrcode: ", this.state.qrcodeValue) });
    }

    search = () => {
        
        if (this.state.searchWord.length > 0) {
            this.setState({ tableRows: [...this.state.diplomes].filter((diplome) => diplome.matricule.includes(this.state.searchWord))});
            console.log("tableRows: ", this.state.tableRows);
        } else {
            //setTableRows(diplomes);
        }
    }

    render() {
        return (
            <>
                <h2 className="text-center display-4">
                    Diplome
                </h2>
                {/* <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">{/* <h1>Liste des clients</h1> </div>
                        </div>
                    </div>
                </section> */}
                <div id="ajout" className="row">
                    <div className="col-md-9"></div>
                    <div className="col-md-3"><AddDiplome
                        libelle={"Nouvelle diplome"}
                        add={true}
                        btnStyle="btn btn-block btn-success"
                        btnIcon="bi-plus-circle"
                        width="100px"
                        onClose={this.getDiplomes()}
                    />
                    </div>
                </div>
                {/* {this.state.diplomes.length > 0 ? ( */}
                    <div id="ajout" className="row">
                        <div className="col-md-9">
                            {/* <input type="text" class="form-control" placeholder="Input group example" aria-label="Input group example" aria-describedby="basic-addon1" name="qrcodeValue" onChange={handleChange.bind(this)} value={qrcodeValue} /> */}
                        </div>
                        <div className="col-md-3">
                            <div className="row">
                                <div className="col-md-9">
                                <input type="text" className="input" placeholder='Recherche' name="searchWord"
                                    onChange={this.handleChange.bind(this)}
                                    value={this.state.searchWord} />
                                </div>
                                <div className="col-md-3">
                                    <Button
                                        className="btn btn-block btn-sm"
                                        variant="success"
                                        onClick={this.search}
                                    >
                                        <i className="bi bi-search"></i>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* ) : null} */}
                <div className="dropdown-divider"></div>
                <section className="content">
                    <div className="container-fluid">
                        <div className="col-md-12">
                            <div className="card card-success card-outline">
                                <div className="card-header">
                                    <h3 className="card-title">Liste des diplomes</h3>
                                </div>
                                {this.state.qrcodeValue ? (<div id="qrcode">
                                    <h1 ><Qrcode id="123" value={this.state.qrcodeValue} /></h1>
                                </div>) : null}
                                <div className="card-body">
                                    <br />
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>#Matricule</th>
                                                <th>Filière</th>
                                                <th>Diplome</th>
                                                <th>Nom</th>
                                                <th>Date de naissance</th>
                                                <th>Lieu</th>
                                                <th>Date de délivrance</th>
                                                <th>Session</th>
                                                <th>Mention</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.state.tableRows.map((diplome, index) => (
                                                <tr key={diplome.id}>
                                                    <td>{diplome.matricule}</td>
                                                    <td>{diplome.filiere}</td>
                                                    <td>{diplome.dp}</td>
                                                    <td>{diplome.nom}</td>
                                                    <td>{diplome.date_nais}</td>
                                                    <td>{diplome.lieu}</td>
                                                    <td>{diplome.date_deliv}</td>
                                                    <td>{diplome.session}</td>
                                                    <td>{diplome.mention}</td>
                                                    <td>
                                                        <div id="act" >
                                                            <div className="row">
                                                                <div className="col-sm-3">
                                                                    <Link to={`/voir/${diplome.id}`} className="bi bi-eye"></Link>
                                                                </div>
                                                                <div className="col-sm-3">
                                                                    <Link onClick={() => this.deleteDiplome(diplome.id)} className="bi bi-trash3"></Link>
                                                                </div>
                                                                <div className="col-sm-6">
                                                                    <Button
                                                                        className="btn btn-block btn-sm"
                                                                        variant="success"
                                                                        onClick={() => this.Qrcode(`http://localhost:3000/voir/${diplome.matricule}`)}
                                                                    >
                                                                        <i className="bi bi-qr-code"></i>
                                                                    </Button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* <Link to={`edit/${diplome.id}`} className="button is-small is-info">Voir</Link> */}


                                                    </td>
                                                </tr>
                                            ))}

                                        </tbody>
                                    </table>
                                    {this.state.tableRows.length > 0 ? null : (
                                        <h2 className="text-center display-4">
                                            Aucun diplome
                                        </h2>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

}

