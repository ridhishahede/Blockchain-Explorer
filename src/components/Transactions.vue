<template>
  <div class="header">
    <h2>2,075 Transactions</h2>
    <!-- Pagination of Transactions -->
    <div class="pagination">
      <li class="pagination-item"><a href="#" class="pagination-link">&lt;&lt;&lt;</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">&lt;&lt;</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link active">1</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">2</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">3</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">4</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">5</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">.</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">...</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">208</a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">>></a></li>
      <li class="pagination-item"><a href="#" class="pagination-link">>>></a></li>
    </div>
  </div>

  <!-- TransactionDetails component holds the complete details of each id -->
  <TransactionDetails></TransactionDetails>

</template>

<script>
import TransactionDetails from '@/components/TransactionDetails.vue'

export default {
    name: 'Transactions',
    components: { TransactionDetails }
}
</script>

<style scoped>
.header {
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

/* Pagination Container */
.pagination {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

/* Pagination Item */
.pagination-item {
  margin: 0;
  display: inline-block;
}

/* Pagination Link */
.pagination-link {
  display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  color: aqua;
  background-color: #333;
  border: 1px solid #333;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Hover State */
.pagination-link:hover {
  background-color: #555;
}

/* Active State */
.pagination-link.active {
  background-color: #800080; /* Purple for the selected page */
  border: 1px solid #800080;
  color: #fff;
}

@media (max-width: 768px) {
    .header {
        flex-direction: column;
        text-align: center;
    }
}
</style>