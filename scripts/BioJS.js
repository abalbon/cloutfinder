fetch('bio db goes here')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
		  for(var i = 0; i < data.length; i++){
			  var bio = document.createElement('p');
			  bio.innerHTML = '<p id="name">About: '+data[i].name+'</p><p id="bio">'+data[i].bio+'</p>';
			  document.body.appendChild(bio);
		  	console.log(data[i]);
		  }  
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });