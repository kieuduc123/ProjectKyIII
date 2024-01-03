import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import * as yup from "yup";
import { toast } from "react-toastify";
// import { IconEyeToggle } from "compotes/icons";
import useToggleValue from "hook/useToggleValue";
import FormGroup from "components/layout/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import { callLoginUser } from "sever/service";
import { IconEyeToggle } from "components/icons";

import { GoogleLogin, GoogleOAuthProvider  } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";
// import {useGoogleLogin} from '@react-oauth/google';
import axios from "axios";

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

const Login = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    const { value: showPassword, handleTogglePassword } = useToggleValue();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [formErrors, setFormErrors] = useState({});
    const [loading, setLoading] = useState(false);



    const handleGoogleLogin = async (credentialResponse) =>{
        console.log(credentialResponse.credential);
            var decode =  jwtDecode(credentialResponse.credential);
        try{
            
            //sử dụng fetch send data to BE:
             const backendResponse = await fetch('https://pharmacyonline.azurewebsites.net/api/Authentication/candidate/login/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ token: credentialResponse.credential }),
            })
            .then((data)=> console.log(data.json()));
            toast.success("Thanh Cong");
            navigate("/");
        }catch (error){
            console.error('Error communicating with the backend:', error);
        }
    }
    

        //   try {
        //     console.log(response);
        //       const res = await axios.post("https://www.googleapis.com/oauth2/v3/userinfo", {
        //         body{
        //             toke
        //         }
        //         //   headers: {
                    
        //         //     //   "Authorization": `Bearer ${response.access_token}`
        //         //   }
        //       })
        //       console.log(res);
        //       toast.success("Thanh Cong")
        //       localStorage.setItem(   "dataUser",
        //         JSON.stringify(res?.data?.name)
        //     );
        //       navigate("/");
        //   } catch (err) {
        //       console.log(err)
        //   }
//       }
//   });

    const schema = yup.object().shape({
        email: yup
            .string()
            .required("Email is required")
            .email("Email is not valid"),
        password: yup.string().required("Password is required"),
    });

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            await schema.validate({ email, password }, { abortEarly: false });
                setLoading(true);
                const testData = {
                    email,
                    password,
                };
                const res = await callLoginUser(testData);
                console.log("check res login ",);
                if (res?.data) {
                    setLoading(true);
                    toast.success("Thành Công");
                    localStorage.setItem( "currentUser", res?.data?.accessToken
                    );
                    navigate("/");
                } else  if(res?.data.status === 404) {
                    toast.error("Please fill in all required fields.");
                } 
           

        } catch (error) {
            if (error instanceof yup.ValidationError) {
                setLoading(false);
                const validationErrors = {};
                error.inner.forEach((err) => {
                    validationErrors[err.path] = err.message;
                });
                setFormErrors(validationErrors);
            } else if (error.res?.status === 403) {
                toast.error("Please fill in all required fields.");
            } else {
                toast.error(`Error: ${error.message}`);
                setLoading(false);
            }
        }
    };

    return (
        <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
            {/* <!-- Page Content Goes Here --> */}
            {loading && <LoadingOverlay />}
            {/* <!-- Login Form--> */}
            <div className="col col-md-8 col-lg-6 col-xxl-5">
                {/* <!-- Logo--> */}
                <NavLink
                    className="navbar-brand fw-bold fs-3 flex-shrink-0 order-0 align-self-center justify-content-center d-flex mx-0 px-0"
                    to="/"
                >
                    <div className="d-flex align-items-center">
                        <svg
                            className="f-w-7"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 77.53 72.26"
                        >
                            <path
                                d="M10.43,54.2h0L0,36.13,10.43,18.06,20.86,0H41.72L10.43,54.2Zm67.1-7.83L73,54.2,68.49,62,45,48.47,31.29,72.26H20.86l-5.22-9L52.15,0H62.58l5.21,9L54.06,32.82,77.53,46.37Z"
                                fill="currentColor"
                                fillRule="evenodd"
                            />
                        </svg>
                    </div>
                </NavLink>
                {/* <!-- / Logo--> */}
                <div className="shadow-xl p-4 p-lg-5 bg-white">
                    <h1 className="text-center fw-bold mb-5 fs-2">Login</h1>

                    <NavLink to="#" className="btn btn-facebook d-block mb-2" >
                    {/* // onClick={login}> */}
                        {/* <img class="w-25 pr-2" src="./images/logogoogle.jpg" alt=""></img>
                    Login
                        with Google */}
                      <GoogleOAuthProvider clientId="276249634921-4tjdmgrq962co4jtfiscueacfs9hkna6.apps.googleusercontent.com">
            <GoogleLogin
                onSuccess={handleGoogleLogin}
                onError={() => {
                    console.error('Login Failed');
                }}
            />
        </GoogleOAuthProvider>
        </NavLink>


                    {/* </NavLink> */}
                    <span className="text-muted text-center d-block fw-bolder my-4">
                        OR
                    </span>

                    <form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="email">Email</Label>
                            <Input
                                // control={control}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                name="email"
                                placeholder="name@email.com"
                            ></Input>
                            <p className="text-danger mt-3">
                                {formErrors.email}
                            </p>

                            {/* <p className='text-danger mt-3'>{(errors?.email)}</p> */}
                        </FormGroup>
                        <FormGroup>
                            <Label
                                className=" d-flex justify-content-between align-items-center"
                                htmlFor="password"
                            >
                                Password
                                <NavLink
                                    to="/forgotten-password"
                                    className="text-muted small"
                                >
                                    Forgot your password?
                                </NavLink>
                            </Label>
                            <Input
                                // control={control}
                                onChange={(e) => setPassword(e.target.value)}
                                type={`${showPassword ? "text" : "password"}`}
                                name="password"
                                placeholder="Password"
                            >
                                <IconEyeToggle
                                    open={showPassword}
                                    onClick={handleTogglePassword}
                                ></IconEyeToggle>
                            </Input>
                            {/* <p className='text-danger mt-3'>{errors.password?.message}</p> */}
                            <p className="text-danger mt-3">
                                {formErrors.password}
                            </p>
                        </FormGroup>

                        <Button type="submit">Login</Button>
                    </form>
                    <p className="d-block text-center text-muted">
                        New customer?{" "}
                        <NavLink className="text-muted" to="/register">
                            Sign up for an account
                        </NavLink>
                    </p>
                </div>
            </div>
            {/* <!-- / Login Form--> */}

            {/* <!-- /Page Content --> */}
        </section>
    );
};

export default Login;
