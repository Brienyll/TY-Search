/**
 * Sample JavaScript code for youtube.search.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function init() {
  gapi.client.setApiKey('AIzaSyCoilAxK1nNTCQKatEIYaw2jy6rgfXz3Uk');
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
    return (videos = `<li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li>`);
  }
}

/////////////////

/**
 * Sample JavaScript code for youtube.search.list
 * See instructions for running APIs Explorer code samples locally:
 * https://developers.google.com/explorer-help/guides/code_samples#javascript
 */

function init() {
  gapi.client.setApiKey('AIzaSyCoilAxK1nNTCQKatEIYaw2jy6rgfXz3Uk');
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
  gapi.client.youtube.search
    .list({
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'viewCOunt',
      maxResults: 10
    })
    .then(
      function(response) {
        sessionStorage.setItem('viewCount', JSON.stringify(response));
      },
      function(err) {
        console.error('Execute error', err);
      }
    );

  const videoDate = gapi.client.youtube.search
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
    return (videos = `<li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li>`);
  }
  return videoDate;
}

function filterDate() {
  document.querySelector('.videos').innerHTML = '';
  const response = JSON.parse(sessionStorage.getItem('viewCount'));
  const videos = response.result.items;
  videos.forEach(item => {
    const video = getVideos(item);
    const list = document.querySelector('.videos');
    list.innerHTML += video;
  });
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    const videos = `<li class='videos'>
    <h4><iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe>${videoTitle}</h4>
    <p>${videoDescription}</p>
    </li>`;
    return videos;
  }
}

/////////////

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
        const storeID = [];
        videos.forEach(item => {
          storeID.push(item.id.videoId);
        });
        sessionStorage.setItem('storeID', storeID);
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
  const stringIDs = sessionStorage.getItem('storeID');
  const arrayID = stringIDs.split(',');
  gapi.client.youtube.videos
    .list({
      part: 'snippet,contentDetails,statistics',
      id: 'inO8G_-oKLA'
    })
    .then(
      function(response) {
        // Handle the results here (response.result has the parsed body).
        console.log('Response', response);
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
}
