import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'; 
import * as React from 'react';

class DepositPage extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <TextField 
                    floatingLabelText="Renter Name"
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
                    label="Reserve"
                />
            </React.Fragment>
        );
    }
}

export default DepositPage;