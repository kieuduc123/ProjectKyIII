import Login from "components/auth/Login";
import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "utils/Footer";
import Header from "utils/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "utils/NotFound";
import Register from "components/auth/Register";
import PageOTP from "components/auth/PageOTP";
import Profile from "components/Profile/Profile";
import Product from "components/\bproduct/Product";
import ProductDetail from "components/\bproduct/ProductDetail";
import GetCv from "components/Profile/GetCv";
import ThankYou from "utils/ThankYou";
import News from "components/page/News";
import Quote from "components/page/Quote";
import Loading from "utils/Loading";
import Contact from "components/page/Contact";
const HomePage = React.lazy(() => import("components/page/HomePage"));
const About = React.lazy(() => import("components/page/About"));
const ProfileCv = React.lazy(() => import("components/page/ProfileCv"));
const Fallback = () => {
    setTimeout(() => 
     10000);
    return <Loading></Loading>;
};

function App() {
    return (
        <Fragment>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Fallback />}>
                            {" "}
                            <HomePage />
                        </Suspense>
                    }
                ></Route>
                <Route
                    path="/about"
                    element={
                        <Suspense fallback={<Fallback />}>
                            {" "}
                            <About />
                        </Suspense>
                    }
                ></Route>
                     <Route
                    path="/product"
                    element={
                        <Suspense fallback={<Fallback />}>
                            {" "}
                            <Product />
                        </Suspense>
                    }

                ></Route>
                <Route path="/product/:id" element={<ProductDetail />}></Route>
                <Route path="/product/:id" element={<ProductDetail />}></Route>
                <Route
                    path="/profileCv"
                    element={
                        <Suspense fallback={<Fallback />}>
                            {" "}
                            <ProfileCv />
                        </Suspense>
                    }

                ></Route>

                <Route path="/login" element= {<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/otp" element={<PageOTP/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="/getcv" element={<GetCv/>}></Route>
                <Route path="/thankyou" element={<ThankYou/>}></Route>
                <Route path="/new" element={<News/>}></Route>
                <Route path="/contact" element={<Contact/>}></Route>
             
                <Route path="/quote" element={<Quote/>}></Route>
                
                <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <Footer />
            <ToastContainer />
            {/* </Suspense> */}
        </Fragment>
    );
}

export default App;
