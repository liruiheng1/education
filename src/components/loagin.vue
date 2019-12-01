<template>
  <div>
    <div class="loagin-box"></div>
    <div class="loagin-demo">
      <div class="loagin-header">
        <div class="loagin-header-box">
          <img src="../assets/1 (6).jpg" alt />
        </div>
      </div>
      <div class="loagin-title">
        <h2>领课教育系统 - 开源版</h2>
      </div>
      <div class="loagin-demo-user">
        <div class="loagin-logo-user">账号:</div>
        <input type="text" placeholder="请输入账号" v-model="user" maxlength="11" />
      </div>
      <div class="loagin-demo-passwd">
        <div class="loagin-logo-passwd">密码:</div>
        <input type="password" placeholder="请输入账号" v-model="passwd" />
      </div>
      <div class="loagin-demo-btn">
        <button @click="Login()">登录</button>
      </div>
    </div>
    
  </div>
</template>

<script>
// import product from "../services/product-service.js";
// const _product = new product();
import axios from "axios";
export default {
  data() {
    return {
      user: "", //账号
      passwd: "" //密码
    };
  },
  methods: {
    Login() {
      //   let obj = {
      //     clientId: "lkb65617f842ad4c37895a733b8de43cbb",
      //     ip: "127.0.0.0",
      //     mobile: this.user,
      //     password: this.passwd
      //   };
      //   _product.Login(obj).then(res => {
      //     window.console.log(res);
      //   });
      //   let obj = {
      //     clientId: "lkb65617f842ad4c37895a733b8de43cbb",
      //     ip: "127.0.0.0",
      //     mobile: this.user,
      //     password: this.passwd
      //   };
      //   axios
      //     .post(
      //       `http://www.wyunfei.com:8002/apis/user/pc/api/${obj.mobile}/login/${obj.password}`
      //     )
      //     .then(res => {
      //       window.console.log(res);
      //     });
      axios
        .post(
          "http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password",
          {
            mobile: this.user,
            password: this.passwd,
            clientId: "lkb65617f842ad4c37895a733b8de43cbb"
          }
        )
        .then(res => {
          window.console.log(res);
          if(res.data.code == 200 ){
            this.$router.push({path:'/homepage'})
            alert('登录成功')
          }else{
            alert('账号或者密码错误！')
          }
        });
    }
  },
  created() {
    // axios
    //   .post("http://www.wyunfei.com:8002/apis/user/pc/api/user/login/password")
    //   .then(res => {
    //     window.console.log(res);
    //   });
  }
};
</script>

<style lang="scss" scoped>
.loagin-box {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  background: url("../assets/004.jpg");
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
.loagin-demo {
  width: 460px;
  height: 400px;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 3px;
  top: 20%;
  left: 35%;
  position: fixed;
}
.loagin-header {
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.loagin-header-box {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 20px 50px red inset;
}
.loagin-header-box > img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
}
.loagin-title {
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: center;
  color: #888;
  align-items: center;
}
.loagin-demo-user {
  width: 80%;
  height: 40px;
  background-color: #fff;
  margin: 15px auto;
  display: flex;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.loagin-logo-user {
  width: 15%;
}
.loagin-demo-user > input {
  width: 85%;
  border: none;
  padding: 7px;
  outline: 0;
}
.loagin-demo-passwd {
  width: 80%;
  height: 40px;
  background-color: #fff;
  margin: 15px auto;
  display: flex;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
}
.loagin-logo-passwd {
  width: 15%;
}
.loagin-demo-passwd > input {
  width: 85%;
  border: none;
  padding: 7px;
  outline: 0;
}
.loagin-demo-btn {
  width: 80%;
  height: 40px;
  margin: 0 auto;
}
.loagin-demo-btn > button {
  width: 100%;
  background-color: #409ef4;
  border: 0;
  outline: 0;
  height: 100%;
  color: #fff;
  border-radius: 3px;
  margin-top: 10px;
}
</style>