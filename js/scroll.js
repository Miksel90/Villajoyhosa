function setupScrollBehavior() {
  window.onscroll = () => {
    toggleTopButton();
  };
  document
    .getElementById("back-to-top")
    .addEventListener("click", function (event) {
      event.preventDefault();
      scrollToTop();
    });

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleTopButton() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      document.getElementById("back-to-top").classList.remove("d-none");
    } else {
      document.getElementById("back-to-top").classList.add("d-none");
    }
  }
}

setupScrollBehavior();
