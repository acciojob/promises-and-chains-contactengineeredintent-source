//your JS code here. If required.
let nameTag = document.querySelector("#name");
let ageTag = document.querySelector("#age");
let btnSubmit = document.querySelector("#btn");
const promise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (ageTag.value >= 18) {
        resolve(`Welcome, ${nameTag.value} . You can vote.`);
      }
      else{
        reject(`Oh sorry ${nameTag.value} . You aren't old enough`);
      }
    }, 4000);
  });
};
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  if (nameTag.value === "" || ageTag.value === "") {
    alert("Please enter valid details.");
  } else {
    promise().then((data) => {
      alert(data);
    }).catch((error) => {
      alert(error);
    });
  }
});
