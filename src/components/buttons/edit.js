import React, { Component } from 'react';
import Edit_pic from '../images/edit.png'
import '../../App.css'

class Edit extends Component {

    render() { 
        return ( 
            <div style={this.props.make_dis ? {pointerEvents: "none", opacity: "0.8"} : {}}>
                <button className="btn_style" onClick={()=>{this.props.hen_edit(this.props.id); this.props.updateEdit()}} ><img src={Edit_pic} alt="Edit..." style={{height:"2.7vh", width:"2.7vh"}}></img></button>
            </div>
         );
    }
}
 
export default Edit;