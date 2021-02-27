import React from "react";
import "./css/app.css";
import qr from "./img/qr.png";
import sao from "./img/sao.png";
import PropTypes from "prop-types";
class Qr extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showTipPic: true,
    };
  }
  componentDidMount() {
    console.log(this.downdiv);
  }

  enterqr = () => {
    console.log("enterqr");
    this.setState({
      showTipPic: true,
    });
  };
  leaveqr = () => {
    console.log("leaveqr");
    this.setState({
      showTipPic: false,
    });
  };
  render() {
   
    let cl = this.state.showTipPic ? "show" : "hide";

    return (
      <>
        <div className="_qr_">
          <img
            src={qr}
            className="qrcode"
            onMouseEnter={this.enterqr}
            onMouseLeave={this.leaveqr}
            alt=""
          />
          <img src={sao} className={`tip ${cl}`} alt="" />
        </div>
      </>
    );
  }
}
// Qr.propTypes = {
//   percent: PropTypes.number.isRequired,
// };
export default Qr;
