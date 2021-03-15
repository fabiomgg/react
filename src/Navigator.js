import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'

const menuRoutes = {
  Feed: {
    name: 'Feed',
    screen: Feed,
    navigationOptions: {
      title: 'Feed',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='home' size={30} color={tintColor} />
    }
  },
  Add: {
    name: 'AddPhoto',
    screen: Feed,
    navigationOptions: {
      title: 'Add Picture',
      tabBarIcon: ({ tintColor }) =>
        <Icon name='camera' size={30} color={tintColor} />
    }
  },
  Feed: {
    name: 'Profile',
    screen: Feed,
    navigationOptions:{
      title: 'Profile',
      tabBarIcon: ({ tintColor: color }) =>
      <Icon name='user' size={30} color={color}/>
    }
  }
}

const MenuConfig = {
  initialRouteName: 'Feed',
  tabBarOptions: {
    showLabel: false,
  }
}

const MenuNavigator = createBottomTabNavigator(menuRoutes, MenuConfig)

export default MenuNavigator