import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
 

    {/* <!-- Start Banner Hero --> */}
    <div className="banner-wrapper bg-light mt-4">
        <div id="index_banner" className="banner-vertical-center-index  pt-5">

            {/* <!-- Start slider --> */}
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://bostonpharma.com.vn/vnt_upload/weblink/BANNER-EU-WEB-21-11.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://bostonpharma.com.vn/vnt_upload/weblink/Nhom-khang-sinh.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://bostonpharma.com.vn/vnt_upload/weblink/Nhom-noi-bat.jpg" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next " type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            {/* <!-- End slider --> */}

        </div>
    </div>
    {/* <!-- End Banner Hero --> */}



    {/* <!-- Start Service --> */}
    <section className="service-wrapper py-3">
        <div className="container-fluid pb-3">
            <div className="row">
                <h2 className="h2 text-center col-12 py-5 semi-bold-600"></h2>
                <div className="service-header col-2 col-lg-3 text-end light-300">
                    <i className='bx bx-gift h3 mt-1'></i>
                </div>
                <div className="service-heading col-10 col-lg-9 text-start float-end light-300">
                    <h2 className="h3 pb-4 typo-space-line">Kiến tạo cộng đồng sống khỏe</h2>
                </div>
            </div>
            <p className="service-footer col-10 offset-2 col-lg-9 offset-lg-3 text-start pb-3 text-muted px-2">
            Trong những năm qua, Boston Pharma – một trong những công ty Dược phẩm hàng đầu Việt Nam đã, đang và sẽ nghiên cứu, cải tiến chất lượng sản xuất vì sức khỏe cộng đồng.
            </p>
        </div>

        {/* <div className="service-tag py-5 bg-secondary">
            <div className="col-md-12">
                <ul className="nav d-flex justify-content-center">
                    <li className="nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary active shadow rounded-pill text-light px-4 light-300" to="#" data-filter=".project">All</NavLink>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" to="#" data-filter=".graphic">Graphics</NavLink>
                    </li>
                    <li className="filter-btn nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" to="#" data-filter=".ui">UI/UX</NavLink>
                    </li>
                    <li className="nav-item mx-lg-4">
                        <NavLink className="filter-btn nav-link btn-outline-primary rounded-pill text-light px-4 light-300" to="#" data-filter=".branding">Branding</NavLink>
                    </li>
                </ul>
            </div>
        </div> */}

    </section>

    <section className="container overflow-hidden py-5">
        <div className="row gx-5 gx-sm-3 gx-lg-5 gy-lg-5 gy-3 pb-3 projects">

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="service card-img" src="./assets/img/services-01.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">UI/UX design</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
                {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-02.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Social Media</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>  
                       </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-03.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Marketing</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}

            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-04.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Graphic</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-05.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Digtal Marketing</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-06.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Market Research</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}


            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-07.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Business</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

            {/* <!-- Start Recent Work --> */}
            <div className="col-xl-3 col-md-4 col-sm-6 project ui graphic branding">
                <NavLink to="#" className="service-work card border-0 text-white shadow-sm overflow-hidden mx-5 m-sm-0">
                    <img className="card-img" src="./assets/img/services-08.jpg" alt=""/>
                    <div className="service-work-vertical card-img-overlay d-flex align-items-end">
                        <div className="service-work-content text-left text-light">
                            <span className="btn btn-outline-light rounded-pill mb-lg-3 px-lg-4 light-300">Branding</span>
                            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing</p>
                        </div>
                    </div>
                </NavLink>
                         </div>
            {/* <!-- End Recent Work --> */}

        </div>
    </section>
    {/* <!-- End Service --> */}

    {/* <!-- Start Recent Work --> */}
    <section className="py-5 mb-5">
        <div className="container">
            <div className="recent-work-header row text-center pb-5">
                <h2 className="col-md-6 m-auto h2 semi-bold-600 py-5">Sản Phẩm Nổi Bật</h2>
            </div>
            <div className="row gy-5 g-lg-5 mb-4">

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="https://bostonpharma.com.vn/vnt_upload/medicine/04_2021/Bostacet_new.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">BOSTACET</h3>
                        
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="https://bostonpharma.com.vn/vnt_upload/medicine/07_2021/BOSTOGEL.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">BOSTOGEL</h3>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="https://bostonpharma.com.vn/vnt_upload/medicine/02_2022/MOLRAVIR400.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">MOLRAVIR 400</h3>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="https://bostonpharma.com.vn/vnt_upload/medicine/03_2021/Hop_Cefalex_500_200_vien_new.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">CEFALEX 500 (HỘP 200 VIÊN)</h3>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="https://bostonpharma.com.vn/vnt_upload/medicine/05_2023/Paralmax_Extra_2023.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">PARALMAX EXTRA</h3>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

                {/* <!-- Start Recent Work --> */}
                <div className="col-md-4 mb-3">
                    <NavLink to="#" className="recent-work card border-0 shadow-lg overflow-hidden">
                        <img className="recent-work-img card-img" src="https://bostonpharma.com.vn/vnt_upload/medicine/04_2021/Paralmax_500_CAPs.jpg" alt=""/>
                        <div className="recent-work-vertical card-img-overlay d-flex align-items-end">
                            <div className="recent-work-content text-start mb-3 ml-3 text-dark">
                                <h3 className="card-title light-300">PARALMAX 500 CAPS</h3>
                            </div>
                        </div>
                    </NavLink>
                                 </div>
                {/* <!-- End Recent Work --> */}

            </div>
        </div>
    </section>
    {/* <!-- End Recent Work --> */}




        </>
    );
};

export default HomePage;