import Two from "two.js";

const two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(document.getElementById("app"));

const rect = two.makeRectangle(two.width / 2, two.height / 2, 50, 50);

two.bind("update", () => {
  rect.rotation += 0.05;
});
