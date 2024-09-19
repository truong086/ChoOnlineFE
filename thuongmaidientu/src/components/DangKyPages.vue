<template>
  <div class="wrapper">
    <div class="inner">
      <form action="">
        <h3>Set The Event</h3>
        <div class="form-wrapper form-price">
          <label for="">Price</label>
          <span>$270</span>
        </div>
        <div class="form-wrapper">
          <label for="" class="label-input">Name</label>
          <input v-model="account.username" ref="username" style="background-color: transparent !important" type="text" class="form-control" />
        </div>
        <div class="form-wrapper">
          <label for="" class="label-input">Mail</label>
          <input v-model="account.email" ref="email" style="background-color: transparent !important" type="email" class="form-control" />
        </div>
        <div class="form-wrapper">
          <label for="" class="label-input">Phone</label>
          <input v-model="account.phonenumber" ref="phonenumber" style="background-color: transparent !important" type="text" class="form-control" />
        </div>

        <div class="form-wrapper">
          <label for="" class="label-input">Password</label>
          <input v-model="account.password" style="background-color: transparent !important" ref="password" type="text" class="form-control" />
        </div>

        <div class="form-wrapper">
          <label for="" class="label-input">Image</label>
          <input ref="file" type="file" @change="handlImage($event)" class="form-control" />
          <img v-if="images" :src="images" style="width: 100px;" alt="">
        </div>
        <div class="form-wrapper">
          <label for="" style="background-color: transparent !important" class="label-comment">Comment</label>
          <textarea
            name=""
            id=""
            class="form-control"
            style="height: 69px"
          ></textarea>
        </div>
        <input type="button" value="Gui" v-on:click="AddData">
        <!-- <button style="button" v-on:click="AddData">Send your booking</button> -->
      </form>
      <div class="image-holder">
        <img src="../assets/DangKyStyle/images/registration-form-5.jpg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js'

