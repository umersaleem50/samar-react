import classes from "./Button.module.scss";
export const BtnFull = (props) => {
  return (
    <button
      className={[
        props.grey ? classes["btn--grey"] : "",
        classes["btn"],
        classes["btn-full"],
        props.className,
      ]
        .flat()
        .join(" ")}
      onClick={props.onClick}
    >
      {props.text || props.children}
    </button>
  );
};
