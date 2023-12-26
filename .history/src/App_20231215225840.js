import Login from "components/auth/Login";
import React, { Fragment, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "utils/Footer";
import Header from "utils/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const HomePage = React.lazy(() => import("components/page/HomePage"));
const About = React.lazy(() =>  import("components/page/About"));
const Work = React.lazy(() => import("components/page/Work"));
const Work_Single = React.lazy(() => import("components/page/Work_Single"));
const Contact = React.lazy(() => import ("components/page/Contact"))
const Fallback = () => {
  setTimeout(()=> {

  },2000)
  return <div>Loading.......</div>
}

function App() {
  return (

    <Fragment>
    <Header/>
    <Suspense fallback= {<Fallback/>}> 
   <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/work" element={<Work/>}></Route>
    <Route path="/work/:id" element={<Work_Single/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>

    <Route path="/login" element= {<Login/>}></Route>

   </Routes>
   </Suspense>

   <Footer/>
   <ToastContainer />
   </Fragment>
   
  );
}

export default App;
