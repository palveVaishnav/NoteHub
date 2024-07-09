import { useState } from "react";

export function Message() {
    const userMessages = [
        { id:1, userName: 'Alice', message: 'Hey, how are you?' },
        { id:2, userName: 'Bob', message: 'I will send the documents by tonight.' },
        { id:3, userName: 'Charlie', message: 'Meeting is rescheduled to 3 PM.' },
        { id:4, userName: 'David', message: 'Can you review my code?' },
        { id:5, userName: 'Eve', message: 'Happy Birthday!' },
        { id:6, userName: 'Frank', message: 'Let’s catch up this weekend.' },
        { id:7, userName: 'Grace', message: 'Check out this link!' },
        { id:8, userName: 'Alice', message: 'Hey, how are you?' },
        { id:9, userName: 'Bob', message: 'I will send the documents by tonight.' },
        { id:10, userName: 'Charlie', message: 'Meeting is rescheduled to 3 PM.' },
        { id:11, userName: 'David', message: 'Can you review my code?' }
    ];

    const [count,setCount] = useState(1);
    const [ShowUserMessages,setShowUserMessages] = useState(null);

    const incrementCount = () =>{
        setCount((prop)=>prop++);
    }

    const selectedUser = (user)=>{
        setShowUserMessages(user);
        incrementCount();
    }
    return (<div className="flex">
        <div className="w-1/3 border-2 border-black overflow-y-auto scroll-smooth max-h-screen grid gap-2 p-1 scrollbar-none">
            {
                userMessages.map((user,index)=>(
                    <div key={index} className="flex p-2 border-b-2 border-slate-500 gap-2 align-middle cursor-pointer hover:bg-slate-400 rounded-md shadow-lg hover:shadow-2xl"
                        onClick={()=>{selectedUser(user)}}                        
                    >
                        <div className="overflow-hidden rounded-full">
                            <img src={`./src/assets/profiles/profile${user.id}.png`} className="h-10" />
                        </div>
                        <div>
                            <div><b>{user.userName}</b></div>
                            <p>{user.message}</p>
                        </div>
                    </div>
                ))
            }

        </div>
        <div className="w-2/3 h-screen border-2 border-black">
            {ShowUserMessages && 
            <div className="grid grid-flow-row gap-1 h-full border-2 border-dotted border-black relative">
                
                <div className="w-full p-1 flex justify-start gap-4 border-2 sticky top-0 bg-slate-300 rounded-md">
                    <div className="overflow-hidden rounded-full">
                        <img src={`./src/assets/profiles/profile${ShowUserMessages.id}.png`} className="h-10" />
                    </div>
                    <div>
                        <b>{ShowUserMessages.userName}</b>
                    </div>
                </div>
                <div className="w-full">
                </div>
                
                <div className="w-full p-2 border-2 border-red-800 overflow-y-scroll scrollbar-none flex-row-reverse scroll-star">
                    messages sent and received will appere here 
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max">message 1 small </div>
                    <div className="border-2 rounded-lg w-max flex-wrap">
                        message l small or the large as large as lorem  fsiug hgfdsf kuhfdsushygfdsf uhhdfds uh fdsfdsgfsg dsfgdsgfsdfdsf
                        fyts of piuwytfpew ufwoiuu ew foiuwyg   ewiuyu   fewifuewf wfyg f sgf sfoiuyf f b dsf sfhjgdsfjuhg fds fiugsf dsiyugf fbdsoiyuggfsdfs 
                    </div>
                </div>

                <div className="w-full flex sticky bottom-0 gap-1 p-2">
                    <div className="w-4/5">
                        <input 
                            type="text"
                            placeholder="Message...."
                            className="px-2 w-full rounded-md py-1 border-2 border-slate-500 h-full"

                        />
                    </div>
                    <div className="w-1/5">
                        <button
                            className="w-full h-full rounded-md  bg-slate-300 hover:bg-slate-500 hover:text-white border-2 hover:border-double hover:border-slate-900 p-2"
                        >
                            Send
                        </button>
                    </div>
                </div>

            </div>
            }
        </div>
    </div>)
}