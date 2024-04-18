import s from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/filtersSlice";

function SearchBox() {
  const dispatch = useDispatch();
  const search = useSelector(selectNameFilter);

  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor="searchInput" className={s.label}>
        <span>find contacts by name</span>
        <input
          type="text"
          value={search}
          id="searchInput"
          onChange={handleSearch}
        />
      </label>
    </div>
  );
}

export default SearchBox;
