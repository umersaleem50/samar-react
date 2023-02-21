import classes from "./Button.module.scss";
export const BtnFull = (props) => {
  return (
    <button
      className={[
        props.grey ? classes["btn--grey"] : "",
        props.outline ? classes["btn--outline"] : "",
        classes["btn"],
        classes["btn-full"],
        props.className,
      ]
        .flat()
        .join(" ")}
      onClick={props.onClick}
      style={props.style}
    >
      {props.text || props.children}
    </button>
  );
};
