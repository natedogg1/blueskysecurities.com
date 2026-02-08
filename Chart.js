<canvas id="aaplChart"></canvas>
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
async function loadChart() {
  const res = await fetch(`${API}/history/AAPL`);
  const data = await res.json();

  new Chart(document.getElementById("aaplChart"), {
    type: "line",
    data: {
      labels: data.map(d => d.date),
      datasets: [{
        label: "AAPL",
        data: data.map(d => d.price),
        borderWidth: 2,
        tension: 0.2
      }]
    }
  });
}

loadChart();
</script>
