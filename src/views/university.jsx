import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";

const University = props => {
    const { store } = useContext(Context);
    const { university } = store;
    const sum = university.length;
    console.log(university);
    return (
        <>
            <div className="swapi-content c-black">
                <h1 className="text-center mt-5">USA University App</h1>
                <p className="text-center mb-5">Number of Universities = {sum}</p>
                <div className="card-group">
                    <div className="row d-flex justify-content-center ml-5">
                        {
                            !!store.university ?
                                store.university.map((univ, i) => {
                                    // const img = university.name.replace("/", "'").split(" ").join("-").toLowerCase() + ".jpg";
                                    return (
                                        <div className="card text-white bg-dark col-xs-12 col-sm-8 col-md-3 m-1" key={i}>
                                            <img src="https://via.placeholder.com/1000" className="m-2" alt="coming soon" />
                                            <div className="card-body">
                                                <p>University: {univ.name}</p>
                                                <p>Web: <a href={univ.web_pages} rel="noopener noreferrer" target="_blank">{univ.web_pages}</a></p>
                                            </div>
                                        </div>
                                    )
                                })
                                : (
                                    <div className="text-center d-flex justify-content-center">
                                        <div className="spinner-grow text-dark swapi-spinner" role="status"></div>
                                        <h4>Waiting...</h4>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default University;