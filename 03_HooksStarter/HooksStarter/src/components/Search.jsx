import { useState } from "react";
import SearchBar from "./SearchBar";

function Search() {
  const [usersSearch, setUsersSearch] = useState("");

  return <div>
    <SearchBar
        searchValue={usersSearch}
        searchValueFunction={setUsersSearch}
      />
     <p>You searched for {usersSearch}</p>
  </div>;
}

export default Search;