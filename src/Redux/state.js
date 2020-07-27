
let initialState = {
    getList:[],
}


export let appReducer = (state = initialState,action)=>{
    let stateCopy = JSON.parse(JSON.stringify(state))
    switch(action.type){
        case 'getAllListData':
            return functionIsEdit(stateCopy,action.payload)
        case 'deleteFunction':
            let newListData = stateCopy.listData.filter((elem=> elem.id !== action.payload))
            stateCopy.listData = newListData
            return stateCopy
        case 'editFunction':
            return editField(stateCopy, action.payload)
        default: 
        return stateCopy
    }
}


let functionIsEdit =(state,array)=> {
        for(let i =0;i<array.length;i++){
            array[i].isEdit = false
        }  
        state.listData = array
  return state
}


let editField = (state, id) => {
    state.listData.map((element, i) => {
        if (element.id === id) {
            element.isEdit = !element.isEdit
        }
        return true
    });
    return state
}
