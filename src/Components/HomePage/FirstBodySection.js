import React from 'react'
import RedApple from "../../images/icons/logo__dcojfwkzna2q_small (2).png";


function FirstBodySection() {
    return (
        <div className="holiday-wrapper">
            <div class="welcome_info_wrapper">
                <div class="welcome_info sub-heading-links">
                    <p className=" title-wraper shop-heading " > Last chance to shop holiday gifts. Buy online and pick up at an Apple Store or choose two‑hour courier<sup>1</sup> or free delivery.<a href="/some link/"> Shop now</a></p>
                </div>
               
            </div>
            <section className="holiday-hightlight-wrapper">
                <div className="container">
                <div className="logo-wrapper-tv">
                        <img src={RedApple} alt="logolight" />
                </div>
                <div className="title-wraper bold black">
                        Let the holidays before everyone.
                </div>
                <div className="links-wrapper">
                    <ul>
                    <li><a href="/some link/">Shop gifts</a></li>
                    </ul>
                    </div>
                <a href='http://apple.com/' className="body-link" >
                <div className="row">
                         <div className="column-1">
                        {/* <img src={AirPod} alt="" /> */}
                </div>
                    <div class ="column-2">
                        {/* <img src={Watch} alt="" /> */}
                </div>
                     <div className="column-3">
                         {/* <img src={IpadMini} alt=""  /> */}
                </div>
             </div></a>
            </div>
            </section>
        </div>
    )
}

export default FirstBodySection
