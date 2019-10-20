(function() {
  
  
  const config ={
    apiKey:"AIzaSyCjjJjLU0S-l9B3mnmuYGtjoyClnw-ypaU", 
    authDomain:"athena-fbd2d.firebaseapp.com", 
    databaseURL:"https://athena-fbd2d.firebaseio.com",
    storageBucket:"athena-fbd2d.appspot.com",
};
firebase.initializeApp(config);
  const perObject = document.getElementById('object'); 
  
  const dbRefObject = firebase.database().ref().child('object'); 
  
  dbRefObject.on('value', snap => console.log(snap.val())); 
}());

