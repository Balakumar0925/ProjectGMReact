import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name : "",
            phoneNumber : ""
        }
        this.handelName = this.handelName.bind(this);
        this.handelPhno = this.handelPhno.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handelName(e){
        let value = e.target.value

            value = value.replace(/[^A-Za-z]/ig, '');
       
         this.setState(state => ({
             name: value
         }));
    }

    handelPhno(x){
        
    this.setState(state => ({

        phoneNumber:x.target.value
    }));
    
    if(x.target.value.length > 10 ){
        alert('enter your phonenumber');
    }
    
    }
    
    handleClick(e){
        
       if(this.state.name == ""){
            alert('enter your name');
        }
        else if(this.state.phoneNumber == ""){
            alert('enter your phoneNumber');
        }

        else {
            alert('data saved');
        }

    }

    render(){
        return (
               
            <div>
            
                NAME<input type="text" name="name" value={this.state.name} pattern="" onChange={this.handelName} />
                PHONENUMBER <input type="number" name="phoneNumber"  value={this.state.phoneNumber} pattern="\d{3}[\-]\d{3}[\-]\d{4}" required onChange={this.handelPhno} />
                <button type="button"  onClick={this.handleClick}>SUMBIT</button>
                <p>{this.state.name}</p>
                <p>{this.state.phoneNumber}</p>
            </div>
        )
    }
}



export default Login;