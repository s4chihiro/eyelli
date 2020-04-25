import profileReducer, { addPost, deletePost } from "./profile-reducer";

let state = {
    posts: [
      { id: '1', message: 'Hi, how are you?', likesCount: '9' },
      { id: '2', message: 'God weather!', likesCount: '10' },
      { id: '3', message: 'It\'s my first post.', likesCount: '36' }
    ]
  };

let action = addPost('test')

test('new post should be added', () => {
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4)
  expect(newState.posts[0].message).toBe('test')
});

test('new post text should be correct', () => {
  let newState = profileReducer(state, action)
  expect(newState.posts[0].message).toBe('test')
});


test('new post likesCount should be 0', () => {
  let newState = profileReducer(state, action)
  expect(newState.posts[0].likesCount).toBe('0')
});

test('deleting post', () => {
  let action = deletePost('1')
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(2)
});