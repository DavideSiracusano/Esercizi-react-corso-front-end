import React from "react";

function Button({ type, className, children }) {
  return (
    <div>
      <button type={type} className={className}>
        {children}
      </button>
    </div>
  );
}

export default Button;
