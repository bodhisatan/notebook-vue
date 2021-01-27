<template>
<div>
  <form action="" v-if="!isReg">
    用户名：
    <input type="text" v-model="name">
    密码：
    <input type="password" v-model="passwd">
    <button type="button" v-on:click="login()">登录</button>
    <button type="button" v-on:click="reg()">注册</button>
  </form>

  <form action="" v-else>
    用户名：
    <input type="text" v-model="name">
    密码：
    <input type="password" v-model="passwd">
    请再次确认密码：
    <input type="password" v-model="repeat">
    <button type="button" v-on:click="addUser()">确定</button>
    <button type="button" v-on:click="cancel()">取消</button>
  </form>

</div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      isReg: false,
      name: '',
      passwd: '',
      repeat: ''
    }
  },
  methods: {
    login() {
      let cur_username = localStorage.getItem("name")
      let cur_passwd = localStorage.getItem("passwd")
      if (cur_username === this.name && cur_passwd === this.passwd) {
        this.name = ''
        this.passwd = ''
        this.$router.push('/home/list')
      } else {
        alert("用户名或密码错误")
      }

    },
    reg() {
      this.isReg = true
    },
    addUser() {
      if (this.passwd === this.repeat) {
        localStorage.setItem("name", this.name)
        localStorage.setItem("passwd", this.passwd)

        this.name = ''
        this.passwd = ''
        this.repeat = ''
        this.isReg = false
      } else {
        alert("两次密码不一致")
      }

    },
    cancel() {
      this.isReg = false
    }
  }
}
</script>

<style scoped>

</style>
