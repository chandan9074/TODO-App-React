import React, { Component } from 'react';
import Delete_pic from '../images/delete.png'
import '../../App.css'

class Delete extends Component {

    hendleDelete(){
        localStorage.removeItem(this.props.id)
    }

    render() {
        return ( 
            <div style={this.props.make_dis ? {pointerEvents: "none", opacity: "0.8"} : {}}>
                <button className="btn_style" onClick={()=>{this.hendleDelete(); this.props.updateDelete(this.props.id)}}><img src={Delete_pic} alt="Delete...." style={{height:"2.7vh", width:"2.7vh"}}></img></button>
            </div>
         );
    }
}
 
export default Delete;