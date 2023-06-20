import React, { Component } from 'react';
import axios from 'axios';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from 'react-router-dom';


export default class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nom: "",
            prenom: "",
            login: "",
            password: "",
            profil: "",
            show: false,
            formOK: false,
        };
    }

    // const [nom, setNom] = useState("");
    // const [prenom, setPrenom] = useState("");
    // const [login, setLogin] = useState("");
    // const [password, setPassword] = useState("");
    // const [profil, setProfil] = useState("");
    // const navigate = useNavigate();

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

    saveUser = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/users', {
                nom: this.state.nom,
                prenom: this.state.prenom,
                login: this.state.login,
                password: this.state.password,
                profil: this.state.profil,
            });
        } catch (error) {
            console.log('**************************\n this is the current error preventing to saveUser' + error);
        }
    }

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
                            Utilisateur
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
                            <button type='submit' className='button is-success' onClick={this.saveUser}>Save</button>
                        </div>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
