(function () {
  const quoteBtn = document.querySelector(".quotebtn button");
  const quote = document.querySelector(".quote");

  if (!quoteBtn || !quote) {
    console.error("Missing quote or button element");
    return;
  }

  function fetchQuote() {
    return fetch("https://api.kanye.rest/")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        quote.innerHTML = `<p class=" quote-body quote" id="p1">" ${data.quote} "</p>`;
      })
      .catch((error) => {
        console.error("Fetching quote failed:", error);
        quote.innerHTML = `<p class="fs-4 text-danger">Failed to fetch quote. Please try again later.</p>`;
        setTimeout(resetQuote, 3000);
      });
  }

  function resetQuote() {
    quote.innerHTML = `<p class="fs-4">Loading...</p>`;
  }

  quoteBtn.addEventListener("click", fetchQuote);

  // Call resetQuote initially to show 'Loading...'
  resetQuote();
})();
function copyQuote() {
  const quote = document.getElementById("p1");
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(quote.innerText).then(
      () => {
        window.alert("Quote copied to clipboard");
      },
      () => {
        console.error("Failed to copy quote to clipboard");
      }
    );
  } else {
    console.error("Copy to clipboard not supported");
  }
}
