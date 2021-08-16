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
								<!-- <div class="login-header">
									<h3>Login <span>Mentoring</span></h3>
									<p class="text-muted">Access to our dashboard</p>
								</div> -->
								<form @submit.prevent="submitForm">
                                   <h2>Create an Account</h2>
                                    <div class="social-btn text-center">
                                        <a href="#" class="btn btn-primary btn-lg"><i class="fa fa-facebook"></i> Facebook</a>
                                        <a href="#" class="btn btn-info btn-lg"><i class="fa fa-twitter"></i> Twitter</a>
                                        <a href="#" class="btn btn-danger btn-lg"><i class="fa fa-google"></i> Google</a>
                                    </div>
                                    <div class="or-seperator"><b>or</b></div>
                                    <div class="form-group">
                                        <input type="email" class="form-control input-lg" name="email" v-model="form.email" placeholder="Email Address" required="required">
                                    </div>
                                    <div class="form-group">
                                        <input type="text" class="form-control input-lg" v-model="form.username" name="username" placeholder="username" required="required">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control input-lg" name="password1" v-model="form.password1" placeholder="Password" required="required">
                                    </div>
                                    <!-- <div class="form-group">
                                        <input type="number" class="form-control input-lg" name="phonenumber" v-model="phonenumber" placeholder="phonenumber" required="required">
                                    </div> -->
                                    <div class="form-group">
                                        <input type="password" class="form-control input-lg" name="password2" v-model="form.password2" placeholder="confirm password" required="required">
                                    </div>  
									<div class="text-left">
										<router-link to="/forgetpassword" href="">Forgot Password ?</router-link>
									</div>
									<button class="btn btn-primary login-btn" type="submit">Signup</button>
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

<script lang="ts">
// import {reactive} from 'vue';
// import {useRouter} from "vue-router";
// export default {
//   name: "SignUp",
//   setup() {
//     const data = reactive({
//       username: '',
//       email: '',
//       password1: ''
//     });
//     const router = useRouter();
//     const submit = async () => {
//         //alert(JSON.stringify(data));
//       await fetch('http://127.0.0.1:8000/register/', {
//         method: 'POST',
//         headers: {'Content-Type': 'application/json'},
//         body: JSON.stringify(data)
//       });
//       await router.push('/');
//     }
//     return {
//       data,
//       submit
//     }
//   }
// }
import {toast} from 'bulma-toast'
import axios from 'axios';
import cookie from 'js-cookie'

export default {
    name: 'Signup',
    data(){
        return{
            form: {
                username: '',
                email: '',
                password1: '',
                password2: ''
            }
        }
    },
    components:{
        cookie
    },
    methods:{
        submitForm(){
            //alert(this.form);
            // axios.post('http://127.0.0.1:8000/register/', this.form)
            //  headers: {
            //         'Access-Control-Allow-Origin' : '*',
            //         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            //         }
            //      .then((res) => {
            //          //Perform Success Action
            //      })
            //      .catch((error) => {
            //          // error.response.status Check status code
            //      }).finally(() => {
            //          //Perform action in always
            //      });

            axios.post('http://127.0.0.1:8000/register/', this.form)
            .then(response => {
                    toast({
                        message: 'Account created, please fill other fields',
                        // type: 'is_success',
                        dismissible:true,
                        pauseOnHover:true,
                        duration:2000,
                        position:'bottom-left'
                    })
                    cookie.set('x-access-token', response.data.access_token, {
                expires: 2,
              })
              cookie.set('x-refresh-token', response.data.refresh_token, {
                expires: 2,
              })
              cookie.set('email', response.data.user.email, { expires: 2 })
              cookie.set('id', response.data.user.id, { expires: 2 })
              cookie.set('user_id', response.data.user.user_id, { expires: 2 })
              cookie.set('username', response.data.user.username, {
                expires: 2,
              })
                    console.log(response)
                    const token = response.data.access_token
                    this.$store.commit('setToken', token)
                    axios.defaults.headers.common["Authorization"] = `Token ` + token
                    localStorage.setItem("token", token)
                    this.$router.push('/profile') 
                }).catch(err => {
                    console.log(err.response);
                });
        }
    },
    mounted() {
    document.title = 'Teacherapp | Register'
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
