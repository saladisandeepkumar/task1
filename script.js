function filter(category) {
  const images = document.querySelectorAll('.image');
  images.forEach(image => {
    if (category === 'all' || image.classList.contains(category)) {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
  });
}
