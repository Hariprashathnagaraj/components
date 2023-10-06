const takkal = new Promise((resolve,reject) => {
    let bookingSuccess = true 

    // using ternary operator

    bookingSuccess ? resolve() : reject();

})
takkal.then(success).catch(failure)    

function success(){
    alert("thank you")
}

function failure(){
    alert("sorry")
}




//using if and else
  
// if(bookingSuccess)


//     resolve()

// else


//     reject()
