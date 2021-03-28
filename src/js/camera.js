$(document).ready(() => {
  const { ipcRenderer } = require("electron");
  const fs = require("fs");
  //const io = require("socket.io-client");
  let video = document.querySelector("video");
  video.width = 800;
  video.height = 600;
  let photoData;
  const socket = io("http://localhost:8000");
  // ===========Camera Initialization============
  if (navigator.mediaDevices.getUserMedia) {
    window.navigator.webkitGetUserMedia(
      { video: true, audio: false },
      (stream) => {
        video.srcObject = stream;
        video.play();
        // ============Image Conversion================
        const FPS = 22;
        var resultb64 = "";
        setInterval(() => {
          var canvas = document.getElementById("canvasOutput");
          var video = document.getElementById("video");
          canvas.width = 800;
          canvas.height = 600;
          canvas.getContext("2d").drawImage(video, 0, 0, 800, 600);
          photoData = canvas
            .toDataURL("image/png")
            .replace(/^data:image\/(png|jpg|jpeg);base64,/, "");
          if (photoData) {
            socket.emit("image_send", photoData);
            // ipcRenderer.send('image', {photoData})
            // $.ajax({
            //   type: "GET",
            //   url: "http://localhost:8000/api/img",
            //   data: { img: photoData.toString() },
            //   contentType: "application/json",
            //   dataType: "json",
            //   success: (data) => {
            //     console.log(data);
            //   },
            // });
          }
        }, 10000 / FPS);
      },
      (error) => {
        console.log(error);
        console.log("Something went wrong!");
      }
    );
  }
});
