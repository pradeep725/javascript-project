const quotes = [
  {
    name: "Stephen King",
    quote: "Get busy living or get busy dying.",
  },
  {
    name: " John F.Kennedy",
    quote: "Those who dare to fail miserably can achieve greatly.",
  },
  {
    name: "Mark Twain",
    quote: "Comparison is the death of joy.",
  },
  {
    name: "Leo Tolstoy",
    quote: "If you want to be happy, be.",
  },
  {
    name: "Eminem",
    quote: "Love the whole universe.",
  },
];

const quoteBtn = document.querySelector(".quoteBtn");
const quoteAuthor = document.querySelector("#quoteAuthor");
const quote = document.querySelector("#quote");

quoteBtn.addEventListener("click", displayQuote);

function displayQuote() {
  const number = Math.floor(Math.random() * quotes.length);
  quoteAuthor.innerHTML = quotes[number].name;
  quote.innerHTML = quotes[number].quote;
}

function titleCase(str) {
  var splitStr = str.toLowerCase().split(" ");
  for (var i = 0; i < splitStr.length; i++) {
    // You do not need to check if i is larger than splitStr length, as your for does that for you
    // Assign it back to the array
    splitStr[i] =
      splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  // Directly return the joined string
  return splitStr.join(" ");
}

console.log(titleCase(" why is this happening"));*/

function capitalCase(str) {
  var string = str.toLowerCase().split(" ");
  for (var i = 0; i < string.length; i++) {
    string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1);
  }
  return string.join(" ");
}
console.log(capitalCase("hello i am harry"));
