// import { useParams } from "react-router-dom";
import axios from "./Api";

export const callLoginUser = async (user) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/Authentication/login`,
        { ...user }
    );
    return res;
};
export const logOut = async (id) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/Authentication/candidate/logout`,
        {id}
    );
    return res;
};


export const callRegisterUser = async (user) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/Authentication/candidate/register`,
        { ...user }
    );
    return res;
};

export const sendUserOtp = async (sendOtp) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/Authentication/candidate/verify&resent/otp`,
        {
            ...sendOtp,
        }
    );
    return res;
};

// form Post CV
export const sendFormCv = async (form) => {
    const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/Profile/candidate/create`,
        form  
    );
    console.log(res);
    return res;
};

export const productDetail = async (id) => {
    console.log(id);
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/Product/getdetail?idProduct=${id}`);
    return res;
};
