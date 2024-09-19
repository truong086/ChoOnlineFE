<template>
  <body class="anh">
  <div class="load" v-if="checkLoad">
    <div class="icon">
      <i class="fa fa-motorcycle" aria-hidden="true"></i>
      
    </div>
    <h1>Đang load...</h1>
  </div>
    <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading-section" style="font-size: 50px; font-weight: bold;">Login</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-6 col-lg-4">
            <div class="login-wrap p-0">
              <h3 class="mb-4 text-center">Have an account?</h3>
              <form action="#" class="signin-form" style="width: 100%; background-color: transparent;">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Username"
                    style="height: auto; background-color: transparent;"
                    v-model="user.username"
                    required
                  />
                </div>
                <div class="form-group">
                  <input
                    id="password-field"
                    type="password"
                    class="form-control"
                    placeholder="Password"
                    style="height: auto; background-color: transparent;"
                    v-model="user.password"
                    required
                    
                  />
                  <span
                    toggle="#password-field"
                    class="fa fa-fw fa-eye field-icon toggle-password"
                  ></span>
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="form-control btn btn-primary submit px-3"
                    style="height: auto;"
                    v-on:click="Add($event)"
                  >
                    Sign In
                  </button>
                </div>
                <div class="form-group d-md-flex">
                  <div class="w-50">
                    <label class="checkbox-wrap checkbox-primary"
                      >Remember Me
                      <input type="checkbox" v-model="SaveUserForLocalStogare" checked />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                  <div class="w-50 text-md-right">
                    <a href="#" style="color: #fff">Forgot Password</a>
                  </div>
                </div>
              </form>
              <p class="w-100 text-center">&mdash; Or Sign In With &mdash;</p>
              <div class="social d-flex text-center">
                <a v-on:click="dangky($event)" href="#" class="px-2 py-2 mr-md-1 rounded"
                  ><span class="ion-logo-facebook mr-2"></span> Đăng ký</a
                >
                <a href="#" class="px-2 py-2 ml-md-1 rounded"
                  ><span class="ion-logo-twitter mr-2"></span> Twitter</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </body>
</template>
<script>
import axios from 'axios';
import CryptoJS from 'crypto-js'
import Swal from 'sweetalert2';
import { mapActions } from 'vuex';
  export default{
    data(){
        return {
            user:{
                username: "",
                password: ""
            },
            check: "",
            SaveUserForLocalStogare: true,
            checkLoad: false
        }
    },
    mounted(){
      const saveAccount = localStorage.getItem("User")
      if(saveAccount){
        this.user = JSON.parse(localStorage.getItem("User"))
        this.SaveUserForLocalStogare = true
      }
    },
    methods: {
      ...mapActions(['ResetRole']),
      dangky(event){
        this.$router.push({name: "DangKy"})
        event.preventDefault();
        
      },
      MaHoaPassword(){
        if(this.SaveUserForLocalStogare){
          const key = "ThisismySecretKey"
          const mahoa = CryptoJS.HmacSHA256(this.user.password, key)

          this.check = CryptoJS.enc.Hex.stringify(mahoa)

          // LƯU THÔNG TIN NGƯỜI DÙNG VÀO "localStorage"
          // CÁCH 1:
          // const username = this.user.username
          // const password = this.user.password
          // const usernamePassword = {username, password}
          // localStorage.setItem("User", JSON.stringify({username, password}))

          // CÁCH 2:
          localStorage.setItem("User", JSON.stringify(this.user))

          this.user.password = this.check
        }
        else{
          const key = "ThisismySecretKey"
          const mahoa = CryptoJS.HmacSHA256(this.user.password, key)

          this.check = CryptoJS.enc.Hex.stringify(mahoa)

          this.user.password = this.check
          localStorage.removeItem("User")
        }
      },
      async Add(even){
        this.checkLoad = true
        this.MaHoaPassword()
        await axios.post(this.hostname + "/api/Account/Login", this.user)
          .then(response => {
            console.log(response.data)

              if(response.data.role_id > 0){
                this.ResetRole()
                window.localStorage.clear()
                localStorage.setItem('token', JSON.stringify(response.data.token))
                // localStorage.setItem('role', JSON.stringify(response.data.role_id))
                localStorage.setItem('image', JSON.stringify(response.data.image))
                this.$store.commit("updateUserPermissions", response.data.role_Name)
                this.$store.commit("updateName", response.data.username)
                this.$store.commit("updateShopName", response.data.shop_name)
                this.$store.commit("updateIdAccount", response.data.id)
                this.checkLoad = false
                Swal.fire("Success")

                if(response.data.role_id == 2){
                  this.$router.push({name: "Admin"})
                }else{
                  this.$router.push({name: "Home"})
                }
              }
              if(response.data.role_id == null){
                Swal.fire("Tài khoản hoặc mật khẩu không đúng")
                this.checkLoad = false
              }
            
            console.log(response)
          })
          .catch(error => {
            if(error.response){
              Swal.fire("Lỗi")
              this.checkLoad = false
            }
            this.checkLoad = false
          })
        even.preventDefault()
      }
    }
  }
</script>
<style scoped>
@import "../assets/LoginStyle/css/style.css";
@import "../assets/LoginStyle/css/bootstrap.min.css";
.anh{
  background-image: url(../assets/LoginStyle/images/bg.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  position: relative;
}
.load{
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}
.load h1{
  position: absolute;
  animation: hieuungchu 0.5s ease-in-out infinite;
  top: 50%;
  left: 45%;
}
.icon{
  position: absolute;
  top: 30%;
  left: 10%;
  z-index: 1000;
  color: aqua;
  font-size: 100px;
  animation: hieuung 0.5s ease-in-out infinite;
}
@keyframes hieuung {
  0%{
    transform: translateX(0)
  }
  50%{
    transform: translateX(200px);
  }
  100%{
    transform: translateX(0);
  }
}

@keyframes hieuungchu{
  from{
    color: blueviolet;
  }
  to{
    color: aquamarine;
  }
}


</style>
