import React from 'react';
import Piano from './components/Piano';

import styles from './App.module.scss';

function App() {
    return (
        <div className={styles.App}>
            <Piano octaves={4} />
        </div>
    );
}

export default App;
