<template class="account-page">
    <!-- Main Wrapper -->
		<div class="main-wrapper">
			
			
			<!-- Page Content -->
			<div class="bg-pattern-style">
				<div class="content">
							
					<!-- Login Tab Content -->
					<div class="account-content">
						<div class="account-box">
							<div class="login-right">
								<div class="login-header">
									<h3>Otp <span>Verification</span></h3>
									<!-- <p class="text-muted">Access to our dashboard</p> -->
								</div>
								<form @submit.prevent="Verify_details">
									<div class="form-group">
										<!-- <label class="form-control-label">Email Address or Phone Number</label> -->
										<input type="text" class="form-control" v-model="form.Otp" name="verify" placeholder="Otp number">
									</div>
									
									<button class="btn btn-primary login-btn" type="submit">Verify</button>
									<div class="text-center dont-have">Already have an account?<router-link to="/verify">Login</router-link></div>
								</form>
							</div>
						</div>
					</div>
					<!-- /Login Tab Content -->

				</div>

			</div>		
			<!-- /Page Content -->
		</div>
		<!-- /Main Wrapper -->
</template>

<script>
import axios from 'axios';
export default {
    name: 'Otp',
    data(){
        return{
            form: {
                Otp: '',
            }
        }
    },
    methods:{
        Verify_details(){
            console.warn(this.form.verify)
            this.$router.push('/sign-up') 
        }
    },
	 mounted() {
    document.title = 'Teacherapp | Verify'
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
