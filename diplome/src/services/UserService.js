import axios from "axios";

export const getUsers = async () => {
  const response = await axios.get("http://localhost:5000/users");
  return response.data;
};

export const saveUser = async (user) => {
  try {
    const response = await axios.post("http://localhost:5000/user", {
      nom: user.nom,
      prenom: user.prenom,
      login: user.login,
      password: user.password,
      profil: user.profil,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const updateUser = async (user) => {
  try {
    const response = await axios.patch(
      `http://localhost:5000/user/${user.id}`,
      {
        nom: user.nom,
        prenom: user.prenom,
        login: user.login,
        password: user.password,
        profil: user.profil,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:5000/user/${id}`);
    console.log('**************\nthis is te reponse: ' + response)
    return response.data;
  } catch (error) {
    console.log('**********************\n this is the error'+error);
    return null;
  }
};

export const getUserByLoginAndPassword = async (login, passWord) => {
  try {
    const response = await axios.post(
      `http://localhost:5000/userByLoginAndPass/`,
      {
        login: login,
        password: passWord,
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
