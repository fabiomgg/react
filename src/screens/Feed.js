import React, { Component } from 'react'
import { StyleSheet, FlatList, View } from 'react-native'
import Header from '../components/Header'
import Post from '../components/Post'

class Feed extends Component {
  state = {
    posts: [{
      id: Math.random(),
      nickName: 'Fabio Maggi Lunardelli',
      email: 'fabiomaggilunardelli@gmail.com',
      image: require('../../assets/imgs/fence.jpg'),
      comments: [{
        nickname: 'FabioML',
        comment: 'Stunning!',
      }, {
        nickname: 'Sarah Pri',
        comment: 'Foto linda! Onde foi tirada?'
      }]
    }, {
      id: Math.random(),
      nickname: 'Francisco Leandro Lima',
      email: 'franciscolima@gmail.com',
      image: require('../../assets/imgs/bw.jpg'),
      comments: []
    }]
  }

  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <FlatList
          data={this.state.posts}
          keyExtractor={item => `${item.id}`}
          renderItem={({item}) =>
            <Post key={item.id} {...item} />}/>
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
  }
})

export default Feed