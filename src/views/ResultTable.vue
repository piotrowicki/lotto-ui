<template>
  <div>
    <DataTable
      :value="results"
      :paginator="true"
      :rows="10"
      paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
      responsiveLayout="scroll">
      <Column field="numbers" header="Wynik" />
      <Column field="drawDate" header="Data losowania" :sortable="true" />
      <template #paginatorstart>
        <Button type="button" icon="pi pi-refresh" class="p-button-text" />
      </template>
      <template #paginatorend>
        <Button type="button" icon="pi pi-cloud" class="p-button-text" />
      </template>
    </DataTable>
  </div>
</template>

<script>
import LottoService from "../services/LottoService";
import Button from "primevue/button";
import Column from "primevue/column";
import DataTable from "primevue/datatable";

export default {
  data() {
    return {
      results: null,
    };
  },
  components: {
    Button,
    Column,
    DataTable,
  },
  mounted() {
    LottoService.getResults()
      .then((response) => {
        this.results = response.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>
