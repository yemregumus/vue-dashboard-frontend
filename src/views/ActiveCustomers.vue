<template>
  <div class="active-customers">
    <div class="content">
      <h1>Active Customers</h1>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Active Customers</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in data" :key="item.id">
              <td>{{ formatDate(item.date_recorded) }}</td>
              <td>{{ item.active_customers }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { format } from "date-fns";

export default {
  data() {
    return {
      data: [],
    };
  },
  methods: {
    formatDate(date) {
      return format(new Date(date), "MM/dd/yyyy");
    },
    async fetchData() {
      try {
        const response = await fetch("https://vue-dashboard-backend.onrender.com/api/data");
        const data = await response.json();
        this.data = data;
      } catch (error) {
        console.error("Failed to load data", error);
      }
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>
.active-customers {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -8rem;
  min-height: 100vh;
  padding: 1rem;
  background-color: #f4f4f4;
}

.content {
  width: 100%;
  max-width: 1200px;
  background-color: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  margin-bottom: 1rem;
  color: var(--primary);
}

.table-container {
  overflow-x: auto;
}

table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
}

thead {
  background: #333;
  color: white;
}

th,
td {
  padding: 0.75rem;
  border-bottom: 1px solid #ddd;
}

tr:hover {
  background: #f1f1f1;
}

@media (max-width: 768px) {
  .content {
    padding: 1rem;
  }
  table {
    font-size: 0.875rem;
  }
  th,
  td {
    padding: 0.5rem;
  }
}
</style>
