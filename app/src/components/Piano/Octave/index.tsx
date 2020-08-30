import React, { ReactNode } from 'react';
import PianoKey from '../PianoKey';

import styles from './Octave.module.scss';
import Spacer from '../Spacer';
import KeysContainer from '../KeysContainer';

interface Props {
    children?: ReactNode;
}

const Octave: React.FC<Props> = props => {
    return (
        <div className={styles.Octave}>
            <KeysContainer sharps>
                <Spacer variation="First" />
                <PianoKey label="C#" sharp />
                <Spacer />
                <PianoKey label="D#" sharp />
                <Spacer />
                <Spacer variation="KeySize" />
                <Spacer />
                <PianoKey label="F#" sharp />
                <Spacer />
                <PianoKey label="G#" sharp />
                <Spacer />
                <PianoKey label="A#" sharp />
                <Spacer variation="Last" />
            </KeysContainer>

            <KeysContainer>
                <PianoKey label="C" />
                <PianoKey label="D" />
                <PianoKey label="E" />
                <PianoKey label="F" />
                <PianoKey label="G" />
                <PianoKey label="A" />
                <PianoKey label="B" />
            </KeysContainer>
        </div>
    )
}

export default Octave;