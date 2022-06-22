import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Starwars = props => {
    const { store, actions } = useContext(Context);
    const { character } = store;
    console.log(character);
    return (
        <div className="swapi-content c-black">
            <h1 className="text-center my-5">Star Wars Character App</h1>
            <div class="card-group">
                <div className="row d-flex justify-content-center ml-5">
                    {
                        !!store.character ?
                            store.character.results.map((character, i) => {
                                const img = character.name.replace("/", "'").split(" ").join("-").toLowerCase() + ".jpg";
                                return (
                                        <div className="card text-white bg-dark col-xs-12 col-sm-8 col-md-3 m-1" key={i}>
                                            {/* <img src={"img/" + img} className="card-img-top" alt={"image of " + img} /> */}
                                            <img src="https://via.placeholder.com/1000" className="m-2" alt={"comming soon" + img} />
                                            <div className="card-body">
                                                <h5 className="card-title">{character.name}</h5>
                                                <p className="card-text"><strong>Eye Color:</strong> {character.eye_color}</p>
                                                <p className="card-text"><strong>Height:</strong> {character.height}</p>
                                                <p className="card-text"><strong>Mass:</strong> {character.mass}</p>
                                                <p className="card-text"><strong>Birth Year:</strong> {character.birth_year}</p>
                                                <p className="card-text"><strong>Gender:</strong> {character.gender}</p>
                                                <p><strong>Summary:</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
            <div className="row pb-5" id="moreinfo">
                {
                    !!store.character ?
                        store.character.results.map((character, i) => {
                            return(
                            <div className="col-md-6 offset-3 d-flex justify-content-between">
                                {
                                    !!store.character &&
                                        store.character.previous !== null ?
                                        (
                                            <button className="btn btn-dark btn-md"
                                                onClick={() => actions.getCharacters(store.character.previous)}>
                                                <i class="fa fa-arrow-left"></i> Previous
                                            </button>
                                        ) : (
                                            <span className="btn btn-dark btn-md disabled">
                                                <i class="fa fa-arrow-left"></i> Previous
                                            </span>
                                        )
                                }
                                {
                                    !!store.character &&
                                        store.character.next !== null ?
                                        (
                                            <button className="btn btn-dark btn-md"
                                                onClick={() => actions.getCharacters(store.character.next)}>
                                                Next <i className="fa fa-arrow-right"></i>
                                            </button>
                                        ) : (
                                            <span className="btn btn-dark btn-md disabled">
                                                Next <i className="fa fa-arrow-right"></i>
                                            </span>
                                        )
                                }
                            </div>
                        )}
                    ):(
                        null
                    )
                }
            </div>
        </div>
    );
}

export default Starwars;