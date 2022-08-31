import React from "react";
import anime from './anime';
import juice1 from '../images/juice1.png';
import juice2 from '../images/juice2.png';
import juice3 from '../images/juice3.png';
import juice4 from '../images/juice4.png';
import juice5 from '../images/juice5.png';

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
              <p className="juicewrld__text"> Part of the reason why I kept ‘Juice’ in my name wasn’t only for Tupac. It was for three rappers, actually: Tupac, Soulja Boy had an old mixtape called Juice, and MC Juice.</p>
            </div>
          </div>

          <div className="juicewrld__cards">
            <div className="cards">
              <div className="cards__backgraund"></div>
              <div className="card__item">
                <img className="card__img" src={juice1} alt="Avatar"></img>
                <h3 className="card__title">I'm just</h3>
                <p className="card__text">
                  I'm in the cut getting green like a farmer
                  I put the gun to your head like a barber
                  I fuck in your bitch in a room in Ramada
                  Not at the W, save me some drama
                  I'm taking Ws, no I ain't not losing</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice2} alt="Avatar"></img>
                <h3 className="card__title">Robbery</h3>
                <p className="card__text">
                  I can't reverse it
                  It was a gift and a curse
                  And now I'm drinkin' too much, so I'ma talk with a slur
                  Last time I saw you, it ended in a blur
                  I woke up in a hearse</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice3} alt="Avatar"></img>
                <h3 className="card__title">Stay High</h3>
                <p className="card__text">
                  Hate it when they play both sides
                  Too low in my life
                  Gotta stay high, gotta stay high
                  Too low in my life, yeah, I gotta stay
                  Hate it when they play both sides</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice4} alt="Avatar"></img>
                <h3 className="card__title">Conversations</h3>
                <p className="card__text">
                  The devil hit my phone, he wanna talk
                  But Im not really up for conversations
                  I can have my cake and eat it, too
                  I just gotta make a reservation
                  Chillin in my head, but it’s hot</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice5} alt="Avatar"></img>
                <h3 className="card__title">No Coaster</h3>
                <p className="card__text">
                  I got dirty soda with no coaster
                  She do coke, no Coca-Cola
                  Where she from? She say, "The coast"
                  She get wetter than a boat
                  That lil' ho gon' do the most</p>
              </div>
              <div className="card__item">
                <img className="card__img" src={juice1} alt="Avatar"></img>
                <h3 className="card__title">Man Of The Year
                </h3>
                <p className="card__text">
                  Man of the year, still got problems
                  Lookin’ in the mirror, you look awful
                  Talkin’ to myself, do it too often
                  JK, Juice WRLD, you’re so awesome</p>
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