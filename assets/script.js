const search = document.getElementById("search__input");

search.addEventListener("focus", searchFocus);
search.addEventListener("blur", searchBlur);

function searchFocus() {
   document.getElementById("search__ico").style.display = "none";
 }
 
 function searchBlur() {
   document.getElementById("search__ico").style.display = "block";
 }

