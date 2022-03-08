// import React, { Component } from "react";
// class HeaderLink extends Component {
//     render() {
//         return (
//             <li className="nav-item"><a className="nav-link js-scroll-trigger" href={this.props.linkurl}>{this.props.linkname}</a></li>
            
//     );
//     }
//     }

// export default HeaderLink

import { Outlet, Link } from "react-router-dom";
function HeaderLink({ LinkName, LinkUrl }) {
    return (
        <li className="nav-item ">
            <Link to={LinkUrl} className="nav-link js-scroll-trigger" >{LinkName}</Link>
            <Outlet/>
        </li>
    );
}

export default HeaderLink;

