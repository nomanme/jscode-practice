/* Program for Task 5*/
// Vowel or connsonant program using switch

var letter = prompt("Enter a letter : ")
letter = letter.toLowerCase()

// checking the conditions for vowel and consonant
switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        document.write("Vowel");
        break;
    default:
        document.write("Consonant");
}
// Happy coding with Mohammad Noman