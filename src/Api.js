const webAddress = 'https://quiet-meadow-47556.herokuapp.com/api/'

export const fetchArticles = () => {

  return fetch(`${webAddress}articles`, {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
      
    });
};

export const changeVote = (id, incomingVote) => {
  return fetch(`${webAddress}articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => fetchArticles());
};


//////////////////////////////////////////////////  TOPICS /////////////////////////////////////////////////////////////////////


export const articlesByTopic = (topic) => {
  topic =  topic.charAt(0).toUpperCase() + topic.slice(1);
  return fetch(`${webAddress}topics/${topic}/articles`, {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
    });
  
};

export const changeTopicVote = (topic ,id, incomingVote) => {

  return fetch(`${webAddress}articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => articlesByTopic(topic));

};
/////////////////////////////////////////////////////// COMMENTS /////////////////////////////////////////////////////////////////

export const commentsByArticle = (id) => {
  if(id.length === 24) {
  return fetch(`${webAddress}articles/${id}/comments`, {method: 'GET'})
  
    .then(res => res.json())
    .then(comments => {
      return comments;
    });
  }
  else return '404';
};

export const changeCommentVote = (articleId, id, incomingVote) => {
  return fetch(`${webAddress}comments/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => commentsByArticle(articleId));

};

export const addComment = (id, newComment) => {
  return fetch(`${webAddress}articles/${id}/comments`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      body: newComment
    })
    
  })
  .then((res) => commentsByArticle(id));

};

export const deleteComment = (id, commentId) => {
  return fetch(`${webAddress}comments/${commentId}`, {method: 'DELETE'})
    .then( ()  => commentsByArticle(id));
};


////////////////////////////////////////////////////////////////// USERS ////////////////////////////////////////////////////////////////////////

export const getUserDetails = (username) => {
  return fetch(`${webAddress}users/${username}`, {method: 'GET'})
    .then(res => res.json())
    .then(details => {
      return details;
    });

};

export const fetchUsers = () => {

  return fetch(`${webAddress}users`, {method: 'GET'})
    .then(res => res.json())
    .then(users => {
      return users;
      
    });
};