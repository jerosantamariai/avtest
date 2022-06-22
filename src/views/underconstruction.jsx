import React from "react";
import { Link } from "react-router-dom";

const UnderConstruction = props => {
    return (
        <>
            <img src="https://h2o-digital.com/wp-content/uploads/2015/09/websites-why-you-should-never-use-under-construction-pages.jpg" alt="underconstruction" className="underConstruction" />
            <Link className="btn btn-danger d-flex justify-content-center my-4 mx-4" to="/">Volver a home</Link>
        </>
    )
}

export default UnderConstruction;