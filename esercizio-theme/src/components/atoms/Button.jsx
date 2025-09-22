import React from "react";

function Button({ children, onClick, style, type = "button" }) {
  return (
    <div>
      <button type={type} onClick={onClick} style={style}>
        {children}
      </button>
    </div>
  );
}

export default Button;
