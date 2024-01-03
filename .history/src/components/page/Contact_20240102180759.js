import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import "yup-phone";
import { Label } from 'components/label';
import { sendFormCv } from 'sever/service';
const Contact = () => {
  const [idCandidate, setIdCandidate] = useState("");
    const [fullname, setFullname] = useState("");
    const [address,setAddress] = useState("");
    const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [ thumbnail,setThumbnail] = useState();
  const [fileCv,setFileCv] = useState();
   const [skills, setSkills] = useState("");
   const [universityOrCollege, setUniversityOrCollege] = useState("");
   const [major, setMajor] = useState("");
   const [issuedDate, setIssuedDate] = useState("");
   const [expiryDate, setExpiryDate] = useState("");
   const [scientificAchievements, setScientificAchievements] = useState("");;
   const [workExperiences,setWorkExperiences] = useState("");
   const [reference,setReference] = useState("");
  // const [formErrors, setFormErrors] = useState({});

  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  //   const schema = yup.object({
  //       useName: yup.string().required("UseName is required"),
  //       email: yup.string().required('Email is required').email('Email is not valid'),
  //       phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone number is not valid"),
  //     });
  //    const handleContact = async (e) => {
  //       e.preventDefault();
  //       try{
  //           await schema.validate({ useName, email, phone, message }, { abortEarly: false });
  //           const newsUser = {
  //               useName,
  //               email,
  //               phone,
  //               message,
  //             };
  //             console.log(newsUser)
  //       }

  //       catch (error) {
  //           if (error instanceof yup.ValidationError) {
  //             const validationErrors = {};
  //             error.inner.forEach(err => {
  //               validationErrors[err.path] = err.message;
  //             });
  //             setFormErrors(validationErrors);
           
  //           } else {
  //             // Handle other errors
  //             toast.error(`Error: ${error.message}`);
  //           }
  //       }
  //    } 
  // const user = JSON.parse(localStorage.getItem("profile"));
	//  const userID = user.id ;
	// console.log(userID);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    if (user) {
      setIdCandidate(user.id);
    }

  }, []);

	const accessToken = localStorage.getItem("currentUser");
  // console.log(idCandidate);
  const handleFormCv = async (e) => {
    e.preventDefault();
    try{
      const formCv = {
      idCandidate,
      fullname,
      address,
      number,
      email,
      thumbnail,
      fileCv,
      skills,
      universityOrCollege,
      major,
      issuedDate,
      expiryDate,
      scientificAchievements,
      workExperiences,
      reference,
    };
    const res = await sendFormCv(formCv, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    });
    console.log("filecv",res);
    if (res?.data) {
      toast.success("Thành Công");
    }
    }catch(err){
      toast.error("That Bai")
    }
  }


    return (
        <div>
    <section class="page-title bg-1">
  <div class="overlay"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="block text-center">
          <span class="text-white">Contact Us</span>
          <h1 class="text-capitalize mb-5 text-lg">Get in Touch</h1>

          {/* <!--  */}
          <ul class="list-inline breadcumb-nav">
            <li class="list-inline-item"><a href="index.html" class="text-white">Home</a></li>
            <li class="list-inline-item"><span class="text-white">/</span></li>
            <li class="list-inline-item"><a href="#" class="text-white-50">Contact Us</a></li>
          </ul>
           {/* --> */}
        </div>
      </div>
    </div>
  </div>
</section>
{/* <!-- contact form start --> */}

<section class="section contact-info pb-0">
  <div class="container">
    <div class="row">
      <div class="col-lg-4 col-md-6">
        <div class="contact-block mb-4 mb-lg-0">
          <i class="icofont-live-support"></i>
          <h5>Call Us</h5>
          +823-4565-13456
        </div>
      </div>
      <div class="col-lg-4 col-md-6">
        <div class="contact-block mb-4 mb-lg-0">
          <i class="icofont-support-faq"></i>
          <h5>Email Us</h5>
          contact@mail.com
        </div>
      </div>
      <div class="col-lg-4 col-md-12">
        <div class="contact-block mb-4 mb-lg-0">
          <i class="icofont-location-pin"></i>
          <h5>Location</h5>
          North Main Street,Brooklyn Australia
        </div>
      </div>
    </div>
  </div>
</section>

<section class="contact-form-wrap section">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-6">
        <div class="section-title text-center">
          <h2 class="text-md mb-2">Contact us</h2>
          <div class="divider mx-auto my-4"></div>
          <p class="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit
            perferendis maiores ratione aliquam?</p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12">
        <form id="contact-form" class="contact__form " onSubmit={handleFormCv}>
          {/* <!-- form message --> */}
          <div class="row">
            <div class="col-12">
              <div class="alert alert-success contact__msg"   style={{"display": "none"}} role="alert">
                Your message was sent successfully.
              </div>
            </div>
          </div>
          <div class="row">
          {/* <div class="col-lg-6">
            <Label htmlFor="fullname">Full Name</Label>
              <div class="form-group">
                <input name="idCandidate" id="idCandidate" 
                  onChange={(e) => setIdCandidate(user.id)}
                type="fullname" class="form-control" placeholder="Your Full Name"/>
              </div>
            </div> */}
             <div class="col-lg-6 d-none">
            <Label htmlFor="idCandidate">Full Name</Label>
              <div class="form-group">
                <input name="idCandidate" id="idCandidate" 
                value={idCandidate}
                 onChange={(e) => setIdCandidate(e.target.value)}
                type="text" class="form-control" placeholder="Your Full Name"/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="fullname">Full Name</Label>
              <div class="form-group">
                <input name="fullname" id="fullname" 
                value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                type="text" class="form-control" placeholder="Your Full Name"/>
              </div>
            </div>

            <div class="col-lg-6">
            <Label htmlFor="address">Address</Label>
              <div class="form-group">
                <input name="address" id="address" 
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                type="address" class="form-control" placeholder="Your address Address" />
              </div>
            </div>

            <div class="col-lg-6">
            <Label htmlFor="phone">Phone</Label>
              <div class="form-group">
                <input name="number" id="number" 
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                type="number" class="form-control" placeholder="Your Phone" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="email">Email</Label>
              <div class="form-group">
                <input name="email" id="phone" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email" class="form-control" placeholder="Your Phone Email" />
              </div>
            </div>
           
            <div class="col-lg-6">
            <Label htmlFor="thumbnail">Thumbnail</Label>
              <div class="form-group">
                <input name="thumbnail" 
                  value={thumbnail}
                  onChange={(e) => setThumbnail(e.target.value)}
                id="thumbnail" type="file" class="form-control" placeholder="Your Thumbnail" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="fileCv">File Cv</Label>
              <div class="form-group">
                <input name="fileCv" id="fileCv" 
                  value={fileCv}
                  onChange={(e) => setFileCv(e.target.value)}
                type="file" class="form-control" placeholder="Your  CV" />
              </div>
            </div>
            
            <div class="col-lg-6">
            <Label htmlFor="skills">Skills</Label>
              <div class="form-group">
                <input name="skills" id="skills" 
                  onChange={(e) => setSkills(e.target.value)}
                  type="text" class="form-control" placeholder="Your skills" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="universityOrCollege">UniversityOrCollege</Label>

              <div class="form-group">
                <input name="universityOrCollege"
                 onChange={(e) => setUniversityOrCollege(e.target.value)}
                 id="universityOrCollege" type="text" class="form-control" placeholder="Your universityOrCollege" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="issuedDate">IssuedDate</Label>

              <div class="form-group">
                <input name="issuedDate"
                 onChange={(e) => setIssuedDate(e.target.value)}
                 id="issuedDate" type="datetime-local" class="form-control" placeholder="Your issuedDate" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="expiryDate">ExpiryDate</Label>
              <div class="form-group">
                <input name="expiryDate"
                 onChange={(e) => setExpiryDate(e.target.value)}
                 id="expiryDate" type="datetime-local" class="form-control" placeholder="Your expiryDate" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="major">Major</Label>
              <div class="form-group">
                <input name="major" id="major"
                 onChange={(e) => setMajor(e.target.value)}
                 type="major" class="form-control" placeholder="Your Major" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="scientificAchievements">ScientificAchievements</Label>

              <div class="form-group">
                <input name="scientificAchievements" 
                 onChange={(e) => setScientificAchievements(e.target.value)}
                id="scientificAchievements" type="text" class="form-control" placeholder="Your scientificAchievements" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="workExperiences">WorkExperiences</Label>

              <div class="form-group">
                <input name="workExperiences"
                 onChange={(e) => setWorkExperiences(e.target.value)}
                id="workExperiences" type="text" class="form-control" placeholder="Your workExperiences" />
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="reference">Reference</Label>

              <div class="form-group">
                <input name="reference" 
                 onChange={(e) => setReference(e.target.value)}
                id="reference" type="text" class="form-control" placeholder="Your reference" />
              </div>
            </div>
          </div>
          <div>
            <button class="btn btn-main btn-round-full" name="submit" onSubmit={handleFormCv} type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


<div class="google-map ">
	<div id="map" data-latitude="40.712776" data-longitude="-74.005974" data-marker="images/marker.png"></div>
</div>

    {/* <!-- Start Contact --> */}
  
    {/* <!-- End Contact --> */}
        </div>
    );
};

export default Contact;