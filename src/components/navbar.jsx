import React from "react";
import { Link } from "react-router-dom";

const Navbar = props => {
    return (
        <nav className="nav nav-pills flex-column flex-sm-row">
        <img className="m-3" width="236" height="59.46" src="https://www.audienceview.com/wp-content/uploads/2022/03/Main-Logo-On-Dark-BG-1536x387.png" alt="" />
        <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle py-0 px-4 text-light" data-bs-toggle="dropdown" to="/underconstruction" role="button"
                aria-expanded="false" tabIndex="0">
                Solutions
            </Link>
            <ul className="dropdown-menu">
                <li>
                    <Link className="dropdown-item titulo" to="/underconstruction">
                        <p>
                            Solutions
                        </p>
                    </Link>
                </li>
                <div className="d-flex justify-content-between ">
                    <li>
                        <Link className="dropdown-item" to="/underconstruction" target="_top">
                            <span className="text-description-group">
                                <div className="d-flex ai-c">
                                    <p className="menu-title mb-0">Professional</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                                <small className="c-gris">Live event ticketing made simply better</small>
                            </span>
                        </Link>
                    </li>
                    <li>
                        <Link className="dropdown-item" to="/underconstruction" target="_top">
                            <span className="text-description-group">
                                <div className="d-flex ai-c">
                                    <p className="menu-title mb-0">Professional</p>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-arrow-right-short" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
                                    </svg>
                                </div>
                                <small className="c-gris">Live event ticketing made simply better</small>
                            </span>
                        </Link>
                    </li>
                </div>
            </ul>
        </li>
        <li className="nav-item dropdown">
            <Link className="nav-link py-0 px-4 text-light" to="/about">
                About
            </Link>
        </li>
        <div>
            <Link type="button" className="btn boton btn-demo mr-2" to="/university">USA University App</Link>
            <Link type="button" className="btn boton btn-product" to="/starwars">SWAPI App</Link>
        </div>
    </nav>
    );
}

export default Navbar;