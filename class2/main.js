let job = "I am a good man";
function text(string){
    let output = " ";
    for(let i =string.length-1; i>=0; i--){
        output = output + string[i];

    }
    console.log(output);
}
text(job);