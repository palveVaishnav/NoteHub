import { useNavigate } from "react-router-dom";


export function About(){
    return(<div className="w-full">
        <div className="grid w-full gap-4">
            <Landing />
            <Solving />
            <Overview />
        </div>        
    </div>)
}


function Landing(){
    return(
        <div className="grid gap-2 place-items-center h-screen">
            <div className="grid place-items-center">
                <div>
                    <Logo /> 
                </div>
                <div className="font-2 text-xl">
                    All you need is Here
                </div>
                <div className="syne-mono-regular align-center text-center my-6">
                    NoteHub is a note-sharing platform where you can <br />
                    <b>Download</b> notes and resources from others, <br />
                    <b>Upvote</b> them to show your love, <br />
                    <b>Save</b> them to revisit anytime, <br />
                    create your own personalized <b>Collection</b>, <br />
                    <b>Text</b> them your doubts (coming soon), <br />
                    and share <b>YOUR OWN NOTES</b> as well because <br />
                    <b>WE BELIEVE IN SHARING.</b> <br />
                </div>

            </div>
            <div>
                <iframe src="https://github.com/palveVaishnav" width="100%" height="200px"></iframe>
            </div>

        </div>
    )
}


function Logo() {
    const navigate = useNavigate();
    return (
    <button className="font-serif text-4xl cursor-pointer bg-gray-900 rounded-md overflow-hidden text-white" onClick={()=>{
        navigate("/Home");
    }}>
        <span className='p-1'>Note</span>
        <span className='bg-orange-500 text-black p-1'>Hub</span>
    </button>);
}


function Solving(){
    return(
        <div className="border-2">
            From Solving
        </div>
    )
}


function Overview(){
    return(
        <div className="border-2">
            From Overview
        </div>
    )
}







/**
 * <div className="gap-2 p-6 devnagri-1 text-5xl">
                <div className="border-2"> Share anything you Have</div>
                <div className="border-2 h-20">
                    <img src='./src/assets/icons/shake-hands.png' className="h-full" />
                </div>
                <div className="border-2">Access everyting you want</div>
            </div>
 */



