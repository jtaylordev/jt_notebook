import * as React from 'react';

function App(){
    const [auth, setAuth] = React.useState(false);

  return (
      <React.Fragment>
          {
              auth ? <span>Auth</span> : <span>No Auth</span>
          }
      </React.Fragment>
  )
}

export default App;