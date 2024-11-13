document.addEventListener('DOMContentLoaded', () => {
  const contents = document.querySelectorAll('.content');
  contents.forEach((content, index) => {
    content.style.animationDelay = `${index * 0.5}s`;
  });
});