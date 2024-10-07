const initialState = {
      obj : {}
}

function formReducer(state = initialState, action)
{
    if(action.type == 'SENDDATA')
    {
        return {...state, obj : {...action.payload}}
    }
    return {...state}
}

export default formReducer