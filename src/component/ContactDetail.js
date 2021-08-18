import React from 'react';

export default class ContactDetail extends React.Component{
    render(){
        const details = (
            <div>
                <p>선택</p>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p> 
            </div>
        );
        const blank = (<div>Not selected</div>);
        return(
            <div>
                {this.props.isSelected ? details : blank}
            </div>
        );
    }
}

