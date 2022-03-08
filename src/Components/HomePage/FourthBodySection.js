import React from 'react'
import TvLogo from '../../images/icons/logo_dickinson_title__exfqr7iiyc8y_large.png'
import Logolight from '../../images/icons/logo_light__cfvl40z2nzau_large.png'
import Watchs from '../../images/icons/tile_watch_logo_lte__h7snssb7mqq2_small.png'
import Product from './Product/Product'


function FourthBodySection() {
    return (
        <div>
            
            <section className="fifth-heghlight-wrapper">
                <div className="container-fluid">
                    <div className="row">
                        <div className="left-side-wrapper col-sm-12 col-md-6">
                            <div className="left-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper-tv">
                                        <img src={Logolight} alt="logolight"/>
                                    </div>
                                </div>

                                <div className="tvshow-logo-wraper">
                                    <img src={TvLogo} alt="tv-logo"/>
                                </div>

                                <div className="watch-more-wrapper">
                                    <a href="/some link/">Stream now</a>
                                </div>
                            </div>
                        </div>
                        <div className="right-side-wrapper col-sm-12 col-md-6">
                            <div className="right-side-container">
                                <div className="top-logo-wrapper">
                                    <div className="logo-wrapper">
                                        <img src={Watchs} alt="watch-logo"/>
                                    </div>
                                </div>
                                <div className="description-wraper">
                                    With the Always-On Retina display.<br/>
                                    You’ve never seen a watch like this.
                                </div>
                                <div className="links-wrapper">
                                    <Product linkUrl="/some link/" linkName="Learn More"
                                    linkUrl1='/some link/'linkName1="Buy" />
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default FourthBodySection
