import {useState, useEffect} from 'react'
import axios from 'axios';


const useApiCall = (URL,opitons={}) => {
    const [apiData, setApiData] = useState([]); //list of items from top albums   
    const [loading,setLoading] = useState(false); //show loading logo conditionally
    const [error, setError] = useState(null);

    useEffect(()=>{
        const fetchData= async()=>{
        setLoading(true);
        try{
            const response = await axios.get(URL);
            setApiData(response.data)
            setLoading(false);
        }catch(e){
            setError(e.message)
            setLoading(false);
        }
    };
    fetchData()
        
    },[URL])
    return [apiData,loading, error]
}

export default useApiCall