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
    <div >
        <div className="m-2 p-1 w-5/5 flex flex-wrap gap-4 sticky top-0 bg-zinc-200 border-black justify-center rounded-lg z-30">
            <input 
                type="text"    
                value={fileToSearch}
                onChange={(e) =>{
                    setFileToSearch(e.target.value)
                    handleSearch()
                }}
                placeholder="What are you searching for ...."
                className="py-2 px-4 border-2 border-dashed border-slate-500 w-3/5 bg-inherit ml-4 rounded-md"
            />
            <button onClick={handleSearch} className="px-4 py-2 border-2 border-black rounded bg-orange-300 hover:bg-slate-500 hover:text-white w-1/5 ">
                    Search
            </button>
        </div>
        { showError ? <p className="text-red-600">{er}</p> 
            : <p>Results for: {fileToSearch}</p>
        }
        <FeedRepeat folder={filesFound} />
    </div>
    )
}