import React from 'react';
import clsx from 'clsx';

import styles from './Spacer.module.scss';

type SpacerVariationType = 'First' | 'Last' | 'KeySize';

interface Props {
    variation?: SpacerVariationType
}

const Spacer: React.FC<Props> = props => {
    const { variation } = props

    return (
        <div className={clsx(
            styles.Spacer,
            variation && styles[variation]
        )} />
    )
}

export default Spacer;