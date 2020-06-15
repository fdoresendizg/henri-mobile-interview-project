import React from 'react';
import { Text } from 'react-native';

import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/Feather';

import SplashScreen from './components/container/splash';
import UsersScreen from './components/container/users';
import FeedScreen from './components/container/feed';
import TodosScreen from './components/container/todos';

/*const Users = createStackNavigator({
	Users: { 
		screen: UsersScreen,
        navigationOptions: {
            headerTitle: 'Users',
			headerLeft: null,
			headerStyle: {
				backgroundColor: "#3D6DCC"
			},
			headerTintColor: "#fff",
        }
	},
});*/

const AppNavigator = createBottomTabNavigator(
	{
		Users: {
			screen: UsersScreen,
			navigationOptions: {
				tabBarLabel: ({ tintColor }) => (          
		          <Text style={{ textAlign: 'center', fontSize: 10, color: tintColor }}>Users</Text>
				),
				tabBarIcon: ({ horizontal, tintColor }) => (
					<Icon name="users" size={horizontal ? 20 : 25} color={tintColor} regular/>
				),
			}			
		},
		Feed: {
			screen: FeedScreen,
			navigationOptions: {
				tabBarLabel: ({ tintColor }) => (          
		          <Text style={{ textAlign: 'center', fontSize: 10, color: tintColor }}>Feed</Text>
				),
				tabBarIcon: ({ horizontal, tintColor }) =>
				  <Icon name="list" size={horizontal ? 20 : 25} color={tintColor} regular/>
			}	
		},
		Todos: {
			screen: TodosScreen,
			navigationOptions: {
				tabBarLabel: ({ tintColor }) => (          
		          <Text style={{ textAlign: 'center', fontSize: 10, color: tintColor }}>Todos</Text>
				),
				tabBarIcon: ({ horizontal, tintColor }) =>
				  <Icon name="check-circle" size={horizontal ? 20 : 25} color={tintColor} regular/>
			}			
		}
	},
	{
	    tabBarOptions: {
	      activeTintColor: '#007bff',
	      inactiveTintColor: 'gray'
	    },
	    animationEnabled: true,   
	    swipeEnabled: true		
	}
);

const RootNavigator = createSwitchNavigator({
	App: AppNavigator,
	Splash: SplashScreen
}, {
	initialRouteName: 'Splash'
});

export default createAppContainer(RootNavigator);