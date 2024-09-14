// Controller: Function to process cow ID
function processCowId() {
    const cowIdInput = document.getElementById("cowId").value;
    console.log("Cow ID entered:", cowIdInput);
    // Validate cow ID
    if (!/^[1-9][0-9]{7}$/.test(cowIdInput)) {
        displayResult("Invalid Cow ID! It must be an 8-digit number not starting with 0.");
        return;
    }
    console.log("Valid Cow ID. Searching in cowData...");
    const cow = getCowById(cowIdInput);

    console.log("Result of cow search:", cow);
    if (!cow) { // cowID input not match cowID in data
        displayResult("Cow not found. Please check the ID.");
        return;
    }

    const milk = cow.calMilk();
    const typeMilk = cow.checkcolor();
    console.log(`Milk production for cow with ID ${cowIdInput}:`, milk, typeMilk);
    displayResult(`Cow with ID ${cowIdInput} produces is ${milk} liters of ${typeMilk}.`);


    document.getElementById("cowId").focus();
}

// View: Function to display result in the HTML page
function displayResult(message) {
    document.getElementById("result").innerHTML = `<p>${message}</p>`;
}
