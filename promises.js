const promisone=new Promise(function(resolve,reject){
            // here we do our all asyn task like connecting db etc..
            setTimeout(function(){
                console.log("its is task 1");
                resolve();
            },1000);
});
promisone.then(function(){
    console.log("promise completed");
})


// promise two
const promisetwo=new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name:"sagar",
    email:"s@gmail.com"})
    },1000)
})
promisetwo.then(function(user){
     console.log(user);
})

// promise three
const promiseThree=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        error=false;
        if(!error){
            resolve({userName:"sagar",phone:"0000000"});
        }
        else{
            reject('error occcur');
        }
    },1000);
})
promiseThree.then((user)=>{
    console.log(user);
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
}).catch((user)=>{
     console.log(user);
}).finally(()=>{
    console.log("promise is either resolved or rejected");
})


// promise 5
const promiseFive=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        error=true;
        if(!error){
            resolve({userName:"five",phone:"5555555"});
        }
        else{
            reject('error occcur');
        }
    },1000);

});

// new insted of .then and catch we hadle this promise with async and await with try catch
async function handlePromiseFive(){
   try {
    const respose=await promiseFive;
    console.log(respose);
   } catch (error) {
    console.log(error);
   }
}
handlePromiseFive();
// this is how fetch work with .then ans catch
fetch("bdjdkjbdjdbdkkdddhdhkbdjhvd").then(()=>{

}).catch(()=>{

}) 