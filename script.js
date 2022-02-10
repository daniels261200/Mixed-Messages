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

//Link each random Index for easy calling
let bandIndex = randIndexGenerator(bandArr);
let songIndex = randIndexGenerator(songArr);
let quoteIndex = randIndexGenerator(quoteArr)

//Link each random piece of info for easy calling

let randBand= bandArr[bandIndex]
let randSong= songArr[songIndex]
let randQuote= quoteArr[quoteIndex]

console.log(`To quote from ${randBand}'s ${randSong} "${quoteArr}".`)