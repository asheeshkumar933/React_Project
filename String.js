// Promise Concept 

const promiseOne = new Promise(function(resolve , reject){
  let error = false
  if (!error) {
    resolve({
      username :"Asheesh sharma",
      password : 1234
    })
  } else {
    reject("wrong")
  }
 
 
})
// promiseOne.then((user) =>{
//   console.log(user);
  
// }).then((username) =>{
//   console.log(username);
// })

// async  function newpromise() {
// try {
//   const response =  await promiseOne

//   console.log("asyn task " ,response.username);
// } catch (error) {
//   console.log(error);
// }
  
// }
// newpromise()



