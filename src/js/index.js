const { ipcRenderer } = require("electron");

// =============Closing the Window==============
const el = document.getElementById("close");
el.addEventListener("click", () => {
  ipcRenderer.send("close");
});
