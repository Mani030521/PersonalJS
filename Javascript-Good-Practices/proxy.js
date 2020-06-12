// // const axios = require("axios")

// const ins = {
// 	baseURL: "https://api.com",
// }

// const handler = {
// 	get(target, name) {
// 		return Object.assign(
// 			{},
// 			["get", "delete", "put", "patch"].reduce((obj, method) => {
// 				return Object.assign({}, obj, {
// 					[method](url = "", body = {}, params = {}) {
// 						if (method === "get" || method === "delete") {
// 							return ins.request({
// 								url,
// 								method,
// 								params: data,
// 								// headers: { "auth-token": token },
// 							})
// 						} else {
// 							return {
// 								url,
// 								method,
// 								data: body,
// 								// headers: { "auth-token": token },
// 							}
// 						}
// 					},
// 				})
// 			})
// 		)
// 	},
// }

// const api = new Proxy({}, handler)

// console.log(handler.get)


const a = ["get", "delete", "put", "patch"]
const a1 = a.reduce((prev, current, index) => {
    if(index === a.length - 1) {
        console.log('cpm')
        console.log(index)
        return Object.assign({}, {
            [prev](){
                return {
                    name: "Manikandan"
                }
            }
        })
    } else {
        return current
    }
    
})

console.log(a1)