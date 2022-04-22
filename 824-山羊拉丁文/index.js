/**
 * @description 824-山羊拉丁文
 * @author 氧化氢
 */

/**
 * @param {string} sentence
 * @return {string}
 */
 var toGoatLatin = function(sentence) {
  sentence = sentence.split(" ")
  var word, fill
  for(var i = 0; i < sentence.length; i++) {
      word = sentence[i]
      fill = 'a'.repeat(i + 1)
      if(isVovel(word[0])) sentence[i] = word + 'ma' + fill
      else sentence[i] = word.substring(1) + word[0] + 'ma' + fill
  }

  return sentence.join(" ")
};

function isVovel(char) {
  var vovels = 'aeiouAEIOU'
  
  return vovels.includes(char)
}