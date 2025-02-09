<template>
    <div class="container" >
        <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Iure cupiditate facilis explicabo.</li>
            <li>Voluptatibus cumque amet magni!</li>
            <li>Possimus minus quae delectus.</li>
            <li>Nemo officiis voluptatem aliquam.</li>
            <li>Amet asperiores iure maiores.</li>
            <li>Quod exercitationem asperiores repudiandae!</li>
            <li>Ipsam eaque perspiciatis sed!</li>
            <li>Doloremque laudantium vitae impedit!</li>
            <li>At sequi accusantium repellat.</li>
            <li>Lorem ipsum dolor sit.</li>
            <li>Iusto tempore dolor consectetur?</li>
            <li>Vitae reiciendis iure aut.</li>
            <li>Velit saepe expedita ipsum.</li>
            <li>Aspernatur nemo debitis suscipit!</li>
            <li>Corporis molestias deserunt labore?</li>
            <li>Quia eum nisi fugiat!</li>
            <li>Quaerat ipsam perferendis laboriosam.</li>
            <li>Nemo, tenetur. Nihil, aliquam!</li>
            <li>Alias sint perferendis doloribus!</li>
            <li>Fuga natus quae ea!</li>
            <li>Tempora dolorum at ad?</li>
            <li>Quidem vero earum delectus!</li>
            <li>Ea rerum assumenda fuga!</li>
            <li>Qui fuga labore vero!</li>
            <li>Enim, magnam molestiae. Debitis!</li>
            <li>Animi veritatis quo harum!</li>
            <li>Architecto recusandae ipsa veritatis.</li>
            <li>Inventore dolor eos tempora!</li>
            <li>Magnam in distinctio voluptas!</li>
        </ul>
    </div>
</template>

<script setup>

</script>

<style scoped>
ul {
    color: #bbb;
    animation: scroll 3s linear infinite;
    transition: 3s;
}

@keyframes scroll {
    0% {
        transform: translateY(0);
    }
    100% {
        transform: translateY(-100px);
    }
}

li {
    list-style-type: none;
    margin: 0;
    padding: 0;
    height: 50px;
    line-height: 50px;
    text-align: center;
    /* border-bottom: 1px solid #666; */
}

.container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: .9;
    overflow: hidden;
    user-select: none;

}
</style>