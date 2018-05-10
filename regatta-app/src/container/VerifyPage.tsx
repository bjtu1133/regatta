import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'; 
import * as React from 'react';

class VerifyPage extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <TextField 
                    floatingLabelText="User Name"
                />
                <br />
                <TextField 
                    floatingLabelText="Wallet"
                />
                <br />
                <TextField 
                    floatingLabelText="Deposit"
                />
                <br />
                <TextField
                    floatingLabelText="Contract Address"
                />
                <br />
                <br />
                <FlatButton
                    backgroundColor="#a4c639"
                    hoverColor="#8AA62F"
                    label="Unlock"
                />
            </React.Fragment>
        );
    }
}

export default VerifyPage;