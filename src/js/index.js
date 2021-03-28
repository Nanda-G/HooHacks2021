const { ipcRenderer } = require("electron");

function setSubject(name) {
  localStorage.setItem("subject", name);
}

// =============Closing the Window==============
const el = document.getElementById("close");
el.addEventListener("click", () => {
  ipcRenderer.send("close");
});
