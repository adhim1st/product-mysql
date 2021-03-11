import axios from "axios";

export const postRegister = (payload) => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/users/register",
      data: payload,
    })
      .then(({ data }) => {
        console.log("Register Success");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const postLogin = (payload) => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/users/login",
      data: payload,
    })
      .then(({ data }) => {
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
