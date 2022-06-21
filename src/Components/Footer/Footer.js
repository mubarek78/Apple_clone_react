import React from 'react'
import FooterLink from "FooterLinks/FooterLink"
import flag from '../../images/icons/flag.png'
import Custom from './Custom'

function Footer() {
   
    return (
        <div>
            <footer className="footer-wrapper">
                <div className="container">
                    <div className="upper-text-container">
                        <p>To access and use all the features of Apple Card, you must add Apple Card to Wallet on an iPhone or iPad with the latest
				version of iOS or iPadOS. Update to the latest version by going to Settings - General- Software Update. Tap Download
                            and Install.</p>
                        <p>Available for qualifying applicants in the United States.</p>
                        <p>Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.</p>
                        <p>Learn more about how Apple Card applications are evaluated at support.apple.com/kb/HT209218.</p>
                        <p>Apple TV+ is $4.99/month after free trial. One subscription per Family Sharing group. Offer good for 3 months after
                            eligible device activation. Plan automatically renews until cancelled. Restrictions and other terms apply.</p>
                    </div>
                    <div className="footer-links-wrapper  row">
                        <div className="links-wrapper-1 col-sm-12 col-md">
                            <h3>Shop and Learn</h3>
                            <ul>
                                <FooterLink linkUrl="/some link" linkName="Store" />
                                <FooterLink linkUrl="/some link" linkName="Mac" />
                                <FooterLink linkUrl="/some link" linkName="iPad" />
                                <FooterLink linkUrl="/some link" linkName="iPhone" />
                                <FooterLink linkUrl="/some link" linkName="Watch" />
                                <FooterLink linkUrl="/some link" linkName="TV & Home" />
                                <FooterLink linkUrl="/some link" linkName="iPode touch" />
                                <FooterLink linkUrl="/some link" linkName="Music" />
                                <FooterLink linkUrl="/some link" linkName="AirPods" />
                                <FooterLink linkUrl="/some link" linkName="HomePod" />
                                <FooterLink linkUrl="/some link" linkName="AirTag" />
                                <FooterLink linkUrl="/some link" linkName="Accessories" />
                                <FooterLink linkUrl="/some link" linkName="Gift Cards" />
                            </ul>
                        </div>
                        <div className="links-wrapper-2 col-sm-12 col-md">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="/some link/">Apple Music</a></li>
                                <li><a href="/some link/">Apple News+</a></li>
                                <li><a href="/some link/">Apple TV+</a></li>
                                <li><a href="/some link/">Apple Fitness+</a></li>
                                <li><a href="/some link/">Apple Arcade</a></li>
                                <li><a href="/some link/">Apple Card</a></li>
                                <li><a href="/some link/">iCloud</a></li>
                                <li><a href="/some link/">Apple One</a></li>
                                <li><a href="/some link/">Apple Card</a></li>
                                <li><a href="/some link/">Apple Books</a></li>
                                <li><a href="/some link/">Apple Podcasts</a></li>
                                <li><a href="/some link/">Apple Store</a></li>
                            </ul>
                            <h3>Account</h3>
                            <ul>
                                <li><a href="/some link/">Manage Your Apple ID</a></li>
                                <li><a href="/some link/">Apple Store Account</a></li>
                                <li><a href="/some link/">iCloud.com</a></li>
                            </ul>
                        </div>
                        <div className="links-wrapper-3 col-sm-12 col-md">
                            <h3>Apple Store</h3>
                            <ul>
                                <li><a href="/some link/">Find a Store</a></li>
                                <li><a href="/some link/">Genius Bar</a></li>
                                <li><a href="/some link/">Today at Apple</a></li>
                                <li><a href="/some link/">Apple Camp</a></li>
                                <li><a href="/some link/">Apple Store App</a></li>
                                <li><a href="/some link/">Refurbished and Clearance</a></li>
                                <li><a href="/some link/">Financing</a></li>
                                <li><a href="/some link/">Apple Trade In</a></li>
                                <li><a href="/some link/">Order Status</a></li>
                                <li><a href="/some link/">Shopping Help</a></li>
                            </ul>
                        </div>
                        <div className="links-wrapper-4 col-sm-12 col-md">
                            <h3>For Business</h3>
                            <ul>
                                <li><a href="/some link/">Apple and Business</a></li>
                                <li><a href="/some link/">Shop for Business</a></li>
                            </ul>
                            <h3>For Education</h3>
                            <ul>
                                <li><a href="/some link/">Apple and Education</a></li>
                                <li><a href="/some link/">Shop for K-12</a></li>
                                <li><a href="/some link/">Shop for College</a></li>
                            </ul>
                            <h3>For Healthcare</h3>
                            <ul>
                                <li><a href="/some link/">Apple in HealthcCare</a></li>
                                <li><a href="/some link/">Health on Apple Watch</a></li>
                                <li><a href="/some link/">Health Records on iphone</a></li>
                            </ul>
                            <h3>For Government</h3>
                            <ul>
                                <li><a href="/some link/">Shope for Goverment</a></li>
                                <li><a href="/some link/">Shope for Veterans and Military</a></li>
                            </ul>
                        </div>
                        <div className="links-wrapper-5 col-sm-12 col-md">
                            <h3>Apple Values</h3>
                            <ul>
                                <li><a href="/some link/">Accessibility</a></li>
                                <li><a href="/some link/">Education</a></li>
                                <li><a href="/some link/">Environment</a></li>
                                <li><a href="/some link/">Inclusion and Diversity</a></li>
                                <li><a href="/some link/">Privacy</a></li>
                                <li><a href="/some link/">racial Equity and Justice</a></li>
                                <li><a href="/some link/">Supplier Responsibility</a></li>
                            </ul>
                            <h3>About Apple</h3>
                            <ul>
                                <li><a href="/some link/">Find a Store</a></li>
                                <li><a href="/some link/">Genius Bar</a></li>
                                <li><a href="/some link/">Today at Apple</a></li>
                                <li><a href="/some link/">Apple Camp</a></li>
                                <li><a href="/some link/">Field Trip</a></li>
                                <li><a href="/some link/">Apple Store App</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="my-apple-wrapper">
                        More ways to shop: <a href="/some link/">Find an Apple Store</a> or <a href="/some link/">other retailer</a> near you. Or call 1-800-MY-APPLE.
                    </div>
                    
                        <div className="copyright-wrapper row">
                            <div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
                                Copyright &copy; 2020 Apple Inc. All rights reserved.
                            </div>
                            
                         <div className="footer-links-terms footer_bottom_link footer_links col-sm-12 order-3 col-lg-6 order-lg-2">
                            <ul>
                            <FooterLink linkUrl="/some link" linkName="Privacy Policy" />
                            <FooterLink linkUrl="/some link" linkName="Terms of use" />
                            <FooterLink linkUrl="/some link" linkName="Sale and refunds" />
                            <FooterLink linkUrl="/some link" linkName="Lagal" />
                             <FooterLink linkUrl="/some link" linkName="Site map" />
                            </ul>
                        </div> 
                        
                        <div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                            <div className="flag-wrapper"><img src={flag} /></div>
                            <div className="footer-country-name">United States</div>
                        </div> 
                        
                    </div>
                    </div>
            </footer>

        

        </div>
    )
}

export default Footer
