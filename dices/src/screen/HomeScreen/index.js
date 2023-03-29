import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/Button';
import Dice from '../../components/Dice';

import styles from './styles';

const HomeScreen = () => {
    const [first, setFirst] = useState(1);
    const [second, setSecond] = useState(1);
    const [third, setThird] = useState(1);
    const [fourth, setFourth] = useState(1);

    function getRandomNumber(max) {
        return Math.floor(1 + Math.random() * max);
    }

    const rollDices = () => {
        setFirst(getRandomNumber(6));
        setSecond(getRandomNumber(6));
        setThird(getRandomNumber(6));
        setFourth(getRandomNumber(6));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Dices App</Text>
            <Text style={styles.title}>{first + second + third + fourth}</Text>
            <View style={styles.dices_container}>
                <Dice number={first} />
                <Dice number={second} />
                <Dice number={third} />
                <Dice number={fourth} />
            </View>
            <Button title='Roll' click={rollDices} />
        </View>
    );
};

export default HomeScreen;
