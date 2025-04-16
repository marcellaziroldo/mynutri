import axios from "axios";

function calculateWaterIntake() {
    const weight = parseFloat(document.getElementById("water-weight").value);

    if (isNaN(weight) || weight <= 0) {
        document.getElementById("result").innerText = "Please enter a valid weight.";
        return;
    }

    const totalIntake = weight * 35; // ml per kg
    document.getElementById("result").innerText =
        `Recommended Water Intake: ${(totalIntake / 1000).toFixed(2)} liters/day`;
}


function calculateBMI() {
    const weight = parseFloat(document.getElementById("bmi-weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("result-bmi").innerText = "Please enter valid values.";
        return;
    }

    const bmi = weight / (height * height);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal weight";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result-bmi").innerText = 
        `Your BMI is ${bmi.toFixed(2)} (${category}).`;
}

window.calculateWaterIntake = calculateWaterIntake;
window.calculateBMI = calculateBMI;
 /*async function apiRequest () {
    const info = await axios.get("http://localhost:8080")
 console.log(info)
}*/
apiRequest()
async function apiRequest() {
    const url = 'http://localhost:8080'
     try {
       const response = await axios.get(url);
       console.log("responseFromApi",response.data)
       return response.data;
     } catch (error) {
       throw error;
     }
   }