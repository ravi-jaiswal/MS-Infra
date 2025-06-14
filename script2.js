document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded");
  form_submit();
  // sticky_nav();
  //testimonial_function();
});
function openModal() {
  console.log("open modal");
  const modal = document.getElementById("modal");
  console.log("Modal ", modal);
  if (modal) {
    modal.style.display = "flex";
  } else {
    console.error("Modal element not found.");
  }
}

function closeModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
  } else {
    console.error("Modal element not found.");
  }
}

function form_submit() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    contactForm.addEventListener("submit", async function (e) {
      e.preventDefault(); // stop normal form submission

      const form = e.target;
      const data = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: {
            Accept: "application/json",
          },
        });

        if (response.ok) {
          alert("Thank you! Your form has been submitted.");
          form.reset(); // optional: clear the form
          closeModal(); // optional: close the modal
        } else {
          alert("Oops! Something went wrong.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form.");
      }
    });
  } else {
    console.error("Contact form not found.");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const headerEl = document.querySelector(".header");
  const btnMobileNav = document.querySelector(".btn-mobile-nav");

  btnMobileNav.addEventListener("click", function () {
    headerEl.classList.toggle("nav-open");
  });
});
