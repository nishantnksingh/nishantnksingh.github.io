(function (window) {

var names = ["Nishant", "Shubhangi", "Nancy", "Khushi", "Kalash", "Diya", "Ankit", "Bhavana", "Shiva", "Vineet"];

for (var i in names) {

  var firstLetter = ((names[i]).charAt(0)).toLowerCase();

  if (firstLetter == 'j') {
     window.byeSpeaker.speak(names[i]);
  } else {
     window.helloSpeaker.speak(names[i]);
  }
}
})(window);
