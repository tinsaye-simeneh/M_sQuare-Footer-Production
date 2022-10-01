import React from "react";
import uixLogo from 

const Footer = () => {
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
      <div  className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-4 col-sm-2 offset-1">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="col-6 col-sm-5 text-center">
                        <h5>Our Address</h5>
                        <address>
                        121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                        <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope fa-lg"></i>: <a href="mailto: 
                        ">
                            </a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                            <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <p>© 2022 M sQuare. All Rights Reserved.</p>
                    </div>
                    <div className="col-md-6">
                        <p>Proudly Powered By <img src= </p>
                    </div>
                </div>
            </div>
        </div>
      </div>
  );
};

export default Footer;
