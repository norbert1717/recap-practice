function pow(number1, number2) {
    // return number1 ** number2
    return Math.pow(number1, number2);
} 
// console.log(pow(10, 3));

//sziasztok én norbi vagyok
//sziasztok né norbi koygav
function funnySentence(sentence) {
    let words = sentence.split(" ");

    let newWords = words.map((word, index) => index % 2 === 1 ? word.split("").reverse().join("") : word)
    console.log(newWords);
    /* let newSentence = [];

    for (let i = 0; i < words.length; i++) {
        if (i % 2 === 1) {
            newSentence.push(words[i].split("").reverse().join(""));
        } else {
            newSentence.push(words[i]);
        }
    }
        return newSentence.join(" ");
    */
    return newWords.join(" ");
} 

console.log(funnySentence(("sziasztok én norbi vagyok")));