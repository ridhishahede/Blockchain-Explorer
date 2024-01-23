<template>
  <!-- SVG of distroted circle -->
  <svg class="distortedCircle" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs> 
      <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop id="stop1" stop-color="rgba(255, 147.73, 182.619, 1)" offset="0%"></stop>
        <stop id="stop2" stop-color="rgba(232, 110, 179, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    
    <path fill="url(#sw-gradient)" d="M18,-26C22.5,-21.5,24.9,-15.2,26.5,-8.9C28,-2.7,28.8,3.4,28.7,11C28.6,18.6,27.6,27.6,22.7,31.7C17.7,35.9,8.9,35.1,1.8,32.5C-5.2,30,-10.3,25.7,-16.8,22C-23.2,18.4,-30.9,15.5,-33.8,10.2C-36.6,4.8,-34.6,-2.9,-31,-8.9C-27.5,-15,-22.4,-19.4,-17,-23.7C-11.5,-27.9,-5.8,-32,0.5,-32.7C6.7,-33.3,13.5,-30.6,18,-26Z" width="100%" height="100%" transform="translate(50 50)" stroke-width="0" style="transition: all 0.3s ease 0s;"></path>
  </svg>

<!-- SVG of big circle -->
  <svg class="circle1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <linearGradient id="my-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop stop-color="rgba(255, 147.73, 182.619, 1)" offset="0%"></stop>
        <stop stop-color="rgba(232, 110, 179, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    
    <circle cx="50" cy="50" r="50" fill="url(#my-gradient)" />
  </svg>

<!-- SVG of small circle -->
  <svg class="circle2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
      <linearGradient id="my-gradient" x1="0" x2="1" y1="1" y2="0">
        <stop stop-color="rgba(255, 147.73, 182.619, 1)" offset="0%"></stop>
        <stop stop-color="rgba(232, 110, 179, 1)" offset="100%"></stop>
      </linearGradient>
    </defs>
    
    <circle cx="50" cy="50" r="50" fill="url(#my-gradient)" />
  </svg>
</template>


<script>
export default {
    name: 'SVGBlobs'
}
</script>

<style scoped>
.distortedCircle {
  width: 200px;
  height: 200px;
  position: absolute;
  top: 25%;
  left: 10%;
}

.circle1 {
  width: 300px;
  height: 300px;
  position: absolute;
  top: 55%;
  right: 10%;
}

.circle2 {
  width: 250px;
  height: 250px;
  position: absolute;
  top: 55%;
  left: 10%;
}

@media (max-width: 768px) {
  .circle2 {
    display: none;
  }
  .circle1 {
    width: 240px;
    height: 240px
  }
}
</style>