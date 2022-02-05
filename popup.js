Array.from(document.querySelector(".select-speed").children).forEach(
  (child) => {
    child.addEventListener("click", (event) => {
      const { value } = event.target.attributes["data-value"];

      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, Number(value));
      });
    });
  }
);
