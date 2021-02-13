import React, {Component} from 'react';
import AllTodo from './../components/all-todo.js';


class InputTodo extends Component {
    state = { 
        keys: Object.keys(localStorage),
     }


    hendleTodoSave(){
        var todo_des = document.getElementById('todo-inpt');
        if (todo_des.value!=="") {
            localStorage.setItem(localStorage.length,todo_des.value)  
            this.setState({keys: Object.keys(localStorage)})
        }
    }

    hendleClick=(y)=>{
        this.setState({keys: Object.keys(localStorage)})
        var contant_array= []
        for(let i = 0; i<this.state.keys.length; i++){
            contant_array.push(this.state.keys[i])
        }
        contant_array.sort(function(a, b){return a - b})
        var c = y
        var a=0;
        contant_array.map(index=>{
            
            if(index!==c){
                var x = localStorage.getItem(index)
                localStorage.removeItem(index)
                localStorage.setItem(a, x)
                a=a+1;
            }
            this.setState({keys: Object.keys(localStorage)})
            
        })
    }

    hendleEdit=()=>{
        this.setState({keys: Object.keys(localStorage)})
        var contant_array= []
        for(let i = 0; i<this.state.keys.length; i++){
            contant_array.push(this.state.keys[i])
        }
        contant_array.sort(function(a, b){return a - b})
        
        var a=0;
        contant_array.map(index=>{
        
            var x = localStorage.getItem(index)
            localStorage.setItem(a, x)
            a=a+1;
            this.setState({keys: Object.keys(localStorage)})
            
        })
        this.setState({keys: Object.keys(localStorage)})
    }

    hendleClear(){
        localStorage.clear()
        this.setState({keys: Object.keys(localStorage)})
    }

    render() { 
        
        return ( 
            <div className="hello">
                <div className="padding_part">
                    <div className="todo_input_style"><input id="todo-inpt" className="todo_inpt_field_style" placeholder="Write what you want to do!!!"></input>
                    <button className="btn_plus" onClick={()=>{this.hendleTodoSave()}}>+</button></div>
                    <AllTodo keys={this.state.keys} nowupdateDelete={this.hendleClick} nowupdateEdit={this.hendleEdit}/>
                    </div>
                <div className="clear_panding">
                    <p className="panding">Pending Work <span className="panding_count">{this.state.keys.length}</span></p><input className="clear" type="button" value="Clear" onClick={()=>this.hendleClear()}/>
                </div>
            </div>
         );
    }
}
 
export default InputTodo;