import { useEffect, useState } from "react";
import { FeedRepeat } from "../components/FeedRepeat";
import { Search } from "./Search";

// eslint-disable-next-line react/prop-types
export function Feed({className}){
  const [allFiles,setAllFiles] = useState([]);

  useEffect(()=>{
    const fetchFiles = async ()=>{
        try{
          const response = await fetch('http://localhost:3000/Feed');
          const data = await response.json();
          setAllFiles(data);
        }catch(err){
          console.log(err);
        }
    }
    fetchFiles();
  },[])

  return(
    <div className="relative ">
        <div className="sticky top-0 ">
          <Search />
        </div>
        <div className={`${className}`}>
          <FeedRepeat folder={allFiles} />
        </div>
    </div>
  )

}