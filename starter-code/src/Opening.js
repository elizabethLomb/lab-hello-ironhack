import React from "react";
import IntroText from "./IntroText";
import IntroParagraph from "./IntroParagraph";
import IntroButton from "./IntroButton";

const Opening = () => (
  <div className="Opening jumbotron">
    <div className="container">
      <div className="row">
        <div className="col-12"><IntroText /></div>
        <div className="col-12"><IntroParagraph /></div>
        <div className="col-12"><IntroButton /></div>
      </div>
    </div>
  </div>
)

export default Opening;