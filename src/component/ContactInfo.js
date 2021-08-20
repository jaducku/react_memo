import React from 'react';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

export default class ContactInfo extends React.Component {
    render() {
        return (
            <div>
                <Chip
                    icon={<FaceIcon />}
                    label={this.props.contact.name}
                    onClick={this.props.onClick}
                    variant="outlined"
                />
            </div>
        );
    }
}