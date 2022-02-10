//Program that returns fake random quotes

//Arrays from which the quotes will be formed
let bandArr=[];
let songArr=[];
let quoteArr=[];



//Function to generate a random Index based on the given array length
let randIndexGenerator(arr){
    let randIndex = Math.floor(Math.random*arr.lenght)
    return randIndex
}

//Link each random Index for easy calling
let bandIndex = randIndexGenerator(bandArr);
let songIndex = randIndexGenerator(songArr);
let quoteIndex = randIndexGenerator(quoteArr)