const btnCalculation = document.getElementById("btnCalculation");

btnCalculation.addEventListener("click", () => {
  let Weight = document.getElementById("inputWeight").value;
  let Height = document.getElementById("inputHeight").value;
  let resultBMI = document.getElementById("resultBMI");

  let calculate = parseInt(Weight) / (parseInt(Height) / 100) ** 2;

  let status = "";

  if (calculate.toFixed(1) > 30) {
    status = "Obesity";
  } else if (calculate.toFixed(1) >= 25 && calculate.toFixed(1) <= 29.9) {
    status = "Overweight";
  } else if (calculate.toFixed(1) >= 18.5 && calculate.toFixed(1) <= 24.9) {
    status = "Normal";
  } else if (calculate.toFixed(1) < 18.5) {
    status = "Underweight";
  }

  if (Weight == "" || Height == "") {
    resultBMI.innerHTML =
      "Your input is <strong>Empty</strong>, please fill in the input!";
  } else if (isNaN(calculate.toFixed(1))) {
    resultBMI.innerHTML = `What you input is <strong>Not A Number</strong>, please input a <strong>Number!</strong> `;
  } else {
    resultBMI.innerHTML = `Your BMI is <strong>${calculate.toFixed(
      1
    )}</strong> which means You are <strong>${status}</strong>`;
  }
});
