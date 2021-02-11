<template>
    <div>
        <label for="title">タイトル</label>
        <input 
        id="title"
        type="text"
        v-model.lazy="eventData.title"
        >
        <pre>{{eventData.title}}</pre>
    </div>
</template>