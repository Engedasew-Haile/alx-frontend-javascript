function getResponseFromAPI() {
	  return new Promise((resolve, reject) => {
		      fetch('https://example.com/api')
		        .then(response => response.json())
		        .then(data => resolve(data))
		        .catch(error => reject(error));
		    });
}
