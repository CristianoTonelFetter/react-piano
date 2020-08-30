import React from 'react';
import Octave from './Octave';

import styles from './Piano.module.scss';

interface Props {
    octaves?: number;
}

const Piano: React.FC<Props> = props => {
    const { octaves = 1 } = props;
    const renderOctaves = () => {
        const octavesList = [];

        for (let i = 0; i < octaves; i++) {
            octavesList.push(<Octave />);
        }

        return <>{octavesList}</>
    }

    return (
        <div className={styles.Piano}>
            {renderOctaves()}
        </div>
    )
}

export default Piano;