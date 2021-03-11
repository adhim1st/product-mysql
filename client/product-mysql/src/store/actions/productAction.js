import axios from "axios";

const setProduct = (payload) => {
  return {
    type: "product/setProduct",
    payload: payload,
  };
};

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

export const createProduct = (payload) => {
  return (dispatch, getState) => {
    axios({
      method: "POST",
      url: "http://localhost:3000/products/",
      headers: { access_token: localStorage.getItem("access_token") },
      data: {
        title: payload.title,
        img_url: payload.img_url,
        quantity: Number(payload.quantity),
      },
    })
      .then(({ data }) => console.log(data))
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchProduct = () => {
  return (dispatch, getState) => {
    axios({
      method: "GET",
      url: "http://localhost:3000/products/",
      headers: { access_token: localStorage.getItem("access_token") },
    })
      .then(({ data }) => {
        dispatch(setProduct(data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
