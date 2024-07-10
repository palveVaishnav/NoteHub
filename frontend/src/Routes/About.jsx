import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { problemArray, problemArrayId } from "../store/recoilAbout";


export function About() {
    return (<div className="w-full">
        <div className="grid w-full gap-4">
            <Landing />
            <Solving />
            <Overview />
        </div>
    </div>)
}


function Landing() {
    return (
        <div className="grid gap-2 place-items-center h-screen">
            <div className="grid place-items-center">
                <div>
                    <Logo />
                </div>
                <div className="font-2 text-xl">
                    ---- Tagline ----
                </div>
                <div className="syne-mono-regular align-center text-center my-6">
                    NoteHub is a note-sharing platform where you can <br />
                    <b>Download</b> notes and resources shared by others, <br />
                    <b>Upvote</b> them to show your love, <br />
                    <b>Save</b> them to revisit anytime, <br />
                    create your own personalized <b>Collections</b>, <br />
                    <b>Text</b> them your doubts (coming soon), <br />
                    and share <b>YOUR OWN NOTES</b> as well because <br />
                    <b>WE BELIEVE IN SHARING.</b> <br />
                </div>
            </div>
            <div className="grid text-center ">
                <h3 className="text-lg font-2" >Our Team</h3>
                <div className="flex overflow-x-scroll overflow-hidden scrollbar-none gap-2">
                    <div className="h-16 border-2 bg-slate-300 text-black rounded-lg grid grid-flow-col p-2 justify-center text-center overflow-hidden">
                        <div className="h-14 p-1 rounded-full overflow-hidden border-gray-800 border-2">
                            <img src="../src/assets/profiles/profile3.png" alt="Profile Image" className="h-full " />
                        </div>
                        <div>
                            <p className="text-base">Vaishnav Palve</p>
                            <p className="text-xs">Full Stack</p>
                        </div>
                    </div>
                    <div className="h-16 border-2 bg-slate-300 text-black rounded-lg grid grid-flow-col p-2 justify-center text-center overflow-hidden">
                        <div className="text-sm"> I am the Team <br />for now </div>
                    </div>
                    <div className="h-16 border-2 bg-orange-500 text-black rounded-lg grid grid-flow-col p-2 justify-center text-center overflow-hidden">
                        <button> + <br /> Join Team </button>
                    </div>
                </div>
            </div>

        </div>
    )
}


function Logo() {
    const navigate = useNavigate();
    return (
        <button className="font-serif text-4xl cursor-pointer bg-gray-900 rounded-md overflow-hidden text-white" onClick={() => {
            navigate("/Home");
        }}>
            <span className='p-1'>Note</span>
            <span className='bg-orange-500 text-black p-1'>Hub</span>
        </button>);
}


function Solving() {

    const problems = useRecoilValue(problemArray);
    let toStay = 1;
    const [visibleId, setvisibleId] = useState(toStay);
    const toggleVisiblity = (id) => {
        setvisibleId((visibleId === id ? toStay : id));
    }

    useEffect(() => {
        toStay = visibleId;
    }, [visibleId])

    return (
        <div className="border-2 grid place-items-center"
            onMouseLeave={() => toggleVisiblity(0)}
        >
            <p className="font-2 text-xl">Why NoteHub</p>
            <div className="w-full p-4 gap-4">
                {problems.map((problemDetails) => (
                    <div key={problemDetails.id} className="flex justify-evenly w-full gap-4">
                        <div className="grid w-2/5 cursor-pointer text-end"
                            onMouseEnter={() => toggleVisiblity(problemDetails.id)}
                            onMouseLeave={() => toggleVisiblity(problemDetails.id)}
                            onClick={()=>toggleVisiblity(0)}
                        >
                            <div className="problem-box  m-1 border-2 border-dashed p-2 bg-slate-500">
                                {problemDetails.problem}
                            </div>
                        </div>
                        <div className="w-3/5 relative">
                            <div className="absolute top-0 border-2 p-1 solution-box bg-slate-300 text-black ">
                                {visibleId === problemDetails.id ? <ShowSolution id={problemDetails.id} /> : <div></div>}
                            </div>
                        </div>
                    </div>
                ))
                }
            </div>
        </div>
    )
}

function ShowSolution({ id }) {
    const problemById = useRecoilValue(problemArrayId);
    const problem = problemById(id);

    if (!problem) {
        return null;
    }



    return (
        <div className="p-4">
            <div className="p-4">
                <p>Problem : {problem.problemStatement} </p>
            </div>
            <div className="p-4">
                <p>Solution : {problem.solution}</p>
            </div>
        </div>
    );
}



function Overview() {
    return (
        <div className="border-2">
            From Overview
        </div>
    )
}





// src="https://github.com/palveVaishnav"





