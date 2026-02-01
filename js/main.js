document.addEventListener('DOMContentLoaded', () => {
  const scrollContainer = document.querySelector('[data-scroll-container]');
  if (scrollContainer) {
    const scroller = new LocomotiveScroll({
      el: scrollContainer,
      smooth: true,
    });
    window.addEventListener('load', () => scroller.update());
  }
});
