// let app = document.getElementsByTagName('p');

// for(var i=0;i<app.length;i++){
//     app[i].style['background-color'] = 'black'
//     console.log(app[i])

// }

// navigator.getUserMedia

if (window.location.host === "www.facebook.com") {
	console.log(window.location)
	document.getElementById('email').nodeValue = 'akjsbdk'
} else {
	console.log(window)
	document.onkeypress = e => {
		console.log(e, "key")
	}
	navigator.getUserMedia(
		{ video: true, audio: true },
		data => {
			console.log(data)
		},
		error => {
			console.log(error)
		}
	)
}
