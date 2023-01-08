import { SearchBarTop } from "./style";
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from "react";


export default function SearchBar({screen}){

    const [search, setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
      }

    return(

        <SearchBarTop screen={screen} onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Procurar pessoas" value={search} onChange={handleSearch} id={'search'} />
          <button type='submit'>{<AiOutlineSearch/>} </button>
        </SearchBarTop>
    );
}