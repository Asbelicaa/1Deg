class Deg {
  constructor(quotes, date = false) {
    this.quotes = quotes;
    this.date = date;
  }
  makeDegElt() {
    const deg = document.createElement("div");
    deg.setAttribute("class", "deg");
    this.quotes.forEach((quote) => {
      const quoteElt = new Quote(quote.author, quote.text).makeQuoteElt();
      deg.appendChild(quoteElt);
    });
    if (this.date) {
      const date = document.createElement("p");
      date.setAttribute("class", "deg__date");
      date.innerText = "Le " + this.date;
      deg.appendChild(date);
    }
    return deg;
  }
}
class Quote {
  constructor(author, text) {
    this.author = author;
    this.text = text;
  }
  makeQuoteElt() {
    const quote = document.createElement("div");
    quote.setAttribute("class", "quote");
    const author = document.createElement("p");
    author.setAttribute("class", "quote__author");
    author.innerText = this.author;
    quote.appendChild(author);
    const text = document.createElement("p");
    text.setAttribute("class", "quote__text");
    text.innerText = this.text;
    quote.appendChild(text);
    return quote;
  }
}

const test = [
  {
    author: "Arthur",
    text: "Bah go faire un programme de reconnaissance vocale pour taper automatiquement avec une IA qui fait les comptes rendus auto",
  },
  {
    author: "Arthur",
    text: "Bah go faire un programme de reconnaissance vocale pour taper automatiquement avec une IA qui fait les comptes rendus auto",
  },
  {
    author: "Arthur",
    text: "Bah go faire un programme de reconnaissance vocale pour taper automatiquement avec une IA qui fait les comptes rendus auto",
  },
];

const deg = new Deg(test);
const degElt = deg.makeDegElt();
