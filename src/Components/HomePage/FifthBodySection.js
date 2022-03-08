import React from 'react'
import AppleCard from '../../images/icons/logo__dcojfwkzna2q_large (4).png'
import AppleNews from './NewsPage/AppleNews'
import AppleVideos from './NewsPage/AppleVideos'

function FifthBodySection() {
    return (
        <div>
            <section className="sixth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="title-wraper">
                                    Homepod mini
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="/some link/">Learn more</a></li>
                                        <li><a href="/some link/">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="logo-wrapper">
                                    <img src={AppleCard} alt="apple card"/>
                                </div>
                                <div className="description-wraper">
                                    Get up to 3% Daily Cash black
                                    with every purchase
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                        <li><a href="/some link/">Learn more</a></li>
                                        <li><a href="/some link/">Apply now</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {/* <section>
        <AppleNews />          
        </section> */}
            {/* <section>
                <AppleVideos />
            </section> */}
        </div>
    )
}

export default FifthBodySection
