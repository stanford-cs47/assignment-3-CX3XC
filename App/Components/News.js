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
import { StyleSheet, SafeAreaView, View, FlatList, Text, Linking, TouchableOpacity } from 'react-native'
import { material } from 'react-native-typography' //consider using this!
import { Metrics, Colors } from '../Themes'

export default function News(props) {
  //static defaultProps = { articles: [] }

  //static propTypes = {
  //  articles: PropTypes.array
  //}

  //you can change the props above to whatever you want/need.

    return (
      <View style={styles.container}>

        <FlatList
          data={props.feed}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.article}
              onPress={() => Linking.openURL(item.url)}
            >
              <Text style={material.title}>{item.title}</Text>
              <Text style={material.subheading}>{item.snippet}</Text>
              <Text style={material.body2}>{item.byline}</Text>
              <Text style={material.caption}>{item.date}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.url}
        />

      </View>
    );
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginTop: 20,
  },

  article: {
    margin: 3,
    padding: 5,
    borderColor: 'gray',
    borderRadius: 5,
    borderWidth: 1,
  },

});
