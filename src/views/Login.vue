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
									<h3>Login <span>Mentoring</span></h3>
									<p class="text-muted">Access to our dashboard</p>
								</div>
								<form @submit.prevent="login">
									<div class="form-group">
										<label class="form-control-label">Email Address</label>
										<input type="email" class="form-control" v-model="form.email">
									</div>
									<div class="form-group">
										<label class="form-control-label">Password</label>
										<div class="pass-group">
											<input type="password" class="form-control pass-input" v-model="form.password">
											<span class="fas fa-eye toggle-password"></span>
										</div>
									</div>
                                    
									<div class="text-left">
										<router-link to="/forgetpassword" href="">Forgot Password ?</router-link>
									</div>
									<button class="btn btn-primary login-btn" type="submit">Login</button>
									<div class="text-center dont-have">Don’t have an account? <router-link to="/verify">Register</router-link></div>
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
    name: 'Login',
    data(){
        return{
            form: {
                email: '',
                password: '',
            }
        }
    },
     mounted() {
    document.title = 'Teacherapp | Login'
      },
    methods:{
        login(){
            axios.post('http://127.0.0.1:8000/login/', this.form)
            .then(response => {
                    console.log(response)
                    const token = response.data.access_token
                    this.$store.commit('setToken', token)
                    
                    axios.defaults.headers.common["Authorization"] = `Token ` + token
                    localStorage.setItem("token", token)
                    const toPath = this.$route.query.to || '/index'
                    this.$router.push(toPath)
                })
                .catch(error => {
                    if (error.response) {
                        for (const property in error.response.data) {
                            this.errors.push(`${property}: ${error.response.data[property]}`)
                        }
                    } else {
                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                })
        }
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
