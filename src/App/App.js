import React, {useState} from 'react';
import './App.css';
import {UserList} from "../components/UserList/UserList"
import Search from "../components/Search/Search";


const App = () => {
    const [search, setSearch] = useState('');

    const onSearch = (e) => {
        setSearch(e.target.value);
    }

    return (
        <div className="App">
            <Search onChange={onSearch}/>
            <UserList search={search}/>
        </div>
    );
}

export default App;