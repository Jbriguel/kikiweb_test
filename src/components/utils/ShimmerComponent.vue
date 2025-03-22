<template>
    <div class="shimmer-card">
      <div class="shimmer-image"></div>
      <div class="shimmer-content">
        <div class="shimmer-line"></div>
        <div class="shimmer-line"></div>
        <div class="shimmer-line"></div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ShimmerComponent',
  }
  </script>
  
  <style scoped>
  .shimmer-card {
    width: 100%;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }
  
  .shimmer-image {
    width: 100%;
    height: 200px;
    background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
  }
  
  .shimmer-content {
    padding: 16px;
  }
  
  .shimmer-line {
    height: 12px;
    background: #f0f0f0;
    margin-bottom: 8px;
    border-radius: 4px;
    animation: shimmer 1.5s infinite;
  }
  
  @keyframes shimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }
  </style>