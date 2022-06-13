console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum (numbers) {
    let sum = 0;

    numbers.forEach((number) => {
        sum += number;
    });

    console.log(arraySum(numbers));
    //sum is 15

    return sum;
}
// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

const favBook = {};

favBook.title = "The House At Sugar Beach";
favBook.author = "Helene Cooper";
favBook.pageCount = 370;
favBook.readCount = 4;

console.log(favBook);




// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog.";

function reverseWords(sentence) {
    let words = sentence.split(" ");
    let letters = words.split("");
    return letters.join("");

    console.log(words);
    console.log(reverseWords(sentence));

}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
function csvConverter(data) {
    let rows = data.split("\n");
    let headers = rows[0].split(","); // ["name," "age"]

    for (let i = 1; i < rows.length; i++) {
        let object = {};
        let data = rows[i].split(","); // ex ["Frodo", 50]
        data.forEach((val, index) => {
            object[headers[index]] = val;
        });
    }

return output;
console.log(csvConverter(csvData));
}