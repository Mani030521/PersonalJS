const axios = require("axios")

async function sample() {
	const api = [
		{
			url: "https://api.github.com/repos/fs-opensource/futureflix-starter-kit"
		},
		{
			url: "https://api.github.com/repos/fs-opensource/android-tutorials-glide"
		}
	]

	const promises = api.map(repo => {
		return new Promise((res, rej) => {
			axios({
				method: "GET",
				url: repo.url,
				headers: {
					Accept: "application/vnd.github.v3+json"
				}
			}).then(response => {
				res(response.data.id)
			})
		})
	})
	Promise.all(promises).then(data => {
        console.log(data)
    })
}

sample()
