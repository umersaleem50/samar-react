import Feature from "../Feature/Feature";
import classes from "./Features.module.scss";
import { featuresArr } from "../../../dev-data/featuresArr";
const Features = (props) => {
  const generateFeatures = (features) => {
    return features.map((el, i) => {
      return (
        <Feature icon={el.icon} heading={el.heading} paragraph={el.paragraph} />
      );
    });
  };
  return (
    <div className={classes["Features"]}>{generateFeatures(featuresArr)}</div>
  );
};

export default Features;
