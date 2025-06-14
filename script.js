document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM is loaded");
  carousel_display();
  animateCounter();
  form_submit();
  // sticky_nav();
  //testimonial_function();
});

// Carousel increment
function carousel_display() {
  const images = document.querySelectorAll(".carousel-image");
  const leftBtn = document.querySelector(".left-btn");
  const rightBtn = document.querySelector(".right-btn");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  rightBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  leftBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 5000);
}

// Counter animation function
function animateCounter(el, target) {
  function animateCounter(el, target) {
    let count = 0;
    const speed = 100;

    const updateCounter = () => {
      const increment = Math.ceil(target / 100);
      if (count < target) {
        count += increment;
        el.innerText = count;
        setTimeout(updateCounter, speed);
      } else {
        el.innerText = target + "+";
      }
    };

    updateCounter();
  }

  // Grab all counter elements
  const counters = document.querySelectorAll(".counter");

  // Create the observer
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = +entry.target.getAttribute("data-target");
          animateCounter(entry.target, target);
          observer.unobserve(entry.target); // Only trigger once
        }
      });
    },
    { threshold: 0.5 }
  );

  // Observe each counter
  counters.forEach((counter) => {
    observer.observe(counter);
  });
}

function sticky_nav() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector("header");
    if (window.scrollY > 100) {
      // Change 100 to whatever offset you want
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  });
}

// function open_form() {
//   const modal = document.getElementById("modal");
//   console.log(modal);
//   if (modal) {
//     console.log(1);
//     modal.addEventListener("click", openModal);

//   }
// }

function closeModal() {
  if (typeof modal !== "undefined" && modal) {
    modal.style.display = "none";
  } else {
    console.error("Modal element not found.");
  }
}

function openModal() {
  console.log("open modal");
  if (typeof modal !== "undefined" && modal) {
    console.log("Modal ", modal);
    modal.style.display = "flex";
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
