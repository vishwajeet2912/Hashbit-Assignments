function runAll() {
    let output = "";

    // Q1
    let states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Karnataka"];
    let filteredStates = states.filter(s => !/^[aeiou]/i.test(s));
    output += "Q1: " + JSON.stringify(filteredStates) + "\n\n";


    // Q2
    let str = "I love my India";
    let reversedWords = str.split(" ").reverse().join(" ");
    output += "Q2: " + reversedWords + "\n\n";


    // Q3
    let arr = "INDIA".split("");
    arr.splice(3, 0, "O", "N", "E", "S");
    let result3 = arr.join("");
    output += "Q3: " + result3 + "\n\n";


    // Q4
    let text = "This is a simple string example";
    let vowels = text.match(/[aeiou]/gi)?.length || 0;
    let consonants = text.match(/[bcdfghjklmnpqrstvwxyz]/gi)?.length || 0;
    output += "Q4: Vowels=" + vowels + ", Consonants=" + consonants + "\n\n";


    // Q5
    function correctfn(string, wrong, correct) {
        return string.replace(wrong, correct);
    }
    output += "Q5: " + correctfn("I am hapy", "hapy", "happy") + "\n\n";


    // Q6
    let inputArr = [1,2,3,9,10,7,5,4,3];
    let answer = inputArr.filter(n => n > 5);
    output += "Q6: " + JSON.stringify(answer) + "\n\n";


    // Q7
    const students = [
        { name: "Ram", scores: [80, 70, 60] },
        { name: "Mohan", scores: [80, 70, 90] },
        { name: "Sai", scores: [60, 70, 80] },
        { name: "Hemang", scores: [90, 90, 80, 80] },
    ];

    let avgResult = students.map(s => {
        let sum = s.scores.reduce((a, b) => a + b, 0);
        return { name: s.name, average: sum / s.scores.length };
    });

    output += "Q7: " + JSON.stringify(avgResult) + "\n\n";


    // Q8
    function repeatedSum(num) {
        while (num > 9) {
            num = num.toString().split("").reduce((a, b) => a + Number(b), 0);
        }
        return num;
    }
    output += "Q8: " + repeatedSum(456) + "\n\n";


    // Q9
    function wordCount(paragraph) {
        return paragraph.trim().split(/\s+/).length;
    }
    output += "Q9: " + wordCount("This is a sample paragraph for counting words") + "\n\n";


    // Q10
    function reverseString(str) {
        return str.split("").reverse().join("");
    }
    output += "Q10: " + reverseString("Hello") + "\n\n";


    // Q11
    const data = {
        student1: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 },
        student2: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 },
        student3: { subject1:44, subject2:56, subject3:87, subject4:97, subject5:37 }
    };

    let result11 = {};

    for (let key in data) {
        let marks = Object.values(data[key]);
        let avg = marks.reduce((a, b) => a + b, 0) / marks.length;
        result11[key] = { average: Math.round(avg) };
    }

    output += "Q11: " + JSON.stringify(result11) + "\n\n";

    document.getElementById("output").innerText = output;
}