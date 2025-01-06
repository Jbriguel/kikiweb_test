<template>
    <Section class="login_section">
        <div class="hero-wrap js-fullheight" :style="{ backgroundImage: `url('../assets/images/bg_1.jpg')` }">
            <!-- :style="{ backgroundImage: `url(${backgroundImage})` }" -->
            <div class="overlay login_section"></div>
            <div class="uf-form-signin">

                <div class="text-center">
                    <a href="https://uifresh.net/"><img src="./assets/img/logo-fb.png" alt="" width="100"
                            height="100"></a>
                    <h1 class="text-white h3">Account Login</h1>
                </div>
                <form class="mt-4">
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text "><FaEnvelope /></span>
                        <input type="text" class="form-control" placeholder="Username or Email address">
                    </div>
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <!-- <span class="input-group-text fa fa-lock"></span> -->
                        <span class="input-group-text "><MdPassword /></span>
                        
                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="d-flex mb-3 justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input uf-form-check-input" id="exampleCheck1">
                            <label class="form-check-label text-white" for="exampleCheck1">Remember Me</label>
                        </div>
                        <a href="#">Forgot password?</a>
                    </div>
                    <div class="d-grid mb-4">
                        <button type="submit" class="btn uf-btn-primary btn-lg">Login</button>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="dropdown-divider m-auto w-25"></div>
                        <small class="text-nowrap text-white">Or login with</small>
                        <div class="dropdown-divider m-auto w-25"></div>
                    </div>
                    <div class="uf-social-login d-flex justify-content-center">
                        <a href="#" class="uf-social-ic" title="Login with Facebook"><i
                                class="fab fa-facebook-f"></i></a>
                        <a href="#" class="uf-social-ic" title="Login with Twitter"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="uf-social-ic" title="Login with Google"><FaGooglePlusG /></a>
                    </div>
                    <div class="mt-4 text-center">
                        <span class="text-white">Don't have an account?</span>
                        <a href="register.html">Sign Up</a>
                    </div>
                </form>
            </div>
        </div>  
    </Section>

</template>
<script>
import { FaEnvelope , FaGooglePlusG} from 'vue-icons-plus/fa'
import { MdPassword } from 'vue-icons-plus/md'
export default {
    components: {
        FaEnvelope,FaGooglePlusG,
        MdPassword 
    }
}</script>
<style scoped>
.login_section {
    display: flex;
    align-items: center;
    background-image: linear-gradient(to right, #ff2ec0, #fa4ea498);
}

a {
    color: #842029;
    text-decoration: none;
}

a:hover {
    color: #5a1118;
}

.uf-form-signin {
    width: 100%;
    max-width: 350px;
    padding: 15px;
    margin: auto;
}

.uf-input-group .input-group-text {
    background: #ffffff70;
    color: #f8f9fa;
    border: unset;
    font-size: 18px;
    padding: 15px;
    width: 50px;
}

.uf-input-group .form-control {
    border: unset;
    border-left: 1px solid #ffffff05;
    font-size: 16px;
    background: #ffffff70;
}

.uf-input-group .form-control:focus {
    box-shadow: unset;
    background: #ffffff;
}

.uf-btn-primary {
    background: #842029;
    color: #fff;
}

.uf-btn-primary:hover {
    background: #5a1118;
    color: #fff;
}

.uf-form-check-input:checked {
    background-color: #842029;
    border-color: #842029;
}

.uf-social-login .uf-social-ic+.uf-social-ic {
    margin-left: 15px;
}

.uf-social-ic {
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.uf-social-ic:hover {
    background: #842029;
}

.uf-social-ic:hover i {
    color: #fff;
}
</style>