import React from 'react';
import ContactInfo from './ContactInfo';
import ContactDetail from './ContactDetail';

import {Button} from '@material-ui/core';

class Contact extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            selectedKey:-1,
            keyword:'',
            contactData:[
                {name: 'albet',phone: '010-9100-8242'},
                {name: 'jaducku',phone: '010-9100-8245'},
                {name: 'jjddfp',phone: '010-9100-8247'}
            ]
        };
        
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleChange(e){
        this.setState({
            keyword: e.target.value 
        });
    }
    
    handleClick(key){
        this.setState({
            selectedKey:key
        });
    }
    
    render(){
        const mapToComponents = (data) =>{
            data = data.filter(
                (contact) =>{
                    return contact.name.toLowerCase().indexOf(this.state.keyword) > -1;
                }
            );
            
            return data.map((contact, i) =>{
                return (<ContactInfo 
                            contact={contact} 
                            key={i}
                            onClick={()=>this.handleClick()}
                        />);  
            });
        };
        
        return (
            <div>
                <h1>Contact</h1>
                <input
                    name="keyword"
                    palceholder="search"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                />
                <div>{mapToComponents(this.state.contactData)}</div>
                <div>
                    <ContactDetail 
                        isSelected={this.state.selectedKey != -1}
                        contact={this.state.contactData[this.state.selectedKey]}    
                    />
                </div>
                
            </div>
        );
    }
}

export default Contact;