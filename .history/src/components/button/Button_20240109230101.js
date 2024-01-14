import React from 'react';

const Button = ({type = "button",children,...rest}) => {
    return (
        <button type={type} className="call-btn button gradient-bg text-center  d-block w-25 h-25 border-none"  {...rest}>{children}</button>
    );
};

export default Button;