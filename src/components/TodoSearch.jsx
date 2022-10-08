import './TodoSearch.css';

function TodoSearch({searchValue, setSearchValue}) {
    const onSearchValueChange = e => {
        setSearchValue(e.target.value);
    }

    return (
        <label htmlFor="search">
            <input 
                className='TodoSearch'
                placeholder='Cebolla'
                id='search'
                value={searchValue}
                onChange={onSearchValueChange}
            />
        </label>
    );
}

export { TodoSearch };
