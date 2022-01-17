///////////// QUESTION 1
console.log("QUESTION 1");

let pets = [
    {type: "cat", age: 5.5,},
    {type: "dog", age: 3.8,},
    {type: "parrot", age: 4.0,},
];

pets.forEach((pet) => {
    if (pet.age >= 4) console.log(pet.type);
});

///////////// QUESTION 2
console.log("QUESTION 2");

function isBoolean(val) {
    if (typeof (val) === "boolean") {
        console.log(val)
    } else if (typeof (val) !== "boolean") {
        console.log("Please pass a boolean value in");
    }
}

isBoolean(true);

///////////// QUESTION 3
console.log("QUESTION 3");

let heading = document.getElementById("h2");

document.getElementById("myBtn").addEventListener("click", function () {
    heading.innerHTML = "Updated subheading";
    heading.style.color = "blue";
});







