import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField'; 
import * as React from 'react';

class NewLeasePage extends React.Component {
    public render() {
        return (
            <React.Fragment>
                <TextField 
                    floatingLabelText="LandLord Name"
                />
                <br />
                <TextField 
                    floatingLabelText="Wallet"
                />
                <br />
                <TextField 
                    floatingLabelText="Deposit"
                    type="number"
                />
                <br />
                <TextField 
                    floatingLabelText="Phisical Address"
                    multiLine={true}
                    rows={2}
                    rowsMax={4}
                />
                <br />
                <TextField 
                    floatingLabelText="City"
                />
                <br />
                <TextField 
                    floatingLabelText="State"
                />
                <br />
                <TextField 
                    floatingLabelText="Term"
                    multiLine={true}
                    rows={2}
                    rowsMax={10}
                />
                <br />
                <br />
                <FlatButton
                    backgroundColor="#a4c639"
                    hoverColor="#8AA62F"
                    label="Ready To Go"
                />
            </React.Fragment>
        );
    }
}

export default NewLeasePage;