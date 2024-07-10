import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/profiles/profile1.png'
import { useState } from 'react';

// eslint-disable-next-line react/prop-types
export function Sidebar({ className }) {
    return (
        <div className={`${className}`}>
            <Logo />
            <div className='p-2 m-2 gap-2'>
                <Profile />
                <Navigation />
            </div>
        </div>
    );
}


function Logo() {
    const navigate = useNavigate();
    return (<button className="font-serif text-4xl cursor-pointer" onClick={()=>{
        navigate("/Home");
    }}>
        <span className=''>Note</span>
        <span className='bg-orange-500 text-white rounded-md'>Hub</span>
    </button>);
}

function Profile() {
    const navigate = useNavigate();
    return (
    <div className="text-white p-4 grid grid-flow-col justify-evenly text-center shadow-xl outline-slate-950 bg-slate-500 rounded-lg cursor-pointer hover:-translate-y-0.5"
        onClick={()=>{
            navigate("/Profile");
        }}
    >
        <div className="border-2 border-orange-400 rounded-full overflow-hidden">
            <img src={profileImage} alt='Profile Image' className='size-10 ' />
        </div>
        <div >
            <div className='font-bold'>User Name</div>
            <p className='text-xs' > bhaikaemail@gmail.com</p>
        </div>
    </div>)
}

function Navigation() {
    const navigate = useNavigate();
    const [Notification,setNotification] = useState(false);

    const handleNotificationClick = ()=>{
        setNotification(!Notification);
    }

    return (<div className='grid gap-2 my-4'>
        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/Feed");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Feed
        </div>

        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/Contribute");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
            </svg>
            Contribute
        </div>

        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/Search");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Zm3.75 11.625a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
            </svg>
            Search
        </div>
        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer z-30'
            onClick={()=>{
                navigate("/Notification")
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
            </svg>
            Notification
        </div>
        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/Message");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
            Messages
        </div>
        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/Saved");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            Saved
        </div>
        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/Upvote");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
            </svg>
            Upvotes
        </div>
        
        <div className='border-x-2  border-amber-500 p-2 rounded flex gap-2 hover:shadow-xl hover:bg-slate-500 hover:text-white cursor-pointer'
            onClick={()=>{
            navigate("/About");
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
            </svg>
            About Us
        </div>
    </div>)
}
