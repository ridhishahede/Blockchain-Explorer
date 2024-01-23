<template>
        <div class="content">

        <div class="block">
          <div class="block-header">
            <!-- Block Header -->
            <h1 style="display: inline-block;"><strong>Block <span>667306</span></strong></h1>
            <!-- It is a close/open tag used to hide and show the Block content -->
            <button @click="closeHash">{{openLetter}}</button>
          </div>

          <div class="hashcontent" v-if="openHash">
          <div class="hashRow">
            <div class="hashValue">
              <p>Hash</p>
              <h4><span>000000...7c83bfa</span></h4>
            </div>
            <div class="totalFees">
              <p>Total fees</p>
              <h4>0.43 BTC ( <span style="color: #4BC441;">$13,710</span> )</h4>
            </div>
          </div>
          <div class="hashRow">
            <div class="timestamp">
              <p>TimeStamp</p>
              <h4>2021-01-23 08:47 <i>(1 hour ago)</i> </h4>
            </div>
            <div class="subsidy">
              <p>Subsidy + fees</p>
              <h4>6.68 BTC ( <span style="color: #4BC441;">$213,136</span> )</h4>
            </div>
          </div>
          <div class="hashRow">
            <div class="hashValue">
              <p>Size</p>
              <h4>1.39 MB</h4>
            </div>
            <div class="totalFees">
              <p>Miner</p>
              <h4 class="spider-pool">SpiderPool</h4>
            </div>
          </div>
          <div class="hashRow">
            <div class="timestamp">
              <p>Weight</p>
              <h4>3.99 MWU</h4>
            </div>
          </div>
        </div>

        </div>

      </div>
</template>

<script>
export default {
name: 'BlockContent',
data () {
    return {
      openHash: true,
      openLetter: 'X'
    }
  },
  methods: {
    //JS function used to close and open the BLock Content
    closeHash () {
      console.log(this.openHash)
      this.openHash = !this.openHash
      if(this.openHash) {
        this.openLetter = 'X'
      } else {
        this.openLetter = 'Open'
      }
    }
  }
}
</script>

<style scoped>
.content {
  color: white;
}

.hashcontent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #222336;
  opacity: 0.8;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  height: auto;
  flex-wrap: wrap;
}

.hashRow {
  display: flex;
  margin-bottom: 6px; 
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
}

.hashValue,
.totalFees {
  flex: 0 0 48%; /* Each element takes up 48% of the container width with a little space in between */
  background-color: #12141D;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between ;
  text-align: center;
  padding: 8px 80px 8px 20px;
  flex-wrap: wrap;
}

.hashValue p,
.totalFees p,
.timestamp p,
.subsidy p {
  margin: 0;
  font-size: 1.2rem;
}

.hashValue h4,
.totalFees h4,
.timestamp h4,
.subsidy h4 {
  margin: 5px 0;
}

.spider-pool {
  background-color: #5a5fc5;
  font-size: 0.8rem;
  padding: 3px;
}

.timestamp,
.subsidy {
  flex: 0 0 48%;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between ;
  text-align: center;
  padding: 10px 80px 10px 20px;
}


.block span {
  color: aqua;
}

.block-header {
  display: inline-block;
}

.block-header button {
  display: inline-block;
  position: absolute;
  right: 0;
  margin-right: 120px; 
  padding: 10px 15px;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  background-color: rgba(52, 152, 219, 0);
  color: white;
}

@media (max-width: 768px) {
  .content {
    margin: 20px;
  }

  .block-header {
    margin-right: 0; /*margin for button on smaller screens */
  }

  .block-header button {
    margin-right: 0; /* Removing margin for button on smaller screens */
  }

  .hashRow div {
    width: 100%;
    padding: 12px;
    box-sizing: border-box;
  }

  .hashValue,
  .totalFees,
  .timestamp,
  .subsidy {
    flex: 0 0 100%; /* Full width for smaller screens */
  }

  .hashValue,
  .totalFees,
  .timestamp,
  .subsidy {
    padding: 10px 20px; /* Adjust padding for smaller screens */
  }

  .hashValue p,
  .totalFees p,
  .timestamp p,
  .subsidy p {
    margin: 0;
    font-size: 0.8rem;
  }

  .hashValue h4,
  .totalFees h4,
  .timestamp h4,
  .subsidy h4 {
    margin: 5px 0;
    font-size: 0.8rem;
  }
}

</style>