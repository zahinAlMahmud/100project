<template>
    <div>
        <div class="header" id="header">
            <a href="#" id="logo">Logo</a>
            <nav class="nav" id="nav-items">
                <ul id="nav">
                    <li v-for="(items, index) in navList" key="index"><a :href="items.link">{{ items.name }}</a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>
<script>

export default {
    name: "Nav",
    data() {
        return {
            navList: [
                { name: 'Home', link: '#home' },
                { name: 'About', link: '#about' },
                { name: 'Blog', link: '#blog' },
                { name: 'Contact', link: '#contact' },
            ],

        }
    }
}


</script>
<style scoped>

#header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 800;
    background: #000;
}
#logo{
    font-size: 36px;
    color:#fff;
    font-weight: 800;
    list-style: none;
    text-decoration: none;
    line-height: 1.5rem;
    letter-spacing: 1rem;
    height: auto;
    margin: 2px;
}
ul{
    list-style: none;
    display: flex;
    gap: 10px;
}
li a{
    text-decoration: none;
    list-style: none;
    color: #fff;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 1.5rem;
    transition: all 0.3s ease;
}
li a:hover{
    color : #2713da
}


</style>