// initializes api key and google api client on page load
function init() {
  //set api key
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
// runs when search button is clicked
function search() {
  //read search query value
  const search = document.querySelector('#search').value;
  // remove existing html on .videos
  document.querySelector('.videos').innerHTML = '';
  // returns the result of query - via api
  return gapi.client.youtube.search
    .list({
      // set parameters needed - in this case this is by default by relevance
      part: 'snippet',
      q: search,
      type: 'video',
      maxResults: 10
    })
    .then(
      function(response) {
        const videos = response.result.items;
        // loop through results
        videos.forEach(item => {
          // call getVideos function to separate variables and build html
          const video = getVideos(item);
          //add html to .videos class
          const list = document.querySelector('.videos');
          // push html videos
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  // function to build each html video
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    return (videos = `<div class='container'><li class='video'>
    <iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe></<iframe>
    <h3 class='videoTitle'>${videoTitle}</h3>
    <p class='description'>${videoDescription}</p>
    </li></div>`);
  }
}

function filterDate() {
  //read search query value
  const search = document.querySelector('#search').value;
  // remove existing html on .videos
  document.querySelector('.videos').innerHTML = '';
  // returns the result of query - via api
  return gapi.client.youtube.search
    .list({
      // set parameters needed - in this case this is by date order descending
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'date',
      maxResults: 10
    })
    .then(
      function(response) {
        // loop through results
        const videos = response.result.items;
        videos.forEach(item => {
          // call getVideos function to separate variables and build html
          const video = getVideos(item);
          //add html to .videos class
          const list = document.querySelector('.videos');
          // push html videos
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  // function to build each html video
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    // JSX to use change variables on html output
    return (videos = `<div class='container'><li class='video'>
    <iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe></<iframe>
    <h3 class='videoTitle'>${videoTitle}</h3>
    <p class='description'>${videoDescription}</p>
    </li></div>`);
  }
}
// funtion runs when filter Date asc is clicked
function filterDateAscending() {
  //read search query value
  const search = document.querySelector('#search').value;
  // remove existing html on .videos
  document.querySelector('.videos').innerHTML = '';
  // returns the result of query - via api
  return gapi.client.youtube.search
    .list({
      // set parameters needed - in this case this is by date order descending - but
      // will be reversed later to make it ascending - can't do reverse via api request
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'date',
      maxResults: 10
    })
    .then(
      function(response) {
        const videos = response.result.items;
        // reverse the order results
        videos.reverse();
        // call getVideos function to separate variables and build html
        videos.forEach(item => {
          const video = getVideos(item);
          //add html to .videos class
          const list = document.querySelector('.videos');
          // push html videos
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  // function to build each html video
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    // JSX to use change variables on html output
    return (videos = `<div class='container'><li class='video'>
    <iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe></<iframe>
    <h3 class='videoTitle'>${videoTitle}</h3>
    <p class='description'>${videoDescription}</p>
    </li></div>`);
  }
}
//runs when filter view count desc is clicked
function filterViewCount() {
  //read search query value
  const search = document.querySelector('#search').value;
  // remove existing html on .videos
  document.querySelector('.videos').innerHTML = '';
  // returns the result of query - via api
  return gapi.client.youtube.search
    .list({
      // set parameters needed - in this case this is by date order by view count
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'viewCount',
      maxResults: 10
    })
    .then(
      function(response) {
        const videos = response.result.items;
        videos.forEach(item => {
          // call getVideos function to separate variables and build html
          const video = getVideos(item);
          //add html to .videos class
          const list = document.querySelector('.videos');
          // push html videos
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  // function to build each html video
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    // JSX to use change variables on html output
    return (videos = `<div class='container'><li class='video'>
    <iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe></<iframe>
    <h3 class='videoTitle'>${videoTitle}</h3>
    <p class='description'>${videoDescription}</p>
    </li></div>`);
  }
}
//runs when filter view count asc is clicked
function filterViewCountAscending() {
  //read search query value
  const search = document.querySelector('#search').value;
  // remove existing html on .videos
  document.querySelector('.videos').innerHTML = '';
  // returns the result of query - via api
  return gapi.client.youtube.search
    .list({
      // set parameters needed - in this case this is by date order by view count -
      // will reverse the order later client-side
      part: 'snippet',
      q: search,
      type: 'video',
      order: 'viewCount',
      maxResults: 10
    })
    .then(
      function(response) {
        const videos = response.result.items;
        // reverse the order results
        videos.reverse();
        videos.forEach(item => {
          // call getVideos function to separate variables and build html
          const video = getVideos(item);
          //add html to .videos class
          const list = document.querySelector('.videos');
          // push html videos
          list.innerHTML += video;
        });
      },
      function(err) {
        console.error('Execute error', err);
      }
    );
  // function to build each html video
  function getVideos(item) {
    const videoId = item.id.videoId;
    const videoTitle = item.snippet.title;
    const videoDescription = item.snippet.description;
    // JSX to use change variables on html output
    return (videos = `<div class='container'><li class='video'>
    <iframe class='vid' src='http://www.youtube.com/embed/${videoId}'></iframe></<iframe>
    <h3 class='videoTitle'>${videoTitle}</h3>
    <p class='description'>${videoDescription}</p>
    </li></div>`);
  }
}
