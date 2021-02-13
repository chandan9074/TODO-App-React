
import React, { Component } from 'react';
import Delete from '../components/buttons/delete.js'
import Edit from '../components/buttons/edit.js'
import './../App.css';
import E_Save from './images/save.png';


class AllTodo extends Component {

    state={
        edit_id:0,
        control:0,
        just_try:"",
    }

    
    hendelEdit=(id)=>{
        this.setState({edit_id:id})
        this.setState({control:1})
        var n = localStorage.getItem(id);
        this.setState({just_try:n});
    }

    saveEdit=()=>{
        var ans = document.getElementById('inpt_save');
        localStorage.removeItem(this.state.edit_id)
        localStorage.setItem(this.state.edit_id, ans.value)
        this.setState({edit_id:0})
        this.setState({control: 0})
    }
    
    render() {
        var contant_array= []

        if(this.props.keys!== undefined){
            for(let i = 0; i<this.props.keys.length; i++){
                contant_array.push(this.props.keys[i])
            }

            contant_array.sort(function(a, b){return a - b})
        }

        return ( 
            <div>
                {contant_array.map(index=>(
                    <div className="one_row">
                        {this.state.control===1 ?
                        (this.state.edit_id===index?(<div className="for_paddding"><input className="inpt_n" type="text" id="inpt_save" defaultValue={localStorage.getItem(index)}   autoFocus/><button className="btn_style" onClick={()=>{this.saveEdit(); this.props.nowupdateEdit()}}><img src={E_Save} alt="Save...." style={{height:"20px", width:"20px"}}></img></button></div>):(<div className="one_row1"><p className="inpt">{localStorage.getItem(index)}</p>
                        
                        <div className="float_button"><Delete id={index}  updateDelete={this.props.nowupdateDelete} make_dis="disable" /><Edit id={index} updateEdit={this.props.nowupdateEdit} hen_edit={this.hendelEdit} make_dis="disable" /></div> </div>))
                        :
                        (<div className="one_row1"><p className="inpt">{localStorage.getItem(index)}</p>
                        
                        <div className="float_button"><Delete id={index}  updateDelete={this.props.nowupdateDelete}/><Edit id={index} updateEdit={this.props.nowupdateEdit} hen_edit={this.hendelEdit} /></div> </div>)}
                    </div>
                ))}
            </div>
        );

    }
}
 
export default AllTodo;