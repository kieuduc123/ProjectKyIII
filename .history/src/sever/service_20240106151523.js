// import { useParams } from "react-router-dom";
import axios from "./Api";
export const callLoginUser = async (user) => {
  const res = await axios.post(
    "https://pharmacyonline.azurewebsites.net/api/Authentication/login",
    { ...user}
  );
  return res;
};
export const logOut = async (id) => {
  const res = await axios.post(
   "https://pharmacyonline.azurewebsites.net/api/Authentication/candidate/logout",
   {...id}
  );
  return res;
};
export const callRegisterUser = async (user) => {
  const res = await axios.post(
    "https://pharmacyonline.azurewebsites.net/api/Authentication/candidate/register",
    { ...user }
  );
  return res;
};
// export const callUserOTP = async (param) => {
//   const res = await axios.post(
//     // https://pharmacyonline.azurewebsites.net/api/Authentication/candidate/verify&resent/otp
//     `https://semester3shoprunner.azurewebsites.net/api/Users/verifyOtp?${param}`
//   );
//   return res;
// };

export const sendUserOtp = async (sendOtp) => {
  const res = await axios.post(
    "https://pharmacyonline.azurewebsites.net/api/Authentication/candidate/verify&resent/otp",{
      ...sendOtp
    }
  );
  return res;
};
// form Post CV 
export const sendFormCv = async(form,tt) => {
  try {
    const res  = await axios.post(
      "https://pharmacyonline.azurewebsites.net/api/Profile/candidate/create",{
        data:form
      },tt
      );
      console.log(res)
      
      return res;
    } catch (error) {
    console.log(error)
    
  }
}

// giảm số lương
export const decQuantity = async (product) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/alter_quantity?userId=${product.userId}&product_id=${product.productId}&minus=${product.plus}`
  );
  return res;
};

// tăng số lượng
export const incQuantity = async (product) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/alter_quantity?userId=${product.userId}&product_id=${product.productId}&plus=1`,
    { product }
  );
  return res;
};
export const deleteCart = async (product) => {
  const res = await axios.delete(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/delete-product-cart?userId=${product.userId}&product_id=${product.productId}`,
    { product }
  );
  return res;
};

// tăng số lượng
export const getCart = async (id) => {
  const res = await axios.get(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/get-cart?userId=${id}`
  );
  return res;
};

export const createCart = async (param) => {
  const res = await axios.post(
    `https://semester3shoprunner.azurewebsites.net/api/Cart/add-to-cart?${param}`
  );
  return res;
};

export const createPaymentOrder = async (user) => {
  const res = await axios.post(
    "https://semester3shoprunner.azurewebsites.net/api/Order/payment",
    { ...user }
  );
  return res;
};


///order 

export const orderHistory = async (id) => {
  const res = await axios.get(`https://semester3shoprunner.azurewebsites.net/api/Order/client/status-order-client?userId=${id}`
  );
  return  res;
};


export const orderStatus = async (id) => {
  const res = await axios.get(`https://semester3shoprunner.azurewebsites.net/api/Order/client/history-order?userId=${id}`
  );
  return  res;
}

export const  orderCannel = async (param) => {
const res =await axios.post(`https://semester3shoprunner.azurewebsites.net/api/Order/client/cancel-order?${param}`);
return res;

}

//product Detail

export const productDetail = async (id) => {
  console.log(id);
  const res = await axios.get(`Product/getdetail?idProduct=${id}`);
  return res;
}