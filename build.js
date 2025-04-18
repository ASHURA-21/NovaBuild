document.getElementById('scrollDownBtn').addEventListener('click', () => {
    document.getElementById('targetSection').scrollIntoView({
      behavior: 'smooth'
    });
  });


  const scrollTopBtn = document.getElementById("toTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollTopBtn.style.display = "block";
    } else {
      scrollTopBtn.style.display = "none";
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

