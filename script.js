const donationForm = document.getElementById("donationForm");

donationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const amount = document.getElementById("amount").value;
    const cause = document.getElementById("cause").value;

    // This will Save data in localStorage
    const donationData = {
        name: name,
        email: email,
        amount: amount,
        cause: cause
    };
    localStorage.setItem("donationData", JSON.stringify(donationData));

    // This will Redirect to card details page
    window.location.href = "card-details.html";
});