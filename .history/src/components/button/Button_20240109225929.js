import React from 'react';

const Button = ({type = "button",children,...rest}) => {
    return (
        <button type={type} className="call-btn button gradient-bg"  {...rest}>{children}</button>
    );
};

export default Button;