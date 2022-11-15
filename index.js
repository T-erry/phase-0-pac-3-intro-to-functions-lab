function shout(string) {
    return string.toUpperCase();
    console.log(string);
  }

  function whisper(string) {
    return string.toLowerCase();
    console.log(string);
  }

  function logShout(string){
    console.log(string.toUpperCase());
  }
  function logWhisper(string){
    console.log(string.toLowerCase());
  }
 function sayHiToHeadphonedRoommate(string){
   const lowerCase = string.toLowerCase();
   const upperCase = string.toUpperCase();
   if (string === lowerCase){
    return `I can't hear you!`;
   }else if(string === upperCase){
    return `YES INDEED!`;
   }else if(string === "Let's have dinner together!"){
    return "I would love to!";
   }
   }
  

 

