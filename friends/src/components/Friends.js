import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Friends extends React.Component{
    constructor(){
        super();
        this.state ={friends: [] }   //set friends data to empty array
    }

    componentDidMount(){
        this.getFriends(); 
    }

    //getFriends function using axiosWithAuth to fetch data
    getFriends =()=>{
        this.setState({...this.state});
        axiosWithAuth().get("/api/friends")
        .then(res=>{
            console.log('Friends component data received',res)
            this.setState({friends:res.data})
        })
        .catch(err=>{
            console.log(err, 'friends component data error')
        })
    }

    render(){
        return(
            <div>
                Friends List: {this.state.}
            </div>
        )
    }

}

export default Friends; 