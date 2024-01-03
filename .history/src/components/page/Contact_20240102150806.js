import React, { useState } from 'react';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import "yup-phone";
import { Label } from 'components/label';
const Contact = () => {

    const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState();
  const [message, setMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        useName: yup.string().required("UseName is required"),
        email: yup.string().required('Email is required').email('Email is not valid'),
        phone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required("Phone number is not valid"),
       message: yup.string().required
       ('Message is required').email('Message is not valid'),
      });
     const handleContact = async (e) => {
        e.preventDefault();
        try{
            await schema.validate({ useName, email, phone, message }, { abortEarly: false });
            const newsUser = {
                useName,
                email,
                phone,
                message,
              };
              console.log(newsUser)
        }
        catch (error) {
            if (error instanceof yup.ValidationError) {
              const validationErrors = {};
              error.inner.forEach(err => {
                validationErrors[err.path] = err.message;
              });
              setFormErrors(validationErrors);
           
            } else {
              // Handle other errors
              toast.error(`Error: ${error.message}`);
            }
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
        <form id="contact-form" class="contact__form " method="post" action="mail.php">
          {/* <!-- form message --> */}
          <div class="row">
            <div class="col-12">
              <div class="alert alert-success contact__msg"   style={{"display": "none"}} role="alert">
                Your message was sent successfully.
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
            <Label htmlFor="fullname">Full Name</Label>
              <div class="form-group">
                <input name="fullname" id="fullname" type="text" class="form-control" placeholder="Your Full Name"/>
              </div>
            </div>

            <div class="col-lg-6">
            <Label htmlFor="address">Address</Label>
              <div class="form-group">
                <input name="address" id="address" type="address" class="form-control" placeholder="Your address Address" required/>
              </div>
            </div>

            <div class="col-lg-6">
            <Label htmlFor="address">Address</Label>
              <div class="form-group">
                <input name="number" id="subject" type="number" class="form-control" placeholder="Your Phone" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="email">Email</Label>
              <div class="form-group">
                <input name="email" id="phone" type="email" class="form-control" placeholder="Your Phone Email" required/>
              </div>
            </div>
           
            <div class="col-lg-6">
            <Label htmlFor="thumbnail">Thumbnail</Label>
              <div class="form-group">
                <input name="thumbnail" id="thumbnail" type="file" class="form-control" placeholder="Your Thumbnail" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="fileCv">File Cv</Label>
              <div class="form-group">
                <input name="fileCv" id="fileCv" type="file" class="form-control" placeholder="Your  CV" required/>
              </div>
            </div>
            
            <div class="col-lg-6">
            <Label htmlFor="skills">Skills</Label>
              <div class="form-group">
                <input name="skills" id="skills" type="text" class="form-control" placeholder="Your skills" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="universityOrCollege">UniversityOrCollege</Label>

              <div class="form-group">
                <input name="universityOrCollege" id="universityOrCollege" type="text" class="form-control" placeholder="Your universityOrCollege" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="issuedDate">IssuedDate</Label>

              <div class="form-group">
                <input name="issuedDate" id="issuedDate" type="datetime-local" class="form-control" placeholder="Your issuedDate" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="expiryDate">ExpiryDate</Label>
              <div class="form-group">
                <input name="expiryDate" id="expiryDate" type="datetime-local" class="form-control" placeholder="Your expiryDate" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="major">Major</Label>
              <div class="form-group">
                <input name="major" id="major" type="major" class="form-control" placeholder="Your Major" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="scientificAchievements">ScientificAchievements</Label>

              <div class="form-group">
                <input name="scientificAchievements" id="scientificAchievements" type="text" class="form-control" placeholder="Your scientificAchievements" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="workExperiences">WorkExperiences</Label>

              <div class="form-group">
                <input name="workExperiences" id="workExperiences" type="text" class="form-control" placeholder="Your workExperiences" required/>
              </div>
            </div>
            <div class="col-lg-6">
            <Label htmlFor="reference">Reference</Label>

              <div class="form-group">
                <input name="reference" id="reference" type="text" class="form-control" placeholder="Your reference" required/>
              </div>
            </div>




          </div>
      

          <div>
            <input class="btn btn-main btn-round-full" name="submit" type="submit" value="Send Messege"></input>
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