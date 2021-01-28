<template>
<div>
  <el-input
      type="text"
      placeholder="请输入标题"
      v-model="title"
      maxlength="10"
      show-word-limit
  >
  </el-input>
  <div style="margin: 20px;"></div>
  <el-input
      type="textarea"
      placeholder="请输入内容"
      v-model="content"
      maxlength="100"
      show-word-limit
  >
  </el-input>
  <div style="margin: 50px 0 0 50%" class="el-button" v-on:click="add()">添加</div>
</div>
</template>

<script>
import store from '@/store'
export default {
  name: "Add",
  data() {
    return{
      title: '',
      content: ''
    }
  },
  methods: {
    add() {
      store.commit('addItem', {
        title: this.title,
        content: this.content
      })
      this.title = ''
      this.content = ''
      this.$router.push('/home/list')
    }
  }
}
</script>

<style scoped>

</style>
