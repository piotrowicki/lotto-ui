<template>
  <div>
    <TabMenu :model="items" />
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu";

export default {
  data() {
    return {
      items: [
        { label: "Statystyka", icon: "pi pi-fw pi-chart-bar", to: '/lotto/stats' },
        { label: "Wyniki", icon: "pi pi-fw pi-table", to: '/lotto/results'},
      ],
    };
  },
  components: {
    TabMenu,
  },
};
</script>
