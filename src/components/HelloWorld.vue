<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">VueJs-Shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Our Shop</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <router-link to="/products">Our Products</router-link>
              <!-- <a class="dropdown-item" href="#">Action</a> -->
              <!-- <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>-->
            </div>
          </li>
          <li class="nav-item active">
            <div class="nav-link">
              <button type="button" data-toggle="modal" data-target="#exampleModal">About us</button>
            </div>
          </li>
          <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
          </li>-->
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
      <router-view />
    </nav>
    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
      v-if="!contactModal"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Who are we</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">Nick Vasilakopoulos : Software Engineer</div>
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> -->
            <button type="button" class="btn btn-secondary" @click="contactUs">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="contactModal"
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <Contact v-if="contactModal"></Contact>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contact from "@/components/ContactUs.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  methods: {
    contactUs: function() {
      this.contactModal = true;
    }
  },
  components: {
    Contact: Contact
  },
  data() {
    return {
      contactModal: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="css">
</style>
