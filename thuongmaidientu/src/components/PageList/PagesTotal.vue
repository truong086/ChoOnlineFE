<template>
    <div>
        <!-- Lựa chọn kích thước trang -->
        <label for="pageSize">Kích thước của trang</label>
        <select v-model="pageSize" @change="updatePageSize">
            <option v-for="item in pageSizeList" :key="item" :value="item">{{ item }}</option>
        </select>
        <div style="display: flex; padding: 0 80px; width: 100%;">
        <!-- GIẢI THÍCH ĐOẠN CODE NÀY -->
         <!-- 
            - Khi currentPage bằng 1, điều kiện "currentPage === 1" sẽ trả về true, và vì vậy ":disabled="true"" sẽ được áp dụng cho nút. 
              Kết quả là nút sẽ bị vô hiệu hóa (disabled), và người dùng không thể nhấp vào nút "Trang trước" khi đang ở trang đầu tiên.

            - Khi currentPage khác 1, điều kiện currentPage === 1 sẽ trả về false, và :disabled="false" sẽ được áp dụng. 
              Kết quả là nút sẽ ở trạng thái bình thường và người dùng có thể nhấp vào nó để chuyển đến trang trước đó.
          -->
          <button @click="backPage" :disabled="page === 1" style="background-color: red; color: yellow; border-radius: 10px;">Trang trước</button>

        <!-- Chọn dãy số trang -->
        <ul style="display: inline-block; list-style: none;">
            <li class="li" style="display: inline-block; padding: 0 10px;" v-for="pages1 in pages" :key="pages1" @click="gotoPage(pages1)"
            :class="{'active' : pages1 == page}"
            >
                {{ pages1 }}
            </li>
        </ul>

         
        <button @click="nextPage" :disabled="page === totalPage" style="margin: 0 20px; background-color: red; color: yellow; border-radius: 10px;">Next</button>
        </div>
        
    </div>
</template>

<script>
    export default{
        props:{
            page: Number,
            totalPage: Number,
            valueE: String
        },
        data(){
            return {
                pageSizeList: [5, 20, 30], // List Kích thước trang
                pageSize: 5 // Kích thước trang mặc định
            }
        },
        computed:{
            pages(){
                // Tính toán số trang dữ trên totalPages và kích thước trang
                const pageItem = []
                for(let i = 1; i <= this.totalPage; i++){
                    if(i == 1 || i == this.totalPage || (i <= this.page + 2 && i >= this.page - 2)){
                        pageItem.push(i)
                    }else if(i == this.page + 3 || i == this.page - 3){
                        pageItem.push("...")
                    }
                    
                }
                return pageItem
            }
        },

        methods:{
            updatePageSize(){
                // GIẢI THÍCH ĐOẠN CODE NÀY
                // Gọi hàm khi người dùng thay đổi kích thước trang
                //"this.$emit": Đây là một phương thức có sẵn trong các components Vue.js. Nó được sử dụng để phát ra sự kiện tùy chỉnh từ component hiện tại.
                /* "pageSizeChange": Đây là tên của sự kiện tùy chỉnh mà bạn đang phát ra. Nó có thể là bất kỳ tên nào bạn muốn, 
                   nhưng trong trường hợp này, nó là "pageSizeChange", ngụ ý rằng sự kiện này liên quan đến việc thay đổi kích thước 
                   trang (pageSize).
                */
               /* "this.pageSize": Đây là giá trị mà bạn muốn gửi cùng với sự kiện. Trong trường hợp này, bạn đang gửi giá trị hiện tại 
                  của biến pageSize, tức là kích thước trang hiện tại, kèm theo sự kiện.*/

                  /**
                   * - Khi dòng code này được gọi, nó phát ra sự kiện "pageSizeChange" và truyền giá trị this.pageSize cùng với sự kiện. 
                   *    Các thành phần (components) khác trong ứng dụng Vue.js có thể lắng nghe và xử lý sự kiện này bằng cách 
                   *    sử dụng "@" hoặc "v-on" trong template
                   * 
                   * "pageSizeChange" này được chuyền từ component cha sử dung ký tự "@"("@pageSizeChange") để chuyền 
                   * 
                   */
                // this.$emit("pageSizeChange", { // Chuyền nhiều dữ liệu vào trong "$emit"
                //     pageSizes: this.pageSize,
                //     pages: this.page
                // })
                // this.$emit("pageSizeChange",  // Chuyền nhiều dữ liệu vào trong "$emit"
                //     {pageSizeEmit: this.pageSize,
                //     values: this.valueE}
                // )

                this.$emit("pageSizeChange",  // Chuyền nhiều dữ liệu vào trong "$emit"
                     this.pageSize
                )
            },

            // Hàm chuyển đến trang mà người dùng ấn chọn
            gotoPage(page){

                // GIẢI THÍCH ĐOẠN CODE NÀY
                // Gọi hàm khi người dùng chọn 1 trang cụ thể để hiển thị
                /**
                 * "pageChange" là một sự kiện tùy chỉnh mà bạn sẽ phải tự định nghĩa và phát ra từ component phân trang để thông báo
                 *  rằng trang đã thay đổi. Bạn sẽ phải lắng nghe sự kiện nàx   xx      xx  y trong component chứa dữ liệu và thực hiện việc tải dữ liệu
                 *  cho trang mới.
                 * 
                 * "pageChange" này được chuyền từ component cha
                 */

                 if(page == '...'){
                    return
                 }
                this.$emit("pageChange", [this.valueE, page])
            },

            // Hàm lùi lại 1 trang
            backPage(){
                if(this.page > 1){
                    this.$emit("pageChange", [this.valueE, this.page - 1])
                }
            },

            // Hàm chuyển đến 1 trang tiếp theo
            nextPage(){
                if(this.page < this.totalPage){
                    
                    this.$emit("pageChange", [this.valueE, this.page + 1])
                }
            }
        }
    }
</script>

<style>
.active{
    color: red !important; /**"!important" là chế độ ưu tiên */
    border: 1px solid black;
    font-weight: bold;
    animation: doimauchu 1s ease-in-out infinite !important;
}
@keyframes doimauchu {
    0%{
        color: green;
    }
    100%{
        color: rebeccapurple;
    }
}
.li{
    color: aqua;
}
ul li{
    cursor: pointer;
}
</style>
