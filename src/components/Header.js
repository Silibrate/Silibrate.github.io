import React from "react"
import headerFon from '../images/headerFon.jpg'
import headerFon2 from '../images/fon2.jpg'

const Header = () => {
  return (
    <div className="header">
      <img className="header__backgraund" src={headerFon2} alt='Фон' />
      <p data-text="&nbsp;$iLib℟a†e$&nbsp;" className="header__title">&nbsp;$iLib℟a†e$&nbsp;</p>
    </div>
  );
}

export default Header;