import { BtnFull } from "../../Button/Button";
import Search from "../Search/Search";
import classes from "./Navbar.module.scss";
const Navbar = (props) => {
  const showAlert = (name) => {
    alert(`Hello ${name}`);
  };
  return (
    <nav className={classes["Navbar"]}>
      <img
        src="/assets/logo.png"
        alt="logo"
        className={classes["Navbar__logo"]}
      />
      <div className={classes["Navbar__menu"]}>
        <Search />
      </div>
      <div className={classes["Navbar__buttons"]}>
        <BtnFull
          onClick={() => showAlert("Samar")}
          grey
          className={[classes["mg-right"]]}
        >
          Login
        </BtnFull>
        <BtnFull text="Signup" />
      </div>
    </nav>
  );
};

export default Navbar;
