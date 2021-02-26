import React from "react";
import { Link } from "react-router-dom";
import "../styles/Button.css";

const STYLES = ['btn--primary', 'btn--outline', 'btn--main--outline', 'btn--accounts--outline', 'btn--accounts--close'];

const SIZES = ['btn--small', 'btn--main--small', 'btn--medium', 'btn--main--medium', 'btn--large', 'btn--main--large', 'btn--accounts--large'];

export const Button = ({
  link,
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to={link} className='btn-mobile' >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
