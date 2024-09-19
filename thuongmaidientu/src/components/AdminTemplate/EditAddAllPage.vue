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

    <HederPages></HederPages>

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body" style="text-align: center;">
                  <h4 class="card-title">Default form</h4>
                  <p class="card-description">Basic form layout</p>
                  <form class="forms-sample" style="width: 100%; border-radius: 10px;">
                    <input
                        v-model="Account.id"
                        type="hidden"
                        class="form-control"
                        placeholder="Id"
                        style="background-color: transparent; color: black"
                      />
                    <div class="form-group" style="width: 600px">
                      <label for="exampleInputUsername1">Username</label>
                      <input
                        v-model="Account.username"
                        ref="username"
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        style="background-color: transparent; color: black"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail1">Email address</label>
                      <input
                        v-model="Account.email"
                        type="email"
                        class="form-control"
                        id="exampleInputEmail1"
                        placeholder="Email"
                      />
                    </div>
                    <div v-if="Account.id > 0" class="form-group">
                      <label for="exampleInputPassword1">Password Hiện tại</label>
                      <input
                        ref="passwordOld"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Phone</label>
                      <input
                      v-model="Account.phonenumber"
                        type="password"
                        class="form-control"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Role</label>
                      <select v-model="Account.role_id" @change="handlerRole" style="width: 100%;">
                        <option v-for="(item, index) in role" :key="index" :value="item.id">{{ item.name }}</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword1">Action</label>
                      <select v-model="Account.action" @change="handlerAction" style="width: 100%;">
                        <option :selected="Account.action == true" :value="true">{{ Account.action === true ? 'Đã Action' : 'Chưa Action' }}</option>
                        <option :selected="Account.action == false" :value="false">Un Action</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputConfirmPassword1"
                        >Password Mới</label
                      >
                      <input
                        ref="pwd"
                        type="password"
                        class="form-control"
                        id="exampleInputConfirmPassword1"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputConfirmPassword1"
                        >Confirm Password</label
                      >
                      <input
                        ref="ConfirmPassword"
                        type="password"
                        class="form-control"
                        id="exampleInputConfirmPassword1"
                        placeholder="Password"
                      />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputConfirmPassword1"
                        >Image</label
                      >
                      <input  
                        type="file"
                        class="form-control"
                        id="exampleInputConfirmPassword1"
                        placeholder="Password"
                        ref="file"
                        @change="handlImage($event, 'Account', 'file')"
                      />
                      <img v-if="fileSrc" :src="fileSrc" style="width: 100px" />
                    </div>
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input type="checkbox" class="form-check-input" />
                        Remember me
                      </label>
                    </div>
                    <button type="button" @click="AddAndEdit" style="margin-bottom: 10px;" class="btn btn-primary me-2">
                      Submit
                    </button>
                    <button class="btn btn-light" style="margin-bottom: 10px;">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Shop</h4>
                  <p class="card-description">Shop layout</p>
                  <form class="forms-sample"  style="width: 100%; border-radius: 10px;">
                    <div class="form-group row">
                      <label
                        for="exampleInputUsername2"
                        class="col-sm-3 col-form-label"
                        >Name</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Name"
                          v-model="Shop.name"
                        />
                        <input
                          type="hidden"
                          class="form-control"
                          id="exampleInputUsername2"
                          placeholder="Name"
                          v-model="Shop.Id"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputEmail2"
                        class="col-sm-3 col-form-label"
                        >Địa chỉ</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputEmail2"
                          placeholder="diachi"
                          v-model="Shop.diachi"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputMobile"
                        class="col-sm-3 col-form-label"
                        >email</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="email"
                          class="form-control"
                          id="exampleInputMobile"
                          placeholder="email"
                          v-model="Shop.email"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputPassword2"
                        class="col-sm-3 col-form-label"
                        >Phone</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="text"
                          class="form-control"
                          id="exampleInputPassword2"
                          placeholder="sodienthoai"
                          v-model="Shop.sodienthoai"
                        />
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputPassword2"
                        class="col-sm-3 col-form-label"
                        >Acount</label
                      >
                      <div class="col-sm-9">
                        <select v-model="Shop.account_id">
                          <option v-for="(item, index) in account" :key="index" :value="item.id">{{ item.name }}</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-group row">
                      <label
                        for="exampleInputConfirmPassword2"
                        class="col-sm-3 col-form-label"
                        >Image</label
                      >
                      <div class="col-sm-9">
                        <input
                          type="file"
                          class="form-control"
                          ref="shop"
                          id="exampleInputConfirmPassword2"
                          @change="handlImage($event, 'Shop', 'shop')"
                          
                        />
                        <img v-if="fileSrcShop" :src="fileSrcShop" style="width: 100px" />
                      </div>
                    </div>
                    <div style="display: flex; width: 600px; flex-wrap: wrap;">
                      <div v-for="(value, index) in listVanChuyen" :key="index">
                        <label for="" style="color: red">
                          <input type="checkbox" v-model="value.isSelect"/>
                          {{ value.name }}
                        </label> 
                    </div>
                    </div>
                    

                    <!-- Cách 1: Chọn từng checkBox không bị chọn tất cả -->
                    <!-- <div v-for="(value, index) in listVanChuyen" :key="index">
                      <label :for="'option_' + index" style="color: red">
                        <input type="checkbox" :id="'option_' + index" v-model="selectedOptions[index]"/>
                        {{ value.name }}
                      </label> 
                    </div> -->
                    <button type="button" style="margin-bottom: 10px;" v-on:click="AddOrEditShop(this.Shop.id)" class="btn btn-primary me-2">
                      Submit
                    </button>
                    <button style="margin-bottom: 10px;" class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            <!-- <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Basic form elements</h4>
                  <p class="card-description">Basic form elements</p>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Name</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputName1"
                        placeholder="Name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputEmail3">Email address</label>
                      <input
                        type="email"
                        class="form-control"
                        id="exampleInputEmail3"
                        placeholder="Email"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputPassword4">Password</label>
                      <input
                        type="password"
                        class="form-control"
                        id="exampleInputPassword4"
                        placeholder="Password"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">Gender</label>
                      <select class="form-control" id="exampleSelectGender">
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label>File upload</label>
                      <input
                        type="file"
                        name="img[]"
                        class="file-upload-default"
                      />
                      <div class="input-group col-xs-12">
                        <input
                          type="text"
                          class="form-control file-upload-info"
                          disabled
                          placeholder="Upload Image"
                        />
                        <span class="input-group-append">
                          <button
                            class="file-upload-browse btn btn-primary"
                            type="button"
                          >
                            Upload
                          </button>
                        </span>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputCity1">City</label>
                      <input
                        type="text"
                        class="form-control"
                        id="exampleInputCity1"
                        placeholder="Location"
                      />
                    </div>
                    <div class="form-group">
                      <label for="exampleTextarea1">Textarea</label>
                      <textarea
                        class="form-control"
                        id="exampleTextarea1"
                        rows="4"
                      ></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary me-2">
                      Submit
                    </button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Input size</h4>
                  <p class="card-description">
                    Add classes like <code>.form-control-lg</code> and
                    <code>.form-control-sm</code>.
                  </p>
                  <div class="form-group">
                    <label>Large input</label>
                    <input
                      type="text"
                      class="form-control form-control-lg"
                      placeholder="Username"
                      aria-label="Username"
                    />
                  </div>
                  <div class="form-group">
                    <label>Default input</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Username"
                      aria-label="Username"
                    />
                  </div>
                  <div class="form-group">
                    <label>Small input</label>
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Username"
                      aria-label="Username"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Select size</h4>
                  <p class="card-description">
                    Add classes like <code>.form-control-lg</code> and
                    <code>.form-control-sm</code>.
                  </p>
                  <div class="form-group">
                    <label for="exampleFormControlSelect1">Large select</label>
                    <select
                      class="form-control form-control-lg"
                      id="exampleFormControlSelect1"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect2"
                      >Default select</label
                    >
                    <select class="form-control" id="exampleFormControlSelect2">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleFormControlSelect3">Small select</label>
                    <select
                      class="form-control form-control-sm"
                      id="exampleFormControlSelect3"
                    >
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Basic input groups</h4>
                  <p class="card-description">Basic bootstrap input groups</p>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">@</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Username"
                        aria-label="Username"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text bg-primary text-white"
                          >$</span
                        >
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                      <div class="input-group-append">
                        <span class="input-group-text">.00</span>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">$</span>
                      </div>
                      <div class="input-group-prepend">
                        <span class="input-group-text">0.00</span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Amount (to the nearest dollar)"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Recipient's username"
                        aria-label="Recipient's username"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-sm btn-primary" type="button">
                          Search
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <button
                          class="btn btn-sm btn-outline-primary dropdown-toggle"
                          type="button"
                          data-bs-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          Dropdown
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <a class="dropdown-item" href="#"
                            >Something else here</a
                          >
                          <div role="separator" class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Text input with dropdown button"
                      />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="input-group">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Find in facebook"
                        aria-label="Recipient's username"
                      />
                      <div class="input-group-append">
                        <button class="btn btn-sm btn-facebook" type="button">
                          <i class="mdi mdi-facebook"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Checkbox Controls</h4>
                  <p class="card-description">
                    Checkbox and radio controls (default appearance is in
                    primary color)
                  </p>
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input type="checkbox" class="form-check-input" />
                              Default
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                checked
                              />
                              Checked
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                disabled
                              />
                              Disabled
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                disabled
                                checked
                              />
                              Disabled checked
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="optionsRadios"
                                id="optionsRadios1"
                                value=""
                              />
                              Default
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="optionsRadios"
                                id="optionsRadios2"
                                value="option2"
                                checked
                              />
                              Selected
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="optionsRadios2"
                                id="optionsRadios3"
                                value="option3"
                                disabled
                              />
                              Disabled
                            </label>
                          </div>
                          <div class="form-check">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="optionsRadio2"
                                id="optionsRadios4"
                                value="option4"
                                disabled
                                checked
                              />
                              Selected and disabled
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <div class="card-body">
                  <p class="card-description">
                    Add class <code>.form-check-{color}</code> for checkbox and
                    radio controls in theme colors
                  </p>
                  <form>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="form-check form-check-primary">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                checked
                              />
                              Primary
                            </label>
                          </div>
                          <div class="form-check form-check-success">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                checked
                              />
                              Success
                            </label>
                          </div>
                          <div class="form-check form-check-info">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                checked
                              />
                              Info
                            </label>
                          </div>
                          <div class="form-check form-check-danger">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                checked
                              />
                              Danger
                            </label>
                          </div>
                          <div class="form-check form-check-warning">
                            <label class="form-check-label">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                checked
                              />
                              Warning
                            </label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <div class="form-check form-check-primary">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="ExampleRadio1"
                                id="ExampleRadio1"
                                checked
                              />
                              Primary
                            </label>
                          </div>
                          <div class="form-check form-check-success">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="ExampleRadio2"
                                id="ExampleRadio2"
                                checked
                              />
                              Success
                            </label>
                          </div>
                          <div class="form-check form-check-info">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="ExampleRadio3"
                                id="ExampleRadio3"
                                checked
                              />
                              Info
                            </label>
                          </div>
                          <div class="form-check form-check-danger">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="ExampleRadio4"
                                id="ExampleRadio4"
                                checked
                              />
                              Danger
                            </label>
                          </div>
                          <div class="form-check form-check-warning">
                            <label class="form-check-label">
                              <input
                                type="radio"
                                class="form-check-input"
                                name="ExampleRadio5"
                                id="ExampleRadio5"
                                checked
                              />
                              Warning
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Toggle Switch</h4>
                  <p class="card-description">
                    Add class <code>.toggle-switch-{color}</code> for toggle
                    switch controls in theme colors
                  </p>
                  <div class="form-group row">
                    <div class="col">
                      <p class="mb-2">Primary</p>
                      <label class="toggle-switch">
                        <input type="checkbox" checked />
                        <span class="toggle-slider round"></span>
                      </label>
                    </div>
                    <div class="col">
                      <p class="mb-2">Success</p>
                      <label class="toggle-switch toggle-switch-success">
                        <input type="checkbox" checked />
                        <span class="toggle-slider round"></span>
                      </label>
                    </div>
                    <div class="col">
                      <p class="mb-2">Danger</p>
                      <label class="toggle-switch toggle-switch-danger">
                        <input type="checkbox" checked />
                        <span class="toggle-slider round"></span>
                      </label>
                    </div>
                    <div class="col">
                      <p class="mb-2">Info</p>
                      <label class="toggle-switch toggle-switch-info">
                        <input type="checkbox" checked />
                        <span class="toggle-slider round"></span>
                      </label>
                    </div>
                    <div class="col">
                      <p class="mb-2">Warning</p>
                      <label class="toggle-switch toggle-switch-warning">
                        <input type="checkbox" checked />
                        <span class="toggle-slider round"></span>
                      </label>
                    </div>
                    <div class="col">
                      <p class="mb-2">Dark</p>
                      <label class="toggle-switch toggle-switch-dark">
                        <input type="checkbox" checked />
                        <span class="toggle-slider round"></span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-12 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Inline forms</h4>
                  <p class="card-description">
                    Use the <code>.form-inline</code> class to display a series
                    of labels, form controls, and buttons on a single horizontal
                    row
                  </p>
                  <form class="form-inline">
                    <label class="sr-only" for="inlineFormInputName2"
                      >Name</label
                    >
                    <input
                      type="text"
                      class="form-control mb-2 mr-sm-2"
                      id="inlineFormInputName2"
                      placeholder="Jane Doe"
                    />

                    <label class="sr-only" for="inlineFormInputGroupUsername2"
                      >Username</label
                    >
                    <div class="input-group mb-2 mr-sm-2">
                      <div class="input-group-prepend">
                        <div class="input-group-text">@</div>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        id="inlineFormInputGroupUsername2"
                        placeholder="Username"
                      />
                    </div>
                    <div class="form-check mx-sm-2">
                      <label class="form-check-label">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          checked
                        />
                        Remember me
                      </label>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-12 grid-margin" style="width: 100%">
              <div class="card" style="width: 100%">
                <div class="card-body">
                  <h4 class="card-title">Horizontal Two column</h4>
                  <form class="form-sample">
                    <p class="card-description">Personal info</p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >First Name</label
                          >
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Last Name</label
                          >
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Gender</label>
                          <div class="col-sm-9">
                            <select
                              class="form-control"
                              style="width: 100%; background-color: transparent"
                            >
                              <option>Male</option>
                              <option>Female</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Date of Birth</label
                          >
                          <div class="col-sm-9">
                            <input
                              class="form-control"
                              placeholder="dd/mm/yyyy"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Category</label
                          >
                          <div class="col-sm-9">
                            <select
                              class="form-control"
                              style="width: 100%; background-color: transparent"
                            >
                              <option>Category1</option>
                              <option>Category2</option>
                              <option>Category3</option>
                              <option>Category4</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Membership</label
                          >
                          <div class="col-sm-4">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  name="membershipRadios"
                                  id="membershipRadios1"
                                  value=""
                                  checked
                                />
                                Free
                              </label>
                            </div>
                          </div>
                          <div class="col-sm-5">
                            <div class="form-check">
                              <label class="form-check-label">
                                <input
                                  type="radio"
                                  class="form-check-input"
                                  name="membershipRadios"
                                  id="membershipRadios2"
                                  value="option2"
                                />
                                Professional
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p class="card-description">Address</p>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Address 1</label
                          >
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">State</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Address 2</label
                          >
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label"
                            >Postcode</label
                          >
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">City</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" />
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group row">
                          <label class="col-sm-3 col-form-label">Country</label>
                          <div class="col-sm-9">
                            <select
                              class="form-control"
                              style="width: 100%; background-color: transparent"
                            >
                              <option>America</option>
                              <option>Italy</option>
                              <option>Russia</option>
                              <option>Britain</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin grid-margin-md-0 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Select 2</h4>
                  <div class="form-group">
                    <label>Single select box using select 2</label>
                    <select class="js-example-basic-single w-100">
                      <option value="AL">Alabama</option>
                      <option value="WY">Wyoming</option>
                      <option value="AM">America</option>
                      <option value="CA">Canada</option>
                      <option value="RU">Russia</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label>Multiple select using select 2</label>
                    <select
                      class="js-example-basic-multiple w-100"
                      multiple="multiple"
                    >
                      <option value="AL">Alabama</option>
                      <option value="WY">Wyoming</option>
                      <option value="AM">America</option>
                      <option value="CA">Canada</option>
                      <option value="RU">Russia</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin grid-margin-md-0 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Typeahead</h4>
                  <p class="card-description">A simple suggestion engine</p>
                  <div class="form-group row">
                    <div class="col">
                      <label>Basic</label>
                      <div id="the-basics">
                        <input
                          class="typeahead"
                          type="text"
                          placeholder="States of USA"
                        />
                      </div>
                    </div>
                    <div class="col">
                      <label>Bloodhound</label>
                      <div id="bloodhound">
                        <input
                          class="typeahead"
                          type="text"
                          placeholder="States of USA"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> -->
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
import axios from 'axios';
import Swal from 'sweetalert2';
import CryptoJS from 'crypto-js'
import HederPages from '../Header/HeaderPage.vue'
export default {
  components:{
    HederPages
  },
  data() {
    return {
      role: [],
      
      Account:{
        id: 0,
        username: "",
        password: "",
        email: "",
        phonenumber: "",
        action: true,
        image: "",
        role_id: null,

      },
      Shop:{
        id: 0,
        name: "",
        diachi: "",
        email: "",
        sodienthoai: "",
        image: "",
        creator: "",
        account_id: 0,
        vanchuyens: []

      },
      account: [],
      fileSrc: "",
      fileSrcShop: "",
      selectedFile: null,
      byteArray: null,
      mahoaPassword: "",
      listVanChuyen: [],
      listAddIsSelect: [],

      selectedOptions: {},
      checkLoad: false

    };
  },
  async created(){
    this.getRole()
    // console.log(this.getTokenConfig())
    
    if(this.$route.params.type === "Edit" && this.$route.params.table === "Account") await this.getByIdAccount()
    
    if(this.$route.params.type === "Edit" && this.$route.params.table === "Shop") await this.getByIdShop()
    await this.FindAllVanChuyen()
    await this.FindAllAccount()
    
    
    
  }
  ,
  methods: {
    
    async FindAllVanChuyen(){
      // const selectedOptions = Object.keys(this.selectedOptions)
      // .filter(key => this.selectedOptions[key])
      // .map(key => this.listVanChuyen[key].name);
      // this.Shop.vanchuyens = selectedOptions
      await axios.get(this.hostname + '/api/Vanchuyen/findAll', this.getTokenConfig())
        .then(response => {
          
          // Cách 2
          // Thêm thuộc tính "isSelect: false" vào phần tử cuối cùng của các dữ liệu trả về từ BackEnd
          // Gán dữ liệu từ backend vào mảng listAddIsSelect và thêm isSelected: false
          this.listAddIsSelect = response.data.content.data
          this.listVanChuyen = this.listAddIsSelect.map(option => {
            return {...option, isSelect: false}
          })

          // Cách 1
          // for(let i = 0; i < this.listVanChuyen.length; i++){
          //   if(this.listVanChuyen[i].id == this.Shop.listvanchuyen[i].vanchuyen_id){
          //     // this.$set(this.listVanChuyen[i], 'isSelect', true); 
              
          //     this.listVanChuyen[i].isSelect = true
              
          //   }
          // }

          // GIẢI THÍCH CODE
          // Cách 2
          /* Câu lệnh này nghĩa là: Lấy ra 1 đối tượng bên backEnd khi Edit, rồi lấy ra 1 List dữ liệu bên BackEnd, rồi so sánh với nhau xem
              nếu dữ liệu của đối đối tượng(Edit) trùng với dữ liệu trong List danh sách thì chuyển "isSelect" thành "true"(nghĩa là sẽ tự động tích vào ô checkBox trên HTML)
          */
          /**
           * Đoạn code trên dùng để so sánh các đối tượng trong mảng this.listVanChuyen với các đối tượng 
           * trong mảng "this.Shop.listvanchuyen" và thiết lập trạng thái "isSelect" thành true cho các đối tượng có thông tin trùng khớp.
           */
          this.Shop.vanchuyens.forEach(backendID => { /**"this.Shop.listvanchuyen.forEach(backendID => { ... })": Dùng vòng lặp forEach 
                                                          để duyệt qua từng phần tử trong mảng this.Shop.listvanchuyen. */

            /**"const foundItem = this.listVanChuyen.find(item => item.id === backendID.vanchuyen_id);": Dùng hàm find để tìm phần tử trong mảng 
             * "this.listVanChuyen" có id trùng khớp với "backendID.vanchuyen_id". Nếu tìm thấy, đối tượng này được gán vào biến "foundItem". */
              const foundItem = this.listVanChuyen.find(item => item.id === backendID.vanchuyen_id);

              /**if (foundItem) { foundItem.isSelect = true; }: Nếu foundItem tồn tại (tức là id trùng khớp được tìm thấy 
               * trong "this.listVanChuyen)", trạng thái isSelect của đối tượng đó trong "this.listVanChuyen" được thiết lập thành "true". 
               * Điều này dẫn đến việc tự động đánh dấu checkbox tương ứng trên giao diện người dùng nếu "isSelect" được liên kết với checkbox. */
              if (foundItem) { 
                foundItem.isSelect = true;
              }
            });

          



          // Cách 3
          // Gán dữ liệu từ backend vào mảng listAddIsSelect rồi gán lại cho mảng "listVanChuyen" và thêm isSelected: false
          // Thêm thuộc tính "isSelect: false" vào phần tử cuối cùng của các dữ liệu trả về từ BackEnd
          // for (let i = 0; i < listAddIsSelect.length; i++) {
          //   this.listVanChuyen.push({ ...listAddIsSelect[i], isSelected: false });
          // }
          
        })
        .catch(error => {
          if(error.response){
            Swal.fire(error.response.data)
          }
        })
    }
    ,
    async getByIdAccount(){
      // const id = JSON.parse(localStorage.getItem("Id"))
      const id = JSON.parse(localStorage.getItem('Id'))
      await axios.get(this.hostname + `/api/Account/FindOneListIdOrName?id=${id}`, this.getTokenConfig())
        .then(response => {
          console.log(response.data.content[0])
          this.Account = response.data.content[0]
          console.log(this.Account)
          if(this.Account.image !== null && this.Account.image.length > 0){
            this.fileSrc = 'data:image/*;base64,' + this.Account.image
          }
          
          
        })
        .catch(error => {
          if(error.response){
            Swal.fire(error.response.data)
          }
        })
    }
    ,

    async FindAllAccount(){
      this.checkLoad = true
      await axios.get(this.hostname + '/api/Account/FindAll?page=1&pageSize=100', this.getTokenConfig())
        .then(response => {
          this.account = response.data.content.data
          this.checkLoad = false
        })
        .catch(error => {
          if(error.response){
            this.checkLoad = false
            Swal.fire(error.response.data)
          }
          this.checkLoad = false
        })
    }
    ,

    async getByIdShop(){
      this.checkLoad = true
      // const id = JSON.parse(localStorage.getItem("Id"))
      const id = JSON.parse(localStorage.getItem('IdShop'))
      const idString = id.join(', ') /* ".join(', ')": Phương thức join chuyển mỗi phần tử của mảng thành một chuỗi và nối chúng lại với nhau 
                                        bằng dấu phân cách được chỉ định trong dấu ngoặc đơn. Trong ví dụ này, dấu phân cách được 
                                        chỉ định là ', ' (một dấu phẩy và một khoảng trắng). */
      console.log("Id Shop " + id)
      await axios.get(this.hostname + '/api/Shop/FindOneIdOrName', {
        headers: {
          'name': [idString]
        }
      }, this.getTokenConfig())
        .then(response => {
          console.log(response.data.content[0])
          this.Shop = response.data.content[0]
          console.log(this.shop)
          console.log(this.Shop.account_id)
          if(this.Shop.image !== null && this.Shop.image.length > 0){
            this.fileSrcShop = 'data:image/*;base64,' + this.Shop.image
          } 

          this.checkLoad = false

          
        })
        .catch(error => {
          if(error.response){
            Swal.fire(error.response.data)
            this.checkLoad = false
          }
          this.checkLoad = false
        })
    }
    ,
    getTokenConfig() {
      var token = JSON.parse(localStorage.getItem("token"));
      // var token = JSON.parse(store.state.authToken)
      var result = {
        headers: { Authorization: `Bearer ${token}` },
      };

      return result;
    },
    async getRole(){
      await axios.get(this.hostname + "/api/Account/FindAllRole", this.getTokenConfig())
      .then(response => {
        // if(response.data.content.id > 0){
          this.role = response.data.content
          // console.log(response.data)
        // }
      })
      .catch(error => {
        if(error.response){
          Swal.fire(error.response.data)
        }
      })
      
    },
    async AddOrEditShop(id){
      if(id > 0){
        this.checkLoad = true
        
        // Cách 1: Chọn từng checkBox không bị chọn tất cả
         // const selectedOptions = Object.keys(this.selectedOptions)
        // .filter(key => this.selectedOptions[key])
        // .map(key => this.listVanChuyen[key].name);
        // this.Shop.vanchuyens = selectedOptions

        // Cách 2: Chọn từng checkBox không bị chọn tất cả, Đây là lưu dữ của từng ô checkBox được tích vào, lưu vào biến "arr" rồi lưu lại vào biến "this.Shop.vanchuyens"
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
            this.checkLoad = false
            Swal.fire("Vui lòng chọn lại ảnh")
            return
          }
          this.Shop.image = checkImage
        }else if(this.byteArray !== null){
          this.Shop.image = this.ConvertByteTobase64(this.byteArray)
        }
        const stateUser = this.$store.getters.name
        await axios.put(this.hostname + `/api/Shop/EditShop?id=${id}&name=${stateUser}`, this.Shop, this.getTokenConfig())
          .then(() => {
            this.checkLoad = false
            Swal.fire("Thành công")
            this.$router.push({name: "Admin"})
            localStorage.removeItem("IdShop")
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
              this.checkLoad = false
            }
            this.checkLoad = false
          })
        
        
        
      }
      else{
        this.checkLoad = true
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
            this.checkLoad = false
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
            
            console.log(response)
            // this.$router.push({name: "Admin"})
            Swal.fire("Add Thành công")
            this.checkLoad = false
          })
          .catch(error => {
            if(error.response){
              Swal.fire(error.response.data)
              this.checkLoad = false
            }
            this.checkLoad = false
          })
        
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
    checkBase64(image) {
      const base64Format = /^data:image\/([a-zA-Z]*);base64,/;
      return base64Format.test(image);
    },
    handlerRole(){
        console.log(this.Account.role_id)
      },

      handlerAction(){
        console.log(this.Account.action)
      },  
      MaHoaPassword(password){
        const key = "ThisismySecretKey"
        const mahoa = CryptoJS.HmacSHA256(password, key)
        // this.mahoaPassword = CryptoJS.enc.Hex.stringify(mahoa)
        const passwordMaHoa = CryptoJS.enc.Hex.stringify(mahoa)
        // this.Account.password = this.mahoaPassword
        return passwordMaHoa
      },
      async AddAndEdit(){
        this.checkLoad = true
        const passwordNew = this.$refs.pwd.value
        const passwordConfrim = this.$refs.ConfirmPassword.value

        if(this.Account.id > 0){
          const passwordOld = this.$refs.passwordOld.value
          if(passwordOld === ""){
            Swal.fire("Password hiện tại không được Null")
            this.checkLoad = false
            return
          }
          if(passwordNew === passwordConfrim){
            const mahoaPasswordOld = this.MaHoaPassword(passwordOld)
            const mahoaPasswordNew = this.MaHoaPassword(passwordNew)

            this.Account.password = mahoaPasswordOld + ", " + mahoaPasswordNew
            if(this.byteArray !== null){
              this.Account.image = this.ConvertByteTobase64(this.byteArray)
            }
            // this.Account.image = this.ConvertByteTobase64(this.byteArray)
            this.Account.token = JSON.parse(localStorage.getItem('token'))
            console.log(this.Account)
            await axios.put(this.hostname + `/api/Account/EditAccount?id=${this.Account.id}` ,this.Account, this.getTokenConfig())
              .then(response => {
                this.checkLoad = false
                if(response.data.id > 0){
                  this.$router.push({name: "table"})
                }
                
              })
              .catch(error => {
                if(error.response){
                  Swal.fire(error.response.data)
                  this.checkLoad = false
                }
                this.checkLoad = false
              })
            console.log(mahoaPasswordOld + ", " + mahoaPasswordNew)
          }
        }else{
          if(passwordNew === passwordConfrim){
            this.checkLoad = true
            const paswordMaHoa = this.MaHoaPassword(passwordNew)
            this.Account.password = paswordMaHoa
            if(this.byteArray === null){
              this.checkLoad = false
              Swal.fire("Vui lòng chọn ảnh")
              return
            }
            this.Account.image = this.ConvertByteTobase64(this.byteArray)
            this.Account.token = JSON.parse(localStorage.getItem('token'))
            await axios.post(this.hostname + "/api/Account/AddAccount", this.Account, this.getTokenConfig())
            .then(response => {
              console.log(response)
              this.checkLoad = false
              this.$router.push({name: "table"})
            })
            .catch(error => {
              if(error.response){
                Swal.fire("Lỗi")
                this.checkLoad = false
              }
              this.checkLoad = false
            })
          }else{
            Swal.fire("Nhập lại mật khẩu mới không trùng")
            this.checkLoad = false
            return
          }
        }
      },

      // Hàm chuyển ảnh sang mảng byte
  //     handlImage(e, table){
  //       const fileInput = this.$refs.file
  //       if(fileInput.files.length > 0){

  //         this.selectedFile = e.target.files[0]

  //         const render = new FileReader()

  //         render.onload = (event) => {
  //           const arrByffe = event.target.result
  //           this.byteArray = new Uint8Array(arrByffe)

  //           // Hiển thị ảnh từ mảng byte lên thẻ "img"
  //           const blob = new Blob([this.byteArray])
  //           const imageURL = URL.createObjectURL(blob)
  //           this.fileSrc = imageURL
  //         }
  //         render.readAsArrayBuffer(this.selectedFile)
  //       }else{
  //         this.byteArray = this.ConvertBase64ToByte(this.Account.image)
  //       }

    
  // },

  handlImage(e, table, value){
        const fileInput = this.$refs[value] // "$refs[value]" Gán giá trị từ tham số được chuyền từ ngoài vào "this.$refs", "[value]" là tên của "ref" trên HTML
        if(fileInput.files.length > 0){

          this.selectedFile = e.target.files[0]

          const render = new FileReader()

          render.onload = (event) => {
            const arrByffe = event.target.result
            this.byteArray = new Uint8Array(arrByffe)

            // Hiển thị ảnh từ mảng byte lên thẻ "img"
            const blob = new Blob([this.byteArray])
            const imageURL = URL.createObjectURL(blob)
            if(table === "Account"){
              this.fileSrc = imageURL
            }
            if(table === "Shop"){
              this.fileSrcShop = imageURL
            }
            
          }
          render.readAsArrayBuffer(this.selectedFile)
        }else{
          this.byteArray = this.ConvertBase64ToByte(this.Account.image)
        }

    
  },

  // Hàm chuyển từ Base64 sang mảng byte
  ConvertBase64ToByte(base64){
    const baseString = atob(base64)
    const byteArr = new Uint8Array(baseString.length)
    for(let i = 0; i < baseString.length; i++){
      byteArr[i] = baseString.charCodeAt(i)
    }

    return byteArr
  }
  ,
  ConvertByteTobase64(byte){
    let base64 = ''
    // if(Array.isArray(byte) && byte.length > 0){ // Kiểm tra xem dữ liệu chuyền vào đã đúng định dạng mảng Byte chưa, sử dụng câu lênh "Array.isArray()"
      // byte.forEach(arr => {
      //   base64 += String.fromCharCode(arr)
      // });
      // return btoa(base64)
    // }else{
    //   Swal.fire("Không đúng định dạng ảnh")
    //   return
    // }
    if(this.checkIfImage(byte)){
      byte.forEach(arr => {
        base64 += String.fromCharCode(arr)
      });
      return btoa(base64)
    }
    
    
  }
  },
  
};
</script>

<style lang="css" scoped>
input {
  background-color: transparent !important;
  color: black !important;
  width: 100% !important;
}
label {
  color: red !important;
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
/*form {
  width: 100% !important;
  background-color: grey !important;
}*/
@import url("../../assets/AdminTemplate/css/style1.css");
@import url("../../assets/AdminTemplate/vendors/base/vendor.bundle.base.css");
@import url("../../assets/AdminTemplate/vendors/mdi/css/materialdesignicons.min.css");
@import url("../../assets/AdminTemplate/vendors/select2/select2.min.css");
@import url("../../assets/AdminTemplate/vendors/select2-bootstrap-theme/select2-bootstrap.min.css");
</style>
