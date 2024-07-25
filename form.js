const btnsub = document.querySelector(".formSubmit");
console.log(btnsub);
btnsub.addEventListener("click", (event) => {
  console.log("inside event listerns");
  event.preventDefault();

  const username = document.getElementById("username").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const Confirmpass = document.getElementById("Confirmpass").value;

  const usernameRegex = /^[A-za-z0-9 ]{3,20}$/;
  const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d)(?=.*[\w_]).{8,}$/;
  const emailRegex =
    /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-za-z]{2,}$/;
  const phoneRegex = /^[6-9][\d]{9}$/;

  // clear previous error
  document.querySelectorAll(".error").forEach((ele) => {
    ele.innerHTML = "";
  });

  let isValid = true;

  //validate username
  if (!usernameRegex.test(username)) {
    document.getElementById("usernameerror").innerHTML =
      "Username is not valid";
    isValid = false;
  }
  // validate password
  if (!passwordRegex.test(password)) {
    document.getElementById("passerror").innerHTML =
      "Password must be at least 8 characters, must include min 1 uppercase, 1 lowercase, 1 number and 1 special character";
    isValid = false;
  }
  //validate email
  if (!emailRegex.test(email)) {
    document.getElementById("emailerror").innerHTML =
      "Please enter a valid email";
    isValid = false;
  }

  //validate phone
  if (!phoneRegex.test(phone)) {
    document.getElementById("phoneerror").innerHTML =
      "Number must be 10 digits long and starts with 6 to 9";
    isValid = false;
  }

  // validate confirm password
  if (Confirmpass !== password) {
    document.getElementById("confpasserror").innerHTML =
      "Password doesn't match, please enter matching password";
    isValid = false;
  }
  let userData = [];

  if (isValid) {
    // for every input we have class formcontrol.
    let formclass = document.getElementsByClassName("form-control"); // will get htmlcollection
    // this will add user data to empty array userData.
    Array.from(formclass).forEach((ele) => {
      userData.push(ele.value);
    });
    // this will remove input values after submitin the form
    Array.from(formclass).forEach((ele) => {
      ele.value = "";
    });
    console.log(userData);
    alert("Registration successful");
  }
});
