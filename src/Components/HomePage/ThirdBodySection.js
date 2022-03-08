import React from 'react'
import Product from "./Product/Product"
function ThirdBodySection() {
    return (
        <div>
            <section className="fourth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="title-wraper">
                                    MacBook Pro
                                </div>
                                <div className="description-wraper">
                                    SuperCharged for pros.
                                </div>
                                <div className="links-wrapper">
                                    <ul>
                                     <Product linkName="Learn more" linkUrl="https://www.amazon.com/"
                                        
                                       linkName1="Buy" linkUrl1="https://www.apple.com/"/>

                                        {/* <li><a href="/some link/">Buy</a></li> */}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="title-wraper airpod">
                                    AirPods
                                </div>
                                <div className="description-wraper airpod">
                                    All-new with Spatial Audio.
                                </div>
                                <div className="links-wrapper airpod">
                                    <ul>
                                        <li><a href="/some link/">Learn more</a></li>
                                        <li><a href="/some link/">Buy</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ThirdBodySection
