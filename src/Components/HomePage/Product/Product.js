import React, { Component } from 'react'

class Product extends Component {
    render() {
        return (
            <div>
                
                <ul>
                    <li><a href={this.props.linkUrl}>{this.props.linkName}</a></li>
                    <li><a href={this.props.linkUrl1}>{this.props.linkName1}</a></li></ul>
            </div>
        );
    }
}
export default Product