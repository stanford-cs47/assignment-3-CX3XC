/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React, { Component } from 'react'
import PropTypes from 'prop-types' //consider using this!
import { StyleSheet, View, Button, TextInput, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';
import { Metrics, Colors } from '../Themes'

//export default function instead of class
export default function Search(props) {

      search = () => {
        props.loadFeed();
        this.searchbar.clear();
      }

    return (

      <View style={styles.searchRow}>


        <TextInput
          ref={(component) => {this.searchbar = component;}}
          style={styles.textinput}
          placeholder="Search for News"
          onChangeText={text => props.onChangeText(text)}
          onSubmitEditing={this.search}
        />

          <TouchableOpacity 
            style={{alignItems: 'flex-end', justifyContent: 'center', width: '15%'}}
            onPress={props.loadFeed}
          >
            <FontAwesome
            style={{ paddingRight: 5, }}
            name='search'
            size={25}
            color='#FF6699'
            />
          </TouchableOpacity>

      </View>

    );

}

const styles = StyleSheet.create({
	searchRow: {
    	flexDirection: 'row',
    	justifyContent: 'flex-start',
   		alignItems: 'center',
    	width: '92%',
    	borderRadius: 10,
    	backgroundColor: '#F0EEEE',
  	},

  	textinput: {
   		height: 40,
    	width: '85%',
      paddingLeft: 10,
    	textAlign: 'left',
  	},
});
