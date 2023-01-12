const firebaseConfig = {
    apiKey: "AIzaSyBC656hHm9meV5eMZ-yNSf2eBXtBO1ptzM",
    authDomain: "peronal-website-2cb09.firebaseapp.com",
    databaseURL: "https://peronal-website-2cb09-default-rtdb.firebaseio.com",
    projectId: "peronal-website-2cb09",
    storageBucket: "peronal-website-2cb09.appspot.com",
    messagingSenderId: "500781727724",
    appId: "1:500781727724:web:925f4ce3727a8cd3e88ac9"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, msgContent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    msgContent: msgContent,
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};