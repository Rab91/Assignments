
var vowel = "aeiou";
var result = 0;

var vowelArray = "ITTALENTHUB";

function getVowels(str){
    for(i=0;i<str.length; i++){

        if(vowel.includes(str[i].toLowerCase())){
            result++;
        }
    }
    return result;
}
document.getElementById('vowelarray').innerHTML ="<b>Vowel Array</b> &nbsp:&nbsp" + vowelArray;
console.log('vowel count is', getVowels(vowelArray))
document.getElementById('count').innerHTML = " <em>Result of vowel count is "+ result;