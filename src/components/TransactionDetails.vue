<template>
  <div class="container">
    <div class="small">
        <!-- id values have been stored in the data function and used -->
        <p> {{id1}} </p>
        <p>2021-01-23 08:47</p>
    </div>
    <div class="large">
        <img style="padding-right: 20px;" src="../assets/arrow.png" alt="Arrow Image">
        <div class="coinbase">
            <p>Coinbase (Newly Generated Coins)</p>
            <!-- coinbase value used from stored data -->
            <p class="coinbase-content"> {{coinbase}} </p>
        </div>
        <div class="op-return">
            <p style="color: aqua">125m2H43pwKpSZjLhMQHneuTwTJN5qRyYu</p>
            <div class="return">
                <p style="padding-right: 8px;">OP_RETURN</p>
                <p class="coinbase-content">°!©í=ÇîN UÇ={°r%qõ\ù2 n/WÅ § _t</p>
            </div>
            <div class="return">
                <p style="padding-right: 8px;">OP_RETURN</p>
                <p class="coinbase-content">°!©í=ÇîN UÇ={°r%qõ\ù2 n/WÅ § _t</p>
            </div>
            <div class="return">
                <p style="padding-right: 8px;">OP_RETURN</p>
                <p class="coinbase-content">°!©í=ÇîN UÇ={°r%qõ\ù2 n/WÅ § _t</p>
            </div>
        </div>
        <div class="btc">
            <div class="btc1">
                <p style="padding-right: 8px;">6.67966301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/green-arrow.png" alt="Image 2">
            </div>
            <div class="btc1">
                <p style="padding-right: 8px;">6.67966301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/arrow.png" alt="Image 2">
            </div>
            <div class="btc1">
                <p style="padding-right: 8px;">6.67966301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/arrow.png" alt="Image 2">
            </div>
            <div class="btc1">
                <p style="padding-right: 8px;">6.67966301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/arrow.png" alt="Image 2">
            </div>
            <div class="btc1"><button>6.67966301 BTC</button></div>
            
        </div>
    </div>
  </div>

  <br>

    <div class="container">
    <div class="small">
        <!-- id values have been stored in the data function and used -->
        <p> {{id2}} </p>
        <p>2021-01-23 08:47</p>
    </div>
    <div class="large">
        <img style="padding-right: 20px;" src="../assets/red-arrow.png" alt="Arrow Image">
        <div class="coinbase">
            <!-- vari value used from stored data -->
            <p style="color: aqua;"> {{vari}} </p> <br>
            <p>623.1 sat/vB - 68,232 sat ( <span style="color: aqua;">$21.77</span>)</p>
        </div>
            <div class="return">
                <p style="padding-right: 40px;">0.00078228 BTC</p>
                
                <!-- vari value used from stored data -->
                <p style="color: aqua;"> {{vari}} </p>
            </div>
        <div class="btc">
            <div class="btc1">
                <p style="padding-right: 8px;">6.67966301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/green-arrow.png" alt="Image 2">
            </div>
            <div class="btc1"><button>6.67966301 BTC</button></div>
            
        </div>
    </div>
  </div>

    <br>

    <div class="container">
    <div class="small">
        <!-- id values have been stored in the data function and used -->
        <p> {{id3}} </p>
        <p>2021-01-23 08:47</p>
    </div>
    <div class="large">
        <img style="padding-right: 20px;" src="../assets/red-arrow.png" alt="Arrow Image">
        <div class="coinbase">
            <!-- vari value used from stored data -->
            <p style="color: aqua;"> {{vari}} </p>
            <p class="multisig">multisig 2 of 3</p> <br>
            <p>623.1 sat/vB - 68,232 sat ( <span style="color: #4BC441;">$21.77</span>)</p>
        </div>
            <div class="return">
                <p style="padding-right: 40px; width: 150px;">0.00078228 BTC</p>

                <!-- vari value used from stored data -->
                <div>
                    <p style="color: aqua;"> {{vari}} </p>
                    <p style="color: aqua;"> {{vari}}</p>
                </div>
                
            </div>
        <div class="btc">
            <div class="btc1">
                <p style="padding-right: 8px;">6.67966301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/green-arrow.png" alt="Image 2">
            </div>
            <div class="btc1">
                <p style="padding-right: 8px;">6.00000301 BTC</p>
                <img style="margin-top: 3px;" src="../assets/red-arrow.png" alt="Image 2">
            </div>
            <div class="btc1"><button>6.67966301 BTC</button></div>
            
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'TransactionDetails',
    data () {
        return {
            id1: '18f75452814dec66956b3a85afa74926dba803bfe586caa3ef04bac6b32d102d',
            id2: '71a37623a25d8b2c2517f90cbc9ab1e9c27d189da60d9dc054bcda36b89410',
            id3: '69940359dd3b45356dc4b0e2a55c75031da2a7be9378520127b5b92cab128d16',
            coinbase: "*.)`bj/SpiderPool%mmBmR 4ç D€çÀ=.?é-% - uwÇ .xy ulä è%ò",
            vari: 'bc1pqtrc2dcs0952pr...xp8pyc3jt4lpfpaglk',
            screenSize: window.innerWidth
        }
    },
    mounted () {
        if(this.screenSize <= 1200) {
            this.id1 = '18f75...'
            this.id2 = '71a37...'
            this.id3 = '69940...'
        }
    }
}
</script>

<style scoped>
.container div {
    width: 100%;
}

.multisig {
    width: fit-content;
    padding: 3px;
    font-size: 0.9rem;
    border-radius: 10px;
    border: 1px solid black;
    background-color: yellow;
    color: black;
}

.small {
    display: flex;
    justify-content: space-between;
    text-align: center;
    color: white;
    background-color: #222336;
    padding: 0 20px;
    margin-bottom: 20px;
}

.large {
    display: flex;
    justify-content: space-around;
    color: white;
    background-color: #222336;
    padding: 20px;
    margin-bottom: 20px;
    padding: 10px;
}

.large img {
    width: 20px;
    height: 40px;
}

.op-return {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: flex-start;
    padding-left: 60px; /* Adjust the padding as needed */
}

.op-return p,
.op-return div {
    text-align: left;
}

.coinbase-content {
    width: fit-content;
    padding: 2px;
    font-size: 0.9rem;
    background-color: #4a4b51;
}

.return {
    display: flex;
    justify-content: right;
    font-size: 0.9rem;
}

.btc {
    width: fit-content;
}

.btc1 {
    display: flex;
    justify-content: right;
}

button {
    height: 35px;
    padding: 10px;
    text-align: center;
    border-radius: 10px;
    color: white;
    background-color: rgb(19, 124, 162);
    cursor: pointer;
}

@media screen and (max-width: 900px) {
  .container {
    display: block; 
    font-size: 0.8rem;
  }

  .small,
  .large {
    flex-direction: column;
    margin: 0;
    padding: 10px;
  }

  .return {
    flex-direction: column;
    margin: 0;
    padding: 10px;
  }

  .large img {
    width: 20px; /* Make the image fill the container width */
    height: auto; /* Maintain aspect ratio */
    margin-right: 0; /* Remove right margin */
  }

  .op-return {
    padding-left: 10px; /* Adjust the padding as needed for mobile */
  }

  .coinbase-content,
  .return p,
  .return div,
  .btc1 {
    text-align: left;
    justify-content: flex-start;
    padding-right: 0;
  }

  button {
    width: 100%; /* Make the button fill the container width */
  }
}

</style>