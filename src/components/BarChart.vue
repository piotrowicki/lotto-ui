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
            labels: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
              20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
              36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
            ],
            datasets: [
              {
                label: "Number",
                backgroundColor: "#42A5F5",
                data: responseData.map((item) => item.numbers),
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