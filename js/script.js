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
