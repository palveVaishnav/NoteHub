import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'

export function Contribute() {
    const [file, setFile] = useState(null);
    const [pageReload,setPageReload]  = useState(false);
    const uploadFile = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);
        axios.post('http://localhost:3000/Contribute', formData)
            .then((res) => {
                console.log(res.data);
                setPageReload(res.data);
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
        { !pageReload ? ( 
            <form encType='multipart/form-data' method='post' onSubmit={uploadFile}>
                <input type='file' name='file' onChange={(e) => setFile(e.target.files[0])} />
                <button type='submit' className='border-2 rounded px-2 py-1 hover:bg-slate-500 hover:text-white '>Upload</button>
            </form>
        ):(
            <UploadSuccessFull />
        )}
        </div>
    );
}
function UploadSuccessFull(){
    const navigate = useNavigate()
    useEffect(()=>{
        const timer = setTimeout(()=>{
            navigate(0);
        },3000);
        return () => clearTimeout(timer);
    },[navigate]);
    return (<div>
        File uploaded UploadSuccessFull !!
    </div>)
}