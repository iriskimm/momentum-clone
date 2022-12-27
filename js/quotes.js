import data from '../assets/quotes.json' assert { type: 'json' };

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const quotes = data.filter(quote => quote.Quote.length < 100 && quote.Author.length < 25);
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.Quote;
author.innerText = `\n - ${todaysQuote.Author} -`;