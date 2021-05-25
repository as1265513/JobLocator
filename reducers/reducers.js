
const initstate={
userinfo:[]
}

export const reducers =(state= initstate, action)=>
{
    if(action.type=="GET_INFO")
    {
        return{
            ...state,
            userinfo:action.payload
        }
    }
    return state
}