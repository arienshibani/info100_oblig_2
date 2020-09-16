function addition() {
    //Retrieve the data from both input boxes
    input_1 = document.getElementById("text-area-1").value;
    input_2 = document.getElementById("text-area-2").value;
    //Convert them to integers, and return calculation if input is valid. Otherwise return ""Invalid Input".
    return parseInt(input_1) + parseInt(input_2) || "Invalid Input.";
}

function subtraction() {
    input_1 = document.getElementById("text-area-1").value;
    input_2 = document.getElementById("text-area-2").value;
    return parseInt(input_1) - parseInt(input_2) || "Invalid Input.";
}

function multiplication() {
    input_1 = document.getElementById("text-area-1").value;
    input_2 = document.getElementById("text-area-2").value;
    return parseInt(input_1) * parseInt(input_2) || "Invalid Input.";
}

function division() {
    input_1 = document.getElementById("text-area-1").value;
    input_2 = document.getElementById("text-area-2").value;
    return parseInt(input_1) / parseInt(input_2) || "Invalid Input.";
}

function clearEntries() {
    document.getElementById("text-area-1").value = "";
    document.getElementById("text-area-2").value = "";
    document.getElementById("result").innerText = "";
}

function showResult(result) {
    document.getElementById("result").innerHTML = "= " + result;
}