export default{
  data(){
    return{
      account: {
        username: "",
        password: "",
        email: "",
        phonenumber: "",
        image: ""
      },
      passwordHs256: "",
      selectedFile: null,
      byteArray: null,
      images: ''
    }
  },
  methods:{

    // Hàm chuyển dữ liệu ảnh thành mảng byte
    handlImage(e){

      // Kiểm tra xem người dùng có chọn ảnh không
      // Cách 1: sử dụng luôn biến "this.selectedFile" để kiểm tra
      //this.selectedFile = e.target.files[0]
      // if(this.selectedFile){

      // }

      // Cách 2: Sử dụng "$refs" để lấy ra thẻ chứa file của người dùng, rồi sử dụng "fileInput.files.length > 0" "length" để kiểm tra xem độ dài của file đấy, nếu nhỏ hơn 0 nghĩa là người dùng chưa chọn file, lớn hơn 0 nghĩa là đã chọn file
      /*"this.$refs" là lấy ra thuộc tính "ref" trong các thẻ HTML, ở đây "$refs" là "this.$refs.file" nghĩa là lấy ra thuộc tính "ref" có tên là "file"
       thuộc tính "$refs" này hoạt động giống như thuộc tính "getElementById()"(lấy ra "id" của thẻ) trong javascript thuần */
       const fileInput = this.$refs.file
      if(fileInput.files.length > 0){
            // GIẢI THÍCH ĐOẠN CODE "this.selectedFile = e.target.files[0]"
          /* "this.selectedFile = e.target.files[0]" Dòng này gán tệp hình ảnh đã được chọn (được lưu trong sự kiện e)
          vào biến selectedFile. e.target.files chứa danh sách các tệp đã chọn từ phần giao diện người dùng, và [0] chỉ định tệp đầu tiên
            trong danh sách, nếu có.*/
          this.selectedFile = e.target.files[0]

        // GIẢI THÍCH ĐOẠN CODE "const reader = new FileReader()"
        /*"const reader = new FileReader()" Đoạn này tạo một đối tượng FileReader, một API trong JavaScript cho phép bạn đọc nội dung của tệp. */
        const reader = new FileReader()

        /**
         * GIẢI THÍCH ĐOẠN CODE "reader.onload = (event)"
         *  "reader.onload = (event)" Đây là một phần quan trọng của mã. Nó định nghĩa một hàm xử lý sự kiện (event handler) được gọi
         *  khi tệp hình ảnh đã được đọc bởi FileReader. Khi tệp đã được đọc, nội dung của tệp sẽ nằm trong biến event.target.result.
         */
        reader.onload = (event) => {
          // GIẢI THÍCH ĐOẠN CODE "const arrBuffe = event.target.result"
          // Khi tệp được đọc xong thì nội dung của tệp sẽ nằm trong biến "event.target.result"
          const arrBuffe = event.target.result

          /**
           * GIẢI THÍCH ĐOẠN CODE "this.byteArray = new Uint8Array(arrBuffe)"
           *  "this.byteArray = new Uint8Array(arrBuffe)" Dòng này tạo một Uint8Array từ arrBuffe, là một dạng mảng số nguyên 
           *  không dấu 8-bit. Điều này có nghĩa là nó chuyển dữ liệu từ biểu đồ mảng byte thông thường thành một biểu đồ mảng 
           * số nguyên 8-bit không dấu. Điều này thường được sử dụng để chuẩn hóa dữ liệu hình ảnh trước khi bạn thực hiện xử lý 
           * hoặc gửi dữ liệu này lên máy chủ.
           */
          this.byteArray = new Uint8Array(arrBuffe)

          // Hiển thị ảnh từ mảng byte
          const blob = new Blob([this.byteArray])
          const imageURLs = URL.createObjectURL(blob)

          this.images = imageURLs
        }

        // GIẢI THÍCH ĐOẠN CODE "reader.readAsArrayBuffer(this.selectedFile)"
        // "reader.readAsArrayBuffer(this.selectedFile)" được sử dụng để bắt đầu quá trình đọc nội dung của tệp
        /* Khi người dùng chọn file thì dòng lệnh này("reader.readAsArrayBuffer(this.selectedFile)") sẽ được chạy trước đoạn lệnh 
          "reader.onload = (event) => {
          const arrBuffe = event.target.result
          this.byteArray = new Uint8Array(arrBuffe)
        }"(phía trên) khi đọc file xong thì mới gọi đến "reader.onload = (event) => {}"

        */
        /**
        * "reader": Đây là đối tượng FileReader đã được tạo trước đó để thực hiện việc đọc tệp hình ảnh.
        * "readAsArrayBuffer()": Phương thức readAsArrayBuffer là một trong các phương thức được cung cấp bởi FileReader để đọc tệp
        *  với các định dạng khác nhau. Trong trường hợp này, readAsArrayBuffer được sử dụng để đọc tệp và trả về dữ liệu dưới dạng 
        * một đối tượng ArrayBuffer. ArrayBuffer là một cấu trúc dữ liệu trong JavaScript để lưu trữ dữ liệu nhị phân.
        * "this.selectedFile": Đây là tệp hình ảnh đã được người dùng chọn thông qua một trình duyệt hoặc giao diện người dùng. 
        * Biến this.selectedFile chứa đối tượng tệp này.
        * 
        * Khi gọi "reader.readAsArrayBuffer(this.selectedFile)", FileReader bắt đầu đọc nội dung của tệp this.selectedFile. 
        * Quá trình đọc là một hoạt động bất đồng bộ, nghĩa là nó không chặn luồng thực thi của mã JavaScript chính và tiếp tục 
        * thực hiện các tác vụ khác trong khi đang đọc tệp.

          Khi quá trình đọc hoàn thành, sự kiện load sẽ được kích hoạt và hàm xử lý sự kiện "(reader.onload)" được gọi. Trong hàm xử lý 
          này, bạn có thể truy cập dữ liệu tệp đã được đọc thông qua event.target.result, và bạn có thể thực hiện các xử lý tiếp theo
          với dữ liệu đó, ví dụ: chuyển đổi thành Uint8Array hoặc chuỗi Base64, hoặc gửi nó lên máy chủ.
        */
        reader.readAsArrayBuffer(this.selectedFile)
      }else{
        Swal.fire("Vui lòng chọn ảnh")
        this.images = ''
      }

      
    }
    ,
      MaHoaPassword(){
        const Key = "ThisismySecretKey"
        
        const mahoaPwd = CryptoJS.HmacSHA256(this.account.password, Key)

        // Chuyển sang chuỗi hex
        this.passwordHs256 = CryptoJS.enc.Hex.stringify(mahoaPwd)
        this.account.password = this.passwordHs256

      },
      ConvertByteToBase64(byteArr){
        let stringBase64 = ''

        byteArr.forEach((byte) => {
          stringBase64 += String.fromCharCode(byte)
        })
        
        return btoa(stringBase64)
      }
      ,
       AddData(){
        this.MaHoaPassword()
        this.account.image = this.ConvertByteToBase64(this.byteArray)
         axios.post(this.hostname + "/api/Account/AddAccount", this.account)
          .then(response => {
            this.$router.push({name: "OTPs"})
            console.log(response)
          })
          .catch(error => {
            if(error.response){
              Swal.fire("Lỗi")
            }
          })
      }
  }
}

</script>

<style scoped>

@import "../assets/DangKyStyle/css/style.css";
input[type="text"]{
  color: black;
}
</style>
