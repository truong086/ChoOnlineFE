import  Vuex from 'vuex'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from './router'
import createPersistedState from 'vuex-persistedstate';

const store = new Vuex.Store({
  state:{
    authToken: '', // Mã token của người dùng
    userPermissions: [], // Danh sách quyền hạn của người dùng
    check: false,
    data: [],
    dataImage: [],
    name: "",
    shop_name: "",
    id_account: 0
  },
  getters:{
    check: (state) => state.check, // Định nghĩa getter để truy cập trạng thái đăng nhập
    userPermissions: (state) => {
      return state.userPermissions && state.userPermissions
    },
    laydanhsachRole: (state) => (index) => {
      return state.userPermissions[index]
    },
    name: state => state.name,
    imageLeng: state => state.dataImage.length,
    shop_name: state => state.shop_name,
    id_account: state => state.id_account
  },
  mutations:{
    updateAuthToken(state, token){
      state.authToken = token
    },
    updateIdAccount(state, id_account){
      state.id_account = id_account
    },
    updateData(state, data){
      state.data = data
    },
    updateShopName(state, shop_name){
      state.shop_name = shop_name
    },
    updateImage(state, dataImage){
      state.dataImage = [...state.dataImage, ...dataImage] /* "[...state.dataImage, ...dataImage]" đây là cách lưu 1 list dữ liệu mới 
                                                              vào 1 danh sách dữ liệu cũ trước đó, "...state.dataImage" có nghĩa là copy toàn bộ
                                                              danh sách dữ liệu cũ trước đó, "...dataImage" đây là thêm danh sách dữ liệu mới vào danh sách dữ liệu
                                                              cũ trước đó
                                                              */
    },
    deleteImage(state, index){
      // state.dataImage.splice(index, 1) // Cách 1 để xóa đi phần tử trong list state

      // Cách 2 để xóa đi phần tử trong list state
      // GIẢI THÍCH ĐOẠN CODE NÀY
      state.dataImage = state.dataImage.filter((_, i) => i !== index) /**Đoạn code "state.dataImage = state.dataImage.filter((_, i) => i !== index);" trong Vuex 
                                                                        là một cách để xóa một phần tử khỏi mảng "dataImage" dựa trên index 
                                                                        của phần tử đó.

                                                                        "state.dataImage": Đây là mảng trong state của Vuex mà bạn muốn thay đổi.

                                                                        ".filter((_, i) => i !== index)": Đây là phương thức filter 
                                                                        của JavaScript được áp dụng lên mảng "dataImage". Phương thức filter
                                                                        tạo ra một mảng mới bằng cách lặp qua từng phần tử trong mảng và 
                                                                        áp dụng một hàm callback cho mỗi phần tử. Trong trường hợp này, 
                                                                        hàm callback nhận vào hai đối số: "_" (đại diện cho giá trị của phần tử, nhưng không được sử dụng trong hàm này) 
                                                                        và i (đại diện cho index của phần tử trong mảng).

                                                                        "state.dataImage = ...": Phần tử cuối cùng của đoạn mã này 
                                                                        gán kết quả của phương thức "filter" trở lại vào 
                                                                        "state.dataImage", thay thế mảng ban đầu bằng mảng mới sau khi
                                                                        loại bỏ phần tử có index tương ứng.

                                                                        - Tóm lại, đoạn mã này sử dụng "filter" để tạo một bản sao mới
                                                                         của mảng "dataImage" trong state của Vuex, loại bỏ phần tử
                                                                         có index trùng khớp với index cần xóa và gán lại mảng mới này 
                                                                         vào "state.dataImage".
                                                                        */
    },
    resetImage(state){
      state.dataImage = []
    },
    resetRole(state){
      state.userPermissions = []
    },
    updateName(state, name){
      state.name = name
    },
    updateUserPermissions(state, permissions){
      state.userPermissions.push(permissions)
      // // Sau khi thay đổi state, lưu dữ liệu vào history.state
      // window.history.replaceState({ userPermissions: state.userPermissions }, '');
    },
    updateCheck(state, check){
      state.check = check
    }
  },
  plugins: [createPersistedState()]
  ,
  actions:{
    login({commit}, {username, password}){
      // console.log(username)
      // console.log(password)
      // Call Api đăng nhập và lấy token
      axios.post("https://localhost:7163/api/User/Signin/"+username+"/"+password)
        .then((response) => {
          if(response.data.userId > 0){
            const {token, username} = response.data
            const time = 7 * 24 * 60 * 60 * 1000
            const ThoiGianSong = Date.now() + time
            const trangthai = true
            commit("updateAuthToken", JSON.stringify(token))
            commit("updateUserPermissions", username)
            console.log(username)
            commit("updateCheck", trangthai)
            localStorage.setItem('token', JSON.stringify(token))
            localStorage.setItem('thoigiansong', ThoiGianSong)
            localStorage.setItem('username', JSON.stringify(username))
            localStorage.setItem('trangthai', trangthai)
            router.push({ name: 'das' })
            // console.log(token)
            // const id = response.data.userId
            // return id
          }
        })
        .catch((error) =>{
          Swal.fire(error.response.data)
        })
    },
    AddDataImage({commit}, image){
      commit('updateImage', image)
    },
    RemoveImage({commit}, index){
      commit('deleteImage', index)
    },
    ResetImage({commit}){
      commit('resetImage')
    },
    ResetRole({commit}){
      commit('resetRole')
    }
    // check(check){
    //   return new Promise((resolve) => {
    //     resolve(this.commit("updateCheck", check)); // Trả về giá trị true hoặc false
    //   });
    // }
  }
})

// Khôi phục trạng thái từ localStorage khi khởi động ứng dụng
const savedState = localStorage.getItem('vuex');
if (savedState) {
  store.replaceState(JSON.parse(savedState));
  
}

// Lưu trạng thái vào localStorage trước khi trang tải lại
window.addEventListener('beforeunload', () => {
  localStorage.setItem('vuex', JSON.stringify(store.state));
});

// Bắt sự kiện sau khi tải lại trang hoàn tất thì sẽ xóa biến "vuex" được lưu dưới "localStorage" đi
// window.onload = function() {
//   // Xử lý sau khi toàn bộ trang đã được load
//   console.log('Trang đã được load hoàn toàn.');
//   localStorage.removeItem('vuex');
//   // Thực hiện các thao tác hoặc gọi hàm cần thiết ở đây.
// }

export default store