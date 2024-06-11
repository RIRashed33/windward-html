document.addEventListener('DOMContentLoaded', function () {
    let lastScroll = 0;
    const header = document.querySelector('.header');
    const topbar = header.querySelector('.topbar');
  
    window.addEventListener('scroll', function () {
      let currentScroll = window.scrollY;
  
      if (currentScroll > 100 && lastScroll <= 100 ) {
        lastScroll = currentScroll;
        jQuery(topbar).slideUp();
        header.classList.add("header-pinned");
      } else if (currentScroll <= 100 && lastScroll > 100) {
        lastScroll = currentScroll;
        header.classList.remove("header-pinned");
        jQuery(topbar).slideDown();
      }
    }, false);
});
  