// Promise Concept 

const promiseOne = new Promise((resolve , reject) =>{
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


function user (username , password , islogged) {
  this.username = username 
  this.password = password 
  this.islogged = islogged 
  this.details =  function(){
    console.log(`hello ${this.username}`)
  }
   return this
  
}
// const userone = new user("Asheesh sharma " , 12121,true)
// const usertwo = new user("Jyoti Rawat" , 12121 , false)
// console.log(usertwo)
// console.log(userone.details());



