//Variables
const homePage = document.querySelector(".main-container");
const successfulPay = document.querySelector("#message");
const goodbyeMessageContainer = document.querySelector(".goodbye-message");

const fullname = document.getElementById("full-name");
const userEmail = document.getElementById("user-email");
const airtimeAmount = document.getElementById("airtime-amount");
const userNum = document.getElementById("Phone-number");
const networkLogo = document.querySelector(".network-logo");
const paymentButton = document.querySelector(".btn-pay");
const cancelButton = document.querySelector(".btn-cancel");

const closeSucessMessage = document.querySelector(".close-message");
const closeGoobyeMessage = document.querySelector(".close-goodbye");
const paymentMessage = document.querySelector(".text");
const goodbyeMessage = document.querySelector(".goodbye-text");
const inputValues = document.getElementsByTagName("input");
const alertBox = document.querySelector(".alert");

//Click events for the buttons
paymentButton.addEventListener("click", (e) => {
  homePage.style.display = "none";
  successfulPay.style.display = "block";
  paymentMessage.innerHTML = `
        Hello ${fullname.value}, <br />
        you have succesfully purchased <br />
        #${airtimeAmount.value} airtime from Phonie 🎉
        `;
});

cancelButton.addEventListener("click", () => {
  homePage.style.display = "none";
  goodbyeMessageContainer.style.display = "block";
});

closeSucessMessage.addEventListener("click", () => {
  goodbyeMessageContainer.style.display = "block";
  homePage.style.display = "none";
  successfulPay.style.display = "none";
  goodbyeMessage.innerHTML = `Goodbye ${fullname.value} , from Phonie! 👋`;
});
closeGoobyeMessage.addEventListener("click", () => {
  goodbyeMessageContainer.style.display = "none";
  homePage.style.display = "block";
  successfulPay.style.display = "none";
  goodbyeMessage.innerHTML = `Goodbye ${fullname.value} , from Phonie! 👋`;
});

//Detect the User Network Provider
userNum.addEventListener("input", getVal);

const mtnCodes = [
  "0803",
  "0806",
  "0814",
  "0810",
  "0813",
  "0816",
  "0703",
  "0903",
  "0906",
];

const etisalatCodes = ["0809", "0817", "0818", "0908", "0909"];

const airtelCodes = [
  "0802",
  "0808",
  "0812",
  "0708",
  "0701",
  "0902",
  "0901",
  "0907",
];

const gloCodes = ["0805", "0807", "0811", "0815", "0705", "0905"];

function getVal() {
  for (let i = 0; i < mtnCodes.length; i++) {
    if (userNum.value.startsWith(mtnCodes[i])) {
      networkLogo.innerHTML =
        '<img class="mtn-logo" src="./images/mtn-logo.png" alt="" />';
    }
  }
  for (let i = 0; i < etisalatCodes.length; i++) {
    if (userNum.value.startsWith(etisalatCodes[i])) {
      networkLogo.innerHTML =
        '<img class="etisalat-logo" src="./images/etisalat-logo.png" alt="" />';
    }
  }
  for (let i = 0; i < airtelCodes.length; i++) {
    if (userNum.value.startsWith(airtelCodes[i])) {
      networkLogo.innerHTML =
        '<img class="airtel-logo" src="./images/airtel-logo.png" alt="" />';
    }
  }
  for (let i = 0; i < gloCodes.length; i++) {
    if (userNum.value.startsWith(gloCodes[i])) {
      networkLogo.innerHTML =
        '<img class="glo-logo" src="./images/glo-logo.jpg" alt="" />';
    }
  }
}

getVal();
