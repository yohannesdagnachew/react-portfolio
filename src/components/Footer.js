import React from "react";
import GithubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/yohannesdagnachew">
          <GithubIcon />
        </a>
        <a href="https://twitter.com/Jod99712013">
          <TwitterIcon />
        </a>
        <a href="https://ne-np.facebook.com/jeo.dagnachew/">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com/in/yohannesdagnachew/">
          {" "}
          <LinkedInIcon />
        </a>
      </div>
      <p>yohannesdagnachew2020@gmail.com</p>
    </div>
  );
}

export default Footer;
