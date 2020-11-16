document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("change").addEventListener("click", function () {
    chrome.tabs.executeScript({
      file: "js/contentScript.js",
    });
  });
});
