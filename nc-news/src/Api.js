
export const fetchArticles = () => {

  return fetch('https://northcoders-news-api.herokuapp.com/api/articles', {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
      
    });
};

export const changeVote = (id, incomingVote) => {
  return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => fetchArticles());
};


//////////////////////////////////////////////////  TOPICS /////////////////////////////////////////////////////////////////////


export const articlesByTopic = (topic) => {
  return fetch(`https://northcoders-news-api.herokuapp.com/api/topics/${topic}/articles`, {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
    });
  
};

export const changeTopicVote = (topic ,id, incomingVote) => {

  return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => articlesByTopic(topic));

};
/////////////////////////////////////////////////////// COMMENTS /////////////////////////////////////////////////////////////////

export const commentsByArticle = (id) => {

  return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${id}/comments`, {method: 'GET'})
    .then(res => res.json())
    .then(comments => {
      return comments;
    });

};

export const changeCommentVote = (article, id, incomingVote) => {

  return fetch(`https://northcoders-news-api.herokuapp.com/api/comments/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => commentsByArticle(article));

};

export const addComment = (id, newComment) => {
  console.log(newComment,'****************', id);
  return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${id}/comments`, {
    method: 'POST',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      comment: newComment
    })

 
  });

};
