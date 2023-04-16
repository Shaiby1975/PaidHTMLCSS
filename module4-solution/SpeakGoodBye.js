
(function(window){
  var byespeaker = {};
 
  var speakWord = "Good bye"; 
  byespeaker.speak = function(name){

    console.log(speakWord +" "+ name);
 
   }
  window.byespeaker = byespeaker;
 })(window);
