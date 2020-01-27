function init() {
  gapi.client.setApiKey('AIzaSyCAIjyqYAvgYw_bs8fvHl_Cy8E-JKmhIIA');
  return gapi.client
    .load('https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest')
    .then(
      function() {
        console.log('GAPI client loaded for API');
      },
      function(err) {
        console.error('Error loading GAPI client for API', err);
      }
    );
}
// Make sure the client is loaded and sign-in is complete before calling this method.
function execute() {
  const search = document.querySelector('#search').value;
  return gapi.client.youtube.search
    .list({
      part: 'snippet',
      q: search,
      type: 'video',
      maxResults: 10
    })
    .then(
      function(response) {
        console.log('Response', response);
        const videos = response.result.items;
        videos.forEach(item => {
          const video = getVideos(item);
          const list = document.querySelector('.videos');
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    return (videos = `<div class='container'><li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li></div>`);
  }
}

function filterDate() {
  const search = document.querySelector('#search').value;
  document.querySelector('.videos').innerHTML = '';
  return gapi.client.youtube.search
    .list({
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'date',
      maxResults: 10
    })
    .then(
      function(response) {
        console.log('Response', response);
        const videos = response.result.items;
        videos.forEach(item => {
          const video = getVideos(item);
          const list = document.querySelector('.videos');
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    return (videos = `<div class='container'><li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li></div>`);
  }
}

function filterDateAscending() {
  const search = document.querySelector('#search').value;
  document.querySelector('.videos').innerHTML = '';
  return gapi.client.youtube.search
    .list({
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'date',
      maxResults: 10
    })
    .then(
      function(response) {
        console.log('Response', response);
        const videos = response.result.items;
        videos.reverse();
        videos.forEach(item => {
          const video = getVideos(item);
          const list = document.querySelector('.videos');
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    return (videos = `<div class='container'><li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li></div>`);
  }
}

function filterViewCount() {
  const search = document.querySelector('#search').value;
  document.querySelector('.videos').innerHTML = '';
  return gapi.client.youtube.search
    .list({
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'viewCount',
      maxResults: 10
    })
    .then(
      function(response) {
        console.log('Response', response);
        const videos = response.result.items;
        videos.forEach(item => {
          const video = getVideos(item);
          const list = document.querySelector('.videos');
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    return (videos = `<div class='container'><li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li></div>`);
  }
}

function filterViewCountAscending() {
  const search = document.querySelector('#search').value;
  document.querySelector('.videos').innerHTML = '';
  return gapi.client.youtube.search
    .list({
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'viewCount',
      maxResults: 10
    })
    .then(
      function(response) {
        console.log('Response', response);
        const videos = response.result.items;
        videos.reverse();
        videos.forEach(item => {
          const video = getVideos(item);
          const list = document.querySelector('.videos');
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    return (videos = `<div class='container'><li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li></div>`);
  }
}
