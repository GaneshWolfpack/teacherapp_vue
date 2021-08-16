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
									<h3><span>Student</span> Session</h3>
									<p class="text-muted">Access to our dashboard</p>
								</div>
								<!-- Register Form -->
								<form @submit.prevent="profile">  
									<div class="row">
                                        <div class="col-lg-6">
                                            <div class="form-group">
                                                <label class="form-control-label">Duration</label>
                                                <input  type="number" id="duration" class="form-control" placeholder="Duration">
                                            </div>
                                        </div>
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Time</label>
												<input id="time" type="number" class="form-control" placeholder="time" name="time" autofocus="">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Number of students</label>
												<input id="no_of_student" type="number" class="form-control" placeholder="Last Name" name="last_name" autofocus="">
											</div>
										</div>
										
                                        <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Price_per_student</label>
												<input id="price_per_student" type="number" placeholder="price_per_student" class="form-control" name="price_per_student">
											</div>
										</div>
                                         <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Subject</label>
                                                <input type="text" id="subject" name="subject" placeholder="subject" class="form-control">
											</div>
										</div>
                                        <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Topic</label>
                                                 <input type="text" id="topic"  class="form-control" placeholder="Topic" name="topic">
											</div>
										</div>
										<div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Grade</label>
                                                 <input type="number" id="grade" placeholder="Grade" class="form-control" name="grade">
											</div>
										</div>
									</div>
									
									<div class="row">
										<!-- <div class="col-lg-6">
											<div class="form-group">
												<label class="form-control-label">Description</label>
												<textarea name="comment" form="usrform" placeholder="Description"></textarea>
											</div>
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
									<button class="btn btn-primary login-btn" type="submit">Create Session</button>
									<!-- <div class="account-footer text-center mt-3">
										Already have an account? <a class="forgot-link mb-0" href="login.html">Login</a>
									</div> -->
								</form>
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
export default {
    name: 'Student_session',
    data(){
        return{
            form: {
            }
        }
    },
    methods:{
        profile(){
            this.$router.push('/index') 
        }
    },
	 mounted() {
    document.title = 'Teacherapp | Student_session'
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
