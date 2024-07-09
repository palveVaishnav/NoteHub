import { useRecoilValue } from "recoil"
import { CollectionFamily } from "../store/atomsSaved"

export function Saved(){
    // an array of collections 
    // where the collection us an array of files 
    const collections = useRecoilValue(CollectionFamily())

    return (
    <div className="grid grid-cols-3 gap-4">
      {collections && collections.map((collection, index) => (
            <div key={index} className="min-h-20 max-h-60 border-0 rounded-xl shadow-lg p-2 hover:bg-slate-300 hover:shadow-lg hover:shadow-slate-600">
                <div className="border-2 border-dashed border-pink-500 p-2 mb-2 rounded-2xl overflow-y-scroll max-h-40 scrollbar-thin">
                    <ul>
                        {collection.files.map((fileName, fileIndex) => (
                        <li key={fileIndex}>{fileName}</li>
                        ))}
                    </ul>
                </div>
                <h3>{collection.name}</h3>
            </div>
        ))
      }
    </div>
  );
}
    
    
    /*
    <div>
        {collections.map( (Collection,index) => (
            <div key={index}>
                <div className="border-2 border-pink-500">
                    <h3>{Collection.name} </h3>
                    <ul>
                        {Collection.files.map((fileName,fileIndex)=>(
                            <li key={fileIndex}>
                                {fileName}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        ))}    
        
    </div>)

    */