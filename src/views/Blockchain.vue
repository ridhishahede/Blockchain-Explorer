<template>
  <div class="about">
    <div class="container-cube">
      <div class="orangeCube">
        <!-- Cube has been designed and stored in a component and reused as required -->
        <Cube sat="~9 sat/vB" satAvg="9~10 sat/vB" mb="1.21 MB" transactions="1,680 transactions in  ~40 minutes"></Cube>
        <Cube sat="~10 sat/vB" satAvg="10~10 sat/vB" mb="1.31 MB" transactions="1,680 transactions in  ~30 minutes"></Cube>
        <Cube sat="~11 sat/vB" satAvg="10~12 sat/vB" mb="1.1 MB" transactions="1,915 transactions in  ~20 minutes"></Cube>
        <Cube sat="~26 sat/vB" satAvg="12~536 sat/vB" mb="1.41 MB" transactions="2,182 transactions in  ~10 minutes"></Cube>
      </div>

      <div class="purpleCube">
        <!-- isPurple if is set to true, the cube's colour is changed to purple -->
        <Cube :isPurple="true" sat="~80 sat/vB" satAvg="30~856 sat/vB" mb="1.45 MB" transactions="2.469 transactions in  ~5 minutes" value="667314"></Cube>
        <Cube :isPurple="true" sat="~12 sat/vB" satAvg="11~781 sat/vB" mb="1.12 MB" transactions="2,341 transactions in  ~22 minutes" value="667313"></Cube>
        <Cube :isPurple="true" sat="~12 sat/vB" satAvg="12~795 sat/vB" mb="1.11 MB" transactions="2,609 transactions in  ~25 minutes" value="667312"></Cube>
        <Cube :isPurple="true" sat="~13 sat/vB" satAvg="13~340 sat/vB" mb="1.09 MB" transactions="3,020 transactions in  ~28 minutes" value="667311"></Cube>
      </div>
      
    </div>
    
    <hr class="custom-hr">

<div class="block-content">
<BlockContent></BlockContent> <br>
<Transactions></Transactions>
</div>
    

  </div>
</template>

<script>
import Cube from '@/components/Cubes.vue';
import BlockContent from '@/components/BlockContent.vue'
import Transactions from '@/components/Transactions.vue'

export default {
  name: 'Blockchain-Explorer',
  components: { Cube , BlockContent , Transactions},
  mounted() {
    this.updateBackgroundColor();
  },
  methods: {
    updateBackgroundColor() {
      const body = document.querySelector('body');
      body.style.background = '#000000';
    }
  },
}
</script>

<style scoped>
body.blue-background {
  background-color: #003049;
}

body.black-background {
  background-color: black;
}

body, h1, p, div {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container-cube {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 20px;
  position: relative;
}

/* CSS for the dotted vertical line in between the cubes */
.orangeCube::after {
  content: "";
  position: absolute;
  height: 100%;
  background-color: transparent;
  border-left: 4px dashed white; 
  border-spacing: 2px;
  top: 0;
  left: 50%;
  transform: translateX(-30%);
}

.custom-hr {
  border: none; 
  border-top: 4px solid white; 
  margin: 20px 120px; 
}

.block-content {
  padding: 0;
  box-sizing: border-box;
  margin: 20px 100px;
}

</style>
