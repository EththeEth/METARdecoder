// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {

  const metar = parseMETAR("KCLE 220136Z 31006KT 10SM FEW020 BKN024 OVC049 22/21 A2984 RMK AO2 RAE04 P0000 T02220206");

  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
//        alert(metar.station);
        $("body").css("background-color","green");
      },
    });
 });
