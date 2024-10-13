function birthCalender() {
    const birthDate = document.getElementById("birth_date").value;
    if (!birthDate) {
        document.getElementById("birthdate-display").innerHTML = "Please select a birth date.";
        return;
    }

    const today = new Date();
    const birthDateObj = new Date(birthDate);

    // Show the selected birthdate
    document.getElementById("birthdate-display").innerHTML = `Your birth date: ${birthDateObj.toDateString()}`;

    // Adjust the birth date to the current year
    birthDateObj.setFullYear(today.getFullYear());

    // If the birthday already passed this year, calculate for the next year
    if (birthDateObj < today) {
        birthDateObj.setFullYear(today.getFullYear() + 1);
    }

    // Calculate days remaining
    const diffTime = birthDateObj - today;
    const daysRemaining = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // Display days remaining until next birthday
    document.getElementById("days-left").innerHTML = `Your next birthday will be  ${daysRemaining} days later `;
}
