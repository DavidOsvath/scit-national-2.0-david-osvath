import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import piano from "./images/carouselPiano.jpg";
import football from "./images/carouselFootball.jpg";
import drawing from "./images/carouselPainting.jpg";
import puzzle from "./images/carouselPuzzle.jpg";
import games from "./images/carouselGame.jpg";

export default function SimpleSlider() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={piano} alt="Piano" />
          <h1>Playing the Piano</h1>
          <p>Music is one of the easiest ways to relax and disconnect from reality for a little while
               and sometimes I find myself playing the same few notes for hours on end before realising how time had passed. </p>
        </div>
        <div>
        <img src={football} alt="Football" />
        <h1>Football</h1>
        <p>Exercising and playing sports is a crucial component of someone's life, and is absolutely necessary for a healthy lifestyle.
            Luckily for me, I love playing football and football having been my job in my teenage years, the love for the game
            has stuck with me in my adult life, and to this day I play it quite regularly.
        </p>
        </div>
        <div>
        <img src={drawing} alt="Drawing" />
        <h1>Drawing</h1>
        <p>Just like music, or any form of art for that matter, drawing is a way for me to disconnect from reality and recharge for a while.
            I've always liked drawing, whether it's just doodling or a full painting session, I frequently sit down with an empty canvas and just 
            let the ideas drop on paper.
        </p>
        </div>
        <div>
        <img src={games} alt="Gaming" />
        <h1>Gaming</h1>
        <p>Video games have probably been my number one hobby all of my life, and with age this only became even more solidified.
            I can't say I've spent any day without at least an hour of playing a video game. From the heaviest, most demanding RPG
            to a simple mobile game like candy crush, one way or another I will find the time of day to play. At least for a tiny bit.
        </p>
        </div>
        <div>
        <img src={puzzle} alt="Puzzles" />
        <h1>Puzzles</h1>
        <p>I simply love solving puzzles. Puzzle solving is also crucial in one's health, as it keeps the mind busy, and always spinning the wheels.
            Puzzles can come in any shape or form, from traditional puzzles, to video game puzzles, to coding in JavaScript.
            I can honestly say I enjoy solving a good old fashioned puzzle just as much as figuring out an issue in an algorithm.
            Puzzles are awesome!
        </p>
        </div>
      </Slider>
    );
  }