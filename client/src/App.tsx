import * as React from 'react';
import styles from './App.module.scss';

function App(){
    const [user, setUser] = React.useState<any>({})
  return (
      <div className={styles.app}>
        <header>
            <h1>JT NOTEBOOK</h1>
        </header>
          <main>
              <section>
                  <h3>Create Account</h3>

              </section>
              <section>
                  <h3>
                      Login
                  </h3>
              </section>
          </main>
      <footer>
          <span></span>
      </footer>
      </div>
  )
}

export default App;