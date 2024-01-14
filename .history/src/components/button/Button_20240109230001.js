import React from 'react';

const Button = ({type = "button",children,...rest}) => {
    return (
        <button type={type} className="call-btn button gradient-bg p-4 d-block w-100 p-3 border-none"  {...rest}>{children}</button>
    );
};

export default Button;