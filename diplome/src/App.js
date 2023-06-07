
import { Component } from 'react';
import Home from "./components/home";
import { BrowserRouter as Router } from 'react-router-dom';
import Login from "./Login";
import UserProfile from "./services/userProfile/UserProfile";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,

      toastShow: false,
      toastLibelle: "",
    };
  }

  toggleToastShow = (libelle) => {
    this.setState({
      toastShow: !this.state.toastShow,
      toastLibelle: libelle,
    });
  };

  log = (user) => {
    let msg = "";
    if (user === null) {
      msg = "Login ou Mot de passe incorrect.";
    } else {
      msg = "Connexion reussi.";
    }
    this.toggleToastShow(msg);
    this.setState(
      {
        user: user,
      },
      () => {
        // UserProfile.setName(this.state.user.nom + " " + this.state.user.prenom);
        // UserProfile.setProfile(this.state.user.profil);
      }
    );
  };
  logOut = () => {
    this.setState(
      {
        user: null,
      },
      () => {
        UserProfile.setName("");
        UserProfile.setProfile("");
        this.toggleToastShow("Déconnexion");
      }
    );
  };

  render() {
    return (
      <>
        {/* {this.state.user !== null ? ( */}
          <Home onLogOut={this.logOut} />
        {/* ) : (
          <Login onLog={this.log} />
        )} */}
      </>
    );
  }
}


