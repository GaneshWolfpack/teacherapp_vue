<template>
    <!-- Header -->
			<header class="header">
				<nav class="navbar navbar-expand-lg header-nav">
					<div class="container-fluid">
						<div class="navbar-header">
							<a id="mobile_btn" href="javascript:void(0);">
							<span class="bar-icon">
							<span></span>
							<span></span>
							<span></span>
							</span>
							</a>
							<a href="index.html" class="navbar-brand logo">
							<img src="../assets/img/logo.png" class="img-fluid" alt="Logo">
							</a>
						</div>
						<div class="main-menu-wrapper">
							<div class="menu-header">
								<a href="index.html" class="menu-logo">
								<img src="../assets/img/logo.png" class="img-fluid" alt="Logo">
								</a>
								<a id="menu_close" class="menu-close" href="javascript:void(0);">
								<i class="fas fa-times"></i>
								</a>
							</div>
							<ul class="main-nav">
								<li class="active">
									<a href="/index">Home</a>
								</li>
								<li class="has-submenu">
									<a href="">Mentor <i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li><a href="dashboard.html">Mentor Dashboard</a></li>
										<li><a href="bookings.html">Bookings</a></li>
										<li><a href="schedule-timings.html">Schedule Timing</a></li>
										<li><a href="mentee-list.html">Mentee List</a></li>
										<li><a href="profile-mentee.html">Mentee Profile</a></li>
										<li class="has-submenu">
											<a href="blog.html">Blog</a>
											<ul class="submenu">
												<li><a href="blog.html">Blog</a></li>
												<li><a href="blog-details.html">Blog View</a></li>
												<li><a href="add-blog.html">Add Blog</a></li>
												<li><a href="edit-blog.html">Edit Blog</a></li>
											</ul>
										</li>
										<li><a href="chat.html">Chat</a></li>
										<li><a href="invoices.html">Invoices</a></li>
										<li><a href="profile-settings.html">Profile Settings</a></li>
										<li><a href="reviews.html">Reviews</a></li>
										<li><a href="mentor-register.html">Mentor Register</a></li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">Mentee <i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li class="has-submenu">
											<a href="#">Mentors</a>
											<ul class="submenu">
												<li><a href="map-grid.html">Map Grid</a></li>
												<li><a href="map-list.html">Map List</a></li>
											</ul>
										</li>
										<li><a href="search.html">Search Mentor</a></li>
										<li><a href="profile.html">Mentor Profile</a></li>
										<li><a href="bookings-mentee.html">Bookings</a></li>
										<li><a href="checkout.html">Checkout</a></li>
										<li><a href="booking-success.html">Booking Success</a></li>
										<li><a href="dashboard-mentee.html">Mentee Dashboard</a></li>
										<li><a href="favourites.html">Favourites</a></li>
										<li><a href="chat-mentee.html">Chat</a></li>
										<li><a href="profile-settings-mentee.html">Profile Settings</a></li>
										<li><a href="change-password.html">Change Password</a></li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">Pages <i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li><a href="voice-call.html">Voice Call</a></li>
										<li><a href="video-call.html">Video Call</a></li>
										<li><a href="search.html">Search Mentors</a></li>
										<li><a href="components.html">Components</a></li>
										<li class="has-submenu">
											<a href="invoices.html">Invoices</a>
											<ul class="submenu">
												<li><a href="invoices.html">Invoices</a></li>
												<li><a href="invoice-view.html">Invoice View</a></li>
											</ul>
										</li>
										<li><a href="blank-page.html">Starter Page</a></li>
										<li><a href="login.html">Login</a></li>
										<li><a href="register.html">Register</a></li>
										<li><a href="forgot-password.html">Forgot Password</a></li>
									</ul>
								</li>
								<li class="has-submenu">
									<a href="">Blog <i class="fas fa-chevron-down"></i></a>
									<ul class="submenu">
										<li><a href="blog-list.html">Blog List</a></li>
										<li><a href="blog-grid.html">Blog Grid</a></li>
										<li><a href="blog-details.html">Blog Details</a></li>
									</ul>
								</li>
								<li>
									<a href="admin/index.html" target="_blank">Admin</a>
								</li>
								<li class="login-link">
									<a href="login.html">Login / Signup</a>
								</li>
							</ul>
						</div>
						<ul class="nav header-navbar-rht">
							<li class="nav-item">
								<a class="nav-link header-login" href="/teacher">Teacher</a>
							</li>
							<li class="nav-item">
								<a class="nav-link header-login btn-active" href="/student">Student</a>
							</li>
						</ul>
                        <!-- <ul class="nav header-navbar-rht">
							<li class="nav-item">
								<a class="nav-link header-register" href="login.html">Login</a>
							</li>
							<li class="nav-item">
								<a class="nav-link header-login" href="register.html">Register</a>
							</li>
						</ul> -->
					</div>
				</nav>
			</header>
			<!-- /Header -->
            <div class="account-page">
             <!-- Main Wrapper -->
		<div class="main-wrapper">
			<!-- Page Content -->
			<div class="bg-pattern-style bg-pattern-style-register">
				<div class="content">
					<!-- Register Content -->
					<div class="account-content">
						<div class="account-box">
							<div class="login-right">
								<div class="login-header">
									<h3><span>Teacher</span> Profile</h3>
								</div>
								<!-- Register Form -->
                                    <div class="form-group">
                                            <label class="form-control-label">Teacher</label>
                                            <input type="text" name="teacher" v-model="profile.teacher" class="form-control">
									</div>
                                    <div class="form-group">
                                            <label class="form-control-label">Hourly rate</label>
                                            <input type="number" max="10" name="hourly_rate" v-model="profile.hourly_rate"  min="10" class="form-control">
									</div>
                                    <div class="form-group">
                                        <label class="form-control-label">cover img</label>
                                        <input type="file" id="Profile_img" name="Profile_img" placeholder="profile img" class="form-control">
									</div>
                                    
                                    <div class="form-group">
                                            <label class="form-control-label">Grade</label>
                                            <input type="text" name="grade" v-model="profile.grade" class="form-control">
									</div>
                                    
									<button class="btn btn-primary login-btn"  @click="update">Create Account</button>
									<!-- <div class="account-footer text-center mt-3">
										Already have an account? <a class="forgot-link mb-0" href="login.html">Login</a>
									</div> -->
								<!-- /Register Form -->
							</div>
						</div>
					</div>
					<!-- /Register Content -->
				</div>
			</div>		
			<!-- /Page Content -->
		</div>
		<!-- /Main Wrapper -->
            </div>
