import { selector } from "recoil"


export const problems = [
    { id: 1, problem: 'Classroom notes', problemStatement: 'Most of us do not attend lectures and our teachers set paper according to what they have tought in the classroom', solution: 'Access notes uploaded by you batch mates for the topics they attended.' },
    { id: 2, problem: 'Confusion while sharing', problemStatement: 'Traditional file-sharing methods create confusions about the sequence or names of file', solution: 'NoteHub provieds a structured file system access to share files' },
    { id: 3, problem: 'Data Consumption', problemStatement: 'Transfering same file to your all your friends is a Data Consumming task', solution: 'Upload your files on NoteHub and create a collection, Now you can share the link to all your friends' },
    { id: 4, problem: 'Loosing Files', problemStatement: 'Many times you save important files somewhere and when you need those files, you are not able to locate them', solution: 'Save All you Important files inside customizable Collection so when needed you acn easily locate those files' },
    { id: 5, problem: 'Need Old Files', problemStatement: 'When you move to higher Classes usually you dont need old notes, but you might need those in future and you cant find those', solution: 'Share those files with NoteHub, it will help your juniors to study and you will be able to find those easily' },
]

export const problemArray = selector({
    key: 'problemArray',
    get: ({get}) => {
        return problems;
    }
})


export const problemArrayId = selector({
    key: 'problemArrayId',
    get: ({get}) =>{
        return (id)=> {
            const element = problems.find((problems)=> problems.id === id)
            return element;
        }
    }
})



