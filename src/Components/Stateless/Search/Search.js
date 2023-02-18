import { SelectInput } from "../../Input/Input";
import classes from "./Search.module.scss";
import { AiOutlineSearch as SearchIcon } from "react-icons/ai";
const Search = (props) => {
  const options = [
    { text: "Menu", value: "menu" },
    { text: "Games", value: "games" },
    { text: "Movie", value: "movies" },
  ];
  return (
    <div className={classes["Search"]}>
      <SelectInput options={options} />
      <input type={"search"} className={classes["Search__Input"]} />
      <button className={classes["Search__Button"]}>
        <SearchIcon className={classes["Search__Icon"]} />
      </button>
    </div>
  );
};

export default Search;
