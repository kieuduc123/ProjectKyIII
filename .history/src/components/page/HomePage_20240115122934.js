import Product from 'components/\bproduct/Product';
import React from 'react';
import { NavLink } from 'react-router-dom';

const HomePage = () => {
    return (
        <>
 


 {/* <!-- Slider Start --> */}
 <div class="product">
 <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.medicalexpo.com/images_me/bnr/70745/hd/55152.jpg" alt="First slide"/>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="https://img.medicalexpo.com/images_me/bnr/68409/hd/54558v1.jpg" alt="Second slide"/>
    </div>
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://img.medicalexpo.com/images_me/bnr/73644/hd/54797v1.jpg" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
                {/* <!-- .swiper-wrapper --> */}

                <div class="pagination-wrap position-absolute w-100">
                    <div class="swiper-pagination d-flex flex-row flex-md-column"></div>
                </div>
                {/* <!-- .pagination-wrap --> */}
            </div>


<div class="homepage-boxes">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-8">
                    <div class="opening-hours">
                        <h2 class="d-flex align-items-center">Opening Hours</h2>

                        <ul class="p-0 m-0">
                            <li>Monday - Thursday <span>8.00 - 19.00</span></li>
                            <li>Friday <span>8.00 - 18.30</span></li>
                            <li>Saturday <span>9.30 - 17.00</span></li>
                            <li>Sunday <span>9.30 - 15.00</span></li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
                    <div class="emergency-box">
                        <h2 class="d-flex align-items-center">Contact Him</h2>

                        <div class="call-btn button gradient-bg">
                            <a class="d-flex justify-content-center align-items-center" href="#"><img src="images/emergency-call.png"/> +34 586 778 8892</a>
                        </div>

                        <p>If you have any questions, please contact us via our hotline. Our specialists will respond to all your questions as quickly as possible.</p>
                    </div>
                </div>
             
            </div>
        </div>
    </div>

    <div class="our-departments">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="our-departments-wrap">
                        <h2>Virtue</h2>

                        <div class="row">
                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/cardiogram.png" alt=""/>

                                        <h3>Cardioology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/stomach-2.png" alt=""/>

                                        <h3>Gastroenterology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/blood-sample-2.png" alt=""/>

                                        <h3>Medical Lab</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/teeth.png" alt=""/>

                                        <h3>Dental Care</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/stretcher.png" alt=""/>

                                        <h3>Surgery</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/scanner.png" alt=""/>

                                        <h3>Neurology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-md-0">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/bones.png" alt=""/>

                                        <h3>Orthopaedy</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-lg-0">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/blood-donation-2.png" alt=""/>

                                        <h3>Pediatry</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>

                            <div class="col-12 col-md-6 col-lg-4 mb-0">
                                <div class="our-departments-cont">
                                    <header class="entry-header d-flex flex-wrap align-items-center">
                                        <img src="images/glasses.png" alt=""/>

                                        <h3>Ophthalmology</h3>
                                    </header>

                                    <div class="entry-content">
                                        <p>Lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus.</p>
                                    </div>

                                    <footer class="entry-footer">
                                       
                                    </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  
	{/* <!-- .testimonial-section --> */}

    <div class="the-news">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2>The News</h2>

                    <div class="row">
                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="the-news-wrap">
                                <figure class="post-thumbnail">
                                    <a href="#"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/F478/production/_132148526_e29cc44fb6aa8c4774f3316047fd273ea7cc217d.jpg.webp" alt=""/></a>
                                </figure>

                                <header class="entry-header">
                                    <h3>Bigger Derriford Hospital pharmacy to open in spring</h3>

                                </header>

                                <div class="entry-content">
                                    <p>A new outpatient pharmacy at Derriford Hospital will be twice as big as the current pharmacy when it moves to a new location, the NHS has said.

The University Hospitals Plymouth NHS Trust said demand for services had increased so it would also extend its opening times at weekends.

The pharmacy is set to move to a new building in the multi-storey car park.

Kandarp Thakkar, chief pharmacist, said the pharmacy served "thousands" of people each week.

"As many who have used the pharmacy recently will know, we have outgrown our current space and this much improved facility will have room for more staff and stock, a better range of services and a much-improved experience for patients," he added.

The NHS said the new pharmacy would open in spring 2024.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="the-news-wrap">
                                <figure class="post-thumbnail">
                                    <a href="#"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/99EA/production/_131920493_screenshot2023-12-04121442.jpg.webp" alt=""/></a>
                                </figure>

                                <header class="entry-header">
                                    <h3>Concern over loss of pharmacy in Watton</h3>
                                </header>

                                <div class="entry-content">
                                    <p>People have expressed concern over a town with a growing population losing one of its two pharmacies from January.

The branch in Boots is set to shut in Watton, Norfolk.

Six pharmacies have closed in Norfolk in recent months with four more expected to go next year. In June, a pharmacist in the county said the industry was "in danger".

Boots would not comment on the Watton closure or a decision to shut its High Street branch in Gorleston last month.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-12 col-md-6 col-lg-4">
                            <div class="the-news-wrap">
                                <figure class="post-thumbnail">
                                    <a href="#"><img src="images/news-3.png" alt=""/></a>
                                </figure>

                                <header class="entry-header">
                                    <h3>Marketing and Medicine</h3>

                                </header>

                                <div class="entry-content">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum. Ut ac ligula sapien. Suspendisse cursus faucibus finibus. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

{/* <section id="portfolio" class="portfolio">

   <Product></Product>
</section> */}


{/* <!-- ======= Breadcrumbs ======= --> */}


{/* <!-- ======= Portfolio Section ======= --> */}



{/* <!-- End #main --> */}



        </>
    );
};

export default HomePage;