import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import FormGroup from "components/layout/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import { toast } from "react-toastify";
import useToggleValue from "hook/useToggleValue";
import * as yup from 'yup';
import { callRegisterUser } from "sever/service";
import { IconEyeToggle } from "components/icons";

const LoadingOverlay = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(255, 255, 255, 0.8)", // Màu nền với độ trong suốt
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      Loading...
    </div>
  );
};


const Register = () => {
  const { value: showPassword, handleTogglePassword } = useToggleValue();
  
  const [username, setUsername] = useState("");
  const [data, setData] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({});
  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object({
    username: yup.string().required("Full name is required"),
    email: yup.string().required('Email is required').email('Email is not valid'),
    password: yup.string().required('Password is required'),
    confirmPassword: yup.string().required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});



  const handleSignUp = async (e) => {
    e.preventDefault();
    try{
      await schema.validate({ username, email, password,confirmPassword }, { abortEarly: false });
    //  setLoading(true);
     
    const newsUser = {
      username,
      email,
      password,
      confirmPassword
    };
    // console.log("check", newsUser);
    const res = await callRegisterUser( newsUser)
    // const res = await callRegisterUser(newsUser);
    console.log("check res register", res);
    if (res?.data.status === 202 ) {
      // setLoading(false);
      setData(res.data);
      toast.success("Success");
      navigate("/otp");
      localStorage.setItem("emailOTp", email);
      localStorage.setItem("userName", username);
      setLoading(false);

    }   else if (res.data.status === 400 || res.data.status === 401 || res.data.status === 403 || res.data.status === 404 ) {
      toast.error(res?.data?.statusMessage);
  }
  }
    catch (error) {
      if (error instanceof yup.ValidationError) {
        // Handle Yup validation errors
        const validationErrors = {};
        error.inner.forEach(err => {
          validationErrors[err.path] = err.message;
        });
        setFormErrors(validationErrors);
      } else if (error.response?.status === 400) {
        // Handle 400 Bad Request error (possibly due to empty fields)
        toast.error('Please fill in all required fields.');
      } else {
        // Handle other errors
        toast.error(`Error: ${error.message}`);
      }
  }
  };

  return (
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4 ">
      {/* <!-- Page Content Goes Here --> */}
      {loading && <LoadingOverlay />}
      {/* <!-- Login Form--> */}
      <div className="col col-md-8 col-lg-6 col-xxl-5">
        {/* <!-- Logo--> */}
        <NavLink
          className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0"
          to="/">
          <div className="d-flex align-items-center">
            <svg
              className="f-w-7"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 77.53 72.26">
              <path
                d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                fill="currentColor"
                fillRule="evenodd"
              />
            </svg>
          </div>
        </NavLink>
        {/* <!-- / Logo--> */}
        <div className="shadow-xl p-4 p-lg-5 bg-white product">
          <h1 className="text-center mb-5 fs-2 fw-bold">Open Account</h1>
          <span className="text-muted text-center d-block fw-bolder my-4">
            OR
          </span>
          <form onSubmit={handleSignUp}>
            <FormGroup>
              <Label htmlFor="name">Full name</Label>
              <Input
                // control={control}
                onChange={(e) => setUsername(e.target.value)}
                name="username"
                placeholder="Enter your full name"></Input>
              {/* <p className='text-danger mt-3 '>{errors.name?.message}</p> */}
              <p className='text-danger mt-3'>{formErrors.username}</p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                name="email"
                placeholder="name@email.com"></Input>
              {/* <p className='text-danger mt-3'>{errors.email?.message}</p> */}
              <p className='text-danger mt-3'>{formErrors.email}</p>
            </FormGroup>
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type={`${showPassword ? "text" : "password"}`}
                name="password"
                placeholder="Password">
                <IconEyeToggle
                  open={showPassword}
                  onClick={handleTogglePassword}></IconEyeToggle>
              </Input>
              <p className='text-danger mt-3'>{formErrors.password}</p>
              {/* <p className='text-danger mt-3'>{errors.password?.message}</p> */}
            </FormGroup>
            <FormGroup>
              <Label htmlFor="confirmPassword">ConfirmPassword</Label>
              <Input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={`${showPassword ? "text" : "password"}`}
                name="confirmPassword"
                placeholder="confirmPassword">
                <IconEyeToggle
                  open={showPassword}
                  onClick={handleTogglePassword}></IconEyeToggle>
              </Input>
              <p className='text-danger mt-3'>{formErrors.confirmPassword}</p>
            </FormGroup>

            <Button type="submit">Sign Up</Button>
            {/* <button type="submit"className="btn btn-dark d-block w-100 my-4">Sign Up</button> */}
          </form>
          <p className="d-block text-center text-muted">
            Already registered?{" "}
            <NavLink className="text-muted" to="/login">
              Login here.
            </NavLink>
          </p>
        </div>
      </div>
      {/* <!-- / Login Form--> */}

      {/* <!-- /Page Content --> */}
    </section>
  );
};

export default Register;
