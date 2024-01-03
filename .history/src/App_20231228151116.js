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

const HomePage = React.lazy(() => import("components/page/HomePage"));
const About = React.lazy(() => import("components/page/About"));
const Work = React.lazy(() => import("components/page/Work"));
const Work_Single = React.lazy(() => import("components/page/Work_Single"));
const Contact = React.lazy(() => import("components/page/Contact"));
const Fallback = () => {
    setTimeout(() => {}, 10000);
    return <div>Loading.......</div>;
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
                <Route path="/work/:id" element={<Work_Single />}></Route>
                <Route
                    path="/contact"
                    element={
                        <Suspense fallback={<Fallback />}>
                            {" "}
                            <Contact />
                        </Suspense>
                    }

                ></Route>

                <Route path="/login" element= {<Login/>}></Route>
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/otp" element={<PageOTP/>}></Route>
                <Route path="/profile" element={<Profile/>}></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>

            <Footer />
            <ToastContainer />
            {/* </Suspense> */}
        </Fragment>
    );
}

export default App;
