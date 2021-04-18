var arrayOfQuotes = [

  {
    "author": "Mark Twain",
    "quote": "Gib jedem Tag die Chance, der schönste deines Lebens zu werden."
  },
  {
    "author": "Aristoteles",
    "quote": "Kluge Leute lernen auch von ihren Feinden."
  },
  {
    "author": "Jean-Jaques Rousseau",
    "quote": "Freiheit heisst nicht, alles tun zu können, was man will. Freiheit heisst, nicht alles tun zu müssen, was man soll."
  },
  {
    "author": "Nagarjuna, buddhistischer Philosoph",
    "quote": "Es gibt nur eine falsche Sicht der Dinge: der Glaube, meine Sicht sei die einzig richtige."
  },
  {
    "author": "John Lennon",
    "quote": "Es gibt nur zwei Arten zu leben. Entweder so als wäre nichts ein Wunder oder so als wäre alles ein Wunder."
  },

  {
    "author": "John Ruskin",
    "quote": "Der höchste Lohn für unsere Bemühungen ist nicht das, was wir dafür bekommen, sonder das, was wir dadurch werden."

  },
  {
    "author": "Guy de Maupassant",
    "quote": "Es sind Begegnungen mit Menschen, die das Leben Lebenswert machen."

  },
  {
    "author": "Dietrich Bonhöffer",
    "quote": "Den größten Fehler, den man im Leben machen kann, ist, immer Angst zu haben, einen Fehler zu machen."

  },
  {
    "author": "Bertolt Brecht",
    "quote": "Wer kämpft, kann verlieren. Wer nicht kämpft, hat schon verloren."

  },
  {
    "author": "Francois Duc de La Rochefoucauld",
    "quote": "Es ist leichter, anderen mit Weisheiten zu dienen, als sich selbst."
  }


]

function randomSelector(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {

  var randomNumber = randomSelector(arrayOfQuotes.length);

  document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';

  document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;

}
