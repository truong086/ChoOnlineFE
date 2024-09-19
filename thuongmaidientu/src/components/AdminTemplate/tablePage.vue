<template>
  <body>
    <div class="load" v-if="checkLoad">
    <div class="icon">
      <i class="fa fa-motorcycle" aria-hidden="true"></i>
      
    </div>
    <h1>Đang load...</h1>
  </div>
  <div class="container-scroller">
    <!-- partial:../../partials/_horizontal-navbar.html -->
    <HeadersPage></HeadersPage>
    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Basic Table</h4>
                  <p class="card-description" @click="Status('Add')">Add class <code>.table</code></p>
                  <input type="text" placeholder="Tìm kiếm" style="color: red; border-radius: 10px; outline: none; padding: 5px 25px;" ref="value" @change="search($event)" />
                  <div class="table-responsive" style="width: 800px;">
                    <table class="table" width="100%" height="200px">
                      <thead>
                        <tr>
                          <th>User name</th>
                          <th>Email</th>
                          <th>Ảnh</th>
                          <th>Ngày tạo</th>
                          <th>Ngày sửa</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, page) in data" :key="page">
                          <td>{{ item.name }}</td>
                          <td>{{ item.email }}</td>
                          <td><div><img :src="'data:image/*;base64,' + item.image" alt=""></div></td> 
                          <td> Đang Update </td> 
                          <td><p style="color: red; font-weight: bold;">{{item.cretorEdit == null ? 'Chưa có người sửa' : item.cretorEdit}}</p></td>
                          <td>
                            <div style="display: flex;">
                              <label class="badge badge-danger" @click="Status(item.id, 'Edit', 'Account')" style="color: yellow !important; margin-right: 5px; cursor: pointer;">Edit</label>
                              <label class="badge badge-danger" @click="Status(item.id, 'Delete', 'Account')" style="color: #FFF !important; cursor: pointer;">Delete</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <PagesTotal :page="page" :totalPage="totalPage" :valueE="valueE" @pageChange="loadData" @pageSizeChange="changeReload"></PagesTotal>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Hoverable Table</h4>
                  <p class="card-description">
                    Add class <code>.table-hover</code>
                    <input type="text" placeholder="Tìm kiếm" style="color: red; border-radius: 10px; outline: none; padding: 5px 25px;" ref="value" @keyup="searchShop($event)" />
                  </p>
                  <div class="table-responsive">
                    <table class="table table-hover">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Địa chỉ</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th>Ảnh</th>
                          <th>Account create</th>
                          <th>Vận chuyển</th>
                          <th>#</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in shop" :key="index">
                          <td>{{ item.name }}</td>
                          <td>{{ item.diachi }}</td>
                          <td class="text-danger">
                            {{ item.email }}
                          </td>
                          <td>{{ item.sodienthoai }}</td>
                          <td v-if="this.byteArrayToBase64(item.image)"><img :src="'data:image/*;base64,' + item.image" width="100px" /></td>
                          <td v-else>Chưa có ảnh</td>
                          <td>{{ item.account }}</td>
                          <td>{{ item.vanchuyen }}</td>
                          <td>
                            <div style="display: flex;">
                              <label class="badge badge-danger" @click="Status(item.id, 'Edit', 'Shop')" style="color: yellow !important; margin-right: 5px; cursor: pointer;">Edit</label>
                              <label class="badge badge-danger" @click="Status(item.id, 'Delete', 'Shop')" style="color: #FFF !important; cursor: pointer;">Delete</label>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <PagesTotal :page="pageShop" :totalPage="totalPageShop" :valueE="valueEShop" @pageChange="loadDataShop" @pageSizeChange="changeReloadShop"></PagesTotal>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Striped Table</h4>
                  <p class="card-description">
                    Add class <code>.table-striped</code>
                  </p>
                  <div class="table-responsive">
                    <table class="table table-striped">
                      <thead>
                        <tr>
                          <th>User</th>
                          <th>First name</th>
                          <th>Progress</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in ShopMaxOrder" :key="index">
                          <td class="py-1">
                            <img v-if="item.shopImage.length > 0"
                              :src="'data:image/*;base64,' + item.shopImage[0]"
                              alt="image"
                            />
                          </td>
                          <td>{{ item.shopName }}</td>
                          <td>
                            <div class="progress"  style="width: 1000px;">
                              <div
                                class="progress-bar bg-success"
                                role="progressbar"
                                :style="'width: ' + tinhPhanTram(item.totalQuantity, 500) + 'px;' + randomMau() + randomMauChu() + 'font-weight: bold;'"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="1000"
                              >{{ tinhPhanTram(item.totalQuantity, 500) }}%</div>
                            </div>
                          </td>
                          <td>{{ item.totalQuantity }} Đơn hàng</td>
                          <td>{{item.total}} VNĐ</td>
                        </tr>
                      </tbody>
                    </table>
                    <PagesTotal :page="pageShopMaxOrder" :totalPage="totalPageShopMaxOrder" :valueE="valueShopMaxOrder" @pageChange="FindAllShopMaxOrder" @pageSizeChange="changeReloadShopMaxOrder"></PagesTotal>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Bordered table</h4>
                  <p class="card-description">
                    Add class <code>.table-bordered</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First name</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in ShopMaxProduct" :key="index">
                          <td>{{ index++ }}</td>
                          <td>{{ item.shopName }}</td>
                          
                          <td>
                            <div>
                              <img v-if="item.shopImage.length > 0" :src="'data:image/*;base64,' + item.shopImage[0]" alt="">
                            </div>
                          </td>
                          <td><h6>{{ item.totalQuantity }} Sản phẩm</h6></td>
                        </tr>
                      </tbody>
                    </table>
                    <PagesTotal :page="pageShopMaxProduct" :totalPage="totalPageShopMaxProduct" :valueE="valueShopMaxProduct" @pageChange="FindAllShopMaxProduct" @pageSizeChange="changeReloadShopMaxProduct"></PagesTotal>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Inverse table</h4>
                  <p class="card-description">
                    Add class <code>.table-dark</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-dark">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First name</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Herman Beck</td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr>
                          <td>2</td>
                          <td>Messsy Adam</td>
                          <td>$245.30</td>
                          <td>July 1, 2015</td>
                        </tr>
                        <tr>
                          <td>3</td>
                          <td>John Richards</td>
                          <td>$138.00</td>
                          <td>Apr 12, 2015</td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Peter Meggik</td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Edward</td>
                          <td>$ 160.25</td>
                          <td>May 03, 2015</td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>John Doe</td>
                          <td>$ 123.21</td>
                          <td>April 05, 2015</td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Henry Tom</td>
                          <td>$ 150.00</td>
                          <td>June 16, 2015</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-12 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Table with contextual classes</h4>
                  <p class="card-description">
                    Add class <code>.table-{color}</code>
                  </p>
                  <div class="table-responsive pt-3">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>#</th>
                          <th>First name</th>
                          <th>Product</th>
                          <th>Amount</th>
                          <th>Deadline</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr class="table-info">
                          <td>1</td>
                          <td>Herman Beck</td>
                          <td>Photoshop</td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr class="table-warning">
                          <td>2</td>
                          <td>Messsy Adam</td>
                          <td>Flash</td>
                          <td>$245.30</td>
                          <td>July 1, 2015</td>
                        </tr>
                        <tr class="table-danger">
                          <td>3</td>
                          <td>John Richards</td>
                          <td>Premeire</td>
                          <td>$138.00</td>
                          <td>Apr 12, 2015</td>
                        </tr>
                        <tr class="table-success">
                          <td>4</td>
                          <td>Peter Meggik</td>
                          <td>After effects</td>
                          <td>$ 77.99</td>
                          <td>May 15, 2015</td>
                        </tr>
                        <tr class="table-primary">
                          <td>5</td>
                          <td>Edward</td>
                          <td>Illustrator</td>
                          <td>$ 160.25</td>
                          <td>May 03, 2015</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- content-wrapper ends -->
        <!-- partial:../../partials/_footer.html -->
        <footer class="footer">
          <div class="footer-wrap">
            <div
              class="d-sm-flex justify-content-center justify-content-sm-between"
            >
              <span
                class="text-muted text-center text-sm-left d-block d-sm-inline-block"
                >Copyright ©
                <a href="https://www.bootstrapdash.com/" target="_blank"
                  >bootstrapdash.com </a
                >2021</span
              >
              <span
                class="float-none float-sm-right d-block mt-1 mt-sm-0 text-center"
                >Only the best
                <a href="https://www.bootstrapdash.com/" target="_blank">
                  Bootstrap dashboard
                </a>
                templates</span
              >
            </div>
          </div>
        </footer>
        <!-- partial -->
      </div>
      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
