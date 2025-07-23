document.getElementById("search").addEventListener("click", function () {
  const query = document.getElementById("query").value.trim();

  if (query !== "") {
    const engineInput = document.querySelector('input[name="engine"]:checked');
    const engine = engineInput.value;

    const code = encodeURIComponent(query).replace(/%20/g, "+");
    let base = "";

    if (engine === "google") {
      base = "https://www.google.com/search?q=";
    } else {
      base = "https://www.bing.com/search?q=";
    }

    const final = base + code;
    window.location.href = final;
  }
});

// Add Enter key shortcut for search
document.getElementById("query").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    document.getElementById("search").click();
  }
});
