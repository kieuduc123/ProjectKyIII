import React from 'react';
import { NavLink } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section class="login-main-wrapper">
      <div class="main-container">
          <div class="login-process">
              <div class="login-main-container">
                  <div class="thankyou-wrapper">
                      <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                        <p>for contacting us, we will get in touch with you soon... </p>
                        <NavLink to="/">Back to home</NavLink>
                        <div class="clr"></div>
                    </div>
                    <div class="clr"></div>
                </div>
            </div>
            <div class="clr"></div>
        </div>
    </section>
    );
};

export default ThankYou;