const { ipcRenderer } = require("electron");

function setSubject(name) {
  localStorage.setItem("subject", name);
}

$("#close").on("click", () => {
  ipcRenderer.send("close");
});
ipcRenderer.on("copy", () => {
  alert("Copy Pasting is prevented");
});
