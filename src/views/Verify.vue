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
									<h3> <span>Verification</span></h3>
									<!-- <p class="text-muted">Access to our dashboard</p> -->
								</div>
								<form @submit.prevent="submitForm">
									<div class="form-group">
										<!-- <label class="form-control-label">Email Address or Phone Number</label> -->
										<input type="text" class="form-control" v-model="form.email" name="email" placeholder="Email Address or Phone Number">
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
<!-- http://127.0.0.1:8000/register/users/verify-email/ -->
<script>
import {toast} from 'bulma-toast'
import axios from 'axios';
export default {
    name: 'Signup',
    data(){
        return{
            form: {
                email: '',
            }
        }
    },
    methods:{
        submitForm(){
            axios.post('http://127.0.0.1:8000/users/verification/', this.form)
            .then(res => {
                    toast({
                        message: 'Account created, please fill other fields',
                        // type: 'is_success',
                        dismissible:true,
                        pauseOnHover:true,
                        duration:2000,
                        position:'bottom-left'
                    })
                    console.log(res)
                    const token = res.data.access_token
                    this.$store.commit('setToken', token)
                    axios.defaults.headers.common["Authorization"] = `Token ` + token
                    localStorage.setItem("token", token)
                    this.$router.push('/otp') 
                }).catch(err => {
                    console.log(err.response);
                });
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
