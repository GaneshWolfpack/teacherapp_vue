<template class="account-page">
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
									<h3><span>User</span> Profile</h3>
									<p class="text-muted">Access to our dashboard</p>
								</div>
								<!-- Register Form -->
									<div class="row">
                                        <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">User Name</label>
												<input id="username" type="text" v-model="profile.username" class="form-control" name="username" autofocus="">
											</div>
										</div>
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label">Email Address</label>
                                                <input  type="email" id="email" v-model="profile.email" class="form-control">
                                            </div>
                                        </div>
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">First Name</label>
												<input id="first-name" type="text" class="form-control" placeholder="First Name" name="first_name" v-model="profile.first_name" autofocus="">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Last Name</label>
												<input id="last-name" type="text" class="form-control" placeholder="Last Name" name="last_name" v-model="profile.last_name" autofocus="">
											</div>
										</div>
										
                                        <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Phone{{phone}} Number</label>
												<input id="phonenumber" type="number" placeholder="Phone Number" class="form-control" name="phonenumber" v-model="profile.phonenumber" >
											</div>
										</div>
                                        <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Gender</label>
												<!-- <input id="last-name" type="number"  name="last_name"> -->
                                                <select name="gender" v-model="profile.gender" id="gender" placeholder="Gender" class="form-control" >
                                                    <option value="----">----</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
											</div>
										</div>
                                         <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Profile img</label>
                                                <input type="file" id="Profile_img" name="Profile_img" placeholder="profile img" class="form-control">
											</div>
										</div>
                                        <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Date of birth</label>
                                                 <input type="date" id="birthday" v-model="profile.birthday"  class="form-control" name="birthday">
											</div>
										</div>
									</div>
									
									<div class="row">
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Description</label>
												<textarea  form="usrform" v-model="profile.description" name="description" placeholder="Description"></textarea>
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Address</label>
												<textarea name="address" v-model="profile.address" form="usrform" placeholder="Address..."></textarea>
											</div>
										</div>
										<!-- <div>
											<table>
												<tr>
													<td>Home</td>
													<td>KEI</td>
													<td>kdkd</td>
												</tr>
												<tr v-for="item in list" v-bind:key="item.user_id" >
													<td>{{item.email}}</td>
													<td>{{item.username}}</td>
													<td>{{item.password}}</td>
												</tr>											</table>
										</div> -->
                                       <!-- <div v-for="profile in profile" v-bind:key="profile.id">
										   <h1>{{profile.id}}</h1>
										   <h1>{{profile.username}}</h1>
										   <h1>{{profile.email}}</h1>
									   </div> -->
									</div>
									<!-- <div class="form-group">
										<div class="custom-control custom-control-xs custom-checkbox">
											<input type="checkbox" class="custom-control-input" name="agreeCheckboxUser" id="agree_checkbox_user">
											<label class="custom-control-label" for="agree_checkbox_user">I agree to Mentoring</label> <a tabindex="-1" href="javascript:void(0);">Privacy Policy</a> &amp; <a tabindex="-1" href="javascript:void(0);"> Terms.</a>
										</div>
									</div> -->
									<button class="btn btn-primary login-btn" @click="update">Create Account</button>
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
</template>

<script>
import axios from 'axios';
import cookie from 'js-cookie'

export default {
    name: 'Verify',
    data(){
        return{
            list:[],
			profile:{
				username:cookie.get('username'),
				email:cookie.get('email'),
				profile:cookie.get('id'),
				first_name: '',
				last_name: '',
				phonenumber: '',
				gender: '',
				description: '',
				address: '',
				birthday: '',
			}
        }
    },
    methods:{
        
		update(){
			let id=cookie.get('id')
			let token=cookie.get('x-access-token')
			axios({
                url: `http://127.0.0.1:8000/user/profile/${id}`,
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
           		this.$router.push('/index') 

	})
		}
    },
	 mounted() {
		//  if(this.profile.username!=''&&this.profile.email!=''){
			//  this.profile.username = cookie.get('username')
			//  this.profile.email = cookie.get('email')
		console.log('id', cookie.get('id'))
		console.log('username', cookie.get('username'))
		console.log('email', cookie.get('email'))
    document.title = 'Teacherapp | profile'
	
  },
}
</script>

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
