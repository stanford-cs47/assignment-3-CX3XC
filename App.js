/*
*
* Assignment 3
* Starter Files
*
* CS47
* Oct, 2018
*/

import React from 'react';
import { StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  Image, 
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';

//import { List, ListItem, } from 'react-native-elements'
import { Images, Colors } from './App/Themes'
import APIRequest from './App/Config/APIRequest'

import News from './App/Components/News'
import Search from './App/Components/Search'

//Third Party Components
import { FontAwesome } from '@expo/vector-icons'; 

export default class App extends React.Component {

  state = {
    loading: true,
    articles : [],
    searchText: '',
    category: ''
  }

  componentDidMount() {
    this.loadArticles();
  }

  onChangeText = text => {
      this.setState({searchText: text});
  }

  searchNews = () => {
    this.loadArticles(this.state.searchText);
  }

  articleRender = () => {
    if (this.state.loading) {  
      return (
        <View style={{flex: 1, justifyContent: 'center'}}>
         <ActivityIndicator style={styles.activityIndicator} size='large' color='black'/>
        </View>
      )
    }
    else {
      return (
        <View style={{flex: 1}}>
         <News feed={this.state.articles}/>
        </View>
      )
    }
  }

  async loadArticles(searchTerm = '', category = '') {
    this.setState({articles:[], loading: true});
    var resultArticles = [];
    if (category === '') {
      resultArticles = await APIRequest.requestSearchPosts(searchTerm);
    } else {
      resultArticles = await APIRequest.requestCategoryPosts(category);
    }
    console.log(resultArticles);
    this.setState({loading: false, articles: resultArticles})
  }

  render() {
    const {articles, loading} = this.state;

    return (
      <SafeAreaView style={styles.container}>

        <Image style={styles.logo} source={Images.logo} resizemode='contain'/>

        <Search
          onChangeText={text => this.onChangeText(text)}
          loadFeed={() => this.searchNews()}
        />

        {this.articleRender()}

        {/*Though, you can style and organize these however you want! power to you 😎*/}

        {/*If you want to return custom stuff from the NYT API, checkout the APIRequest file!*/}

      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },

  logo: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '100%',
    height: (Dimensions.get('window').width) / 5.1,
  },

  activityIndicator: {
    justifyContent: 'center',
    alignItems: 'center',
  },

});
