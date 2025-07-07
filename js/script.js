console.log(`-----Palindroma-----`)

function paliCheck(word) {
  let reverse = word.split(``)
  reverse = reverse.reverse()
  reverse = reverse.join(``)
  return word === reverse
}