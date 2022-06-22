import React from "react";
import { Link } from "react-router-dom";

const Home = props => {
    return (
        <div className="col-lg-12">
            <section className="section1">
                <div className="section1-backgroud container">
                    <div className="d-block">
                        <h1 className="text-white fw-bold mb-4">Powerful Event Ticketing Software</h1>
                        <p className="text-white">Get your live events discovered, attended and remembered. With our software
                            solutions, audience growth strategies and client communities all working seamlessly together, we
                            help you make event magic. deserunt dolore rem facilis amet veniam nemo illum animi ea soluta
                            incidunt
                            voluptate ipsa! Fugiat!</p>
                    </div>
                    <div className="section1-form">
                        <h2>Take a free product tour</h2>
                        <label htmlFor="inputEmail" className="form-label fw-bold c-black">Email*</label>
                        <input type="email" id="inputEmail" className="form-control" aria-describedby="emailHelpBlock" />
                        <div className="fd-c mt-4 mb-5">
                            <button type="button" className="btn boton btn-demo mr-2">Primary</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section2">
                <h2 className="fw-bold text-center">section 2</h2>
                <p className="text-center c-gris">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus incidunt
                    iure fugit reprehenderit
                    harum inventore cum vel, illum soluta. Eaque quia commodi consectetur ut expedita, provident incidunt iste
                    mollitia quaerat.
                </p>
                <ul className="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane"
                            type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Professional</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane"
                            type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Unlimited</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane"
                            type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Campus</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="grad-tab" data-bs-toggle="tab" data-bs-target="#grad-tab-pane"
                            type="button" role="tab" aria-controls="grad-tab-pane" aria-selected="false">Grad</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="growthsolutions-tab" data-bs-toggle="tab"
                            data-bs-target="#growthsolutions-tab-pane" type="button" role="tab"
                            aria-controls="growthsolutions-tab-pane" aria-selected="false">Growth Solutions</button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab"
                        tabIndex="0">
                        <div className="d-flex">
                            <div className="section2-imagenes">
                                <img className="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img className="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Professional-Slider-1.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg className="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div className="section2-text ms-5 ps-5">
                                <h2 className="mb-4">AudienceView Professional</h2>
                                <p className="c-gris">AudienceView Professional is the better way to manage live events. This
                                    all-in-one ticketing, marketing and fundraising platform solution is your go-to tool for
                                    simplifying your efforts while improving consumer relationships and engagement.</p>
                                <div className="d-flex align-items-center">
                                    <p className="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                        <div className="d-flex">
                            <div className="section2-imagenes">
                                <img className="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img className="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Unlimited-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg className="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div className="section2-text ms-5 ps-5">
                                <h2 className="mb-4">AudienceView Unlimited</h2>
                                <p className="c-gris">AudienceView Unlimited puts the power in your hands. This fully configurable
                                    business solution with game-changing automation provides the valuable insights you need to
                                    make your live event organization more successful</p>
                                <div className="d-flex align-items-center">
                                    <p className="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                        <div className="d-flex">
                            <div className="section2-imagenes">
                                <img className="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img className="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Unlimited-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg className="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div className="section2-text ms-5 ps-5">
                                <h2 className="mb-4">AudienceView Campus</h2>
                                <p className="c-gris">AudienceView Campus was built exclusively for the higher education market.
                                    Continually tested and enhanced by its network of active colleges and universities, it
                                    integrates seamlessly with your existing school authentication systems.</p>
                                <div className="d-flex align-items-center">
                                    <p className="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="grad-tab-pane" role="tabpanel" aria-labelledby="grad-tab" tabIndex="0">
                        <div className="d-flex">
                            <div className="section2-imagenes">
                                <img className="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img className="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-Grad-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg className="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div className="section2-text ms-5 ps-5">
                                <h2 className="mb-4">AudienceView Grad</h2>
                                <p className="c-gris">Even if you’ve never had ticketing experience, AudienceView Grad, built
                                    exclusively for commencement event leaders, is the easy way to manage your ticketing needs.
                                    This full end-to-end ticketing solution will help you run your next commencement event
                                    smoothly.</p>
                                <div className="d-flex align-items-center">
                                    <p className="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="growthsolutions-tab-pane" role="tabpanel"
                        aria-labelledby="growthsolutions-tab" tabIndex="0">
                        <div className="d-flex">
                            <div className="section2-imagenes">
                                <img className="img1" src="https://www.audienceview.com/wp-content/uploads/2019/12/yellowdot.png"
                                    width="80px" height="111px" alt="" />
                                <img className="img2"
                                    src="https://www.audienceview.com/wp-content/uploads/2019/12/Solutions-ExtendedServices-Slider.jpg"
                                    height="240px" width="393px" alt="" />
                                <svg className="bi bi-circle-fill d-block mt-2" xmlns="http://www.w3.org/2000/svg" width="29"
                                    height="29" fill="currentColor" viewBox="0 0 16 16">
                                    <circle cx="8" cy="8" r="8" />
                                </svg>
                            </div>
                            <div className="section2-text ms-5 ps-5">
                                <h2 className="mb-4">Growth Solutions</h2>
                                <p className="c-gris">Audience growth solutions by AudienceView boosts your organizations ticket
                                    sales revenue, brand awareness, and overall reach. With millions of subscribers and
                                    followers from TheaterMania.com, WhatsOnStage.com and other consumer properties, our
                                    customers become your customers. You decide what you want to promote and we’ll take care of
                                    the rest.</p>
                                <div className="d-flex align-items-center">
                                    <p className="c-black fw-bold mb-0">Learn more</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <h2 className="c-black fw-bold text-center mb-0">Not sure which is right for you?</h2>
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to="/underconstruction" className="btn boton btn-product">take our quiz</Link>
                        <img src="https://www.audienceview.com/wp-content/uploads/2021/10/Group-373.png" alt="" width="148"
                            height="" />
                    </div>
                </div>
                <hr />
            </section>
            <section className="section3 p-5">
                <h2 className="fw-bold text-center mb-5">Meet some of our biggest advocates</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/SanFransiscoPlayhouse-logo.png"
                                width="212" height="47" alt="" />
                        </div>
                        <div className="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/GeffenPlayhouse_logo.png"
                                width="212" height="47" alt="" />
                        </div>
                        <div className="col-3">
                            <img className="special"
                                src="https://www.audienceview.com/wp-content/uploads/2021/10/Sonoma-state-logo.jpg" width="206"
                                height="91" alt="" />
                        </div>
                        <div className="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/ClientLogo-PlayhouseSquare.jpg"
                                width="212" height="47" alt="" />
                        </div>
                        <div className="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/university.logo_.small_.horizontal.blue_.jpg"
                                width="265" height="110" alt="" />
                        </div>
                        <div className="col-3">
                            <img className="special"
                                src="https://www.audienceview.com/wp-content/uploads/2021/10/AtlanticTheaterCompany_logo.png"
                                width="172" height="127" alt="" />
                        </div>
                        <div className="col-3">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/03/ClientLogo-Athenaeum.jpg"
                                width="116" height="99" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="section4 ">
                <div className="container">
                    <h2 className="fw-bold text-center mb-4">Our audience growth & development solutions</h2>
                    <p className="text-center c-gris mb-5">Audience growth solutions by AudienceView boosts your organizations
                        ticket
                        sales revenue, brand awareness, and overall reach. With millions of subscribers and followers from
                        TheaterMania.com, WhatsOnStage.com and other consumer properties, our customers become your customers.
                        You decide what you want to promote and we’ll take care of the rest.
                    </p>
                    <ul className="nav nav-tabs d-flex justify-content-between mb-5" id="myTabSection4" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="email-tab" data-bs-toggle="tab" data-bs-target="#email-tab-pane"
                                type="button" role="tab" aria-controls="email-tab-pane" aria-selected="true">Email
                                promotion</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="streaming-tab" data-bs-toggle="tab"
                                data-bs-target="#streaming-tab-pane" type="button" role="tab" aria-controls="streaming-tab-pane"
                                aria-selected="false">Streaming</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="digitalAdvertising-tab" data-bs-toggle="tab"
                                data-bs-target="#digitalAdvertising-tab-pane" type="button" role="tab"
                                aria-controls="digitalAdvertising-tab-pane" aria-selected="false">Digital advertising</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="automatedDistribution-tab" data-bs-toggle="tab"
                                data-bs-target="#automatedDistribution-tab-pane" type="button" role="tab"
                                aria-controls="automatedDistribution-tab-pane" aria-selected="false">Automated
                                distribution</button>
                        </li>
                    </ul>
                    <div className="tab-content pt-5" id="myTabContentSection4">
                        <div className="tab-pane fade show active" id="email-tab-pane" role="tabpanel" aria-labelledby="email-tab"
                            tabIndex="0">
                            <div className="d-flex">
                                <div className="section2-text ms-5 ps-5">
                                    <h2 className="mb-4">Email promotion</h2>
                                    <p className="c-gris">With over 1,800,000 dedicated theater-goers opted into receiving our
                                        emails,
                                        your audience is an email send away. Reach local, regional, national, West End,
                                        Broadway,
                                        and Off-Broadway audiences while partnering with our team of experts to give you the
                                        best
                                        return on your investment.</p>
                                    <div className="d-flex align-items-center">
                                        <p className="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="section2-imagenes">
                                    <img className="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/ad-units-1490x875-1.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="streaming-tab-pane" role="tabpanel" aria-labelledby="streaming-tab"
                            tabIndex="0">
                            <div className="d-flex">
                                <div className="section2-text ms-5 ps-5">
                                    <h2 className="mb-4">Streaming</h2>
                                    <p className="c-gris">Your audience and patrons no longer have to live in your local community.
                                        With TheaterMania Streaming, you can reach a whole new national and international
                                        audience through our website, opted-in email subscribers, editorial content, and large
                                        social media followers.</p>
                                    <div className="d-flex align-items-center">
                                        <p className="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="section2-imagenes">
                                    <img className="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/TheaterMania_Streaming_Mockup.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="digitalAdvertising-tab-pane" role="tabpanel"
                            aria-labelledby="digitalAdvertising-tab" tabIndex="0">
                            <div className="d-flex">
                                <div className="section2-text ms-5 ps-5">
                                    <h2 className="mb-4">Digital advertising</h2>
                                    <p className="c-gris">Using our Campaign Manager tool, you can create your next ad campaign in
                                        minutes. Think of it like Facebook or Google Ad Manager. But instead of your ads
                                        reaching the wrong people, your ads are seen by theater ticket buyers and event goers
                                        who are ready to buy now. Choose your audience. Upload your creative. Start selling
                                        tickets. It’s easy with AudienceView Campaign Manager.</p>
                                    <div className="d-flex align-items-center">
                                        <p className="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="section2-imagenes">
                                    <img className="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/20210406_AudienceView_CampaignManager_Graphic-ReviewPerformance-1536x923.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="automatedDistribution-tab-pane" role="tabpanel"
                            aria-labelledby="automatedDistribution-tab" tabIndex="0">
                            <div className="d-flex">
                                <div className="section2-text ms-5 ps-5">
                                    <h2 className="mb-4">Automated distribution</h2>
                                    <p className="c-gris">Our ticketing software clients can improve their marketing reach with the
                                        flip of a switch (it’s actually a toggle but you get the point). Whenever you create a
                                        new event or show, you can choose to automatically list and promote your shows to
                                        millions of passionate event goers. And if you need to make any changes, those changes
                                        get synced with the live listings on TheaterMania.com.</p>
                                    <div className="d-flex align-items-center">
                                        <p className="c-black fw-bold mb-0">Learn more</p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="section2-imagenes">
                                    <img className="img2"
                                        src="https://www.audienceview.com/wp-content/uploads/2021/10/Web-browser-TheaterMania-1536x1009.png"
                                        height="240px" width="393px" alt="" />
                                    <svg />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section5 pb-2">
                <h2 className="text-white text-center pt-5 pb-2">People attending live events are changing</h2>
                <div className="d-flex align-items-center justify-content-center">
                    <p className="text-white fw-bold mb-0">View our latest insights</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                        <path fillRule="evenodd"
                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                    </svg>
                </div>
            </section>

            <section className="section6 pt-5">
                <div className="container">
                    <h2 className="fw-bold text-center my-4">
                        The only ticketing software <br /> with audience growth built in
                    </h2>
                    <div className="section6-container">
                        <p className="text-center c-gris mb-5">
                            With millions of subscribers and followers from TheaterMania.com, WhatsOnStage.com and other
                            consumer properties, our customers become your customers.
                        </p>
                        <div className="d-flex align-items-center justify-content-between">
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/TM-Horizontal-1.png" width="265"
                                height="37" alt="" />
                            <img src="https://www.audienceview.com/wp-content/uploads/2021/10/WhatsOnStage_Logo.png" width="225"
                                height="50" alt="" />
                        </div>
                        <div className="d-flex align-items-center justify-content-center mt-5 mb-4">
                            <p className="c-black fw-bold mb-0">Learn more</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                className="bi bi-arrow-right-short ms-2 fw-bold" viewBox="0 0 16 16">
                                <path fillRule="evenodd"
                                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section7">
                <h2 className="text-center">Don't just take our word for it</h2>
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <Link to="https://www.google.com" target="_blank">
                                <img src="https://picsum.photos/id/1001/5616/3744"
                                    className="d-block w-75 m-auto" width="1100" height="500" alt="..." />
                            </Link>
                        </div>
                        <div className="carousel-item">
                            <Link to="https://www.google.com" target="_blank">
                                <img src="https://picsum.photos/id/10/2500/1668"
                                    className="d-block w-75 m-auto" width="1100" height="500" alt="..." />
                            </Link>
                        </div>
                        <div className="carousel-item">
                            <img src="https://picsum.photos/id/1005/5760/3840" className="d-block w-75 m-auto" width="1100" height="500"
                                alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;