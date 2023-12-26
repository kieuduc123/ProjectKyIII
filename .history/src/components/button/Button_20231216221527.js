import React from 'react';

const Button = ({type = "button",children,...rest}) => {
    return (
        <button type={type} className="btn  bg-secondary text-white d-block w-100 p-3"  {...rest}>{children}</button>
    );
};

export default Button;