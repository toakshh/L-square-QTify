import React, { useContext } from 'react'
import { DataContext } from '../../../context/DataContext';
import './DropDownSuggestion.css'
import { Link } from 'react-router-dom';

const DropDownSuggestion = ({searched}) => {
    const title = useContext(DataContext);
    const data = title.showDropDown
    // console.log("data ", data)
    const handleDropDown= ()=>{
        //searched.current.value= "";
        title.setShowDropDown([])
    }
    return (
        <>
            {data.map(item => {
                return (
                    <div key={item.id} className='suggestion-parent'>
                            <Link className='link' to={`/album/${item.slug}`} onClick={handleDropDown}>
                                <div className='suggestion-container'>
                                    <div className='img-container'>
                                        <img src={item.image} alt="img cover" />
                                    </div>
                                    <div className='text-content'>
                                        <div>
                                            <h5>{item.title}</h5>
                                        </div>
                                        <div>
                                            <p>{item.follows} Follows</p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                    </div>)
            })}
        </>
        
    )
}

export default DropDownSuggestion