</template>

<style scoped>
@import url('./../assets/css/style.css');
</style>
<style scoped>
@import url('../assets/css/bootstrap-rtl.min.css');
</style>
<style scoped>
@import url('../assets/plugins/fontawesome/css/fontawesome.min.css');
</style>
<style scoped>
@import url('../assets/plugins/fontawesome/css/all.min.css');
</style>
<style scoped>
@import url('../assets/plugins/select2/css/select2.min.css');
</style>
<style scoped>
@import url('../assets/css/owl.carousel.min.css');
</style>
<style scoped>
@import url('../assets/css/owl.theme.default.min.css');
</style>
<style scoped>
@import url('../assets/plugins/select2/css/select2.min.css');
</style>
<script>
import cookie from 'js-cookie'
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
		profile:{
		  teacher:cookie.get('username'),
		  hourly_rate:'',
		  grade:''
	  }
    }
  },
  components: {
  },
  mounted() {
    document.title = 'Teacherapp | Teacher profile'

  },
  methods: {
	  update(){
			let id=cookie.get('id')
			let token=cookie.get('x-access-token')
			axios({
                url: `http://127.0.0.1:8000/user/teacher_profile/${id}`,
                method: 'PUT',
                data: this.profile,
                headers: {
                  Authorization: `Bearer ${token}`,
                },
			}
		)
			.then((response) =>{
				this.list = response.data.data
				console.warn(response.data.data)
	})
		}
  }
}

</script>
