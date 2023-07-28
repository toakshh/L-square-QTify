import { createContext,useState,useEffect } from 'react';
import useApiCall from '../hooks/useApiCall';
import apiUrl from '../components/assets/api/index';

const DataContext = createContext();// creates the context *required

// this is an additonal datacenter that we want to export *opitonal
const DataContextProvider= ({children})=>{
    //using custom hook to fetch data of top albums
    const [topAlbumData] = useApiCall(apiUrl.top);      
    // console.log("useApiCall", topAlbumData)
    useEffect(() => {
        // Update showDropDown once the topAlbumData is fetched
        setShowDropDown(topAlbumData || []);
      }, [topAlbumData]);
    // can create extra object as well and store that data or pass it to apiData and can extract that
    const [showDropDown, setShowDropDown] = useState([]);
    // console.log("showDropDown:", showDropDown);

    //storing data in apiData object
    const apiData={topAlbumData,showDropDown,setShowDropDown} 

    //passing the stored data
    return <DataContext.Provider value={apiData}>{children}</DataContext.Provider> 
}


export {DataContext, DataContextProvider}