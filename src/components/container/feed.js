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

import PostCard from '../presentational/post-card';
import { getPosts } from '../../actions';

const Feed = () => {
  const posts = useSelector(state => state.feed.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header
        barStyle="light-content"
        centerComponent={{ text: 'Feed', style: styles.headerText  }}
        containerStyle={styles.header}
      />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.container}>
            <FlatList
            data={posts}
            renderItem={(post) => {
              return (<PostCard
                  key={post.id}
                  post={post}
              />)
            }}
            keyExtractor={post => post.id}
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

export default Feed;