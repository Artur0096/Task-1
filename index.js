function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < strSplit.length; i++){
        let currentWord = strSplit[i].replace(/[^a-zA-Z]+/g, '');
      let coundtOfVowels = currentWord.match(/[aeiou]/gi).length;
      let longestWordVowels = (longestWord != '' ? longestWord.match(/[aeiou]/gi).length : 0);
      if(currentWord.length >= longestWord.length && coundtOfVowels >= longestWordVowels){
              longestWord = currentWord;
       }
    }
    return longestWord;
  }
  console.log(findLongestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers" ))