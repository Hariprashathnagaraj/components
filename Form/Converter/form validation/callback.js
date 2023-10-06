//call back

//call a fucntion inside a function isnside a function is known as callback function

function executive(a,b,cb){
    var result = a+b;
    cb(result);
}
executive(5,10, function (resultdata){
    console.log(resultdata/2);
});

 