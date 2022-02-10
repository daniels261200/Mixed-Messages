//Program that returns fake random quotes(Might return a real quote)

//Arrays from which the quotes will be formed
let bandArr=[];
let songArr=[];
let quoteArr=[];



//Function to generate a random Index based on the given array length
function randIndexGenerator (arr) {
    let randIndex = Math.floor(Math.random * arr.lenght);
    return randIndex;
}


console.log(`To quote from ${}`)