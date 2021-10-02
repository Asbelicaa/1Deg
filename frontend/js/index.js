const newDegForm = document.getElementById("newDegForm");

newDegForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = document.getElementById("text").value;
  const lines = text.split("\n");
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes("—")) {
      const author = lines[i].split("—")[0];
      const newQuote = {
        author,
        text: [],
      };
      let quoteEnded = false;
      for (let j = i + 1; j < lines.length; j++) {
        if (!quoteEnded) {
          if (lines[j] != "") {
            ++i;
            newQuote.text.push(lines[j]);
          } else {
            quoteEnded = true;
          }
        }
      }
      console.log(newQuote);
    }
  }
});
