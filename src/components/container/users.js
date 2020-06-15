import React, { useState, useEffect } from 'react'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import { useDispatch, useSelector } from "react-redux";

import {
  Header
} from 'react-native-elements';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import UserCard from '../presentational/user-card';
import { getAllUsers } from '../../actions';

const Users = () => {
  //const [ state, setState ] = useState({ users:[] });
  const users = useSelector(state => state.usersInfo.users); //const userList = useSelector(state => state.usersInfo.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    //setState({ users: userList });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header
        barStyle="light-content"
        centerComponent={{ text: 'Users', style: styles.headerText  }}
        containerStyle={styles.header}
      />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <FlatList
            data={users}
            renderItem={(user) => {
              return (<UserCard
                  key={user.id}
                  user={user}
              />)
            }}
            keyExtractor={user => user.id}
          />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  headerText: { 
    color: '#fff', fontSize: 20, fontWeight: 'bold' 
  },
  header: {
    backgroundColor: '#007bff',
    justifyContent: 'space-around',
    padding: 15,
    height: 60,
  },
});

export default Users;