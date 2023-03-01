import { HEADING3, Paragraph } from "../../Typography/Typography";
import classes from "./Feature.module.scss";

const Feature = (props) => {
  return (
    <div className={classes["Feature"]}>
      <div className={classes["Feature__icon"]}>
        <img src={`/assets/icons/${props.icon}`} alt={props.icon} />
      </div>
      <div className={classes["Feature__details"]}>
        <HEADING3 style={{ marginBottom: "1rem" }}>{props.heading}</HEADING3>
        <Paragraph>{props.paragraph}</Paragraph>
      </div>
    </div>
  );
};

export default Feature;
