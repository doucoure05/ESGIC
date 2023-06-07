import React, { Component } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
export default class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            nom: "",
            prenom: "",
            login: "",
            password: "",
            profil: "",
            show: false,
            formOK: false,
        };
    }
    componentDidMount() {
        this.state.id = this.props.id;
        this.getUserById();
    }

    handleChange(event) {
        // console.log(this.state);
        // event.preventDefault();
        let fieldName = event.target.name;
        let fleldVal = event.target.value;
        this.setState(
            {
                [fieldName]: fleldVal,
            },
            () => {
                // this.checkForm();
            }
        );
    }

    handleClose = () => {
        this.setState({
            //Vider tous les champs ici
            show: false,
        });
    };
    handleShow = () => {
        this.setState({
            show: true,
        });
    };

    UpdateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${this.state.id}`, {
                nom: this.state.nom,
                prenom: this.state.prenom,
                login: this.state.login,
                password: this.state.password,
                profil: this.state.profil,
            });

        } catch (error) {
            console.log(error);
        }
    }

    getUserById = async () => {
        const response = await axios.get(`http://localhost:5000/users/${this.state.id}`);
        this.state.nom = response.data.nom;
        this.state.prenom = response.data.prenom;
        this.state.login = response.data.login;
        this.state.password = response.data.password;
        this.state.profil = response.data.profil;
    };

    deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${this.state.id}`);
            this.handleClose()
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        return (
            <>
                <div className={this.props.article === null ? "mb-4" : ""}>
                    <Button className={this.props.btnStyle} onClick={this.handleShow}>
                        <i className={this.props.btnIcon}></i> {this.props.libelle}
                    </Button>
                </div>
                <Modal
                    show={this.state.show}
                    onHide={this.handleClose}
                    // backdrop="static"
                    keyboard={false}
                    backdrop={false}
                    animation={true}
                    centered
                    // dialogClassName="modal-90w"
                    className="modal-dialog modal-xl"
                >
                    <Modal.Header closeButton>
                        <h2 className="text-center display-4">
                            Modifier Utilisateur
                        </h2></Modal.Header>
                    <Modal.Body>
                        <div className="colums is-centered">
                            <div className="column">
                                <form>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <label className="label">Nom</label>
                                            <div className="control">
                                                <input type="text" className="input w-600" placeholder='Nom' name="nom"
                                                    onChange={this.handleChange.bind(this)}
                                                    value={this.state.nom} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="label">Prenom</label>
                                            <div className="control">
                                                <input type="text" className="input w-600" placeholder='Prenom' name="prenom"
                                                    onChange={this.handleChange.bind(this)}
                                                    value={this.state.prenom} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="label">Login</label>
                                            <div className="control">
                                                <input type="text" className="input" placeholder='Login' name="login"
                                                    onChange={this.handleChange.bind(this)}
                                                    value={this.state.login} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="label">Password</label>
                                            <div className="control">
                                                <input type="password" className="input" placeholder='Password' name="password"
                                                    onChange={this.handleChange.bind(this)}
                                                    value={this.state.password} />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <label className="label">Profil</label>
                                            <div className="control">
                                                <div className="select is-fullwidth">
                                                    <select name="profil"
                                                        onChange={this.handleChange.bind(this)}
                                                        value={this.state.profil} >
                                                        <option value="Admin">Admin</option>
                                                        <option value="Gestionnaire">Gestionnaire</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="fied">
                            <button type='submit' className='button is-success' onClick={(e) => {
                                this.saveUser();
                                this.handleClose();
                            }}>Save</button>
                        </div>
                        <div className="fied">
                            <button type='submit' className='button is-is-danger' onClick={this.deleteUser}>Supprimer</button>
                        </div>
                    </Modal.Footer>

                </Modal>
            </>
        )
    }
}