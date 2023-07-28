import React, { memo, useState, useRef, useContext, useCallback } from 'react';
import { ReactComponent as Searchicon } from "../../assets/svg/Search icon.svg";
import "./Search.css";
import { DataContext } from '../../../context/DataContext';
import DropDownSuggestion from './DropDownSuggestion';



const Search = () => {
    const [showD, setShowD] = useState(false);
    const show = useContext(DataContext);
    const dropDownData = show.topAlbumData;
    const searched = useRef("");

    const handleSearching = useCallback(() => {
        const searchText = searched?.current?.value.toLowerCase();
        const filteredData = dropDownData.filter((item) => {
            const title = item?.title?.toLowerCase();
            return title.includes(searchText);
        });
        show.setShowDropDown(filteredData);
        setShowD(searchText.length > 0);

    }, [dropDownData, show])

    const handleSearch = useCallback((e) => {
        e.preventDefault();
        const searchText = searched?.current?.value.toLowerCase();
        if (searched?.current?.value === "") return;

        const filteredData = dropDownData.filter((item) => {
            const title = item?.title?.toLowerCase();
            return title.includes(searchText);
        });
        show.setShowDropDown(filteredData);
        searched.current.value ="";
        setShowD(searchText.length > 0);
    }, [dropDownData, show])


    return (
        <>
            <div className='search-main' >
                <form className='search-parent'>
                    <div className='searchWithDropdown'>
                        <input type="text" placeholder='Search an album of your choice' ref={searched} className='input' onChange={handleSearching} />
                        {showD && <div className='dropdown-main'><DropDownSuggestion searched={searched}/></div>}
                    </div>
                    <button className='search-btn' onClick={(e) => handleSearch(e)}><Searchicon /></button>
                </form>
            </div>
        </>
    )
}

export default memo(Search)