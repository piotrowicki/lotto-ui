<template>
  <div class="p-chart">
    <h2>Duży lotek:</h2>
    <Chart type="bar" :data="chartData" :options="options" />
  </div>
</template>

<script>
import Chart from "primevue/chart";
import ChartService from "../services/ChartService";

export default {
  data() {
    return {
      chartData: "",
      options: {
        responsive: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
  components: {
    Chart,
  },
  methods: {
    renderChart() {
      ChartService.fetchData()
        .then((response) => {
          const responseData = response.data;
          this.chartData = {
            labels: responseData.map((item) => item.number),
            datasets: [
              {
                label: "Numer",
                backgroundColor: "#42A5F5",
                data: responseData.map((item) => item.quantity),
              },
            ],
          };
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.renderChart();
  },
};
</script>