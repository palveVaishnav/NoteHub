import { selectorFamily } from "recoil"

// an array of strings which contain the names of the folders 
export const CollectionFamily = selectorFamily({
    key:'Collections',
    get: () => async() =>{
        const response = await fetch('http://localhost:3000/Saved');
        const data = await response.json()
        return data;
    }
})