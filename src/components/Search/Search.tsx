import { useEffect, useState } from "react";
import { ISearch } from "./Search.interface";

const Search = (props: ISearch): JSX.Element => {
 
  const {handleSearch} = props;

  const [keyword, setKeyword] = useState("");
    
  useEffect(() => {
    handleSearch(keyword);
  },[keyword, handleSearch])
    
  return (
    <div className="search">
      <form className="search__form">
        <p className="search__label">Type to search</p>
        <input
          onChange={(e) => {
              setKeyword(e.target.value);
          } }
          placeholder="Search for characters"
          className="search__field"
          type="text"
          name="keyword"
          value={keyword}
          />
      </form>
    </div>
  );
};

export default Search;
