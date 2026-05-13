<template>
    <div>
        <div id="about">
            <div class="content">
                <p>About me </p>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae deleniti enim obcaecati, et sint inventore vitae repellendus esse necessitatibus tenetur.</p>
        </div>
    </div>
</template>
<script>

export default {
    name:"About"
}


</script>
<style scoped>

#about{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60vh;
    width: 100%;
    background:2px 4px 8px;
    flex-direction: column;
}
.content p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 32px;
    color:#000;
    font-weight: 700;
}
.content p::after{
    content: "";
    display: block;
    height: 4px;
    width: 100%;
    background-color: #000;


}

</style>