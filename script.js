//Program that returns fake random quotes(Might return a real quote)

//Arrays from which the quotes will be formed
let bandArr=[
'Green Day',
'BORNS',
'Natalie Imbruglia',
'Eminem',
'Kings of Leon',
'Foreigner',
'Eminem',
'Band of Horses',
'Simple Plan',
'YellowCard',
'Hechizeros Band',
'Natalia Lafourcade',
'Mumford & Sons',
'My Chemical Romance',
'The Kooks',
'Foo Fighters',
'James Blunt',
'Baltimora',
'Coldplay',
'Bon Jovi',
];


let songArr=[
    "Macy's Day Parade",
    "Electric Love",
    "Torn",
    "Lose Yourself",
    "Sex on Fire",
    "I Want to Know What Love Is",
    "Why Don't You Get a Job",
    "Berserk",
    "The Funeral",
    "Perfect",
    "Only One",
    "El Sonidito",
    "Nunca Es Suficiente",
    "I Will Wait",
    "The World is Ugly",
    "She Moves On Her Own Way",
    "Best of You",
    "You're Beautiful",
    "Tarzan Boy",
    "The Scientist",
    "It's My Life",
];


let quoteArr=[
    "Today's the Macy's day parade.",
    "You're like lighting in a bottle.",
    "There's nothing where he used to lie",
    "His palms are sweaty, knees weak, arms are heavy,",
    "Lay where you're layin.",
    "I want to Know what love is.",
    "My friend's got a gf and he hates that bitch.",
    "We re going to rock this house until we knock it down.",
    "At every occasion, I'll be ready for a funeral.",
    "I'm sorry I cant be perfect.",
    "You're my only one.",
    "tititititititititit.",
    "Nunca es suficiente para mi.",
    "I will wait for you.",
    "Cause the world is ugly but you're beautiful to me.",
    "But uh oh, she came to my show just to hear about my day.",
    "Is someone getting the best, the best, the best of you.",
    "You're beautiful.",
    "Oh-oh-oh-oh-oh-oh-oh-oh.",
    "Nobody said it was easy no one ever said it would be so hard.",
    "I just want to live while I'm alive.",
];



//Function to generate a random Index based on the given array length
function randIndexGenerator (arr) {
    let randIndex = Math.floor(Math.random * arr.lenght);
    return randIndex;
};

//Link each random Index for easy calling
let bandIndex = randIndexGenerator(bandArr);
let songIndex = randIndexGenerator(songArr);
let quoteIndex = randIndexGenerator(quoteArr);

//Link each random piece of info for easy calling

let randBand= bandArr[bandIndex];
let randSong= songArr[songIndex];
let randQuote= quoteArr[quoteIndex];

console.log(`To quote from ${randBand}'s ${randSong} "${quoteArr}".`);