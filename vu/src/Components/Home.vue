<template>
  <div id="home">
    <div class="content">
      <p>Learn With Me</p>
      <div class="buttons">
        <button>Hire Me</button>
        <button>Contact Me</button>
      </div>
    </div>
  </div>
</template>
<script>

export default {
    name:"Home"
}


</script>

<style scoped>
#home {
  background-image: url('@/assets/images/blackground.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
}

.content p {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.buttons {
  display: flex;
  gap: 20px; /* space between buttons */
  justify-content: center;
}

.buttons button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #000;
  transition: 0.3s;
}

.buttons button:hover {
  background-color: #fff;
  transform: scale(1.05);
}
</style>