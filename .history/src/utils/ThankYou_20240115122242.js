import React from 'react';
import { NavLink } from 'react-router-dom';

const ThankYou = () => {
    return (
        <section class="login-main-wrapper">
        <div class="main-container product">
            <div class="login-process">
                <div class="login-main-container">
                    <div class="thankyou-wrapper">
                        <h1><img src="http://montco.happeningmag.com/wp-content/uploads/2014/11/thankyou.png" alt="thanks" /></h1>
                          <p>Thank you for applying to our Company. We will review your application as soon as possible. If within 15 days of submitting your application, there is no email sent to you. It will be considered that your profile does not qualified or our company has enough human resources for the position."" </p>
                          <NavLink to="/" className=" button gradient-bg ">Back to home</NavLink>
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