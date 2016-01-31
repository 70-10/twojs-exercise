import Two from "two.js";

const app = document.getElementById("app");

const two = new Two({
  fullscreen: true,
  autostart: true
}).appendTo(app);

const circle = two.makeCircle(-70, 0, 50);
circle.fill = "#FF8000";
circle.stroke = "orangered";

const rect = two.makeRectangle(70, 0, 100, 100);
rect.fill = "rgba(0, 200, 255, 0.75)";
rect.stroke = "#1C75BC";

const group = two.makeGroup(circle, rect);
group.translation.set(two.width / 2, two.height / 2);
group.scale = 0;
group.noStroke();

two.bind("update", frameCount => {
  if (group.scale > 0.9999) {
    group.scale = group.rotation = 0;
  }
  const t = (1 - group.scale) * 0.125;
  group.scale += t;
  group.rotation += t * 4 * Math.PI;
}).play();
