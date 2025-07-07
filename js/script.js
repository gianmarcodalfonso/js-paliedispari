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

function oddevencheck(x, y) {
  let sum = x + y
  if (sum %2 === 0) {
    console.log(`Pari`)
    return true
  }
  else{
    console.log(`Dispari`)
    return false
  }
}

function rndmNum() {
  let rndmNum = Math.floor(Math.random() * 5 + 1)
  return rndmNum
}

let userWinCondition = prompt(`Scegli pari o dispari scrivendolo qui:`)
let userNum = prompt(`Scrivi un numero da 1 a 5:`)

let cpuNum = rndmNum();
console.log(`Il numero della cpu è: ${cpuNum}`)

let userCpuSum = oddevencheck()
console.log(userCpuSum)