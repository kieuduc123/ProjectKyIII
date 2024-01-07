import React, { useEffect, useState } from "react";
import * as yup from "yup";
import { toast } from "react-toastify";
import "yup-phone";
import { Label } from "components/label";
import { sendFormCv } from "sever/service";
const Contact = () => {
    const [idCandidate, setIdCandidate] = useState("");
    const [fullname, setFullname] = useState("");
    const [address, setAddress] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");
    const [thumbnail, setThumbnail] = useState();
    const [fileCv, setFileCv] = useState();
    const [skills, setSkills] = useState("");
    const [universityOrCollege, setUniversityOrCollege] = useState("");
    const [major, setMajor] = useState("");
    const [issuedDate, setIssuedDate] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [scientificAchievements, setScientificAchievements] = useState("");
    const [workExperiences, setWorkExperiences] = useState("");
    const [reference, setReference] = useState("");
    const [age, setAge] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [gender, setGender] = useState("");
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

    const handleFormCv = async (e) => {
        e.preventDefault();
        try {
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
                age,
                dateOfBirth,
                gender,
            };
            const res = await sendFormCv(formCv, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
            });
            console.log("filecv", res);
            if (res?.data) {
                localStorage.setItem("FileCv", JSON.stringify(res.data));
                toast.success("Success ");
            } else if (
                res.errors === 401 ||
                res.errors === 400 ||
                res.error === 403
            ) {
                toast.error("Error");
            }
        } catch (errors) {
            toast.error("Error");
        }
    };

    return (
        <div>
            <section class="page-title bg-1">
                <div class="overlay"></div>
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="block text-center">
                                <span class="text-white">Contact Us</span>
                                <h1 class="text-capitalize mb-5 text-lg">
                                    Get in Touch
                                </h1>

                                {/* <!--  */}
                                <ul class="list-inline breadcumb-nav">
                                    <li class="list-inline-item">
                                        <a href="index.html" class="text-white">
                                            Home
                                        </a>
                                    </li>
                                    <li class="list-inline-item">
                                        <span class="text-white">/</span>
                                    </li>
                                    <li class="list-inline-item">
                                        <a href="#" class="text-white-50">
                                            Contact Us
                                        </a>
                                    </li>
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
                                <p class="mb-5">
                                    Laboriosam exercitationem molestias beatae
                                    eos pariatur, similique, excepturi mollitia
                                    sit perferendis maiores ratione aliquam?
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* <div class="row">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <form
                                id="contact-form"
                                class="contact__form "
                                onSubmit={handleFormCv}
                            >
                          
                                <div class="row">
                                    <div class="col-12">
                                        <div
                                            class="alert alert-success contact__msg"
                                            style={{ display: "none" }}
                                            role="alert"
                                        >
                                            Your message was sent successfully.
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6 d-none">
                                        <Label htmlFor="idCandidate">
                                            Full Name
                                        </Label>
                                        <div class="form-group">
                                            <input
                                                name="idCandidate"
                                                id="idCandidate"
                                                value={idCandidate}
                                                onChange={(e) =>
                                                    setIdCandidate(
                                                        e.target.value
                                                    )
                                                }
                                                type="text"
                                                class="form-control"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="fullname">
                                            Full Name
                                        </Label>
                                        <div class="form-group">
                                            <input
                                                name="fullname"
                                                id="fullname"
                                                value={fullname}
                                                onChange={(e) =>
                                                    setFullname(e.target.value)
                                                }
                                                type="text"
                                                class="form-control"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <Label htmlFor="address">Address</Label>
                                        <div class="form-group">
                                            <input
                                                name="address"
                                                id="address"
                                                value={address}
                                                onChange={(e) =>
                                                    setAddress(e.target.value)
                                                }
                                                type="address"
                                                class="form-control"
                                                placeholder="Your address Address"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <Label htmlFor="phone">Phone</Label>
                                        <div class="form-group">
                                            <input
                                                name="number"
                                                id="number"
                                                value={number}
                                                onChange={(e) =>
                                                    setNumber(e.target.value)
                                                }
                                                type="number"
                                                class="form-control"
                                                placeholder="Your Phone"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="email">Email</Label>
                                        <div class="form-group">
                                            <input
                                                name="email"
                                                id="phone"
                                                value={email}
                                                onChange={(e) =>
                                                    setEmail(e.target.value)
                                                }
                                                type="email"
                                                class="form-control"
                                                placeholder="Your Phone Email"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <Label htmlFor="thumbnail">
                                            Thumbnail
                                        </Label>
                                        <div class="form-group">
                                            <input
                                                name="thumbnail"
                                                onChange={(e) =>
                                                    setThumbnail(
                                                        e.target.files[0]
                                                    )
                                                }
                                                id="thumbnail"
                                                type="file"
                                                class="form-control"
                                                placeholder="Your Thumbnail"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="fileCv">File Cv</Label>
                                        <div class="form-group">
                                            <input
                                                name="fileCv"
                                                id="fileCv"
                                                onChange={(e) =>
                                                    setFileCv(e.target.files[0])
                                                }
                                                type="file"
                                                class="form-control"
                                                placeholder="Your  CV"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-lg-6">
                                        <Label htmlFor="skills">Skills</Label>
                                        <div class="form-group">
                                            <input
                                                name="skills"
                                                id="skills"
                                                value={skills}
                                                onChange={(e) =>
                                                    setSkills(e.target.value)
                                                }
                                                type="text"
                                                class="form-control"
                                                placeholder="Your skills"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="universityOrCollege">
                                            UniversityOrCollege
                                        </Label>

                                        <div class="form-group">
                                            <input
                                                name="universityOrCollege"
                                                value={universityOrCollege}
                                                onChange={(e) =>
                                                    setUniversityOrCollege(
                                                        e.target.value
                                                    )
                                                }
                                                id="universityOrCollege"
                                                type="text"
                                                class="form-control"
                                                placeholder="Your universityOrCollege"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="issuedDate">
                                            IssuedDate
                                        </Label>

                                        <div class="form-group">
                                            <input
                                                name="issuedDate"
                                                value={issuedDate}
                                                onChange={(e) =>
                                                    setIssuedDate(
                                                        e.target.value
                                                    )
                                                }
                                                id="issuedDate"
                                                type="datetime-local"
                                                class="form-control"
                                                placeholder="Your issuedDate"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="expiryDate">
                                            ExpiryDate
                                        </Label>
                                        <div class="form-group">
                                            <input
                                                name="expiryDate"
                                                value={expiryDate}
                                                onChange={(e) =>
                                                    setExpiryDate(
                                                        e.target.value
                                                    )
                                                }
                                                id="expiryDate"
                                                type="datetime-local"
                                                class="form-control"
                                                placeholder="Your expiryDate"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="major">Major</Label>
                                        <div class="form-group">
                                            <input
                                                name="major"
                                                id="major"
                                                value={major}
                                                onChange={(e) =>
                                                    setMajor(e.target.value)
                                                }
                                                type="major"
                                                class="form-control"
                                                placeholder="Your Major"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="scientificAchievements">
                                            ScientificAchievements
                                        </Label>

                                        <div class="form-group">
                                            <input
                                                name="scientificAchievements"
                                                value={scientificAchievements}
                                                onChange={(e) =>
                                                    setScientificAchievements(
                                                        e.target.value
                                                    )
                                                }
                                                id="scientificAchievements"
                                                type="text"
                                                class="form-control"
                                                placeholder="Your scientificAchievements"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="workExperiences">
                                            WorkExperiences
                                        </Label>

                                        <div class="form-group">
                                            <input
                                                name="workExperiences"
                                                value={workExperiences}
                                                onChange={(e) =>
                                                    setWorkExperiences(
                                                        e.target.value
                                                    )
                                                }
                                                id="workExperiences"
                                                type="text"
                                                class="form-control"
                                                placeholder="Your workExperiences"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <Label htmlFor="reference">
                                            Reference
                                        </Label>

                                        <div class="form-group">
                                            <input
                                                name="reference"
                                                value={reference}
                                                onChange={(e) =>
                                                    setReference(e.target.value)
                                                }
                                                id="reference"
                                                type="text"
                                                class="form-control"
                                                placeholder="Your reference"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <button
                                        class="btn btn-main btn-round-full"
                                        name="submit"
                                        type="submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </section>
            <div class="container rounded bg-white mt-5 mb-5">
                <div class="row border">
                    <div class="col-md-3 border-right">
                        <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                            <img
                                class="rounded-circle mt-5"
                                style={{ width: "200px" }}
                                src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTcr35y9Jwo5YbtSzj-VWSBcvxcYSUN5McIhKd2hEd5OAJSz0jT"
                                alt=""
                            />
                            <span class="font-weight-bold">CV</span>
                            <span class="text-black-50">
                                edogaru@mail.com.my
                            </span>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <form
                            class="contact__form row"
                            enctype="multipart/form-data"
                            onSubmit={handleFormCv}
                        >
                            <div class="col-md-6 border-right">
                                <div class="p-3 py-5">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">
                                            Profile Settings
                                        </h4>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label class="labels">
                                                Full Name
                                            </label>
                                            <input
                                                name="fullname"
                                                id="fullname"
                                                value={fullname}
                                                onChange={(e) =>
                                                    setFullname(e.target.value)
                                                }
                                                type="text"
                                                class="form-control"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels">
                                                Number Phone
                                            </label>
                                            <input
                                                name="number"
                                                id="number"
                                                value={number}
                                                onChange={(e) =>
                                                    setNumber(e.target.value)
                                                }
                                                type="number"
                                                class="form-control"
                                                placeholder="Your Phone"
                                            />
                                        </div>
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label class="labels">Age</label>
                                            <input
                                                name="age"
                                                id="age"
                                                onChange={(e) =>
                                                    setAge(e.target.value)
                                                }
                                                type="text"
                                                class="form-control"
                                                placeholder="Your Full Name"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels">
                                                DateOfBirth
                                            </label>
                                            <input
                                                name="dateOfBirth"
                                                onChange={(e) =>
                                                    setDateOfBirth(
                                                        e.target.value
                                                    )
                                                }
                                                type="date"
                                                class="form-control"
                                                placeholder="Your Date Of Birth"
                                            />
                                        </div>
                                        <div class="row m-2">
                                            <label className="labels">
                                                Gender
                                            </label>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    Male
                                                </label>
                                                <input
                                                    name="gender"
                                                    value="male"
                                                    checked={gender === "male"}
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="checkbox" 
                                                    className="form-check-input"
                                                />
                                            </div>
                                            <div className="form-check">
                                                <label className="form-check-label">
                                                    Female
                                                </label>
                                                <input
                                                    name="gender"
                                                    value="female"
                                                    checked={
                                                        gender === "female"
                                                    }
                                                    onChange={(e) =>
                                                        setGender(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="checkbox"
                                                    className="form-check-input"
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Email
                                                </label>
                                                <input
                                                    name="email"
                                                    value={email}
                                                    onChange={(e) =>
                                                        setEmail(e.target.value)
                                                    }
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Your Phone Email"
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Address
                                                </label>
                                                <select
                                                    name="address"
                                                    id="address"
                                                    value={address}
                                                    onChange={(e) =>
                                                        setAddress(
                                                            e.target.value
                                                        )
                                                    }
                                                    class="form-control"
                                                >
                                                    <option value="">
                                                        Select an address
                                                    </option>
                                                    <option value="HA NOI">
                                                        HA NOI
                                                    </option>
                                                    <option value="DA NANG ">
                                                        DA NANG{" "}
                                                    </option>
                                                    <option value="CAN THO">
                                                        CAN THO
                                                    </option>
                                                    <option value="HAI PHONG">
                                                        HAI PHONG
                                                    </option>
                                                    <option value="TPHCM">
                                                        TPHCM
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Thumbnail
                                                </label>
                                                <input
                                                    name="thumbnail"
                                                    multiple
                                                    onChange={(e) =>
                                                        setThumbnail(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                    id="thumbnail"
                                                    type="file"
                                                    class="form-control"
                                                    placeholder="Your Thumbnail"
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    File Cv
                                                </label>
                                                <input
                                                    name="fileCv"
                                                    multiple
                                                    id="fileCv"
                                                    onChange={(e) =>
                                                        setFileCv(
                                                            e.target.files[0]
                                                        )
                                                    }
                                                    type="file"
                                                    class="form-control"
                                                    placeholder="Your  CV"
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Skills
                                                </label>
                                                <input
                                                    name="skills"
                                                    id="skills"
                                                    value={skills}
                                                    onChange={(e) =>
                                                        setSkills(
                                                            e.target.value
                                                        )
                                                    }
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Your skills"
                                                />
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    WorkExperiences
                                                </label>
                                                <select
                                                    name="workExperiences"
                                                    id="workExperiences"
                                                    value={workExperiences}
                                                    onChange={(e) =>
                                                        setWorkExperiences(
                                                            e.target.value
                                                        )
                                                    }
                                                    class="form-control"
                                                >
                                                    <option value="">
                                                        Select an
                                                        WorkExperiences
                                                    </option>
                                                    <option value="Inter">
                                                        Inter
                                                    </option>
                                                    <option value="Fresh ">
                                                        {" "}
                                                        Fresh{" "}
                                                    </option>
                                                    <option value="junior">
                                                        Junior
                                                    </option>
                                                    <option value="middle">
                                                        Middle
                                                    </option>
                                                    <option value="senior">
                                                        Senior
                                                    </option>
                                                </select>
                                            </div>
                                            <div class="col-md-12">
                                                <label class="labels">
                                                    Link Contact
                                                </label>
                                                <input
                                                    name="reference"
                                                    value={reference}
                                                    onChange={(e) =>
                                                        setReference(
                                                            e.target.value
                                                        )
                                                    }
                                                    id="reference"
                                                    type="text"
                                                    class="form-control"
                                                    placeholder="Link Contact"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div class="mt-5 text-center">
                                        <button
                                            class="btn btn-primary profile-button"
                                            type="submit"
                                        >
                                            Save Profile
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class=" py-5">
                                    <div class="d-flex justify-content-between align-items-center mb-3">
                                        <h4 class="text-right">School</h4>
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">
                                            UniversityOrCollege
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="universityOrCollege"
                                            value={universityOrCollege}
                                            onChange={(e) =>
                                                setUniversityOrCollege(
                                                    e.target.value
                                                )
                                            }
                                            id="UniversityOrCollege"
                                            placeholder="UniversityOrCollege"
                                        />
                                    </div>
                                    <div class="row mt-2">
                                        <div class="col-md-6">
                                            <label class="labels">
                                                IssuedDate
                                            </label>
                                            <input
                                                type="date"
                                                class="form-control"
                                                name="issuedDate"
                                                value={issuedDate}
                                                onChange={(e) =>
                                                    setIssuedDate(
                                                        e.target.value
                                                    )
                                                }
                                                id="issuedDate"
                                                placeholder="20/20/2000"
                                            />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="labels">
                                                ExpiryDate
                                            </label>
                                            <input
                                                type="date"
                                                class="form-control"
                                                name="expiryDate"
                                                value={expiryDate}
                                                onChange={(e) =>
                                                    setExpiryDate(
                                                        e.target.value
                                                    )
                                                }
                                                id="expiryDate"
                                                placeholder="5/9/2024"
                                            />
                                        </div>
                                    </div>

                                    <div class="col-md-12">
                                        <label class="labels">Major</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            name="major"
                                            id="major"
                                            value={major}
                                            onChange={(e) =>
                                                setMajor(e.target.value)
                                            }
                                            placeholder="Major"
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label class="labels">
                                            ScientificAchievements
                                        </label>
                                        <input
                                            name="scientificAchievements"
                                            value={scientificAchievements}
                                            onChange={(e) =>
                                                setScientificAchievements(
                                                    e.target.value
                                                )
                                            }
                                            id="scientificAchievements"
                                            type="text"
                                            placeholder="Your scientificAchievements"
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
