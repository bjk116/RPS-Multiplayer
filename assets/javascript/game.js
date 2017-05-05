// Initialize Firebase
var config = {
  apiKey: "AIzaSyD-4VhCIktx3Of8cZ4XUgpvUqM7Qx5QaNc",
  authDomain: "rps-multiplayer-8b1d7.firebaseapp.com",
  databaseURL: "https://rps-multiplayer-8b1d7.firebaseio.com",
  projectId: "rps-multiplayer-8b1d7",
  storageBucket: "rps-multiplayer-8b1d7.appspot.com",
  messagingSenderId: "759752311401"
};
firebase.initializeApp(config);

var database = firebase.database();

/*
  Initial Start:
    2 people go on website and enter name
      First player to enter name -> becomes player 1
      Second Player enter name -> becomes player 2
    Player 1 & 2 click on their choice
      Compare Player 1 and 2 choices
        Click on image with event listenter
          Compare choices
            Increment wins/losses apprropriately
    If player X leaves - 
      changes player X wins/losses back to 0, preserve other players info
    Event listener for chat - 
      Upon enter - see who typed, enter into database?
      If disconnect - create disconnect message
*/