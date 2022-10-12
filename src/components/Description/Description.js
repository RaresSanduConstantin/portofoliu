import React, { Component } from "react";
import "./Description.css";
import ME from "../../assets/me.png";

export class Description extends Component {
  render() {
    return (
      <div className="description">
        <div className="imagine">
          <img src={ME} alt="Profil" className="img-wd" />
        </div>
        <div className="text">
          <h1>About Me</h1>
          <p>
            From December 2019 I started learning web development, HTML, CSS,
            JavaScript, NodeJs, PostgreSQL, etc. out of pure passion and desire
            to work in this field. I am still at the beginning of my career, but
            I aim to learn something new every day. If you want to see my
            results please access my work!
          </p>

          <p>
          A proactive team player with excellent adaptability to dynamic environments, looking for a rewarding professional development opportunity.
          Motivation and encouragement to deliver results are crucial qualities that I exhibit. I am self-driven and self-reliant, collaborative and have good interpersonal skills.
          </p>
          <a
            className="download"
            target="_blank"
            href="https://github.com/RaresSanduConstantin/portofoliu/raw/master/src/assets/PDF/Rares_Sandu_CV.pdf"
            rel="noopener noreferrer"
            download
          >
            <button className="example_d">Download My CV</button>
          </a>
        </div>
      </div>
    );
  }
}

export default Description;
