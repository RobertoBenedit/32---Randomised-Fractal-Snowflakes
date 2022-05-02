const canvas = document.getElementById("canvas1");
// @ts-ignore
const ctx = canvas.getContext("2d");
// @ts-ignore
canvas.width = window.innerWidth;
// @ts-ignore
canvas.height = window.innerHeight;

const maxLevel = 4;
const branches = 2;
const sides = Math.floor(Math.random() * 10 + 3);
const spread = Math.random() * 48 + 0.51;

// @ts-ignore
ctx.translate(canvas.width / 2, canvas.height / 2);

const angle = Math.PI * 2 * spread;

function drawLine(level) {
    if (level > maxLevel) return;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(50, 0);
    ctx.stroke();

    for (let i = 0; i < branches; i++) {
        ctx.save();
        ctx.translate((500 * i) / (branches + 1), 0);
        ctx.scale(0.5, 0.5);
        ctx.save();

        ctx.rotate(angle);
        drawLine(level + 1);
        ctx.restore();
        ctx.save();

        ctx.rotate(-angle);
        drawLine(level + 1);
        ctx.restore();

        ctx.restore();
    }
}

for (let i = 0; i < 5; i++) {
    drawLine(0);
    ctx.rotate((Math.PI * 2) / sides);
}
