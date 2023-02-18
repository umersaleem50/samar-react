import { Component } from "react";
import classes from "./Input.module.scss";
export class SelectInput extends Component {
  constructor(props) {
    super(props);
    this.state = { isOptionToggle: false };
  }

  generateOptions(options) {
    return options.map((el, i) => {
      return (
        <option value={el.value} key={i}>
          {el.text}
        </option>
      );
    });
  }

  render() {
    return (
      <select className={classes["SelectInput"]}>
        {this.generateOptions(this.props.options)}
      </select>
    );
  }
}
