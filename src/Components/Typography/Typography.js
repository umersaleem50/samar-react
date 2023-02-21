import classes from "./Typography.module.scss";

const styleHandler = (props) => {
  let customStyle = {};
  if (props.bold) {
    customStyle.fontWeight = props.bold === "" ? "bold" : props.bold;
  }
  if (props.color) {
    customStyle.color = props.color;
  }

  return customStyle;
};

export const Spaced_Paragraph = (props) => {
  return (
    <h6
      className={classes["Spaced_Paragraph"]}
      style={{ ...props.style, ...styleHandler(props) }}
    >
      {props.text || props.children}
    </h6>
  );
};

export const Heading_2 = (props) => {
  return (
    <h2
      className={classes["Heading_2"]}
      style={{ ...props.style, ...styleHandler(props) }}
    >
      {props.text || props.children}
    </h2>
  );
};

export const Paragraph = (props) => {
  return (
    <p
      className={classes["Paragraph"]}
      style={{ ...props.style, ...styleHandler(props) }}
    >
      {props.text || props.children}
    </p>
  );
};
