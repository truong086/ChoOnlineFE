<template>
  <body>
    <div class="wrapper">
      <div class="image-holder">
        <img
          src="../../assets/DangKyShop/images/registration-form-8.jpg"
          style="margin-top: -150px"
          alt=""
        />
      </div>
      <div class="form-inner">
        <form action="">
          <div class="form-header">
            <h3>Sign up</h3>
            <img
              src="@/assets/DangKyShop/images/sign-up.png"
              alt=""
              class="sign-up-icon"
            />
          </div>
          <div class="form-group">
            <label for="">Name:</label>
            <input
              type="text"
              class="form-control"
              data-validation="length alphanumeric"
              data-validation-length="3-12"
              v-model="Shop.Name"
            />
          </div>
          <div class="form-group">
            <label for="">Địa chỉ</label>
            <input type="text" class="form-control" v-model="Shop.diachi" />
          </div>
          <div class="form-group">
            <div v-for="(item, index) in listVanChuyen" :key="index">
              <label for="">
                <input type="checkbox" v-model="item.isSelect" />
                {{ item.name }}
              </label>
            </div>
          </div>
          <div class="form-group">
            <label for="">Email</label>
            <input
              type="text"
              class="form-control"
              data-validation="length"
              data-validation-length="min8"
              v-model="Shop.email"
            />
          </div>
          <div class="form-group">
            <label for="">Phone</label>
            <input
              type="text"
              class="form-control"
              data-validation="length"
              data-validation-length="min8"
              v-model="Shop.sodienthoai"
            />
          </div>
          <div class="form-group">
            <label for="">Image</label>
            <input
              ref="shop"
              type="file"
              class="form-control"
              @change="handlImage($event, 'Shop', 'shop')"
            />
            <img :src="fileSrcShop" style="width: 100px;" alt="" />
          </div>
          <button v-on:click="AddOrEditShop" type="button">create my account</button>
          <div class="socials">
            <p>Sign up with social platforms</p>
            <a href="" class="socials-icon">
              <i class="zmdi zmdi-facebook"></i>
            </a>
            <a href="" class="socials-icon">
              <i class="zmdi zmdi-instagram"></i>
            </a>
            <a href="" class="socials-icon">
              <i class="zmdi zmdi-twitter"></i>
            </a>
            <a href="" class="socials-icon">
              <i class="zmdi zmdi-tumblr"></i>
            </a>
          </div>
        </form>
      </div>
    </div>
  </body>
