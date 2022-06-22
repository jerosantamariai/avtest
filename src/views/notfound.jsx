import React from "react";
import { Link } from "react-router-dom";

const NotFound = props => {
    return (
        <>
            <img src="https://us.123rf.com/450wm/lkeskinen/lkeskinen1703/lkeskinen170315424/73553734-sello-de-goma-de-la-zona-de-peligro-dise%C3%B1o-de-grunge-con-rasgu%C3%B1os-de-polvo-los-efectos-se-pueden-qui.jpg?ver=6" alt="notfound" className="notfound" />
            <h1>Aqui no hay nada!!!</h1>
            <Link className="btn btn-danger d-flex justify-content-center my-4 mx-4" to="/">Volver a Home</Link>
        </>
    );
}

export default NotFound;