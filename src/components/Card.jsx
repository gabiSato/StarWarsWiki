import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

const Card = (children) => (
    <ScrollView style={styles.card}>
        {props.children}
    </ScrollView>
);

const styles = StyleSheet.create({
    card:{
        backgroundColor: 'transparent',
        elevation: 1,
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 10,
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: '#F2CB06'
    }
});

export default Card;