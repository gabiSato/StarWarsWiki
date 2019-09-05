import React from 'react';
import { Text, StyleSheet } from 'react-native';

import CardSection from './CardSection';

const CardTitle = () => (
    <CardSection>
        <Text style={styles.title}>{props.title}</Text>
    </CardSection>
);

const styles = StyleSheet.create({
    title: {
        color: '#F2CB06',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default CardTitle;