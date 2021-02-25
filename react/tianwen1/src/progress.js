import React from "react";
import "./css/app.css";
import PropTypes from "prop-types";
class Progress extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log(this.downdiv);
  }

  render() {
    let { percent } = this.props;
    let wid = (percent / 100) * 150 + "px";
    let upcolor = percent >= 90 ? "warncolor" : "normalcolor";
    return (
      <>
        <div className="_progress_">
          <div className="common" ref={(e) => (this.downdiv = e)}></div>
          <div className={`common up ${upcolor}`} style={{ width: wid }}></div>
        </div>
      </>
    );
  }
}
Progress.propTypes = {
  percent: PropTypes.number.isRequired,
};
export default Progress;
