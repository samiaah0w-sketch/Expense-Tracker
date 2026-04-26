document.addEventListener("DOMContentLoaded", function () {

    emailjs.init('uHVbswJzJ1tprSWcU');

    const form = document.getElementById("contactForm");
    const messageBox = document.getElementById("formMessage");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();

        // Reset message box
        messageBox.className = "alert d-none mt-3";
        messageBox.innerText = "";

        // ❌ Validation
        if (!name || !email || !message) {
            messageBox.classList.remove("d-none");
            messageBox.classList.add("alert-danger");
            messageBox.innerText = "Please fill in Name, Email, and Message before sending.";
            return;
        }

        const templateParams = { name, email, message };

        emailjs.send('service_sr4sxco', 'template_t60seqh', templateParams)
            .then(function() {

                // ✅ Success message on page
                messageBox.classList.remove("d-none");
                messageBox.classList.add("alert-success");
                messageBox.innerText = "Thanks for reaching out! We’ve received your message and will get back to you shortly.";

                form.reset();
                messageBox.classList.remove("d-none");

                setTimeout(() => {
                    messageBox.classList.add("d-none");
                }, 3000);
            })
            .catch(function() {

                // ❌ Error if EmailJS fails
                messageBox.classList.remove("d-none");
                messageBox.classList.add("alert-danger");
                messageBox.innerText = "Something went wrong. Please try again later.";
            });

    });

});