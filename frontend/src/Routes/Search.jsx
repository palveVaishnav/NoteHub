import axios from "axios";
import { useEffect, useState } from "react"
import { FeedRepeat } from "../components/FeedRepeat";


export function Search(){

    const [fileToSearch,setFileToSearch] = useState('');
    const [filesFound,setFilesFound] = useState([]);
    const [er , setError] = useState('');
    const [showError , setShowError] = useState(false);
    const handleSearch = async ()=>{
        try{
            const response = await axios.get(`http://localhost:3000/Search?q=${fileToSearch}`);
            setFilesFound(response.data);
            setError('');
            setShowError(false);
        }catch(err){
            setShowError(true);
            setError(err.message);
            setFilesFound([]);
        }finally{
            console.log("Seaarch result",filesFound);
            console.log('error ', er);
        }

    }

    useEffect(()=>{
        if(showError){
            const timer = setTimeout(() => {
                setShowError(false)
            }, 2000);
            return ()=> clearTimeout(timer);
        }
    },[showError]);



    return(
    <div>
        <input 
            type="text"    
            value={fileToSearch}
            onChange={(e) =>{
                setFileToSearch(e.target.value)
            }}
            placeholder="What are you searching for ...."
        />
        <button onClick={handleSearch} className="m-2 px-2 py-1 border-2 border-black rounded hover:bg-slate-500 hover:text-white">
                Search
        </button>
        { showError ? <p className="text-red-600">{er}</p> 
            : <p>Results for: {fileToSearch}</p>
        }
        <FeedRepeat folder={filesFound} />
    </div>
    )
}