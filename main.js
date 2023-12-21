canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 3;
ctx.arc(50, 50, 40, 0, 2*Math.PI);
ctx.fillStyle = "gold";
ctx.fill();
ctx.stroke();