</template>
<script>
import axios from "axios";
import Swal from "sweetalert2";
import { mapMutations, mapActions } from 'vuex';
export default {
  data() {
    return {
      Shop: {
        id: 0,
        name: "",
        diachi: "",
        email: "",
        sodienthoai: "",
        image: "",
        creator: "",
        account_id: 0,
        vanchuyens: [],
      },
      listAddIsSelect: [],
      listVanChuyen: [],
      selectedFile: null,
      fileSrc: "",
      byteArray: null,
      fileSrcShop: ""
    };
  },
  async created() {
    await this.FindAllVanChuyen();
  },
  methods: {
    ...mapMutations(['updateUserPermissions', 'updateShopName']),
    ...mapActions(['ResetRole']),
    getTokenConfig() {
      var token = JSON.parse(localStorage.getItem("token"));
      // var token = JSON.parse(store.state.authToken)
      var result = {
        headers: { Authorization: `Bearer ${token}` },
      };

      return result;
    },
    
    async AddOrEditShop(){
        let arr = []
        this.listVanChuyen.forEach(option => {
          if(option.isSelect === true){
            arr.push(option.name)
          }
          
        })
        this.Shop.vanchuyens = arr
        this.Shop.creator = JSON.parse(localStorage.getItem("token"))
        console.log(this.byteArray)
        if(this.byteArray === null){
          const checkImage = this.ConvertByteTobase64(this.fileSrcShop)
          if(!this.checkBase64(checkImage)){
            Swal.fire("Vui lòng chọn lại ảnh")
            return
          }
          this.Shop.image = checkImage
        }else if(this.byteArray !== null){
          this.Shop.image = this.ConvertByteTobase64(this.byteArray)
        }
        // const stateUser = this.$store.getters.name
        await axios.post(this.hostname + '/api/Shop/AddShop', this.Shop, this.getTokenConfig())
          .then(response => {
            this.ResetRole()
            this.$store.commit('updateUserPermissions', response.data.content.role)
            this.updateShopName(response.data.content.name)
            console.log(response)
            // this.$router.push({name: "Admin"})
            Swal.fire("Add Thành công")
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
            }
          })
        
    },
    handlImage(e, table, value) {
      const fileInput = this.$refs[value]; // "$refs[value]" Gán giá trị từ tham số được chuyền từ ngoài vào "this.$refs", "[value]" là tên của "ref" trên HTML
      if (fileInput.files.length > 0) {
        this.selectedFile = e.target.files[0];

        const render = new FileReader();

        render.onload = (event) => {
          const arrByffe = event.target.result;
          this.byteArray = new Uint8Array(arrByffe);

          // Hiển thị ảnh từ mảng byte lên thẻ "img"
          const blob = new Blob([this.byteArray]);
          const imageURL = URL.createObjectURL(blob);
          if (table === "Account") {
            this.fileSrc = imageURL;
          }
          if (table === "Shop") {
            this.fileSrcShop = imageURL;
            console.log(this.fileSrcShop);
          }
        };
        render.readAsArrayBuffer(this.selectedFile);
      }
    },
    checkIfImage(byteArray) {
        if (
            byteArray.length > 3 &&
            byteArray[0] === 0x89 &&
            byteArray[1] === 0x50 &&
            byteArray[2] === 0x4E &&
            byteArray[3] === 0x47
        ) {
            return true; // Đây là chữ ký của một file PNG
        } else if (
            byteArray.length > 1 &&
            byteArray[0] === 0xFF &&
            byteArray[1] === 0xD8
        ) {
            return true; // Đây là chữ ký của một file JPEG
        } else if (
            byteArray.length > 3 &&
            byteArray[0] === 0x47 &&
            byteArray[1] === 0x49 &&
            byteArray[2] === 0x46 &&
            byteArray[3] === 0x38
        ) {
            return true; // Đây là chữ ký của một file GIF
        } else {
            return false; // Không phải là định dạng hình ảnh phổ biến
        }
      }

    ,
    // Hàm chuyển từ Base64 sang mảng byte
    ConvertBase64ToByte(base64) {
      const baseString = atob(base64);
      const byteArr = new Uint8Array(baseString.length);
      for (let i = 0; i < baseString.length; i++) {
        byteArr[i] = baseString.charCodeAt(i);
      }

      return byteArr;
    },
    ConvertByteTobase64(byte) {
      let base64 = "";
      // if(Array.isArray(byte) && byte.length > 0){ // Kiểm tra xem dữ liệu chuyền vào đã đúng định dạng mảng Byte chưa, sử dụng câu lênh "Array.isArray()"
      // byte.forEach(arr => {
      //   base64 += String.fromCharCode(arr)
      // });
      // return btoa(base64)
      // }else{
      //   Swal.fire("Không đúng định dạng ảnh")
      //   return
      // }
      if (this.checkIfImage(byte)) {
        byte.forEach((arr) => {
          base64 += String.fromCharCode(arr);
        });
        return btoa(base64);
      }
    },
    async FindAllVanChuyen() {
      await axios
        .get(this.hostname + `/api/Vanchuyen/findAll`, this.getTokenConfig())
        .then((response) => {
          this.listAddIsSelect = response.data.content.data;
          this.listVanChuyen = this.listAddIsSelect.map((option) => {
            return { ...option, isSelect: false };
          });
        })
        .catch((error) => {
          if (error.response) {
            Swal.fire(error.response.data);
          }
        });
    },
  },
};
</script>
<style scoped>
@import url("../../assets/DangKyShop/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css");

@font-face {
  font-family: "ChelseaMarket-Regular";
  src: url("@/assets/DangKyShop/fonts/chelsea_market/ChelseaMarket-Regular.ttf");
}
@font-face {
  font-family: "Muli-Regular";
  src: url("@/assets/DangKyShop/fonts/muli/Muli-Regular.ttf");
}
@font-face {
  font-family: "Muli-SemiBold";
  src: url("@/assets/DangKyShop/fonts/muli/Muli-SemiBold.ttf");
}
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  font-family: "Muli-Regular";
  font-size: 15px;
  margin: 0;
  color: #fff;
}

