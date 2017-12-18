import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const posts = [
  {
    id: 1,
    title: 'Hello World',
    content: 'I am hello world content'
  },
  {
    id: 2,
    title: 'Jello World',
    content: 'I am jello world content'
  },
  {
    id: 3,
    title: 'Some other post',
    content: 'I am some other post'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = (post) => {
  return post.title.toLowerCase();
};

class PostApi {
  static getAllPosts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], posts));
      }, delay);
    });
  }

  static savePost(post) {
	post = Object.assign({}, post); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minTitleLength = 3;
        if (post.title.length < minTitleLength) {
          reject(`Title must be at least ${minTitleLength} characters.`);
        }

        if (post.title.length < minTitleLength) {
          reject(`Last Name must be at least ${minTitleLength} characters.`);
        }

        if (post.id) {
          const existingPostIndex = posts.findIndex(a => a.id === post.id);
          posts.splice(existingPostIndex, 1, post);
        } else {
          //Just simulating creation here.
          //The server would generate ids for new authors in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          post.id = generateId(post);
          posts.push(post);
        }

        resolve(post);
      }, delay);
    });
  }

  static deletePost(postId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfPostToDelete = posts.findIndex(post => {
          return post.id === postId;
        });
        posts.splice(indexOfPostToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default PostApi;