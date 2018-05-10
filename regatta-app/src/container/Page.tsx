import { Tab, Tabs }  from 'material-ui/Tabs';
import * as React from 'react';
import DepositPage from './DepositPage';
import NewLeasePage from './NewLeasePage';
import VerifyPage from './VerifyPage';

class Page extends React.Component {

    public render() {
        return (
            <Tabs>
            <Tab label="New Lease" >
              <NewLeasePage />
            </Tab>
            <Tab label="Deposit" >
              <DepositPage />
            </Tab>
            <Tab label="Unlock">
              <VerifyPage />
            </Tab>
          </Tabs>
        );
    }
}

export default Page;