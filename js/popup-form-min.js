var link=document.querySelector(".decision a"),popup=document.querySelector(".modal-search-form");link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-search-form-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&popup.classList.contains("modal-search-form-show")&&popup.classList.remove("modal-search-form-show")});