import API from '../utils/api';
import store from '../utils/store';
import { POSTS_FAILURE } from '../actions';

export const GetPosts = () =>
  new Promise( async (resolve, reject) => {
    const users = store.getState().usersInfo.users;  // get list of users already in the store
    let promises = Promise.resolve(
      users.map(user => {
        return GetPostsByUserId(user.id);
      })
    );
    promises.then(data => {  
      Promise.all(data).finally( async () => {
        return Promise.resolve(
          await data.map(async promise => {
            let result;
            await promise.then(async r => result = r.data);
            return await result;
          })
        )
      })
      .then(data => {
        let ar = data.map(item => item.data);
        resolve(ar.flat(1));
      })
    });
  });

export const GetPostsByUserId = (userId) => 
  new Promise (async (resolve, reject) => {
    try {
      resolve(await API.get(`/users/${userId}/posts`));
    } catch (error) {
      reject(error);
    } 
  }) 

/*export const DeletePost = (postId) => 
  new Promise (async (resolve, reject) => {
    const posts = store.getState().feed.posts;
    const found = posts.find(function(post, index) {
      if(post.id == postId)
          return true;
    });
    if (found) {
      resolve(found);
    } else {
      reject(null);
    }
  })*/