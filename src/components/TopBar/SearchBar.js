import { SearchBarTop } from "./style";
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";


export default function SearchBar({ screen }) {

    const [search, setSearch] = useState('')

    function handleSearch(e) {
        setSearch(e.target.value)
        console.log(search)
    }

    return (

        <SearchBarTop screen={screen} onSubmit={(e) => e.preventDefault()}>
            <DebounceInput minLength={3} debounceTimeout={300} onChange={handleSearch}  />
            <button type='submit'>{<AiOutlineSearch />} </button>
        </SearchBarTop>
    );
}