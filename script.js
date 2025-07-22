document.getElementById("search").addEventListener("click", function () {
  const q = document.getElementById("query");
  const query = q.value.trim();

  if (query !== "") {
    const engineInput = document.querySelector('input[name="engine"]:checked');
    const engine = engineInput ? engineInput.value : null;

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
