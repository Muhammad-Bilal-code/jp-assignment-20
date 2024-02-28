// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import {
  getDatabase,
  push,
  ref,
  set,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmk09LHFNYjNneMKwqNATwQCOnupLw-ws",
  authDomain: "calculator-4ccd7.firebaseapp.com",
  databaseURL: "https://calculator-4ccd7-default-rtdb.firebaseio.com",
  projectId: "calculator-4ccd7",
  storageBucket: "calculator-4ccd7.appspot.com",
  messagingSenderId: "1000118671243",
  appId: "1:1000118671243:web:00e03c65a31ee8a116c18e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase();

var fullName = document.getElementById("fullname");
var fatherName = document.getElementById("fathername");
var email = document.getElementById("email");
var phone = document.getElementById("phone");
var cnic = document.getElementById("cnic");
var fcnic = document.getElementById("fcnic");
var dob = document.getElementById("dob");
var gender = document.getElementById("selectgender");
var city = document.getElementById("selectcity");
var course = document.getElementById("selectcourse");
var address = document.getElementById("address");
var lQualification = document.getElementById("lastqualification");
var laptop = document.getElementById("laptop");

window.handleAdd = function (e) {
  e.preventDefault();
  console.log("Add Start");

  var studentData = {
    id: push(ref(database, "StudentData/")).key,
    fullName: fullName.value,
    fatherName: fatherName.value,
    email: email.value,
    phone: phone.value,
    cnic: cnic.value,
    fcnic: fcnic.value,
    dob: dob.value,
    gender: gender.value,
    city: city.value,
    course: course.value,
    address: address.value,
    lQualification: lQualification.value,
    laptop: laptop.value,
  };

  set(ref(database, `StudentData/${studentData.id}`), studentData);
  console.log("Add End");
};
