// Show button when scrolled down
window.onscroll = function () {
  const btn = document.getElementById("scrollTopBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

// Scroll to top smoothly
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
  function scrollToSection() {
    document.getElementById("target-section").scrollIntoView({ behavior: "smooth" });
  }

  document.addEventListener("DOMContentLoaded", function() {
    const readMoreLinks = document.querySelectorAll('.read-more-link');

    readMoreLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const moreText = this.previousElementSibling.querySelector('.more-text');
        
        if (moreText.hasAttribute('hidden')) {
          moreText.removeAttribute('hidden');
          this.textContent = 'Read less';
        } else {
          moreText.setAttribute('hidden', true);
          this.textContent = 'Read more';
        }
      });
    });
  });