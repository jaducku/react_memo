import React from 'react';

export default class ContactDetails extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isEdit: false,
            name:'',
            phone:''
        };
        
        this.handleToggle = this.handleToggle.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleToggle(){
        this.setState({
            isEdit:!this.state.isEdit
        });
        console.log(this.state.isEdit);
    }
    
    handleChange(){
        
    }
    
    render() {

        const details = (
            <div>
                <p>{this.props.contact.name}</p>
                <p>{this.props.contact.phone}</p>
            </div>
        );
        
        const edit = (
            <div>
                <p>
                    <input
                        type="text"
                        name="name"
                        placeholder="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </p>
                <p>
                    <input
                        type="text"
                        name="phone"
                        placeholder="phone"
                        value={this.state.phone}
                        onChange={this.handleChange}
                    />
                </p>
            </div>  
        );
        const view = this.state.isEdit ? edit : details;
        const blank = (<div>Not Selected</div>);

        return (
            <div>
                <h2>Details</h2>
                {this.props.isSelected ? view : blank}
                <p>
                    <button onClick={this.handleToggle}>
                        {this.state.isEdit?'OK':'Edit'}
                    </button>
                    <button onClick={this.props.onRemove}>Remove</button>
                </p>
            </div>
        );
    }
}

ContactDetails.defaultProps = {
    contact: {
        name: '',
        phone: ''
    },
    onRemove:()=>{console.error('onRemove not defined');}
};