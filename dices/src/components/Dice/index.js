import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const Dice = () => {
    const number = 5;

    return (
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    );
};

export default Dice;
