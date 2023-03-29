import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Dice from '../../components/Dice';

import styles from './styles';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dices App</Text>
            <View style={styles.dices_container}>
                <Dice />
                <Dice />
                <Dice />
                <Dice />
            </View>
            <Button title='Roll' />
        </View>
    );
};

export default HomeScreen;
