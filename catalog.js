const price = document.querySelector('#price');
const priceOut = document.querySelector('.price-output');

priceOut.textContent = price.value;

price.addEventListener('input', () => {
  priceOut.textContent=price.value;
});