</body>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'
import PagesTotal from '../PageList/PagesTotal.vue'
import HeadersPage from '../Header/HeaderPage.vue'
import { mapState, mapMutations } from 'vuex';
  // import phantrang from '../PageList/PagesTotal.vue'
  export default{
  components: { PagesTotal, HeadersPage },
    // components:{
    //   phantrang
    // }
    data(){
      return{
        // datas: this.$store.state.data,
        page: 1,
        pageSize: 5,
        totalPage: 0,
        image: '',
        pageShop: 1,
        pageSizeShop: 5,
        totalPageShop: 0,
        imageShop: '',
        valueEShop: '',
        idList: [],
        valueE: '',
        shop: [],
        ShopMaxOrder: [],
        pageShopMaxOrder: 1,
        pageSizeShopMaxOrder: 5,
        totalPageShopMaxOrder: 0,
        valueShopMaxOrder: '',
        ShopMaxProduct: [],
        pageShopMaxProduct: 1,
        pageSizeShopMaxProduct: 5,
        totalPageShopMaxProduct: 0,
        valueShopMaxProduct: '',
        danhSachMau: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'], // Các màu bạn muốn sử dụng
        mauChus: ['#0c0537', '#8f227e', '#f52929', '#fc466b', '#3c911c'],
        checkLoad: false
      }
    },
    computed:{
      // Lấy ra biến "data" trong "state"(ở trong file store.js) để sử dụng
      ...mapState(['data']),
      
      // pageData(){
      //   // Tính toán dữ liệu cho trang hiện tại dựa trên page và pageSize
      //   // const startIndex = (this.page - 1) * this.pageSize
      //   // const endInd = startIndex + this.pageSize
      //   // return this.data.slice(startIndex, endInd)
      //   let datas = this.data
      //   return datas

      // }
    },
    // watch:{
    //   page(newValue, oldValue){
    //     if(newValue != oldValue){
    //       this.loadData(this.page)
    //     }
    //   }
    // },
    watch: {
      pageShop: {
      // Kiểm tra "filterobject" khi được thay đổi dữ liệu
      handler: function change() {
        if(this.valueEShop === ''){
          this.loadDataShop(["", this.pageShop]);
        }else{
          this.loadDataShop([this.valueEShop, this.pageShop]);
        }
      },
      deep: true,
    },
    pageSizeShop: {
      handler: function change() {
        if(this.valueEShop === ''){
          this.loadDataShop(["", this.pageShop]);
        }else{
          this.loadDataShop([this.valueEShop, this.pageShop]);
        }
        
      },
      deep: true,
    },
  },
    methods:{
      randomMau() {
          // Random ra màu khi gọi đến hàm
          const randomIndex = Math.floor(Math.random() * this.danhSachMau.length);
          return `background-color: ${this.danhSachMau[randomIndex]} !important;`;
        },
        randomMauChu(){
          const randomColor = Math.floor(Math.random() * this.mauChus.length)
          return `color: ${this.mauChus[randomColor]};`
        }
        ,
      tinhPhanTram(soluong, phantram){
        let phantrams = phantram / 100
        return soluong / phantrams
      }
      ,

      async FindAllShopMaxOrder(arr){
        this.checkLoad = true
        const name = this.$store.getters.name
        if(arr[0] === ""){
          await axios.get(this.hostname + `/api/Order/FindAllShopDonHangByMax?account_name=${name}&page=${arr[1]}&pageSize=${this.pageSizeShopMaxOrder}`, this.getTokenConfig())
        .then(response => {
          
          this.ShopMaxOrder = response.data.content.data
          this.pageShopMaxOrder = response.data.content.page
          this.totalPageShopMaxOrder = response.data.content.totalPages
          console.log(this.ShopMaxOrder)
          this.checkLoad = false
          this.$notify({
            title: "Thông báo",
            text: "Đang đợi xét duyệt đơn hàng",
            // Hiển thị thông báo trong khoảng thời gian còn lại
            duration: 5000,
            type: "success"
          });
        })
        .catch(error => {
          if(error.response){
            this.$notify({
                title: "Thông báo",
                text: error.response.data,
                // Hiển thị thông báo trong khoảng thời gian còn lại
                duration: 5000,
                type: "error"
              });
          }
        })
        }
        
        
      },

      async FindAllShopMaxProduct(arr){
        this.checkLoad = true
        const name = this.$store.getters.name
        if(arr[0] === ""){
          await axios.get(this.hostname + `/api/Order/FindAllShopProductMax?account_name=${name}&page=${arr[1]}&pageSize=${this.pageSizeShopMaxProduct}`, this.getTokenConfig())
        .then(response => {
          
          this.ShopMaxProduct = response.data.content.data
          this.pageShopMaxProduct = response.data.content.page
          this.totalPageShopMaxProduct = response.data.content.totalPages
          console.log(this.ShopMaxProduct)
          this.checkLoad = false
          this.$notify({
            title: "Thông báo",
            text: "Load data thành công",
            // Hiển thị thông báo trong khoảng thời gian còn lại
            duration: 5000,
            type: "success"
          });
        })
        .catch(error => {
          if(error.response){
            this.$notify({
                title: "Thông báo",
                text: error.response.data,
                // Hiển thị thông báo trong khoảng thời gian còn lại
                duration: 5000,
                type: "error"
              });
          }
        })
        }
        
        
      },

      // Chuyển đổi mảng byte thành chuỗi Base64 để kiểm tra xem dữ liệu có đúng là được chuyển từ mảng byte sang base64 không
      byteArrayToBase64(byteArray) {
          if (byteArray && byteArray.length > 0) {
            const binaryString = Array.from(byteArray, byte => String.fromCharCode(byte)).join('');
            return btoa(binaryString);
          }
          return ''; // Trả về chuỗi rỗng hoặc giá trị mặc định tùy vào yêu cầu của bạn
        },

        // Hàm kiểm tra Base64
      // isBase64Image(str) {
      //   return /^data:image\/(jpeg|png|gif);base64,/.test(str);
      // },

      // Hàm kiểm tra Base64
    checkBase64(image) {
      const base64Format = /^data:image\/([a-zA-Z]*);base64,/;
      return base64Format.test(image);
    },
      // dataNew(newValue){
      //   this.data = newValue
      // },
      search(e){
        // console.log(this.$refs.value.value)
        console.log(e.target.value)
        this.valueE = e.target.value
        this.loadData([this.valueE, this.page])
      },
      searchShop(e){
        // console.log(this.$refs.value.value)
        console.log(e.target.value)
        this.valueEShop = e.target.value
        this.loadDataShop([this.valueEShop, this.pageShop])
      },
      getTokenConfig(){
            var token = JSON.parse(localStorage.getItem("token"))
            // var token = JSON.parse(store.state.authToken)
            var result = {
                headers: {Authorization: `Bearer ${token}`}
            }
            console.log(token)
            return result
        },

        // Gọi lại hàm "updateData" trong state(ở trong file store.js) để cập nhật dữ liệu vào trong biến "data"(vừa được lấy ra trong "state" ở phía trên(...mapState(['data'])))
      ...mapMutations(['updateData']),
      async loadData(arr){
        // this.checkLoad = true

        console.log("Test ABC: " + arr[1])

        if(arr[0] === ""){
          // this.checkLoad = true
          axios.get(this.hostname + `/api/Account/FindAll?page=${arr[1]}&pageSize=${this.pageSize}`, this.getTokenConfig())
          .then(response => {
            console.log(response)
            // this.data = response.data.content.data
            // this.$store.commit('updateData', response.data.content.data)
            this.updateData(response.data.content.data) /* Sử dụng "this.updateData()" để cập nhật dữ liệu đc lưu vào trong biến "data" được 
              lấy từ "state", phải sử dụng hàm "updateData()" này thì mới cập nhật được dữ liệu vào trong state "data", hàm "updateData()" này
              được lấy ra từ "...mapMutations(['updateData'])" ở phía trên, hàm "updateData()" nằm trong state(ở trong file store.js) hàm này sử dụng để cập nhật dữ liệu vào cho state "data" trong file "store.js"
              và khi dữ liệu trong state bị thay đổi thì sẽ Load lại trang web, state này thích hợp cho việc phân trang
              */
            this.page = response.data.content.pageIndex
            this.totalPage = response.data.content.totalPage
            this.checkLoad = false
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
              this.checkLoad = false
            }
          })
        }else{
          // this.checkLoad = true
          axios.get(this.hostname + `/api/Account/FindAll?name=${arr[0]}&page=${arr[1]}&pageSize=${this.pageSize}`, this.getTokenConfig())
          .then(response => {
            // this.data = response.data.content.data
            // this.$store.commit('updateData', response.data.content.data)
            this.updateData(response.data.content.data)
            this.page = response.data.content.pageIndex
            this.totalPage = response.data.content.totalPage
            this.checkLoad = false
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
              this.checkLoad = false
            }
          })
        }
        
      },
      async loadDataShop(arr){
        this.checkLoad = true

        if(arr[0] === ""){
          axios.get(this.hostname + `/api/Shop/findAll?page=${arr[1]}&pageSize=${this.pageSizeShop}`, this.getTokenConfig())
          .then(response => {
            this.shop = response.data.content.data
            this.pageShop = response.data.content.page
            this.totalPageShop = response.data.content.totalPages
            this.checkLoad = false
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
            }
          })
        }else{
          this.checkLoad = true
          axios.get(this.hostname + `/api/Shop/findAll?name=${arr[0]}&page=${arr[1]}&pageSize=${this.pageSizeShop}`, this.getTokenConfig())
          .then(response => {
            this.shop = response.data.content.data
            this.pageShop = response.data.content.page
            this.totalPageShop = response.data.content.totalPages
            this.checkLoad = false
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
            }
          })
        }

        },
      changeReload(event){
        this.pageSize = event
        if(this.valueE === ""){
          this.loadData(["", this.page])
        }
        else if(this.valueE !== ""){
          this.loadData([this.valueE, this.page])
        }
        
      },
      changeReloadShop(event){
        this.pageSizeShop = event
        if(this.valueEShop === ""){
          this.loadDataShop(["", this.pageShop])
        }
        else if(this.valueEShop !== ""){
          this.loadDataShop([this.valueEShop, this.pageShop])
        }
      },
      changeReloadShopMaxOrder(event){
        this.pageSizeShopMaxOrder = event
        if(this.valueShopMaxOrder === ""){
          this.FindAllShopMaxOrder(["", this.pageShopMaxOrder])
        }
        else if(this.valueShopMaxOrder !== ""){
          this.FindAllShopMaxOrder([this.valueShopMaxOrder, this.pageShopMaxOrder])
        }
      },
      changeReloadShopMaxProduct(event){
        this.pageSizeShopMaxProduct = event
        if(this.valueShopMaxProduct === ""){
          this.FindAllShopMaxOrder(["", this.pageShopMaxProduct])
        }
        else if(this.valueShopMaxProduct !== ""){
          this.FindAllShopMaxOrder([this.valueShopMaxProduct, this.pageShopMaxProduct])
        }
      },
      async Status(type, status, table){
        if(type === 'Add'){
          this.$router.push({name: "EditOrAdd", params: {type: 'Add', table: 'Add'}})
        }if(status === 'Edit' && table === 'Account' && type !== 0){
          localStorage.setItem('Id', JSON.stringify(type))
          this.$router.push({name: "EditOrAdd", params: {type: status, table: table}})
        }
        if(status === "Delete" && table === "Account" && type !== 0){
          if(confirm('Bạn Chắc chắn muốn xóa bản ghi này không?')){
            // let idArray = {
            //   id: type
            // }
            
            // this.idList.push(idArray)
            
            // await axios.delete(this.hostname + "/api/Account/DeleteAccount", {type: type, token: this.getTokenConfig()})
            this.checkLoad = true
            await axios.delete(this.hostname + `/api/Account/DeleteAccount?id=${type}`, this.getTokenConfig())
              .then(response => {
                // this.loadData(this.page)
                if(this.valueE === ""){
                  this.loadData(["", this.page])
                }else if(this.valueE !== ""){
                  this.loadData([this.valueE, this.page])
                }
                console.log(response)
                this.checkLoad = false
              })
              .catch(error => {
                if(error.response){
                  Swal.fire(error.response.data)
                }
              })
          }
        }
        if(status == "Edit" && table == "Shop"){
          let arrId = []
          arrId.push(type)
          localStorage.setItem('IdShop', JSON.stringify(arrId))
          this.$router.push({name: "EditOrAdd", params: {type: status, table: table}})
        }
        if(status == "Delete" && table == "Shop"){
          let ids = []
          ids.push(type)
          const idJoin = ids.join(', ')
          if(confirm("Bạn chắc chắn muốn xóa bản ghi này không")){
            await axios.delete(this.hostname + '/api/Shop/DeleteShop', {
              headers:{
                'id': [idJoin]
              }
            }, this.getTokenConfig())
              .then(response => {
                if(this.valueEShop !== ""){
                  this.loadDataShop([this.valueEShop, this.pageShop])
                }else if(this.valueEShop === ""){
                  this.loadDataShop(["", this.pageShop])
                }
                
                console.log(response)
              })
              .catch(error => {
                if(error.response){
                  Swal.fire(error.response.data)
                }
              })
          }
        }
      }
    },
    async created(){
      await this.loadData(["", this.page])
      await this.loadDataShop(["", this.pageShop])
      await this.FindAllShopMaxOrder(["", this.pageShopMaxOrder])
      await this.FindAllShopMaxProduct(["", this.pageShopMaxProduct])

    },
    mounted(){
      this.loadData(["", this.page])
      this.loadDataShop(["", this.pageShop])
    }
  }
</script>

<style scoped>
    @import url("../../assets/AdminTemplate/css/style1.css");
    @import url("../../assets/AdminTemplate/vendors/base/vendor.bundle.base.css");
    @import url("../../assets/AdminTemplate/vendors/mdi/css/materialdesignicons.min.css");
    body{
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
  top: 10%;
  left: 45%;
}
.icon{
  position: absolute;
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
