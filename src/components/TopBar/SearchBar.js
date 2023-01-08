import { SearchBarTop } from "./style";
import { AiOutlineSearch } from 'react-icons/ai'
import { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import { getSearchUsers } from "../../service/Service";

export default function SearchBar({ screen, user }) {

    const [search, setSearch] = useState('')
    const [usersGot, setUsersGot] = useState([])

    function handleSearch(e) {
        setSearch(e.target.value)

        getSearchUsers('search-users', search).then( e =>{
            setUsersGot(e.data)
        }).catch( e => console.log(e))
    }

    return (

        <SearchBarTop screen={screen} onSubmit={(e) => e.preventDefault()}>
            <footer>
                <DebounceInput placeholder='Encontrar pessoas' minLength={3} debounceTimeout={300} onChange={handleSearch} list="users" />
                <button type='submit'>{<AiOutlineSearch />} </button>
            </footer>
            <ul>
                
            </ul>
        </SearchBarTop>
    );
}