input,
textarea,
select,
button {
  font-family: "Muli-SemiBold";
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
ul {
  margin: 0;
}

img {
  max-width: 100%;
}

ul {
  padding-left: 0;
  margin-bottom: 0;
}

a {
  text-decoration: none;
}

:focus {
  outline: none;
}

.wrapper {
  min-height: 100vh;
  display: flex;
}
.wrapper .image-holder {
  width: 69.9%;
}
.wrapper .form-inner {
  width: 30.1%;
}

.image-holder {
  background: url("../../assets/DangKyShop/images/registration-form-8.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
.form-inner {
  background: #ff97a4;
  padding-top: 16.36vh;
  padding-left: 4vw;
  padding-right: 4vw;
}

form {
  width: 100%;
}

.form-header {
  text-align: center;
  margin-bottom: 39px;
}

h3 {
  text-transform: uppercase;
  font-size: 40px;
  font-family: "ChelseaMarket-Regular";
}

label {
  margin-bottom: 11px;
  display: block;
}

.form-group {
  margin-bottom: 26px;
  position: relative;
}

.form-control {
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  display: block;
  width: 100%;
  height: 45px;
  background: none;
  padding: 0 19px;
  color: #fff;
  font-size: 17px;
}
.form-control.error {
  border-color: #fd677a !important;
  background: url("@/assets/DangKyShop/images/error.png") no-repeat center right
    19px;
}
.form-control.valid {
  background: url("@/assets/DangKyShop/images/valid.png") no-repeat center right
    19px;
}

.form-error {
  margin-top: 10px;
  display: inline-block;
}

button {
  border: none;
  width: 100%;
  height: 46px;
  border-radius: 22.5px;
  margin: auto;
  margin-top: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  background: #fff;
  color: #ff97a4;
  text-transform: uppercase;
  font-size: 17px;
  overflow: hidden;
  -webkit-transform: perspective(1px) translateZ(0);
  transform: perspective(1px) translateZ(0);
  position: relative;
  -webkit-transition-property: color;
  transition-property: color;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
button:before {
  content: "";
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fd677a;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: 50%;
  transform-origin: 50%;
  -webkit-transition-property: transform;
  transition-property: transform;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
}
button:hover {
  color: white;
}
button:hover:before {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
}

.socials {
  text-align: center;
  margin-top: 59px;
}

.socials-icon {
  display: inline-flex;
  width: 41px;
  height: 41px;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 19px;
  color: #fff;
  transition: all 0.5s ease;
  margin-right: 19px;
}
.socials-icon:hover {
  background: #fff;
  border: 1px solid transparent;
  color: #ff97a4;
}
.socials-icon:last-child {
  margin-right: 0;
}

p {
  font-family: "Muli-SemiBold";
  color: #ffff66;
  margin-bottom: 22px;
}

@media (max-width: 1500px) {
  .form-inner {
    display: flex;
    align-items: center;
    padding-top: 0;
    padding-left: 4vw;
    padding-right: 4vw;
  }
}
@media (max-width: 1199px) {
  .wrapper {
    flex-direction: column;
  }
  .wrapper .image-holder {
    width: 100%;
    height: 45vh;
  }
  .wrapper .form-inner {
    width: 100%;
    height: 55vh;
  }

  .form-inner {
    padding-left: 20vw;
    padding-right: 20vw;
  }

  button {
    width: 50%;
  }
}
@media (max-width: 991px) {
  .wrapper .image-holder {
    height: 37vh;
  }
  .wrapper .form-inner {
    height: 63vh;
  }

  .socials {
    margin-top: 40px;
  }

  .form-header {
    margin-bottom: 30px;
  }
}
@media (max-width: 767px) {
  .wrapper .form-inner {
    height: auto;
  }
  .wrapper .image-holder {
    height: auto;
  }

  .image-holder img {
    display: block;
  }

  .form-inner {
    padding: 30px 20px;
  }

  button {
    width: 100%;
  }
}

/*# sourceMappingURL=style.css.map */
</style>
