<script setup>
import { useRoute } from 'vue-router';
import { defineProps } from 'vue';

const props = defineProps({
    navList:Array
})

</script>
<template>
    <nav>
        <ul>
            <li v-for="item in props.navList" :key="item.name">
                <router-link :to="item.link">{{ item.name }}</router-link>

            </li>
        </ul>
    </nav>
</template>

<style scoped>
nav ul li a {
  text-decoration: none;
  color: rebeccapurple;
  font-weight: bold;
  padding: 5px 10px;
  transition: 0.2s;
}

       nav ul li a:hover {
  color: aqua;
  background-color: #f0f0f0;
  border-radius: 5px;
}


</style>