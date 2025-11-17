// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
});


// Auto-update year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const currentYear = new Date().getFullYear();
  yearSpan.textContent = currentYear;
});

//wave
    let waves = document.getElementById('wave');

    setInterval(() => {
      waves.style.display = 
        (waves.style.display === 'none' || waves.style.display === '') 
        ? 'block' 
        : 'none';
    }, 5000);


  //education
  function showEducation(className) {
  const sections = ['.x', '.xii', '.grad'];
  const buttons = ['edu1', 'edu2', 'edu3'];
  
   document.querySelector('.classroom').style.display='none';
  // Loop through all sections and buttons
  sections.forEach((sec, i) => {
    // Show the selected section, hide others
    document.querySelector(sec).style.display = (sec === className) ? 'block' : 'none';
    
    // Highlight the matching button, reset others
    if (sec === className) {
      document.getElementById(buttons[i]).style.background = 'green';
    } else {
      document.getElementById(buttons[i]).style.background = '#111827'; 
    }
  });
}


document.getElementById('edu1').addEventListener('click', () => showEducation('.x'));
document.getElementById('edu2').addEventListener('click', () => showEducation('.xii'));
document.getElementById('edu3').addEventListener('click', () => showEducation('.grad'));

 
/*fake form*/
  const form = document.getElementById("contactForm");
  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page refresh

    // Show success message
    successMsg.classList.remove("hidden");

    // Optional: Clear form fields
    form.reset();

    // Hide success message after 5 seconds
    setTimeout(() => {
      successMsg.classList.add("hidden");
    }, 5000);
  });
/*end*/

//
const btn = document.getElementById("backToTop");

  // Show button when scrolling down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      btn.classList.remove("hidden");
    } else {
      btn.classList.add("hidden");
    }
  });

  // Scroll to top on click
  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

/*AOS*/
AOS.init();
  
