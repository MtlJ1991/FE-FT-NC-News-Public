
export const fetchArticles = () => {

  return fetch('https://quiet-meadow-47556.herokuapp.com/api/articles', {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
      
    });
};

export const changeVote = (id, incomingVote) => {
  console.log(id, incomingVote);
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => fetchArticles());
};


//////////////////////////////////////////////////  TOPICS /////////////////////////////////////////////////////////////////////


export const articlesByTopic = (topic) => {
  console.log(topic)
  topic =  topic.charAt(0).toUpperCase() + topic.slice(1);
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/topics/${topic}/articles`, {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
    });
  
};

export const changeTopicVote = (topic ,id, incomingVote) => {

  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => articlesByTopic(topic));

};
/////////////////////////////////////////////////////// COMMENTS /////////////////////////////////////////////////////////////////

export const commentsByArticle = (id) => {

  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/articles/${id}/comments`, {method: 'GET'})
    .then(res => res.json())
    .then(comments => {
      return comments;
    });

};

export const changeCommentVote = (articleId, id, incomingVote) => {
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/comments/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => commentsByArticle(articleId));

};

export const addComment = (id, newComment) => {
  console.log(newComment,'****************', id);
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/articles/${id}/comments`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      body: newComment
    })
    
    
  })
  .then( ()  => commentsByArticle(id));

};

export const deleteComment = (id, commentId) => {
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/comments/${commentId}`, {method: 'DELETE'})
    .then( ()  => commentsByArticle(id));
};


////////////////////////////////////////////////////////////////// USERS ////////////////////////////////////////////////////////////////////////

export const getUserDetails = (username) => {
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/users/${username}`, {method: 'GET'})
    .then(res => res.json())
    .then(details => {
      return details;
    });

};

export const getUserRepos = (username) => {
  return fetch(`https://quiet-meadow-47556.herokuapp.com/api/users/${username}/repos`, {method: 'GET'})
    .then(res => res.json())
    .then(repos => {
      return repos;
    });
};