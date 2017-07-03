const data = fetch('http://localhost:1701/users', {
     headers: new Headers({'content-type': 'application/json'})
   }).then(data => data.json());




data.catch((err) => console.log(err))

// const data = [
// 			  {
// 				"id": 1,
// 				"author": "Bryan",
// 				"text": "Whoooooaaaaa!"
// 			}, {
// 				"id": 2,
// 				"author": "Me",
// 				"text": "Tada!"
// 			}
// 			]
module.exports = data;