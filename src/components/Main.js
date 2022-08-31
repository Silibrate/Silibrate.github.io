import React from "react";
import anime from './anime';
import img from '../images/jucBG.jpg';
import juice1 from '../images/juice1.jpg';
import juice2 from '../images/juice2.jpg';
import juice3 from '../images/juice3.png';
import juice4 from '../images/juice4.jpg';
import juice5 from '../images/juice5.jpg';

const Main = () => {

  function animation() {
    anime({
      targets: '.square__item',
      translateX: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'x' }),
      translateY: anime.stagger(10, { grid: [14, 5], from: 'center', axis: 'y' }),
      rotateZ: anime.stagger([0, 90], { grid: [14, 5], from: 'center', axis: 'x' }),
      delay: anime.stagger(200, { grid: [14, 5], from: 'center' }),
      direction: 'alternate',
    });
  }
  return (
    <>
      <section className="excerpts">
        <div className='excerpts__item'>
          <p className="excerpts__houpe">ℍ𝕠𝕦𝕡𝕖</p>
          <div className="excerpts__item__backgraund"></div>
        </div>
        <div className='excerpts__item'>
          <div className="excerpts__info">
            <div className="excerpts__container"><h2 className="excerpts__title excerts__text">Who am I?</h2>
              <div className="excerpts__container">
                <p className="excerts__text">So outside of my misery, I think I'll find
                  A way of envisioning a better life
                  For the rest of us, the rest of us
                  There's hope for the rest of us, the rest of us</p>
                <div className="excerpts__container">
                  <p className="excerts__text">Havin' conversations 'bout my haste decisions, fuckin' sickenin'</p>
                </div>
              </div>
            </div>

            <div className="excerpts__container">
              <p className="excerts__text excerts__text_left">I’ll stop the world when I’m with you
                Nothin’ to hate, nothin’ to lose
                Put down your loaded guns and socialize with everyone
                I’ll stop the war when I’m with you
                Sometimes you say</p>
            </div>
            <div className="excerpts__container">
              <p className="excerts__text">Hello, from the dark side in,
                Does anybody here wanna be my friend?
                Want it all to end,
                Tell me when the fuck is it all gon' end?
                Voices in my head telling me I'm gonna end up dead.</p>
            </div>

          </div>
        </div>
        <div className='excerpts__item'></div>
      </section>

      <section className="juicewrld">
        <div className="juicewrld__container">
          <div className="juicewrld__info">
            <h2 className="juicewrld__title">Juice<span className="juicewrld__title_bottom">WRLD</span></h2>
            <div className="juicewrld__description">
              <h3 className="juicewrld__subtitle">My Life</h3>
              <p className="juicewrld__text"> Does anybody here wanna be my friend?
                Want it all to end,
                Tell me when the fuck is it all gon' end?
                Voices in my head telling me I'm gonna end up dead.</p>
            </div>
          </div>

          <div className="juicewrld__cards">
            <div className="cards">
              <div className="cards__backgraund"></div>
              <div className="card__item">
                <img className="card__img" src={juice1} alt="Avatar"></img>
                <h3 className="card__title">RRuuun</h3>
                <p className="card__text">
                  Does anybody here wanna be my friend?
                  Want it all to end,
                  Tell me when the fuck is it all gon' end?
                  Voices in my head telling me I'm gonna end up dead.</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice2} alt="Avatar"></img>
                <h3 className="card__title">RRuuun</h3>
                <p className="card__text">
                  Does anybody here wanna be my friend?
                  Want it all to end,
                  Tell me when the fuck is it all gon' end?
                  Voices in my head telling me I'm gonna end up dead.</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice3} alt="Avatar"></img>
                <h3 className="card__title">RRuuun</h3>
                <p className="card__text">
                  Does anybody here wanna be my friend?
                  Want it all to end,
                  Tell me when the fuck is it all gon' end?
                  Voices in my head telling me I'm gonna end up dead.</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice4} alt="Avatar"></img>
                <h3 className="card__title">RRuuun</h3>
                <p className="card__text">
                  Does anybody here wanna be my friend?
                  Want it all to end,
                  Tell me when the fuck is it all gon' end?
                  Voices in my head telling me I'm gonna end up dead.</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice5} alt="Avatar"></img>
                <h3 className="card__title">RRuuun</h3>
                <p className="card__text">
                  Does anybody here wanna be my friend?
                  Want it all to end,
                  Tell me when the fuck is it all gon' end?
                  Voices in my head telling me I'm gonna end up dead.</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice1} alt="Avatar"></img>
                <h3 className="card__title">RRuuun</h3>
                <p className="card__text">
                  Does anybody here wanna be my friend?
                  Want it all to end,
                  Tell me when the fuck is it all gon' end?
                  Voices in my head telling me I'm gonna end up dead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="square">
        <div onClick={animation} class="square__container">
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
          <div class="square__item"></div>
        </div>
      </section>
    </>
  );
}

export default Main;