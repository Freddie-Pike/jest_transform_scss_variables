import React from "react";
import PropTypes from "prop-types";
import scssVariables from '../../_scss_variables.scss';

function Button({ children, onClick = () => {}, bgColor = scssVariables.buttonBgColor, ...props }) {
  return (
    <button onClick={onClick} style={{ backgroundColor: bgColor }} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func.isRequired,
  bgColor: PropTypes.string,
};

export default Button;
