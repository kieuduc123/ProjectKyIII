import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <>
            {/* <!-- Start Banner Hero --> */}
            <section className="bg-light w-100 mt-5">
                <div className="container">
                    <div className="row d-flex align-items-center py-5">
                        <div className="col-lg-6 text-start">
                            <h1 className="h2 py-5 text-primary typo-space-line">
                                Giới Thiệu
                            </h1>
                            <p className="light-300">
                                Từ những ngày đầu tiên được thành
                                lập,PHARMACEUTICALS được lấy tên là Công ty Cổ
                                phần Dược Phẩm VITAR do Tổng công ty Dược Việt
                                Nam (Đại diện là Công ty dược Trung ương I) và
                                các Cổ đông cá nhân có kinh nghiệm thâm niên
                                trong ngành Dược phẩm điều hành. Với những điểm
                                chung về tầm nhìn, sứ mệnh chúng tôi đã quyết
                                định hợp tác cùng với PHARMACEUTICALS Inc USA để
                                cùng nhau cộng hưởng phát triển và hướng đến
                                chăm sóc sức khỏe cho cộng đồng. Năm 2008, Công
                                ty Cổ phần Dược phẩm Boston Việt Nam (gọi tắt là
                                PHARMACEUTICALS) chính thức đổi tên theo sự liên
                                doanh và nhượng quyền từ Boston Hoa Kỳ.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="https://bostonpharma.com.vn/vnt_upload/File/Image/gioi_thieu_NEW.jpg"
                                alt=""
                            />
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
                        <h2 className="h2 py-5 typo-space-line">
                            BAN LÃNH ĐẠO
                        </h2>
                        <p className="text-muted light-300">
                            Nghiên cứu và cải tiến vì sức khỏe cộng đồng Trong
                            những năm qua,PHARMACEUTICALS – một trong những công
                            ty Dược phẩm hàng đầu Việt Nam, đã và đang nỗ lực
                            nghiên cứu không ngừng để cải tiến chất lượng thuốc
                            vì sức khỏe cộng đồng.
                        </p>
                    </div>

                    <div className="col-lg-9 row">
                        <div className="team-member col-md-4">
                            {/* <img className="team-member-img img-fluid rounded-circle p-4" src="./assets/img/team-01.jpg" alt=""/> */}
                            <img
                                className="team-member-img img-fluid rounded-circle p-4"
                                src="https://bostonpharma.com.vn/vnt_upload/about/Anh_Hoang.jpg"
                                alt=""
                            />
                            <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                <li>MR. LƯƠNG ĐĂNG KHOA</li>
                                <li>TỔNG GIÁM ĐỐC</li>
                            </ul>
                        </div>
                        <div className="team-member col-md-4">
                            <img
                                className="team-member-img img-fluid rounded-circle p-4"
                                src="https://bostonpharma.com.vn/vnt_upload/about/Chi_Lieu_2023___web.jpg"
                                alt=""
                            />
                            <ul className="team-member-caption list-unstyled text-center pt-4 text-muted light-300">
                                <li>VĂN MS. TRỊNH THỊ THÚY LIỄU </li>
                                <li> Giám Đốc Tài Chính</li>
                            </ul>
                        </div>
                        <div className="team-member col-md-4">
                            <img
                                className="team-member-img img-fluid rounded-circle p-4"
                                src="https://bostonpharma.com.vn/vnt_upload/about/Anh_Minh_2023___web.jpg"
                                alt=""
                            />
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
                    <h2 className="h2 text-white text-center py-5">
                        TIÊU CHUẨN
                    </h2>
                    <p className="text-white text-center ">
                        PHARMACEUTICALS chuyên sản xuất và phân phối Dược phẩm,
                        Thực phẩm Bảo vệ sức khỏe ưu tiên chất lượng hàng đầu
                        thông qua việc đảm bảo nghiêm ngặt các Tiêu chí:
                    </p>
                    <div className="row text-center">
                        <div className="col-md-3 mb-3">
                            <div className=" py-5">
                                <NavLink to="#">
                                    <img
                                        className=" cart display-1 text-white bx bxs-buildings w-100"
                                        src="https://bostonpharma.com.vn/vnt_upload/File/11_2019/logo-EU-GMP-11.jpg"
                                        alt=""
                                    ></img>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className=" py-5">
                                <NavLink to="#">
                                    <img
                                        className=" cart display-1 bx text-white bxs-check-shield bx-lg w-100"
                                        src="https://bostonpharma.com.vn/vnt_upload/File/11_2019/Logo-GMP-WHO.jpg"
                                        alt=""
                                    ></img>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className=" py-5">
                                <NavLink to="#">
                                    <img
                                        className=" cart display-1 text-white bx bxs-bolt-circle w-100"
                                        src="https://bostonpharma.com.vn/vnt_upload/File/11_2019/gmp.jpg"
                                        alt=""
                                    ></img>
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <div className=" py-5">
                                <NavLink to="#">
                                    <img
                                        className=" cart display-1 text-white bx bxs-spa w-100"
                                        src="https://bostonpharma.com.vn/vnt_upload/File/11_2019/CE.jpg"
                                        alt=""
                                    ></img>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
            {/* <!--End Our Partner--> */}

            {/* <!-- End Progress --> */}

            {/* <!-- Start Choice --> */}
         
                {/* <div className="container my-4">
                    <div className="templateCircle" style={{"animation-delay": "0.3s"}}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div
                                    className="item"
                                    style={{"animation-delay": "0.4s"}}
                                >
                                    <div className="circle v1">
                                        <div className="t1">Tầm nhìn</div>

                                        <div className="text">
                                            Nghiên cứu và cải tiến chất lượng
                                            thuốc&nbsp;vì sức khỏe cộng đồng
                                        </div>
                                    </div>

                                    <div
                                        className="content"
                                        style={{"animation-delay": "0.3s"}}
                                    >
                                        <p>
                                            Hướng đến trở thành biểu tượng{" "}
                                            <strong>
                                                hàng đầu về chất lượng Dược
                                                phẩm&nbsp;
                                            </strong>
                                            và là&nbsp;
                                            <strong>
                                                Top 10 nhà máy sản xuất thuốc
                                            </strong>{" "}
                                            Tân dược tốt nhất Việt Nam.
                                        </p>

                                        <p>
                                            Xây dựng môi trường học tập năng
                                            động, nghiên cứu sáng tạo cho thực
                                            tập sinh trong và ngoài nước. Kết
                                            hợp thực hiện các đề tài khoa học
                                            cấp quốc gia của các Giáo sư, Tiến
                                            Sỹ khoa học.
                                        </p>

                                        <p>
                                            <strong>Nêu cao tiêu chí: </strong>
                                            <em>
                                                Nơi nào cần sức khỏe nơi đó có
                                                Boston Pharma.
                                            </em>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div
                                    className="item"
                                    style={{"animation-delay": "0.5s"}}
                                >
                                    <div className="circle v2">
                                        <div className="t1">Sứ mệnh</div>

                                        <div className="text">
                                            Boston Pharma – Kiến tạo cộng đồng
                                            sống khỏe
                                        </div>
                                    </div>

                                    <div
                                        className="content"
                                        style={{"animation-delay": "0.3s"}}
                                    >
                                        <p>
                                            <strong>
                                                Boston Pharma khẳng định sứ mệnh
                                                nâng tầm sức khỏe cộng đồng
                                            </strong>{" "}
                                            thông qua các sản phẩm chất lượng
                                            cùng với mục tiêu tối ưu hóa chi phí
                                            điều trị
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
     <div className="container"> 
     <div className="row">
     <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div
                                    className="item"
                                    style={{"animation-delay": "0.4s"}}
                                >
                                    <div className="circle v1">
                                        <div className="t1">Tầm nhìn</div>

                                        <div className="text">
                                            Nghiên cứu và cải tiến chất lượng
                                            thuốc&nbsp;vì sức khỏe cộng đồng
                                        </div>
                                    </div>

                                    <div
                                        className="content"
                                        style={{"animation-delay": "0.3s"}}
                                    >
                                        <p>
                                            Hướng đến trở thành biểu tượng{" "}
                                            <strong>
                                                hàng đầu về chất lượng Dược
                                                phẩm&nbsp;
                                            </strong>
                                            và là&nbsp;
                                            <strong>
                                                Top 10 nhà máy sản xuất thuốc
                                            </strong>{" "}
                                            Tân dược tốt nhất Việt Nam.
                                        </p>

                                        <p>
                                            Xây dựng môi trường học tập năng
                                            động, nghiên cứu sáng tạo cho thực
                                            tập sinh trong và ngoài nước. Kết
                                            hợp thực hiện các đề tài khoa học
                                            cấp quốc gia của các Giáo sư, Tiến
                                            Sỹ khoa học.
                                        </p>

                                        <p>
                                            <strong>Nêu cao tiêu chí: </strong>
                                            <em>
                                                Nơi nào cần sức khỏe nơi đó có
                                                Boston Pharma.
                                            </em>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <div
                                   
                                >
                                    <div className="circle v2">
                                        <div className="t1">Sứ mệnh</div>

                                        <div className="text">
                                            Boston Pharma – Kiến tạo cộng đồng
                                            sống khỏe
                                        </div>
                                    </div>

                                    <div
                                    
                                    >
                                        <p>
                                            <strong>
                                                Boston Pharma khẳng định sứ mệnh
                                                nâng tầm sức khỏe cộng đồng
                                            </strong>{" "}
                                            thông qua các sản phẩm chất lượng
                                            cùng với mục tiêu tối ưu hóa chi phí
                                            điều trị
                                        </p>
                                    </div>
                                </div>
                            </div>

     </div>
     </div>
            {/* <!-- End Choice --> */}

            {/* <!-- Start Aim --> */}

            {/* <!-- End Aim --> */}
        </>
    );
};

export default About;
