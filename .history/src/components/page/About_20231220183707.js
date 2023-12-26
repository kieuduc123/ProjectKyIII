import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <>
               {/* <!-- Start Banner Hero --> */}
    <section className="bg-light w-100 mt-5">
        <div className="container">
            <div className="row d-flex align-items-center py-5">
                <div className="col-lg-6 text-start">
                    <h1 className="h2 py-5 text-primary typo-space-line">Giới Thiệu</h1>
                    <p className="light-300">
Từ những ngày đầu tiên được thành lập,PHARMACEUTICALS được lấy tên là Công ty Cổ phần Dược Phẩm VITAR do Tổng công ty Dược Việt Nam (Đại diện là Công ty dược Trung ương I) và các Cổ đông cá nhân có kinh nghiệm thâm niên trong ngành Dược phẩm điều hành.

Với những điểm chung về tầm nhìn, sứ mệnh chúng tôi đã quyết định hợp tác cùng với PHARMACEUTICALS Inc USA để cùng nhau cộng hưởng phát triển và hướng đến chăm sóc sức khỏe cho cộng đồng.

Năm 2008, Công ty Cổ phần Dược phẩm Boston Việt Nam (gọi tắt là PHARMACEUTICALS) chính thức đổi tên theo sự liên doanh và nhượng quyền từ Boston Hoa Kỳ.
                    </p>
                </div>
                <div className="col-lg-6">
                    <img src="https://bostonpharma.com.vn/vnt_upload/File/Image/gioi_thieu_NEW.jpg" alt=""/>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Banner Hero --> */}


    {/* <!-- Start Team Member --> */}
    <section className="container py-5">
        <div className="pt-5 pb-3 d-lg-flex align-items-center gx-5">

            <div className="col-lg-3">
                {/* <h2 className="h2 py-5 typo-space-line">Our Team</h2> */}
                <h2 className="h2 py-5 typo-space-line">BAN LÃNH ĐẠO</h2>
                <p className="text-muted light-300">
                Nghiên cứu và cải tiến vì sức khỏe cộng đồng
