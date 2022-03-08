import React from "react";
import Product from "./Product/Product";
import Rating from "./Rating";

function SecondBodySection() {
    return (
        <div>
            <section className="first-hightlight-wrapper">
                <div className="container">
                    <div className="title-wraper bold black">
                        iPhone 13 Pro
                    </div>
                    <div className="description-wrapper black">
                        Oh.So.Pro.
                    </div>
                    <div className="links-wrapper ">
                        <Product linkName="Learn more" linkUrl="/some link"
                            linkName1="Buy" linkUrl1="/some link" />
                    </div>
                </div>
            </section>
            <Rating/>
            <section className="second-hightlight-wrapper">
                {/* <a href='http://apple.com/iPhone/' className="body-link" > */}
                <div className="container">
                    <div className="title-wraper bold13 black iphone13">
                        iPhone 13
                    </div>
                    <div className="description-wrapper iphone13 ">
                        Your new Superpower.
                    </div>
                    <div className="links-wrapper iphone13">
                        <Product linkName="Learn more" linkUrl="/some link"
                            linkName1="Buy" linkUrl1="/some link" />

                    </div>
                </div>
                 
            </section>
           
        </div>
    )
}

export default SecondBodySection
