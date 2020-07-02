//generate quotes

const quotes = [
{
	name: 'Nelson Mandela',
	quote: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
},
{
	name: 'Aristotle',
	quote: 'It is during our darkest moments that we must focus to see the light.'
},
{
	name: 'Benjamin Franklin',
	quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.'
},
{
	name: 'Robert Louis Stevenson',
	quote: 'Don\'t judge each day by the harvest you reap but by the seeds that you plant.'
},
{
	name: 'Eleanor Roosevelt',
	quote: 'If life were predictable it would cease to be life, and be without flavor.'
},
{
	name: 'Walt Disney',
	quote: 'The way to get started is to quit talking and begin doing.'
}]

const quoteBtn = document.querySelector('.qBtn');
const quote = document.querySelector('#quote');
const author = document.querySelector('#author');

quoteBtn.addEventListener('click', getQuote);

function getQuote(){
	let number = Math.floor(Math.random()*quotes.length);
	// console.log(number);
	quote.innerHTML = "\"" + quotes[number].quote + "\"";
	author.innerHTML = "- " + quotes[number].name;
}