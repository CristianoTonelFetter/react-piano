import React, { ReactNode } from 'react';
import clsx from 'clsx';

import styles from './KeysContainer.module.scss';

interface Props {
    children: ReactNode;
    sharps?: boolean;
}

const KeysContainer: React.FC<Props> = props => {
    const { children, sharps } = props;

    return (
        <div className={clsx(styles.KeysContainer, sharps && styles.Sharps)}>{children}</div>
    )
}

export default KeysContainer;