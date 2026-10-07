// MOBILE MENU

function toggleMenu() {

    const menu =
        document.querySelector(".nav-links");

    menu.classList.toggle("active");

}


// EVENT REGISTRATION BUTTON

function registerEvent(eventName) {

    const eventSelect =
        document.getElementById("event");

    eventSelect.value = eventName;

    document
        .getElementById("registration")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// REGISTRATION FORM

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const selectedEvent =
            document.getElementById("event").value;

        const successMessage =
            document.getElementById("successMessage");

        successMessage.textContent =
            `Thank you ${name}! You have successfully registered for ${selectedEvent}.`;

        registrationForm.reset();

    }
);