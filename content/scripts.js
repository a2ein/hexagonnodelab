let graph;

function simulate() {
    const voltage = parseFloat(document.getElementById('voltage').value);
    const resistance = parseFloat(document.getElementById('resistance').value);
    const canvas = document.getElementById('simulationCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = 800;
    canvas.height = 400;

    // Calculate current using Ohm's Law: I = V / R
    const current = voltage / resistance;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw circuit components
    drawBattery(ctx, voltage);
    drawResistor(ctx, resistance);
    drawCurrentFlow(ctx, current);

    // Display result
    document.getElementById('result').innerText = `Current (I) = ${current.toFixed(2)} A`;

    // Update graph
    updateGraph(voltage, resistance);
}

function drawBattery(ctx, voltage) {
    // Draw battery symbol
    ctx.beginPath();
    ctx.moveTo(100, 150);
    ctx.lineTo(150, 150);
    ctx.moveTo(125, 140);
    ctx.lineTo(125, 160);
    ctx.moveTo(140, 140);
    ctx.lineTo(140, 160);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw voltage value
    ctx.fillStyle = 'black';
    ctx.fillText(`${voltage} V`, 110, 130);
}

function drawResistor(ctx, resistance) {
    // Draw resistor symbol
    ctx.beginPath();
    ctx.moveTo(250, 150);
    ctx.lineTo(350, 150);
    ctx.moveTo(275, 130);
    ctx.lineTo(275, 170);
    ctx.moveTo(325, 130);
    ctx.lineTo(325, 170);
    ctx.lineWidth = 2;
    ctx.strokeStyle = 'black';
    ctx.stroke();

    // Draw resistance value
    ctx.fillStyle = 'black';
    ctx.fillText(`${resistance} Ω`, 290, 130);
}

function drawCurrentFlow(ctx, current) {
    ctx.beginPath();
    ctx.moveTo(150, 150);
    ctx.lineTo(250, 150);
    ctx.moveTo(350, 150);
    ctx.lineTo(450, 150);
    ctx.lineWidth = 5;
    ctx.strokeStyle = 'green';
    ctx.stroke();

    // Draw current value
    ctx.fillStyle = 'green';
    ctx.fillText(`${current.toFixed(2)} A`, 400, 130);
}

function updateResistanceLabel() {
    const resistance = document.getElementById('resistance').value;
    document.getElementById('resistanceLabel').innerText = `${resistance} Ω`;
}

function updateGraph(voltage, resistance) {
    const current = voltage / resistance;

    if (graph) {
        graph.destroy();
    }

    const ctx = document.getElementById('graphCanvas').getContext('2d');
    graph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: Array.from({ length: 101 }, (_, i) => i), // Resistance values from 0 to 100
            datasets: [{
                label: 'Current (A)',
                data: Array.from({ length: 101 }, (_, i) => voltage / (i || 1)), // Avoid division by zero
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Resistance (Ω)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Current (A)'
                    },
                    beginAtZero: true
                }
            }
        }
    });
}
