

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


export const changeTopicVote = (topic ,id, incomingVote) => {

  return fetch(`https://northcoders-news-api.herokuapp.com/api/articles/${id}?vote=${incomingVote}`, {method: 'PUT'})
    .then( ()  => articlesByTopic(topic));

};

export const articlesByTopic = (topic) => {
  return fetch(`https://northcoders-news-api.herokuapp.com/api/topics/${topic}/articles`, {method: 'GET'})
    .then(res => res.json())
    .then(articles => {
      return articles;
    });

};