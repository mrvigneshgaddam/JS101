function input() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let division = document.getElementById("division").value;
    let feedback = document.getElementById("feedback").value;

    document.getElementById("myP").textContent = ` Thankyou for your feedback ${name}`
    console.log("Name:", name);
    console.log("\nEmail:", email);
    console.log("\nDivision:", division);
    console.log("\nFeedback:", feedback);
}