import axios from 'axios'


export  function  getAllListData(){
    let users =  axios.get(`https://reqres.in/api/users?page=2`)
    try {
        return (dispatch)=>{
            users
            .then(res=>{
                dispatch({
                    type:'getAllListData',
                    payload: res.data.data
                })
            })
                .catch((err)=> console.log(err))
        }
        
    } catch (error) {
        console.log(error)
    }

}

export function editFunction(id){
  return{
      type: 'editFunction',
      payload: id
  }  
} 
export function deleteFunction(id){
  return{
      type: 'deleteFunction',
      payload: id
  }  
} 
