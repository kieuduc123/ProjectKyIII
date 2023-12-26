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
                            <img className="w-100"
                                src="https://bostonpharma.com.vn/vnt_upload/File/Image/gioi_thieu_NEW.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- End Banner Hero --> */}
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
         
            {/* <!--End Our Partner--> */}

            {/* <!-- End Progress --> */}

            {/* <!-- Start Choice --> */}
         <section>
     <div className=" mt-5 mb-5"> 
        <h2 className="text-center mb-5 text-secondary">VĂN HÓA CÔNG TY</h2>
     <div className="d-flex mb-5 bg-secondary">
     <div class=" w-50 p-5 text-white light-300">
                    <p >
                        <span style={{"font-size": "24px"}}><b>MÔI TRƯỜNG LÀM VIỆC THÂN THIỆN</b></span></p>

<p>Boston pharma hiểu rằng mọi nhân viên đều mong muốn nơi làm việc thật vui vẻ, mọi người luôn giúp đỡ lẫn nhau. Do vậy Ban Lãnh đạo công ty luôn dành sự quan tâm lớn đến đội ngũ cán bộ, công nhân lao động trong công ty.</p>

<p>Hằng năm công ty thường xuyên tổ chức các chương trình gắn kết tập thể, các chương trình vui chơi và được sự tham gia hết sức nhiệt tình của toàn thể công nhân viên như: Teambuilding, Giải bóng đá Nam – Nữ tổ chức định kỳ hằng năm; Chương trình Happy Hour được diễn ra hằng tháng tổ chức cho những nhân viên có sinh nhật trong tháng; Chương trình Tân niên/Tất niên,...</p>
                </div>
        <div className="w-50 text-right">
            <img className="img" src="https://bostonpharma.com.vn/vnt_upload/about/VAN_HOA_CONG_TY_3.jpg" alt=""></img>
       
        </div>

     </div>
     </div>
     </section>
            {/* <!-- End Choice --> */}

            {/* <!-- Start Aim --> */}

            {/* <!-- End Aim --> */}
        </>
    );
};

export default About;
