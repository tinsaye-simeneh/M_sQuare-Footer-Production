import React, {useEffect, useState} from "react";
import uixLogo from "../assets/images/uix.png";
import Reaclate from "../assets/images/reaclate.png";
import { Collapse } from "bootstrap";
import "./style/Footer.css";

const Footer = () => {
if (window.innerWidth < 768) {
    var toggleState = false;
}
 else{
    toggleState = true;
}   
    var [qltoggle, setQltoggle] = useState(toggleState);
    var [ostoggle, setOstoggle] = useState(toggleState);
    var [ptoggle, setPtoggle] = useState(toggleState);
    useEffect(() => {
        var qlCollapse = document.getElementById('collapseTargetql')
        var bsCollapse = new Collapse(qlCollapse, {toggle: false})
        qltoggle ? bsCollapse.show() : bsCollapse.hide()

        var osCollapse = document.getElementById('collapseTargetos')
        var bsCollapse = new Collapse(osCollapse, {toggle: false})
        ostoggle ? bsCollapse.show() : bsCollapse.hide()

        var pCollapse = document.getElementById('collapseTargetp')
        var bsCollapse = new Collapse(pCollapse, {toggle: false})
        ptoggle ? bsCollapse.show() : bsCollapse.hide()
    })

  return (
    <div className="container">
      <div className="row">
        <div className="footer mt-5">
          <div className="col-md-12 text-center">
            <p
              className="text-dark"
              style={{ fontSize: "30px", fontWeight: "bold" }}
            >
              M sQuare Footer Component-1
            </p>
            <p
              style={{ color: "#FF9900", fontSize: "30px", fontWeight: "bold" }}
            >
              Desktop Size
            </p>
          </div>
        </div>
      </div>
      <div className="footer bg-dark text-white p-3 mt-5">
        <div className="row">
          <div className="col-md-2 col-sm-2 text-center">
          <button className="btn bg-dark border-0 text-white" onClick={() => setQltoggle(qltoggle => !qltoggle)}>
              <h4>  Quick Links </h4>
            </button>

            <div className="collapse" id="collapseTargetql">
            <ul className="list-unstyled">
              <li>
                <a href="#Home">Home</a>
              </li>
              <li>
                <a href="#About">About</a>
              </li>
              <li>
                <a href="#Account">Account</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
            </div>
          </div>
          <div className="col-md-3 col-sm-5 text-center">
          <button className="btn bg-dark border-0 text-white" onClick={() => setOstoggle(ostoggle => !ostoggle)}>
              <h4>  Our Services </h4>
            </button>

            <div className="collapse" id="collapseTargetos">
            <ul className="list-unstyled">
              <li>
                <a href="#RealTime">Real Time Messaging</a>
              </li>
              <li>
                <a href="#Unlimited">Unlimited Groups</a>
              </li>
              <li>
                <a href="#3accounts">3+ Accounts In one Device</a>
              </li>
              <li>
                <a
                  href="#LearnMore"
                  className="text-primary text-decoration-none"
                >
                  Learn More
                </a>
              </li>
            </ul>
            </div>
          </div>

          <div className="col-md-3 col-sm-5 text-center">
          <button className="btn bg-dark border-0 text-white" onClick={() => setPtoggle(ptoggle => !ptoggle)}>
              <h4>  Products </h4>
            </button>

            <div className="collapse" id="collapseTargetp">
              <ul className="list-unstyled">
                <li>
                  <a href="#RealTime">Android App</a>
                </li>
                <li>
                  <a href="#Unlimited">Ios App</a>
                </li>
                <li>
                  <a href="#3accounts">Web Version</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-4 col-sm-5 text-center">
            <p>Subscribe our Weekly Newsletter</p>
            <form className="w-100 bg-">
              <input
                className="border border-white rounded p-2 w-100 bg-dark text-white"
                placeholder="Enter your email"
                required
                type="email"
              />
              <button
                className="btn mt-2 border-0 w-50"
                style={{ backgroundColor: "#FF9900" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="bg-white" style={{ height: "3px" }} />

        <div className="row text-center">
          <div className="col-md-4">
            <p>© 2022 M sQuare. All Rights Reserved.</p>
          </div>
          <div className="col-md-6">
            <p>
              Proudly Powered By{" "}
              <a href="https://t.me/uixnature">
                <img
                  src={uixLogo}
                  alt="uix Nature logo"
                  className="mb-2 pe-1"
                />{" "}
              </a>
              <span> and </span>
              <a href="https://github.com/Reaclate">
                <img src={Reaclate} alt="reaclate logo" className="mb-2 ps-1" />
              </a>
            </p>
          </div>
          <div className="col-md-2 col-sm-4">
            <a
              className="btn btn-social-icon btn-twitter text-white"
              href="http://www.twitter.com"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              className="btn btn-social-icon btn-facebook text-white"
              href="http://www.facebook.com"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              className="btn btn-social-icon btn-linkedin text-white"
              href="http://www.linkedin.com/in/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              className="btn btn-social-icon btn-youtube text-white"
              href="http://www.youtube.com"
            >
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
