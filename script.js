const bttn = document.getElementById('bttn');
const output = document.getElementById('output');
const title = document.getElementById('title');



let Quotes = [
    {
        text: "Gnenius is one percent inspiration and ninety nine percent perspiration.",
        author: "Thomas Edition",
    },

    {
        text: "Be yourself; everyone else is already taken.",
        author: "JavaScript",
    },

    {
        text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
        author: "HTML CSS",
    },

    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "React",
    }
]; 

bttn.addEventListener('click', function(){
    var randomQuote = Quotes[Math.floor(Math.random()*Quotes.length)]
   output.innerHTML=randomQuote.text;
   
})