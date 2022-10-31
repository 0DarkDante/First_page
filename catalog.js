const price = document.querySelector('#price');
const priceOut = document.querySelector('.price-output');

priceOut.textContent = price.value;

price.addEventListener('input', () => {
  priceOut.textContent=price.value;
});

// pagination
const pagin = document.getElementsByClassName("pagination"),
      BtnPagin = document.getElementsByClassName("btn_pagin");

      for (let i = 0; i < BtnPagin.length; i++) {
        BtnPagin[i].addEventListener("click", function() {
          let current = document.getElementsByClassName("active");
          current[0].className = current[0].className.replace(" active", "");
          this.className += " active";
        });
      }
