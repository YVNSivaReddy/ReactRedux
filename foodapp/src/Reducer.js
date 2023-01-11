
const count = 10;

export default function reducer(state=count,action){
    const {type,payload} = action
    switch(type){
        case "INCREMENT": return state + payload;
        case "DECREMENT": return state-1;
        default: return count;
    }
    
}


