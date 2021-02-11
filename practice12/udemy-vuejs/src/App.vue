<template>
  <div>
    <div>
      <LikeHeader></LikeHeader>
      <p>{{number}}</p>
      <LikeNumber :total-number='number' @my-click="incrementNumber"></LikeNumber>
      <LikeNumber :total-number='number'></LikeNumber>
    </div>
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input 
        id="title"
        type="text"
        v-model.lazy="eventData.title"
      >
      <pre>{{eventData.title}}</pre>
      <label for="maxNumber">最大人数</label>
      <input 
        id="maxNumber"
        type="number"
        v-model.number="eventData.maxNumber"
      >
      <p>{{eventData.maxNumber}}</p>
      <label for="host">主催者</label>
      <input 
        id="host"
        type="text"
        v-model.trim="eventData.host"
      >
      <pre>{{eventData.host}}</pre>
      <label for="detail">イベントの内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{eventData.detail}}</p>
      <input 
        type="checkbox" 
        id="isPrivate"
        v-model="eventData.isPrivate"
      >
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>
      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
    </div>
   </div>
</template>

<script>
//ローカル登録
import LikeHeader from './components/LikeHeader.vue';

export default {
  data(){
    return {
      number: 14,
      eventData: {
        title: "",
        maxNumber: 0,
        host: "",
        detail: "",
        isPrivate: false
      }
    }
  },
  components: {
    LikeHeader
  },
  methods: {
    incrementNumber (value){
      this.number = value
    }
  }
}
</script>
