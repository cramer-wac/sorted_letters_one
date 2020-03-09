
// function alphabetize letters in a string
function alphabetize(a) {
    return a.toLowerCase().split("").sort().join("").trim();
}

// because the instructions say we need to have the function
function getAnagramsOf(word){
    // returns an array of strings
    return anagrams[word];
}

// object
// keys are the sorted letters of a word
// value is an array of all words that share that sorted word string
let anagrams = {}

// temp variables
let sortedWord = "";

for(let i = 0; i < words.length; i++){
    
    sortedWord = alphabetize(words[i]);
    // if sortedWord is in the anagram object
    // append the new rod to the sortedWord
    // else create a new key value pair
    if (sortedWord in anagrams){
        anagrams[sortedWord].push(words[i])        
    }
    else{
        anagrams[sortedWord]=[words[i]];
    }

}


// get the button from dom
const button = document.getElementById("findButton");

// function when button is clicked
button.onclick = function() {

    // get the input
    let typedText = document.getElementById("input").value;
    // sort the letters of the input
    let alphaTypedText = alphabetize(typedText);
    // get the array of anagrams
    let anagramArray = getAnagramsOf(alphaTypedText)
    // convert the array to a readable string
    let anagramString = anagramArray.join(" ");

    // create an element
    let wordDiv = document.createElement("div")
    // add the stringed anagrams to the element
    wordDiv.textContent = anagramString;
    // append that element to the body
    document.body.appendChild(wordDiv);
}