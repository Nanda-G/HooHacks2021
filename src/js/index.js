const { ipcRenderer } = require("electron");
const test = require("./test.js");

// ============Rendering Test Data==============
for (let i = 0; i < test.length; i++) {
  $("#test").append(`
	<div class="question">${test[i].q}</div>
	`);
  for (let j = 0; j < test[i].o.length; j++) {
    $("#test").append(
      `<input class="options" type="radio" name="${test[i].id}" value="${test[i].o[j]}"><label for="${test[i].o[j]}">${test[i].o[j]}</label>`
    );
  }
}
$("#submit").on("click", () => {});

// =============Closing the Window==============
const el = document.getElementById("close");
el.addEventListener("click", () => {
  ipcRenderer.send("close");
});
