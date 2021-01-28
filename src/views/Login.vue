<template>
<div>
  <form action="" v-if="!isReg">
    <el-input style="margin: 20px; width: 60%" placeholder="用户名" v-model="name"></el-input>
    <el-input style="margin: 20px; width: 60%" placeholder="密码" v-model="passwd" show-password></el-input>
    <el-row style="margin: 20px">
      <el-button type="primary" round v-on:click="login()">登录</el-button>
      <el-button type="primary" round v-on:click="reg()">注册</el-button>
    </el-row>
  </form>

  <form action="" v-else>
    <el-input style="margin: 20px; width: 60%" placeholder="用户名" v-model="name"></el-input>
    <el-input style="margin: 20px; width: 60%" placeholder="密码" v-model="passwd" show-password></el-input>
    <el-input style="margin: 20px; width: 60%" placeholder="请确认密码" v-model="repeat" show-password></el-input>
    <el-row style="margin: 20px">
      <el-button type="primary" round v-on:click="addUser()">确定</el-button>
      <el-button type="primary" round v-on:click="cancel()">取消</el-button>
    </el-row>
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
        let _this = this
        this.$alert('登录成功', {
          confirmButtonText: '确定',
          callback() {
            _this.$router.push('/home/list')
          }
        });
      } else {
        this.$alert('用户名或密码错误', {
          confirmButtonText: '确定'
        });
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
        this.$alert('两次密码输入不一致', {
          confirmButtonText: '确定'
        });
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
