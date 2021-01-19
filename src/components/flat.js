import React, { Component } from 'react'
import "./flat.css";



class Flat extends Component {
  render() {
    const title = this.props.flat.price
      + this.props.flat.priceCurrency
      + " - " + this.props.flat.name;

    // Template Literal ES6
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`
    }

    return (
      <div className="flat">
        <div className="flat-picture" style={style}></div>
        <div className="flat-title">
          {title}
        </div>
      </div>
    );
  }
}

export default Flat;