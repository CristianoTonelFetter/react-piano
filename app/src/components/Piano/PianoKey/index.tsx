import React from 'react';

import clsx from 'clsx';

import styles from './PianoKey.module.scss';

interface Props {
    sharp?: boolean;
    label: string;
    showLabel?: boolean
}

const PianoKey: React.FC<Props> = props => {
    const { sharp = false, showLabel = false, label } = props;

    return (
        <button type="button" className={clsx(styles.PianoKey, sharp && styles.Sharp)}>
            {showLabel && <span className={styles.Label}>{label}</span>}
        </button>
    )
}

export default PianoKey;