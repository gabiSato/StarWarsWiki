import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = (props) => {
    const { view, input } = styles;
    const { value, placeholder, onChangeText } = props;

    return(
        <View style={view}>
            <TextInput 
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={input} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        height: 40,
        width: '90%',
        borderWidth: 1.5,
        borderRadius: 15,
        borderColor: '#F2CB06',
    },
    input: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
        fontSize: 18,
        color: '#F2CB06'
    }
});

export default SearchBar;