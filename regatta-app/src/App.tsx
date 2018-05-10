import * as React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import  Page  from './container/Page';

class App extends React.Component {
  public render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Page />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
