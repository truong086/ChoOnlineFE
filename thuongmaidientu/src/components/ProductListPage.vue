<template>
  <body class="js">
    <!-- Preloader -->
	<div class="preloader" v-if="check">
		<div class="preloader-inner">
			<div class="preloader-icon">
				<span></span>
				<span></span>
			</div>
		</div>
	</div>
  <!-- Header -->
  <header class="header shop">
    <!-- Topbar -->
    <div class="topbar">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-12 col-12">
            <!-- Top Left -->
            <div class="top-left">
              <ul class="list-main">
                <li><i class="ti-headphone-alt"></i> +060 (800) 801-582</li>
                <li><i class="ti-email"></i> support@shophub.com</li>
              </ul>
            </div>
            <!--/ End Top Left -->
          </div>
          <div class="col-lg-8 col-md-12 col-12">
            <!-- Top Right -->
            <div class="right-content">
              <ul class="list-main">
                <li><i class="ti-location-pin"></i> Store location</li>
                <li>
                  <i class="ti-alarm-clock"></i> <a href="#">Daily deal</a>
                </li>
                <li><i class="ti-user"></i> <a href="#">My account</a></li>
                <li>
                  <i class="ti-power-off"></i><a href="login.html#">Login</a>
                </li>
              </ul>
            </div>
            <!-- End Top Right -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Topbar -->
    <div class="middle-inner">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 col-md-2 col-12">
            <!-- Logo -->
            <div class="logo">
              <a href="index.html"><img src="images/logo.png" alt="logo" /></a>
            </div>
            <!--/ End Logo -->
            <!-- Search Form -->
            <div class="search-top">
              <div class="top-search">
                <a href="#0"><i class="ti-search"></i></a>
              </div>
              <!-- Search Form -->
              <div class="search-top">
                <form class="search-form">
                  <input
                    type="text"
                    placeholder="Search here..."
                    name="search"
                  />
                  <button value="search" type="submit">
                    <i class="ti-search"></i>
                  </button>
                </form>
              </div>
              <!--/ End Search Form -->
            </div>
            <!--/ End Search Form -->
            <div class="mobile-nav"></div>
          </div>
          <div class="col-lg-8 col-md-7 col-12">
            <div class="search-bar-top">
              <div class="search-bar">
                <select>
                  <option selected="selected">All Category</option>
                  <option>watch</option>
                  <option>mobile</option>
                  <option>kid’s item</option>
                </select>
                <form>
                  <input
                    name="search"
                    placeholder="Search Products Here....."
                    type="search"
                  />
                  <button class="btnn"><i class="ti-search"></i></button>
                </form>
              </div>
            </div>
          </div>
          <div class="col-lg-2 col-md-3 col-12">
            <div class="right-bar">
              <!-- Search Form -->
              <div class="sinlge-bar">
                <a href="#" class="single-icon"
                  ><i class="fa fa-heart-o" aria-hidden="true"></i
                ></a>
              </div>
              <div class="sinlge-bar">
                <a href="#" class="single-icon"
                  ><i class="fa fa-user-circle-o" aria-hidden="true"></i
                ></a>
              </div>
              <div class="sinlge-bar shopping">
                <a href="#" class="single-icon"
                  ><i class="ti-bag"></i> <span class="total-count">2</span></a
                >
                <!-- Shopping Item -->
                <div class="shopping-item">
                  <div class="dropdown-cart-header">
                    <span>2 Items</span>
                    <a href="#">View Cart</a>
                  </div>
                  <ul class="shopping-list">
                    <li>
                      <a href="#" class="remove" title="Remove this item"
                        ><i class="fa fa-remove"></i
                      ></a>
                      <a class="cart-img" href="#"
                        ><img src="https://via.placeholder.com/70x70" alt="#"
                      /></a>
                      <h4><a href="#">Woman Ring</a></h4>
                      <p class="quantity">
                        1x - <span class="amount">$99.00</span>
                      </p>
                    </li>
                    <li>
                      <a href="#" class="remove" title="Remove this item"
                        ><i class="fa fa-remove"></i
                      ></a>
                      <a class="cart-img" href="#"
                        ><img src="https://via.placeholder.com/70x70" alt="#"
                      /></a>
                      <h4><a href="#">Woman Necklace</a></h4>
                      <p class="quantity">
                        1x - <span class="amount">$35.00</span>
                      </p>
                    </li>
                  </ul>
                  <div class="bottom">
                    <div class="total">
                      <span>Total</span>
                      <span class="total-amount">$134.00</span>
                    </div>
                    <a href="checkout.html" class="btn animate">Checkout</a>
                  </div>
                </div>
                <!--/ End Shopping Item -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Header Inner -->
    <div class="header-inner">
      <div class="container">
        <div class="cat-nav-head">
          <div class="row">
            <div class="col-12">
              <div class="menu-area">
                <!-- Main Menu -->
                <nav class="navbar navbar-expand-lg">
                  <div class="navbar-collapse">
                    <div class="nav-inner">
                      <ul class="nav main-menu menu navbar-nav">
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Product</a></li>
                        <li><a href="#">Service</a></li>
                        <li>
                          <a href="#"
                            >Shop<i class="ti-angle-down"></i
                            ><span class="new">New</span></a
                          >
                          <ul class="dropdown">
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                          </ul>
                        </li>
                        <li><a href="#">Pages</a></li>
                        <li>
                          <a href="#">Blog<i class="ti-angle-down"></i></a>
                          <ul class="dropdown">
                            <li>
                              <a href="blog-single-sidebar.html"
                                >Blog Single Sidebar</a
                              >
                            </li>
                          </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <!--/ End Main Menu -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--/ End Header Inner -->
  </header>
  <!--/ End Header -->

  <!-- Breadcrumbs -->
  <div class="breadcrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="bread-inner">
            <ul class="bread-list">
              <li>
                <a href="index1.html">Home<i class="ti-arrow-right"></i></a>
              </li>
              <li class="active"><a href="blog-single.html">Shop Grid</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- End Breadcrumbs -->

  <!-- Product Style -->
  <section class="product-area shop-sidebar shop section">
    <input type="text" ref="value" @keyup="search($event)" />
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-4 col-12">
          <div class="shop-sidebar">
            <!-- Single Widget -->
            <div class="single-widget category">
              <h3 class="title">Categories</h3>
              <ul class="categor-list">
                <li><a href="#" @click="FindAll" >All</a></li>
                <li v-for="(item, index) in category" :key="index"><a href="#" @click="changeColor(index, item.id)" :style="{ color: selectedIndex === index ||  id === item.id? selectedColor : defaultColor }">{{ item.name }}</a></li>
              </ul>
            </div>
            <!--/ End Single Widget -->
            <!-- Shop By Price -->
            <div class="single-widget range">
              <h3 class="title">Shop by Price</h3>
              <div class="price-filter">
                <div class="price-filter-inner">
                  <div id="slider-range"></div>
                  <div class="price_slider_amount">
                    <div class="label-input">
                      <span>Range:</span
                      ><input
                        type="text"
                        id="amount"
                        name="price"
                        placeholder="Add Your Price"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <ul class="check-box-list">
                <li>
                  <label class="checkbox-inline" for="1"
                    ><input name="news" id="1" type="checkbox" />$20 - $50<span
                      class="count"
                      >(3)</span
                    ></label
                  >
                </li>
                <li>
                  <label class="checkbox-inline" for="2"
                    ><input name="news" id="2" type="checkbox" />$50 - $100<span
                      class="count"
                      >(5)</span
                    ></label
                  >
                </li>
                <li>
                  <label class="checkbox-inline" for="3"
                    ><input name="news" id="3" type="checkbox" />$100 -
                    $250<span class="count">(8)</span></label
                  >
                </li>
              </ul>
            </div>
            <!--/ End Shop By Price -->
            <!-- Single Widget -->
            <div class="single-widget recent-post">
              <h3 class="title">Recent post</h3>
              <!-- Single Post -->
              <div class="single-post first">
                <div class="image">
                  <img src="https://via.placeholder.com/75x75" alt="#" />
                </div>
                <div class="content">
                  <h5><a href="#">Girls Dress</a></h5>
                  <p class="price">$99.50</p>
                  <ul class="reviews">
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li><i class="ti-star"></i></li>
                    <li><i class="ti-star"></i></li>
                  </ul>
                </div>
              </div>
              <!-- End Single Post -->
              <!-- Single Post -->
              <div class="single-post first">
                <div class="image">
                  <img src="https://via.placeholder.com/75x75" alt="#" />
                </div>
                <div class="content">
                  <h5><a href="#">Women Clothings</a></h5>
                  <p class="price">$99.50</p>
                  <ul class="reviews">
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li><i class="ti-star"></i></li>
                  </ul>
                </div>
              </div>
              <!-- End Single Post -->
              <!-- Single Post -->
              <div class="single-post first">
                <div class="image">
                  <img src="https://via.placeholder.com/75x75" alt="#" />
                </div>
                <div class="content">
                  <h5><a href="#">Man Tshirt</a></h5>
                  <p class="price">$99.50</p>
                  <ul class="reviews">
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                    <li class="yellow"><i class="ti-star"></i></li>
                  </ul>
                </div>
              </div>
              <!-- End Single Post -->
            </div>
            <!--/ End Single Widget -->
            <!-- Single Widget -->
            <div class="single-widget category">
              <h3 class="title">Manufacturers</h3>
              <ul class="categor-list">
                <li><a href="#">Forever</a></li>
                <li><a href="#">giordano</a></li>
                <li><a href="#">abercrombie</a></li>
                <li><a href="#">ecko united</a></li>
                <li><a href="#">zara</a></li>
              </ul>
            </div>
            <!--/ End Single Widget -->
          </div>
        </div>
        <div class="col-lg-9 col-md-8 col-12">
          <div class="row">
            <div class="col-12">
              <!-- Shop Top -->
              <div class="shop-top">
                <div class="shop-shorter">
                  <div class="single-shorter">
                    <label>Show :</label>
                    <select>
                      <option selected="selected">09</option>
                      <option>15</option>
                      <option>25</option>
                      <option>30</option>
                    </select>
                  </div>
                  <div class="single-shorter">
                    <label>Sort By :</label>
                    <select>
                      <option selected="selected">Name</option>
                      <option>Price</option>
                      <option>Size</option>
                    </select>
                  </div>
                </div>
                <ul class="view-mode">
                  <li class="active">
                    <a href="shop-grid.html"><i class="fa fa-th-large"></i></a>
                  </li>
                  <li>
                    <a href="shop-list.html"><i class="fa fa-th-list"></i></a>
                  </li>
                </ul>
              </div>
              <!--/ End Shop Top -->
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 col-12" v-for="(item, index) in datas" :key="index">
              <div class="single-product">
                <div class="product-img">
                  <a href="#" v-on:click="Next(item.title, item.id)">
                    <img
                      v-if="item.image.length > 0"
                      class="default-img"
                      :src=" item.image[0]"
                      alt="#"
                      style="width: 262px; height: 357px"
                    />
                    <img
                      v-if="item.image.length === 0 || item.image === null || item.image[index] === 'string'"
                      class="default-img"
                      :src="'https://itvn.blog/wp-content/uploads/2020/07/H%C3%ACnh-n%E1%BB%81n-pc-4k-v%E1%BB%81-n%C3%BAi-v%C3%A0-bi%E1%BB%83n-scaled.jpg'"
                      alt="#"
                      style="width: 262px; height: 357px"
                    />
                  </a>
                  <div class="button-head">
                    <div class="product-action">
                      <a
                        data-toggle="modal"
                        data-target="#exampleModal"
                        title="Quick View"
                        href="#"
                        v-on:click="Next(item.title, item.id)"
                        ><i class="ti-eye"></i><span>{{item.nameShop}}</span></a
                      >
                      <a title="Wishlist" href="#"
                        ><i class="ti-heart"></i><span>Add to Wishlist</span></a
                      >
                      <a title="Compare" href="#"
                        ><i class="ti-bar-chart-alt"></i
                        ><span>Add to Compare</span></a
                      >
                    </div>
                    <div class="product-action-2">
                      <a title="Add to cart" href="#" @click="AddToCart(item)">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div class="product-content">
                  <h3>
                    <a href="product-details.html">{{ item.title }}</a>
                  </h3>
                  <div class="product-price">
                    <span>${{ item.price }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <PagesTotal v-if="type === 'findall'" :page="page" :totalPage="totalPgae" :valueE="values" @pageChange="FindAllProduct" @pageSizeChange="changeReload"></PagesTotal>
          <PagesTotal v-else-if="type === 'searchproduct'" :page="page" :totalPage="totalPgae" :valueE="values" @pageChange="FindAllProduct" @pageSizeChange="changeReload"></PagesTotal>
          <PagesTotal v-if="type === 'search'" :page="page" :totalPage="totalPgae" :valueE="values" @pageChange="FindAllPProductByCategory" @pageSizeChange="changeReload"></PagesTotal>
        </div>
      </div>
    </div>
  </section>
  <!--/ End Product Style 1  -->

  <!-- Start Shop Newsletter  -->
  <section class="shop-newsletter section">
    <div class="container">
      <div class="inner-top">
        <div class="row">
          <div class="col-lg-8 offset-lg-2 col-12">
            <!-- Start Newsletter Inner -->
            <div class="inner">
              <h4>Newsletter</h4>
              <p>
                Subscribe to our newsletter and get <span>10%</span> off your
                first purchase
              </p>
              <form
                action="mail/mail.php"
                method="get"
                target="_blank"
                class="newsletter-inner"
              >
                <input
                  name="EMAIL"
                  placeholder="Your email address"
                  required=""
                  type="email"
                />
                <button class="btn">Subscribe</button>
              </form>
            </div>
            <!-- End Newsletter Inner -->
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Shop Newsletter -->

  <!-- Modal -->
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span class="ti-close" aria-hidden="true"></span>
          </button>
        </div>
        <div class="modal-body">
          <div class="row no-gutters">
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <!-- Product Slider -->
              <div class="product-gallery">
                <div class="quickview-slider-active">
                  <div class="single-slider">
                    <img src="https://via.placeholder.com/569x528" alt="#" />
                  </div>
                  <div class="single-slider">
                    <img src="https://via.placeholder.com/569x528" alt="#" />
                  </div>
                  <div class="single-slider">
                    <img src="https://via.placeholder.com/569x528" alt="#" />
                  </div>
                  <div class="single-slider">
                    <img src="https://via.placeholder.com/569x528" alt="#" />
                  </div>
                </div>
              </div>
              <!-- End Product slider -->
            </div>
            <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
              <div class="quickview-content">
                <h2>Flared Shift Dress</h2>
                <div class="quickview-ratting-review">
                  <div class="quickview-ratting-wrap">
                    <div class="quickview-ratting">
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="yellow fa fa-star"></i>
                      <i class="fa fa-star"></i>
                    </div>
                    <a href="#"> (1 customer review)</a>
                  </div>
                  <div class="quickview-stock">
                    <span><i class="fa fa-check-circle-o"></i> in stock</span>
                  </div>
                </div>
                <h3>$29.00</h3>
                <div class="quickview-peragraph">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Mollitia iste laborum ad impedit pariatur esse optio tempora
                    sint ullam autem deleniti nam in quos qui nemo ipsum
                    numquam.
                  </p>
                </div>
                <div class="size">
                  <div class="row">
                    <div class="col-lg-6 col-12">
                      <h5 class="title">Size</h5>
                      <select>
                        <option selected="selected">s</option>
                        <option>m</option>
                        <option>l</option>
                        <option>xl</option>
                      </select>
                    </div>
                    <div class="col-lg-6 col-12">
                      <h5 class="title">Color</h5>
                      <select>
                        <option selected="selected">orange</option>
                        <option>purple</option>
                        <option>black</option>
                        <option>pink</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div class="quantity">
                  <!-- Input Order -->
                  <div class="input-group">
                    <div class="button minus">
                      <button
                        type="button"
                        class="btn btn-primary btn-number"
                        disabled="disabled"
                        data-type="minus"
                        data-field="quant[1]"
                      >
                        <i class="ti-minus"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      name="quant[1]"
                      class="input-number"
                      data-min="1"
                      data-max="1000"
                      value="1"
                    />
                    <div class="button plus">
                      <button
                        type="button"
                        class="btn btn-primary btn-number"
                        data-type="plus"
                        data-field="quant[1]"
                      >
                        <i class="ti-plus"></i>
                      </button>
                    </div>
                  </div>
                  <!--/ End Input Order -->
                </div>
                <div class="add-to-cart">
                  <a href="#" class="btn">Add to cart</a>
                  <a href="#" class="btn min"><i class="ti-heart"></i></a>
                  <a href="#" class="btn min"><i class="fa fa-compress"></i></a>
                </div>
                <div class="default-social">
                  <h4 class="share-now">Share:</h4>
                  <ul>
                    <li>
                      <a class="facebook" href="#"
                        ><i class="fa fa-facebook"></i
                      ></a>
                    </li>
                    <li>
                      <a class="twitter" href="#"
                        ><i class="fa fa-twitter"></i
                      ></a>
                    </li>
                    <li>
                      <a class="youtube" href="#"
                        ><i class="fa fa-pinterest-p"></i
                      ></a>
                    </li>
                    <li>
                      <a class="dribbble" href="#"
                        ><i class="fa fa-google-plus"></i
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal end -->

  <!-- Start Footer Area -->
  <footer class="footer">
    <!-- Footer Top -->
    <div class="footer-top section">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer about">
              <div class="logo">
                <a href="index.html"><img src="images/logo2.png" alt="#" /></a>
              </div>
              <p class="text">
                Praesent dapibus, neque id cursus ucibus, tortor neque egestas
                augue, magna eros eu erat. Aliquam erat volutpat. Nam dui mi,
                tincidunt quis, accumsan porttitor, facilisis luctus, metus.
              </p>
              <p class="call">
                Got Question? Call us 24/7<span
                  ><a href="tel:123456789">+0123 456 789</a></span
                >
              </p>
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-2 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer links">
              <h4>Information</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Faq</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Help</a></li>
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-2 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer links">
              <h4>Customer Service</h4>
              <ul>
                <li><a href="#">Payment Methods</a></li>
                <li><a href="#">Money-back</a></li>
                <li><a href="#">Returns</a></li>
                <li><a href="#">Shipping</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
          <div class="col-lg-3 col-md-6 col-12">
            <!-- Single Widget -->
            <div class="single-footer social">
              <h4>Get In Tuch</h4>
              <!-- Single Widget -->
              <div class="contact">
                <ul>
                  <li>NO. 342 - London Oxford Street.</li>
                  <li>012 United Kingdom.</li>
                  <li>info@eshop.com</li>
                  <li>+032 3456 7890</li>
                </ul>
              </div>
              <!-- End Single Widget -->
              <ul>
                <li>
                  <a href="#"><i class="ti-facebook"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ti-twitter"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ti-flickr"></i></a>
                </li>
                <li>
                  <a href="#"><i class="ti-instagram"></i></a>
                </li>
              </ul>
            </div>
            <!-- End Single Widget -->
          </div>
        </div>
      </div>
    </div>
    <!-- End Footer Top -->
    <div class="copyright">
      <div class="container">
        <div class="inner">
          <div class="row">
            <div class="col-lg-6 col-12">
              <div class="left">
                <p>
                  Copyright © 2020
                  <a href="http://www.wpthemesgrid.com" target="_blank"
                    >Wpthemesgrid</a
                  >
                  - All Rights Reserved.
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-12">
              <div class="right">
                <img src="images/payments.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- /End Footer Area -->
</body>
</template>

<script>
import Swal from "sweetalert2";
// import '../../assets/AdminTemplate/vendors/base/vendor.bundle.base.js'
import PagesTotal from './PageList/PagesTotal.vue'
import axios from "axios";
export default {
  data() {
    return {
      datas: [],
      page: 1,
      pageSize: 5,
      totalPgae: 0,
      values: "",
      valueCategory: "",
      type: "",
      defaultColor: 'black', // Màu mặc định cho các thể loại
      selectedColor: 'red', // Màu được chọn khi click
      selectedIndex: null, // Index của thể loại được chọn
      category: [],
      id: 0,
      check: false
    }
  },
  async created(){
    // if(localStorage.getItem('idCa') === null){
    //   this.$router.push({name: "Home"})
    //   return
    // }
    console.log(this.$route.params.name);
        if (this.$route.params.name !== "list") {
          this.type = "search"
        const timkiem = JSON.parse(localStorage.getItem('idCa'))
        this.id = timkiem
            await this.test(timkiem);
        }
        else if(this.$route.params.name === 'list'){
          this.type = 'searchproduct'
            await this.FindAllProduct(["", this.page])
        }
        await this.FindAllCategory()
    },
  watch: {
    page: {
      handler: function change() {
        // if (this.values === "" && this.valueCategory === "") {
        //   this.FindAllProduct(["", this.page]);
        // } else if (this.values !== "" && this.valueCategory === "") {
        //   this.FindAllProduct([this.values, this.page]);
        // }else if(this.values === "" && this.valueCategory !== ""){
        //   this.test(this.valueCategory)
        // }
        if (this.values === "" && this.type === "findall") {
          this.FindAllProduct(["", this.page]);
        } else if (this.values !== "" && this.type === "searchproduct") {
          this.FindAllProduct([this.values, this.page]);
        }else if(this.values !== "" && this.type === "search"){
          this.test(this.values)
        }
      },
      deep: true,
    },

    pageSize: {
      handler: function change() {
        // if (this.values === "" && this.valueCategory === "") {
        //   this.FindAllProduct(["", this.page]);
        // } else if (this.values !== "" && this.valueCategory === "") {
        //   this.FindAllProduct([this.values, this.page]);
        // }else if(this.values === "" && this.valueCategory !== ""){
        //   this.test(this.valueCategory)
        // }
        if (this.values === "" && this.type === "findall") {
          this.FindAllProduct(["", this.page]);
        } else if (this.values !== "" && this.type === "searchproduct") {
          this.FindAllProduct([this.values, this.page]);
        }else if(this.values !== "" && this.type === "search"){
          this.test(this.values)
        }
      },
      deep: true,
    },
    type: {
      handler: function change(){
        if(this.type === "findall"){
          this.FindAllProduct(["", this.page]);
        }else if(this.type === "searchproduct"){
          this.FindAllProduct([this.values, this.page]);
        }else if(this.type === "search"){
          this.test(this.values)
        }
      }
    }
  },
  components:{
      PagesTotal
    },
  methods: {
    getTokenConfig(){
            var token = JSON.parse(localStorage.getItem("token"))
            // var token = JSON.parse(store.state.authToken)
            var result = {
                headers: {Authorization: `Bearer ${token}`}
            }
            console.log(token)
            return result
        },
    AddToCart(item){
            this.check = true
            let soluong = '1'
            let idAccount = this.$store.getters.id_account
            // Math.round(item.soluong * item.price) sử dụng "Math.round()" để nhân sos nguyên với số thực và trả về kết quả là số nguyên, ở đây "price" là số thực, "soluong" là số nguyên
            var products = {product_id: item.id, product_name: item.title, price: item.price, soluong: parseInt(soluong), total: item.price === 0 ? item.price * parseInt(soluong) : Math.round(parseInt(soluong) * item.price), account_id: idAccount, vanchuyen_id: this.vanchuyen_id, image: item.image[0]}
            const giohang = JSON.parse(localStorage.getItem('cart')) || []
            const findOneId = giohang.find((items) => items.product_id === item.id)
            if(findOneId){
                findOneId.soluong += products.soluong
                findOneId.total = Math.round(findOneId.soluong * findOneId.price)
            }else{
                giohang.push(products)
            }

            localStorage.setItem("cart", JSON.stringify(giohang))
			this.sizeCart = giohang.length
            this.$notify({
                title: "Thông báo",
                text: "Add giỏ hàng thành công",
                // Hiển thị thông báo trong khoảng thời gian còn lại
                duration: 5000,
                type: "success"
            });
            console.log(JSON.parse(localStorage.getItem("cart")))
            this.check = false
        },
		Next(title, id){
			if(title === "cart"){
				this.$router.push({name: "cart"})
			}else if(title !== "cart"){
				localStorage.setItem('idProduct', JSON.stringify(id))
				this.$router.push({name: "productdetail", params: {name: title}})
			}
			
		},
    async search(e){
      e.preventDefault()
      this.values = this.$refs.value.value
      await this.FindAllProduct([this.values, this.page])
    },
    async FindAll(){
      this.id = 0
      this.values = ""
      await this.FindAllProduct(["", this.page])
      
    },
    async FindAllCategory(){
      this.check = true
			await axios.get(this.hostname + `/api/Category/FindAll?page=1&pageSize=20`, this.getTokenConfig())
				.then(response =>{
					this.category = response.data.content.data
					console.log(this.category)
          this.check = false
				})
				.catch(error => {
					if(error.response){
						Swal.fire(error.response.data)
            this.check = false
					}
          this.check = false
				})
		}
		,
    changeColor(index, id) {
      this.selectedIndex = index; // Lưu index của thể loại được chọn
      this.id = 0
      if(id !== null || id !== "" || id !== 0){
        this.test(id)
      }
    },
    changeReload(event){
        this.pageSize = event
        console.log(event + " " + this.pageSize)
        if (this.values === "" && this.type === "findall") {
          this.FindAllProduct(["", this.page]);
        } else if (this.values !== "" && this.type === "searchproduct") {
          this.FindAllProduct([this.values, this.page]);
        }else if(this.values !== "" && this.type === "search"){
          this.test(this.values)
        }
      },
    async test(a){
        this.FindAllPProductByCategory([a, this.page])
        // localStorage.removeItem('idCa')
    },
    async FindAllProduct(arr) {
      if (arr[0] === "") {
        this.check = true
        
        this.type = "findall"
        await axios
          .get(
            this.hostname +
              `/api/Product/FindAll?account_name=ca&page=${arr[1]}&pageSize=${this.pageSize}`, this.getTokenConfig()
          )
          .then((response) => {
            this.datas = response.data.content.data;
            this.page = response.data.content.page;
            this.totalPgae = response.data.content.totalPages;
            this.check = false
          })
          .catch((error) => {
            if (error.response) {
              this.check = false
              Swal.fire(error.response.data);
            }
            this.check = false
          });
      } else if (arr[0] !== "") {
        this.check = true
        this.type = "searchproduct"
        await axios
          .get(
            this.hostname +
              `/api/Product/FindAll?name=${arr[0]}&account_name=ca&page=${arr[1]}&pageSize=${this.pageSize}`, this.getTokenConfig()
          )
          .then((response) => {
            this.datas = response.data.content.data;
            this.page = response.data.content.page;
            this.totalPgae = response.data.content.totalPages;
            this.check = false
          })
          .catch((error) => {
            if (error.response) {
              Swal.fire(error.response.data);
              this.check = false
            }
            this.check = false
          });
      }
    },
    async FindAllPProductByCategory(search) {
      if (search[0] === null || search[0] === "") {
        this.$notify({
          title: "Thông báo",
          text: "Chưa có dữ liệu tìm kiếm",
          // Hiển thị thông báo trong khoảng thời gian còn lại
          duration: 5000,
          type: "warn",
        });
        this.check = true
        this.FindAllProduct(["", this.page])
        this.check = false
        return;
      }
      // if(localStorage.getItem('idCa') === null){
      //   this.FindAllProduct(["", this.page])
      //   Swal.fire("Biến không tồn tại")
      //   return;
      // }
      // if(localStorage.getItem('idCa') === null){
      //   localStorage.setItem('idCa', JSON.stringify(search[0]))
      // }
      this.check = true
      this.type = "search"
      this.values = search[0];
      let ids = [];
      ids.push(this.values);
      const idjoin = ids.join(", ");
      console.log(ids + " " + search[1] + " " + this.pageSize);
      await axios
        .get(
          this.hostname +
            `/api/Product/FindAllProductCategory?page=${search[1]}&pageSize=${this.pageSize}`,
          {
            headers: {
              id: [idjoin],
            },
          }
        )
        .then((response) => {
          console.log(response);
          this.datas = response.data.content.data
          this.page = response.data.content.page;
          this.totalPgae = response.data.content.totalPages;
          this.check = false
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
@import url("https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap");
@import url("../assets/Home/css/bootstrap.css");
@import url("../assets/Home/css/magnific-popup.min.css");
@import url("../assets/Home/css/font-awesome.css");
@import url("../assets/Home/css/jquery.fancybox.min.css");
@import url("../assets/Home/css/themify-icons.css");
@import url("../assets/Home/css/niceselect.css");
@import url("../assets/Home/css/animate.css");
@import url("../assets/Home/css/flex-slider.min.css");
@import url("../assets/Home/css/owl-carousel.css");
@import url("../assets/Home/css/slicknav.min.css");
@import url("../assets/Home/css/reset.css");
@import url("../assets/Home/style.css");
@import url("../assets/Home/css/responsive.css");
</style>
