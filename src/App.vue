<template>
  <DataTable title="Colecciones" :headers="headers" :data="sessions" :loading="loading" />
</template>

<script>
import DataTable from "./components/DataTable.vue";

export default {
  components: {
    DataTable
  },
  data() {
    return {
      sessions: [],
      loading: true,
      headers: [
        { id: 1, title: "ID", key: "id", type: "id" },
        { id: 2, title: "Name", key: "name", type: "text" },
        { id: 3, title: "Date", key: "modified", type: "date" },
        { id: 4, title: "Decode", key: "structure_decode", type: "bool" },
        { id: 5, title: "Access Group Name", key: "access_group_name", type: "text" },
      ]
    }
  },
  methods: {
    fetchData() {

      fetch("http://localhost:3001/")
        .then(res => res.json())
        .then(data => {
          this.sessions = data;
          this.loading = false;
        })
        .catch(err => {
          this.loading = false;
          console.error(err);
        });
    }
  },
  mounted() {
    this.fetchData();
  },
}
</script>

