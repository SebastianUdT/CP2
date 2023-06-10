import {useState} from "react";
import {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchIconContainer,
} from "./searchBar.styles";

export default function SearchBar(props) {
  const {onSearch} = props;

  const [id, setId] = useState("");

  function changeHandler(e) {
    e.preventDefault();
    let input = e.target.value;

    setId(input);
  }

  return (
    <SearchContainer>
      <SearchInput type="search" value={id} onChange={changeHandler} />
      <SearchIconContainer>
        <SearchIcon onClick={() => onSearch(id)} />
      </SearchIconContainer>
    </SearchContainer>
  );
}
