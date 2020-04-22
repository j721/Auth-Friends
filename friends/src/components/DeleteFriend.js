import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class DeleteFriend extends React.Component{
    constructor(){
        super();
        this.state ={id: '' }
    }

    submitHandler = e=>{
        e.preventDefault();
        axiosWithAuth()
        .delete(`/api/friends/${this.state.id}`)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }

    changeHandler = e =>{
        e.preventDefault();
        console.log(this.state.id);
        this.setState({id: e.target.value})
    }


    render(){
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input onChange ={this.changeHandler}
                        placeholder="id">
                        </input>
                    <button>DeleteFriend</button>
                </form>
            </div>
        )
    }
    
}//end of DeleteFriend component

export default DeleteFriend; 