Trong những năm qua, PHARMACEUTICALS – một trong những công ty Dược phẩm hàng đầu Việt Nam, đã và đang nỗ lực nghiên cứu không ngừng để cải tiến chất lượng thuốc vì sức khỏe cộng đồng.
                </p>
            </div>

            <div className="col-lg-9 row">
                <div className="team-member col-md-4">
                    {/* <img className="team-member-img img-fluid rounded-circle p-4" src="./assets/img/team-01.jpg" alt=""/> */}
                    <img className="team-member-img img-fluid rounded-circle p-4" src="https://bostonpharma.com.vn/vnt_upload/about/Anh_Hoang.jpg" alt=""/>
                    <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>MR. LƯƠNG ĐĂNG KHOA</li>
                        <li>TỔNG GIÁM ĐỐC</li>
                    </ul>
                </div>
                <div className="team-member col-md-4">
                    <img className="team-member-img img-fluid rounded-circle p-4" src="https://bostonpharma.com.vn/vnt_upload/about/Chi_Lieu_2023___web.jpg" alt=""/>
                    <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>VĂN MS. TRỊNH THỊ THÚY LIỄU </li>
                        <li> Giám Đốc Tài Chính</li>
                    </ul>
                </div>
                <div className="team-member col-md-4">
                    <img className="team-member-img img-fluid rounded-circle p-4" src="https://bostonpharma.com.vn/vnt_upload/about/Anh_Minh_2023___web.jpg" alt=""/>
                    <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                        <li>MR. LÊ NGỌC TRÌNH</li>
                        <li>Phó Tổng Giám Đốc Nhà máy & Đầu tư</li>
                    </ul>
                </div>
            </div>

        </div>
    </section>
    {/* <!-- End Team Member --> */}

    {/* <!-- Start Our Partner --> */}
    <section className="bg-secondary py-3">
        <div className="container py-5">
            <h2 className="h2 text-white text-center py-5">Our Partner</h2>
            <div className="row text-center">
                <div className="col-md-3 mb-3">
                    <div className="card partner-wap py-5">
                        <NavLink to="#"><i className='display-1 text-white bx bxs-buildings'></i></NavLink>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card partner-wap py-5">
                        <NavLink to="#"><i className='display-1 bx text-white bxs-check-shield bx-lg'></i></NavLink>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card partner-wap py-5">
                        <NavLink to="#"><i className='display-1 text-white bx bxs-bolt-circle'></i></NavLink>
                    </div>
                </div>
                <div className="col-md-3 mb-3">
                    <div className="card partner-wap py-5">
                        <NavLink to="#"><i className='display-1 text-white bx bxs-spa'></i></NavLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!--End Our Partner--> */}

    {/* <!-- Start Progress --> */}
    <section className="bg-white py-5">
        <div className="container my-4">

            <h1 className="creative-heading h2 pb-3">Creative & Make Perfect</h1>

            <div className="creative-content row py-3">
                <div className="col-md-5">
                    <p className="text-muted col-lg-8 light-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida Risus.
                    </p>
                </div>
                <div className="creative-progress col-md-7">

                    <div className="row mt-4 mt-sm-2">
                        <div className="col-6">
                            <h4 className="h5">Development</h4>
                        </div>
                        <div className="col-6 text-right">66%</div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                    <div className="row mt-4 mt-sm-2">
                        <div className="col-6">
                            <h4 className="h5">Design</h4>
                        </div>
                        <div className="col-6 text-right">90%</div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "90%"}} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>


                    <div className="row mt-4 mt-sm-2">
                        <div className="col-6">
                            <h4 className="h5">Marketing</h4>
                        </div>
                        <div className="col-6 text-right">74%</div>
                    </div>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" style={{"width": "74%"}} aria-valuenow="74" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Progress --> */}

    {/* <!-- Start Choice --> */}
    <section className="why-us banner-bg bg-light">
        <div className="container my-4">
            <div className="row">
                <div className="banner-img col-lg-5">
                    <img src="./assets/img/work.svg" className="rounded img-fluid" alt=""/>
                </div>
                <div className="banner-content col-lg-7 align-self-end">
                    <h2 className="h2 pb-3">Why you choose us?</h2>
                    <p className="text-muted pb-5 light-300">
                    You are allowed to download and use this Purple Buzz template for your websites. You are <strong>not allowed</strong> to re-distribute this template ZIP file on other template websites. It is quite easy to simply copy and repost the ZIP file on any <NavLink to ="nofollow" href="https://www.google.com/search?q=free+css" target="_blank">Free CSS collection</NavLink> websites.</p>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Choice --> */}

    {/* <!-- Start Aim --> */}
    <section className="banner-bg bg-white py-5">
        <div className="container my-4">
            <div className="row text-center">

                <div className="objective col-lg-4">
                    <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                        <i className="display-4 bx bxs-bulb text-light"></i>
                    </div>
                    <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">Our Vision</h2>
                    <p className="light-300">
                        Incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse commodo viverra.
                    </p>
                </div>

                <div className="objective col-lg-4 mt-sm-0 mt-4">
                    <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                        <i className='display-4 bx bx-revision text-light'></i>
                    </div>
                    <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">Our Mission</h2>
                    <p className="light-300">
                        Eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam quis.
                    </p>
                </div>

                <div className="objective col-lg-4 mt-sm-0 mt-4">
                    <div className="objective-icon card m-auto py-4 mb-2 mb-sm-4 bg-secondary shadow-lg">
                        <i className="display-4 bx bxs-select-multiple text-light"></i>
                    </div>
                    <h2 className="objective-heading h3 mb-2 mb-sm-4 light-300">Our Goal</h2>
                    <p className="light-300">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                        sed do eiusmod tempor.
                    </p>
                </div>

            </div>
        </div>
    </section>
    {/* <!-- End Aim --> */}

    {/* <!-- Start Contact --> */}
    <section className="banner-bg bg-light py-5">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 mx-auto my-4 p-3">
                    <form action="#" method="get"><h1 className="h2 text-center">Stay up to date with us</h1>
                    <div className="input-group py-3">
                    
                        <input name="email" type="text" className="form-control form-control-lg rounded-pill rounded-end" id="email" placeholder="Your Email" aria-label="Your Email"/>
                        <button className="btn btn-secondary text-white btn-lg rounded-pill rounded-start px-lg-4" type="submit">Subsribe</button>
                    </div>
                    <p className="text-center light-300">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.</p>
                    </form>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- End Contact --> */}
    </>
    );
};

export default About;