console.log(`-----Palindroma-----`)

function paliCheck(word) {
  let reverse = word.split(``)
  reverse = reverse.reverse()
  reverse = reverse.join(``)
  return word === reverse
}

let userWord = prompt(`Inserisci la parola da verificare`)

if (paliCheck(userWord)) {
  console.log(`${userWord} è un palindromo`);
} else {
  console.log(`${userWord} non è un palindromo`);
}

console.log(`-----Pari e dispari-----`)

function oddevencheck(x, ya) {
  let sum = x + y
  if (sum %2 === 0) {
    console.log(`Pari`)
  }
  else {
    console.log(`Dispari`)
  }
}

function rndmNum() {
  let rndmNum = Math.floor(Math.random() * 5 + 1)
  return rndmNum
}