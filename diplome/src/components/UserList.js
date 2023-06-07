import React, {useState, useEffect} from 'react';
import axios from "axios";
import AddUser from './AddUser';
import EditUser from './EditUser';

const UserList = () => {
                                      //Empty array
    const [users, setUser] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    //Methode to fetch data
    const getUsers = async ()=>{
        const response = await axios.get('http://localhost:5000/users');
        setUser(response.data);
    };

    return (
        <>
            <h2 className="text-center display-4">
                Utilisateur
            </h2>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">{/* <h1>Liste des clients</h1> */}</div>
                    </div>
                </div>
            </section>
            <div className="dropdown-divider"></div>
            <section className="content">
                <div className="container-fluid">
                    <div className="col-md-12">
                        <div className="card card-success card-outline">
                            <div className="card-header">
                                <h3 className="card-title">Liste des utilisateurs</h3>
                            </div>
                            <div className="card-body">
                                <AddUser
                                    libelle={"Nouveau utilisateur"}
                                    add={true}
                                    btnStyle="btn btn-block btn-success"
                                    btnIcon="bi-plus-circle"
                                    width="100px"
                                    onClose={getUsers}
                                />
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nom</th>
                                            <th>Prenom</th>
                                            <th>Login</th>
                                            <th>Password</th>
                                            <th>Profil</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users.map((user, index) => (
                                            <tr key={user.id}>
                                                <td>{user.id}</td>
                                                <td>{user.nom}</td>
                                                <td>{user.prenom}</td>
                                                <td>{user.login}</td>
                                                <td>{user.password}</td>
                                                <td>{user.profil}</td>
                                                <td width={200}>
                                                    {/* <Link to={`/edit/${user.id}`} className="button is-small is-info">Editer</Link> */}
                                                    <EditUser
                                                        libelle={"Editer"}
                                                        add={true}
                                                        btnStyle="btn btn-block btn-success"
                                                        btnIcon="bi-plus-circle"
                                                        width="100px"
                                                        id={user.id}
                                                        onClose={getUsers}
                                                    />
                                                    {/* <button className="button is-small is-danger"
                                                        onClick={() => deleteUser(user.id)} >
                                                        Supprimer
                                                    </button> */}
                                                </td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                {users.length > 0 ? null : (
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

export default UserList;