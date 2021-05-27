import React from "react";

function CardPiece(props) {
    return(
        <div>
            <li className="cards-piece">
                <a className="cards-piece-link" href={props.path} target="_blank" rel='noreferrer'>
                    <figure className="cards-piece-pic-wrap" data-category={props.label}>
                        <img src={props.src} alt="Game Dog" className="cards-piece-img" />
                    </figure>
                    <div className="cards-piece-info" >
                        <h5 className="cards-piece-text">{props.text}</h5>
                    </div>
                </a>
            </li>
        </div>
    );
}

export default CardPiece;