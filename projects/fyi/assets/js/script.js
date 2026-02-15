//Contact Me form handling to formspree
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const successMsg = document.getElementById("formSuccess");
  
    if (!form) return; // Prevent errors if form doesn't exist on some pages
  
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent page reload
  
      const data = {
        name: document.getElementById("nameInput").value,
        email: document.getElementById("emailInput").value,
        message: document.getElementById("messageInput").value
      };
  
      fetch("https://formspree.io/f/mkgjpypn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then(response => {
          if (!response.ok) {
            return response.json().then(data => {
              console.error('Form submission error:', data);
              throw new Error(data.message || "There was an error submitting the form.");
            });
          }
          successMsg.classList.remove("d-none");
          form.reset();
        })
        .catch(error => {
          alert("Error: " + error.message);
        });
    });
  });
  
  //Enable Bootstrap tooltip
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => 
    new bootstrap.Tooltip(tooltipTriggerEl)
  );