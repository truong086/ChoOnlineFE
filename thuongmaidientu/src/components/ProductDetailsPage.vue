<template>
  <div
    class="height d-flex justify-content-center align-items-center"
    style="
      width: 100vw;
      height: 100vh;
      padding: 15px 20px;
      flex-direction: column;
    "
  >
    <div
      class="card p-3"
      style="width: 600px; height: auto; padding: 15px 20px"
    >
      <div
        class="d-flex justify-content-between align-items-center"
        style="width: 500px; height: auto; padding: 100px 20px"
      >
        <div class="mt-2">
          <h4 class="text-uppercase">{{ product.title }}</h4>
          <div class="mt-5">
            <h5 class="text-uppercase mb-0">{{ product.nameShop }}</h5>
            <h1 class="main-heading mt-0">VASE</h1>
            <div class="d-flex flex-row user-ratings">
              <div class="ratings">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <h6 class="text-muted ml-1">4/5</h6>
            </div>
          </div>
        </div>
        <div class="image" style="margin-top: 100px">
          <img :src="product.image[0]" width="200" />
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
        <span style="color: red">Giá: {{ product.price }} VNĐ</span>
        <div class="colors">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
        <span style="color: red">Số lượng</span>
        <input type="number" ref="soluong" required />
      </div>

      <div class="d-flex justify-content-between align-items-center mt-2 mb-2">
        <span style="color: red">Phương thức vận chuyển</span>
        <div class="colors">
          <select v-model="vanchuyen_id">
            <option
              v-for="(item, index) in vanchuyen"
              :key="index"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </select>
        </div>
      </div>

      <p>{{ product.description }}</p>

      <button class="btn btn-danger" type="button" @click="AddToCart(product)">
        Add to cart
      </button>
    </div>

    <div>
      <div>
        <div style="width: 600px; margin: 20px 0; text-align: left">
          <h1>Bình luận</h1>
        </div>
        <div>
          <div v-for="(item, index) in dataComment" :key="index">
            <div style="display: flex">
              <div>
                <img
                  v-if="item.avatar !== ''"
                  width="50"
                  style="border-radius: 50%"
                  :src="'data:image/*;base64,' + item.avatar"
                />
              </div>
              <div>
                <div style="display: flex">
                  <p>{{ item.accountName }}</p>
                  <p style="margin: 0 20px">{{ item.createdAt }}</p>
                </div>
                <div style="text-align: left">
                  <p>{{ item.message }}</p>
                </div>
                <div style="text-align: left">
                  <img
                    v-if="item.image !== ''"
                    width="100"
                    :src="'data:image/*;base64,' + item.image"
                  />
                </div>

                <div
                  @click="rep1('rep1_' + item.ids1)"
                  style="text-align: left"
                >
                  <button
                    style="
                      border: none;
                      outline: none;
                      background-color: transparent;
                      width: 50px;
                      height: 30px;
                    "
                  >
                    <i class="fa fa-comment" aria-hidden="true"></i>
                  </button>
                </div>

                <div
                  style="display: flex; display: none"
                  :class="'rep1_' + item.ids1"
                >
                  <img :class="'img1_' + item.ids1" width="100" src="" />
                  <div style="background-color: white; border-radius: 10px">
                    <input
                      type="text"
                      :id="'rep_' + item.ids1"
                      v-model="comment.message"
                      style="
                        padding: 5px 30px;
                        border-radius: 10px;
                        border: none;
                        outline: none;
                        background-color: transparent;
                      "
                      placeholder="Nhập bình luận..."
                    />
                    <button
                      @click="rep1User('rep_' + item.ids1, item.ids1)"
                      type="button"
                      style="
                        width: 50px;
                        height: 30px;
                        border-radius: 10px;
                        border: none;
                        outline: none;
                        background-color: transparent;
                      "
                    >
                      Gửi
                    </button>
                  </div>
                  <div class="form-wrapper" style="margin: 10px 10px">
                    <input
                      style="display: none"
                      :id="'files1_' + item.ids1"
                      type="file"
                      @change="
                        handlImageRep(
                          $event,
                          'files1_' + item.ids1,
                          'img1_' + item.ids1
                        )
                      "
                      class="form-control"
                    />

                    <label :for="'files1_' + item.ids1">
                      <i
                        style="font-size: 30px; color: black"
                        class="fa fa-file"
                        aria-hidden="true"
                      ></i>
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div
              v-if="item.commentDescription.length !== 0"
              style="display: flex; margin: 10px 60px; flex-direction: column"
            >
              <div
                v-for="(itemRep2, indexRep2) in item.commentDescription"
                :key="indexRep2"
              >
                <div style="display: flex">
                  <div>
                    <img
                      v-if="itemRep2.avatar !== ''"
                      width="50"
                      style="border-radius: 50%"
                      :src="'data:image/*;base64,' + itemRep2.avatar"
                    />
                  </div>
                  <div>
                    <div style="display: flex">
                      <p>{{ itemRep2.account_Name }}</p>
                      <p style="margin: 0 20px">{{ itemRep2.createdAt }}</p>
                    </div>
                    <div style="text-align: left">
                      <p>{{ itemRep2.messagedescription }}</p>
                    </div>
                    <div style="text-align: left">
                      <img
                        v-if="itemRep2.image !== ''"
                        width="100"
                        :src="'data:image/*;base64,' + itemRep2.image"
                      />
                    </div>

                    <div
                      @click="rep1('rep2_' + itemRep2.ids)"
                      style="text-align: left"
                    >
                      <button
                        style="
                          border: none;
                          outline: none;
                          background-color: transparent;
                          width: 50px;
                          height: 30px;
                        "
                      >
                        <i class="fa fa-comment" aria-hidden="true"></i>
                      </button>
                    </div>

                    <div
                      style="display: flex; display: none"
                      :class="'rep2_' + itemRep2.ids"
                    >
                      <img
                        :class="'imgrep_' + itemRep2.ids"
                        width="100"
                        src=""
                      />
                      <div style="background-color: white; border-radius: 10px">
                        <input
                          type="text"
                          :id="'rep2_' + itemRep2.ids"
                          style="
                            padding: 5px 30px;
                            border-radius: 10px;
                            border: none;
                            outline: none;
                            background-color: transparent;
                          "
                          placeholder="Nhập bình luận..."
                        />
                        <button
                          @click="
                            rep2User('rep2_' + itemRep2.ids, itemRep2.ids)
                          "
                          type="button"
                          style="
                            width: 50px;
                            height: 30px;
                            border-radius: 10px;
                            border: none;
                            outline: none;
                            background-color: transparent;
                          "
                        >
                          Gửi
                        </button>
                      </div>
                      <div class="form-wrapper" style="margin: 10px 10px">
                        <input
                          style="display: none"
                          :id="'filesRep_2' + itemRep2.ids"
                          type="file"
                          @change="
                            handlImageRep(
                              $event,
                              'filesRep_2' + itemRep2.ids,
                              'imgrep_' + itemRep2.ids
                            )
                          "
                          class="form-control"
                        />

                        <label :for="'filesRep_2' + itemRep2.ids">
                          <i
                            style="font-size: 30px; color: black"
                            class="fa fa-file"
                            aria-hidden="true"
                          ></i>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  v-if="itemRep2.commentRep.length !== 0"
                  style="
                    display: flex;
                    margin: 10px 120px;
                    flex-direction: column;
                  "
                >
                  <div
                    v-for="(itemRep3, indexRep3) in itemRep2.commentRep"
                    :key="indexRep3"
                    style="display: flex"
                  >
                    <div>
                      <img
                        v-if="itemRep3.avatar !== ''"
                        width="50"
                        style="border-radius: 50%"
                        :src="'data:image/*;base64,' + itemRep3.avatar"
                      />
                    </div>
                    <div>
                      <div style="display: flex">
                        <p>{{ itemRep3.account_Name }}</p>
                        <p style="margin: 0 20px">{{ itemRep3.createdAt }}</p>
                      </div>
                      <div style="text-align: left">
                        <p>{{ itemRep3.messagedescription }}</p>
                      </div>
                      <div style="text-align: left">
                        <img
                          v-if="itemRep3.image !== ''"
                          width="100"
                          :src="'data:image/*;base64,' + itemRep3.image"
                        />
                      </div>

                      <div
                        @click="rep1('rep3_' + itemRep3.ids)"
                        style="text-align: left"
                      >
                        <button
                          style="
                            border: none;
                            outline: none;
                            background-color: transparent;
                            width: 50px;
                            height: 30px;
                          "
                        >
                          <i class="fa fa-comment" aria-hidden="true"></i>
                        </button>
                      </div>

                      <div
                        style="display: flex; display: none"
                        :class="'rep3_' + itemRep3.ids"
                      >
                        <img
                          :class="'imgrep3_' + itemRep3.ids"
                          width="100"
                          src=""
                        />
                        <div
                          style="background-color: white; border-radius: 10px"
                        >
                          <input
                            type="text"
                            :id="'rep3_' + itemRep3.ids"
                            style="
                              padding: 5px 30px;
                              border-radius: 10px;
                              border: none;
                              outline: none;
                              background-color: transparent;
                            "
                            placeholder="Nhập bình luận..."
                          />
                          <button
                            @click="
                              rep2User('rep3_' + itemRep3.ids, itemRep2.ids)
                            "
                            type="button"
                            style="
                              width: 50px;
                              height: 30px;
                              border-radius: 10px;
                              border: none;
                              outline: none;
                              background-color: transparent;
                            "
                          >
                            Gửi
                          </button>
                        </div>
                        <div class="form-wrapper" style="margin: 10px 10px">
                          <input
                            style="display: none"
                            :id="'filesRep' + itemRep3.ids"
                            type="file"
                            @change="
                              handlImageRep(
                                $event,
                                'filesRep' + itemRep3.ids,
                                'imgrep3_' + itemRep3.ids
                              )
                            "
                            class="form-control"
                          />

                          <label :for="'filesRep' + itemRep3.ids">
                            <i
                              style="font-size: 30px; color: black"
                              class="fa fa-file"
                              aria-hidden="true"
                            ></i>
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <img v-if="images1" :src="images1" style="width: 100px" alt="" />
          </div>
          <div style="display: flex">
            <div>
              <div style="background-color: white; border-radius: 10px">
                <input
                  type="text"
                  v-model="comment.message"
                  style="
                    padding: 15px 50px;
                    border-radius: 10px;
                    border: none;
                    outline: none;
                    background-color: transparent;
                  "
                  placeholder="Nhập bình luận..."
                />
                <button
                  type="button"
                  @click="addComment"
                  style="
                    width: 50px;
                    height: 30px;
                    border-radius: 10px;
                    border: none;
                    outline: none;
                    background-color: transparent;
                  "
                >
                  Gửi
                </button>
              </div>
            </div>
            <div class="form-wrapper" style="margin: 10px 10px">
              <input
                style="display: none"
                ref="file"
                id="files"
                type="file"
                @change="handlImage($event)"
                class="form-control"
              />

              <label for="files">
                <i
                  style="font-size: 30px; color: black"
                  class="fa fa-file"
                  aria-hidden="true"
                ></i>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      product: {
        image: [],
      },
      vanchuyen: [],
      vanchuyen_id: 0,
      dataComment: [],
      comment: {
        message: "",
        images: "",
        product_id: 0,
        account_id: 0,
      },
      commentRep: {
        message: "",
        images: "",
        commentDescription_ID: 0,
        comment_ID: 0,
        account_ID: 0,
      },
      images1: "",
      byteArray: null,
      selectedFile: null,
      imageBytes: null,
    };
  },
  computed: {
    ...mapGetters(["id_account"]),
  },
  async created() {
    if (this.$route.params.name !== "") await this.findOneProduct();
    await this.FindAllVanChuyen();
    await this.findAllComment();
  },
  methods: {
    async rep2User(idValue, idComment) {
      const value = document.getElementById(idValue).value;
      this.commentRep.message = value;
      if (this.commentRep.message === "") {
        return;
      }
      if (this.selectedFile !== null) {
        this.commentRep.images = this.imageBytes;
      }

      this.commentRep.comment_ID = 0;
      this.commentRep.account_ID = this.id_account;

      this.commentRep.commentDescription_ID = idComment;
      await axios
        .post(
          this.hostname + "/api/Comment/CreateComemntDescription",
          this.commentRep
        )
        .then(() => {
          this.findAllComment();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    rep1(className) {
      const show = document.querySelector("." + className);
      if (show.style.display === "block") {
        show.style.display = "none";
      } else {
        show.style.display = "block";
      }
    },
    async rep1User(idValue, idComment) {
      const value = document.getElementById(idValue).value;
      this.commentRep.message = value;
      if (this.commentRep.message === "") {
        return;
      }
      if (this.selectedFile !== null) {
        this.commentRep.images = this.imageBytes;
      }

      this.commentRep.comment_ID = idComment;
      this.commentRep.account_ID = this.id_account;

      this.commentRep.commentDescription_ID = 0;
      await axios
        .post(
          this.hostname + "/api/Comment/CreateComemntDescription",
          this.commentRep
        )
        .then(() => {
          this.findAllComment();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async convertToByteArray(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        this.imageBytes = Array.from(new Uint8Array(arrayBuffer));
      };
      reader.readAsArrayBuffer(file);
    },
    async addComment() {
      if (this.comment.message == "") {
        Swal.fire("Chưa nhập nội dung bình luận");
        return;
      }

      if (this.selectedFile !== null) {
        // this.comment.images = this.convertToByteArray(this.selectedFile)

        // await this.convertToByteArray(this.selectedFile)
        // const blob = new Blob([new Uint8Array(this.imageBytes)], { type: 'application/octet-stream' });
        // const base64String = btoa(String.fromCharCode(...this.byteArray));
        this.comment.images = this.imageBytes;
      }
      this.comment.product_id = this.product.id;
      this.comment.account_id = this.id_account;

      console.log(this.comment);
      await axios
        .post(this.hostname + "/api/Comment/CreateComment", this.comment)
        .then(() => {
          this.findAllComment();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handlImage(e) {
      const fileInput = this.$refs.file;
      if (fileInput.files.length > 0) {
        this.selectedFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const arrBuffe = event.target.result;
          this.byteArray = new Uint8Array(arrBuffe);
          const base64String = btoa(
            new Uint8Array(event.target.result).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          this.imageBytes = base64String;

          // Hiển thị ảnh từ mảng byte
          const blob = new Blob([this.byteArray]);
          const imageURLs = URL.createObjectURL(blob);

          this.images1 = imageURLs;
        };
        reader.readAsArrayBuffer(this.selectedFile);
      } else {
        Swal.fire("Vui lòng chọn ảnh");
        this.images1 = "";
      }
    },

    handlImageRep(e, rep, imgSrcs) {
      const fileInput = document.getElementById(rep);
      const imgSrc = document.querySelector("." + imgSrcs);
      console.log(fileInput);
      if (fileInput.files.length > 0) {
        this.selectedFile = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (event) => {
          const arrBuffe = event.target.result;
          this.byteArray = new Uint8Array(arrBuffe);
          const base64String = btoa(
            new Uint8Array(event.target.result).reduce(
              (data, byte) => data + String.fromCharCode(byte),
              ""
            )
          );
          this.imageBytes = base64String;

          // Hiển thị ảnh từ mảng byte
          const blob = new Blob([this.byteArray]);
          const imageURLs = URL.createObjectURL(blob);

          imgSrc.src = imageURLs;
        };
        reader.readAsArrayBuffer(this.selectedFile);
      } else {
        Swal.fire("Vui lòng chọn ảnh");
        this.images1 = "";
      }
    },
    async findAllComment() {
      await axios
        .get(
          this.hostname +
            `/api/Comment/FindAll?id=${this.product.id}&page=1&pageSize=100`
        )
        .then((response) => {
          console.log(response);
          this.dataComment = response.data.content.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getTokenConfig() {
      var token = JSON.parse(localStorage.getItem("token"));
      // var token = JSON.parse(store.state.authToken)
      var result = {
        headers: { Authorization: `Bearer ${token}` },
      };
      console.log(token);
      return result;
    },
    async findOneProduct() {
      // const name = this.$router.params.name
      const id = JSON.parse(localStorage.getItem("idProduct"));
      await axios
        .get(
          this.hostname + `/api/Product/FindOneId?id=${id}&name=click`,
          this.getTokenConfig()
        )
        .then((response) => {
          this.product = response.data.content;
          console.log(this.product.id);
        })
        .catch((error) => {
          if (error.response) {
            this.$notify({
              title: "Thông báo",
              text: error.response.data,
              // Hiển thị thông báo trong khoảng thời gian còn lại
              duration: 5000,
              type: "error",
            });
          }
        });
    },
    checkNaN(data) {
      return isNaN(data);
    },
    AddToCart(item) {
      let soluong = this.$refs.soluong.value;
      let idAccount = this.$store.getters.id_account;
      if (isNaN(soluong) || soluong === null || soluong === "") {
        // Kiểm tra xem dữ liệu "soluong" được chuyền từ ô input vào có bị "NaN"(nghĩa là bị Null) hay không
        soluong = "1";
      }
      // Math.round(item.soluong * item.price) sử dụng "Math.round()" để nhân sos nguyên với số thực và trả về kết quả là số nguyên, ở đây "price" là số thực, "soluong" là số nguyên
      var products = {
        product_id: item.id,
        product_name: item.title,
        price: item.price,
        soluong: parseInt(soluong),
        total:
          item.price === 0
            ? item.price * parseInt(soluong)
            : Math.round(parseInt(soluong) * item.price),
        account_id: idAccount,
        vanchuyen_id: this.vanchuyen_id,
        image: item.image[0],
      };
      const giohang = JSON.parse(localStorage.getItem("cart")) || [];
      const findOneId = giohang.find((items) => items.product_id === item.id);
      if (findOneId) {
        findOneId.soluong += products.soluong;
        findOneId.total = Math.round(findOneId.soluong * findOneId.price);
      } else {
        giohang.push(products);
      }

      localStorage.setItem("cart", JSON.stringify(giohang));
      this.$notify({
        title: "Thông báo",
        text: "Add giỏ hàng thành công",
        // Hiển thị thông báo trong khoảng thời gian còn lại
        duration: 5000,
        type: "success",
      });
      console.log(JSON.parse(localStorage.getItem("cart")));
    },
    async FindAllVanChuyen() {
      const res = await axios.get(
        this.hostname + `/api/Vanchuyen/findAll`,
        this.getTokenConfig()
      );
      if (res.data.content.data.length > 0) {
        this.vanchuyen = res.data.content.data;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/css/bootstrap.min.css");
@import url("https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js");
@import url("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

body {
  background-color: #dce3f0;
}

.height {
  height: 100vh;
}

.card {
  width: 350px;
  height: 370px;
}

.image {
  position: absolute;
  right: 12px;
  top: 10px;
}

.main-heading {
  font-size: 40px;
  color: red !important;
}

.ratings i {
  color: orange;
}

.user-ratings h6 {
  margin-top: 2px;
}

.colors {
  display: flex;
  margin-top: 2px;
}

.colors span {
  width: 15px;
  height: 15px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  margin-right: 6px;
}

.colors span:nth-child(1) {
  background-color: red;
}

.colors span:nth-child(2) {
  background-color: blue;
}

.colors span:nth-child(3) {
  background-color: yellow;
}

.colors span:nth-child(4) {
  background-color: purple;
}

.btn-danger {
  height: 48px;
  font-size: 18px;
}
</style>
