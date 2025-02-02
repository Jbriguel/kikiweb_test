<template>
     
        <div class="hero-wrap js-fullheight" :style="{ backgroundImage: `url('../assets/images/back_07.jpg')` }">
            <!-- :style="{ backgroundImage: `url(${backgroundImage})` }" -->
            <div class="overlay_login   "></div>

            <div class="uf-form-signin m-8  ">

                <div class="text-center">
                    <a href="https://uifresh.net/"><img src="@/assets/images/logo/kiki_logo-2.png" alt="" width="100"
                            height="100"></a>
                    <h1 class="text-white h3">Account Login</h1>
                </div>
                <form class="mt-4">
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text ">
                            <FaEnvelope />
                        </span>
                        <input type="text" class="form-control" placeholder="Username or Email address">
                    </div>
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <!-- <span class="input-group-text fa fa-lock"></span> -->
                        <span class="input-group-text ">
                            <MdPassword />
                        </span>

                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div class="d-flex mb-3 justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input uf-form-check-input" id="exampleCheck1">
                            <label class="form-check-label text-white" for="exampleCheck1">Remember Me</label>
                        </div>
                        <a href="/" class="pwdFroget">Forgot password?</a>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <div class="d-grid mb-4">
                            <button class="btn btn-lg btn-primary" type="submit">Log in now</button>
                        </div>
                    </div>
                    <!-- <div class="d-grid mb-4">
                        <button type="submit" class="btn uf-btn-primary btn-lg">Login</button>
                    </div> -->
                    <div class="d-flex mb-3">
                        <div class="dropdown-divider m-auto w-25"></div>
                        <small class="text-nowrap text-white">Or login with</small>
                        <div class="dropdown-divider m-auto w-25"></div>
                    </div>

                    <div class="uf-social-login d-flex justify-content-center ">
                        <button class="google-btn" href="/">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo">
                            <span class="text-secondary">Continue with Google</span>
                        </button>
                        <!-- <a href="#" class="uf-social-ic" title="Login with Facebook">
                            <MdFacebook />
                        </a>
                        <a href="#" class="uf-social-ic" title="Login with Google">
                            <FaGooglePlusG />
                        </a> -->
                    </div>
                    <div class=" mt-4 text-center">
                        <span class="text-white">Don't have an account? </span>

                        <a class="noAccount nav-link" >
                            <RouterLink to="/"> Sign Up </RouterLink>
                        </a>
                    </div>
                </form>
            </div>
            <!-- <div class="overlay_login  login_section"></div> -->
        </div>
    

</template>
<script>
import { RouterLink, } from 'vue-router'
import { FaEnvelope } from 'vue-icons-plus/fa'
import { MdPassword } from 'vue-icons-plus/md'
export default {
    components: {
        FaEnvelope, //FaGooglePlusG, MdFacebook,
        MdPassword, RouterLink
    }
}
</script>

<style scoped>
.overlay_login {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .2;
    background: #5a3d52;
}

.login_section {

    display: flex;
    justify-content: center;
    align-items: center;
    /* background-image: linear-gradient(to right, #d47ec980, #aaa6a6a8); */
    /* background-image: linear-gradient(to right, #ff2ec0, #fa4ea498); */
}

.uf-form-signin {
    width: 100%;
    max-width: 350px;
    padding: 15px;
    margin: auto;
    /* background: #ffffff70; */
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


.uf-social-ic:hover i {
    color: #fff;
}

.google-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 25px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.google-btn img {
    width: 30px;
    margin-right: 10px;
}

.google-btn:hover {
    background-color: #f1f1f1;
}

.pwdFroget {
    text-decoration: #001aff;
    color: #343fd1fb;
    text-underline-offset: initial;
    text-decoration-line: underline;
    text-decoration-color: #0026ff;
    text-shadow: #ffffff;

    font-weight: bold;
}

.noAccount {
    text-decoration: #001aff;
    color: #343fd1fb;
    text-underline-offset: initial;
    text-decoration-line: underline;
    text-decoration-color: #0026ff;
    text-shadow: #ffffff;

    font-weight: bold;
}
</style>