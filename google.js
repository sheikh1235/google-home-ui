var searchInput = document.getElementById("search_bar_input");

searchInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    alert(e.target.value);
  }
});
