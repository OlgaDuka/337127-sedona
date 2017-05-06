  var link = document.querySelector(".decision a");
  var popup = document.querySelector(".modal-search-form");
  var map = document.querySelector(".map-content");

  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-search-form-show");
    map.classList.toggle("map-content-show");
  });

  window.addEventListener("keydown", function (evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-search-form-show")) {
        popup.classList.remove("modal-search-form-show");
        map.classList.add("map-content-show");
      }
    }
  });
