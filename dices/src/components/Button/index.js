import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

const Button = ({ title }) => {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

export default Button;
