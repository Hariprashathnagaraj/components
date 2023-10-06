//async - it makes a function return a promise

async function loadFile(){

    let fileloaded = true;
    
    if(fileloaded){
        return "File loaded";
    }
    else{
        throw "file not loaded";
    }
}

loadFile().then(value=>console.log(value))
          .catch(error=>console.log(error));


// using ternary operator


          //     async function loadFile() {
//     let fileloaded = true;
//     return fileloaded ? "File loaded" : Promise.reject("File not loaded");
// }

// loadFile()
//     .then(value => console.log(value))
//     .catch(error => console.log(error));

