import { Component } from "react";
import { BtnFull } from "../../Button/Button";
import {
  HEADING2,
  Paragraph,
  Spaced_Paragraph,
} from "../../Typography/Typography";
import classes from "./Hero.module.scss";

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = { currentSlide: 0 };
  }
  render() {
    return (
      <div className={classes["Hero"]}>
        <div className={classes["Hero__left"]}>
          <div className={classes["Hero__left__detail"]}>
            <Spaced_Paragraph bold>BACK TO 4AG ESPORTS</Spaced_Paragraph>
            <HEADING2 style={{ lineHeight: "-20rem" }}>4AG ESPORTS</HEADING2>
            <HEADING2
              style={{ fontWeight: "600" }}
              text={"for electronic sport"}
            />

            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
            </Paragraph>

            <div className={classes["Hero__left__buttons"]}>
              <BtnFull style={{ marginRight: "2rem" }}>Register Team</BtnFull>
              <BtnFull outline>Select our game</BtnFull>
            </div>
          </div>
          <div className={classes["Hero__left__image"]}>
            <img src="/assets/game.png" alt="game" />
          </div>
        </div>
        <div className={classes["Hero__right"]}>Right</div>
      </div>
    );
  }
}

export default Hero;
