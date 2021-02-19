<template>
    <div>
        <h2>{{ title | upperCase | lowerCase }}</h2>
        <p>{{ subTitle | lowerCase | upperCase }}</p>
        <p>{{number}}</p>
        <button @click="number++">+1</button>
    </div>
</template>

ローカル登録
<script>
import { tokyoNumber } from "@/tokyoNumber";

export default {
    mixins: [tokyoNumber],
    created() {
        console.log("created in component");
    }
};
</script>

