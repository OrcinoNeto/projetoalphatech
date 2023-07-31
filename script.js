function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    
    // Adjust the threshold value (0.3) based on your preferences
    return rect.top <= windowHeight * 0.3;
  }
  
  function onScroll() {
    const sections = document.querySelectorAll('.fade-in-left, .fade-in-right, .fade-in-topo, .fade-in-botton');
    sections.forEach(section => {
      if (isElementInViewport(section)) {
        section.classList.add('fade-in');
      }
    });
  }
  
  // Trigger the function on initial page load to check if elements are already visible
  document.addEventListener('DOMContentLoaded', onScroll);
  // Trigger the function on scroll to check if elements come into the viewport while scrolling
  document.addEventListener('scroll', onScroll);