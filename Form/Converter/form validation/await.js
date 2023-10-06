async function loadFile(){
    let fileloaded = false;

    if(fileloaded){
        return "file loaded"
    }

    else{
        throw "not loaded"
    }
}
loadFile().then(value=>console.log(value))
.catch(error=>console.log(error));

async function startProcess(){
    try{
        
        let message = await loadFile()
            console.log(message)
    }
    catch(error){
        // console.log(error)
    }

}
startProcess();