<template>
    <Section class="auth_section">
        <div class="hero-wrap js-fullheight" :style="{ backgroundImage: `url('../assets/images/back_07.jpg')` }">
            <div class="overlay_auth"></div>

            <div class="uf-form-auth m-8 ">
                <div class="text-center">
                    <a href="https://uifresh.net/"><img src="@/assets/images/logo/kiki_logo-2.png" alt="" width="100"
                            height="100"></a>
                    <h1 class="text-white h3">{{ isSignUp ? 'Create Account' : 'Account Login' }}</h1>
                </div>
                <form class="mt-4">
                    <!-- <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <FaUser />
                        </span>
                        <input type="text" class="form-control" placeholder="Full Name">
                    </div> -->
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <FaEnvelope />
                        </span>
                        <input type="text" class="form-control" placeholder="Email address">
                    </div>
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <MdPassword />
                        </span>
                        <input type="password" class="form-control" placeholder="Password">
                    </div>
                    <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <MdPassword />
                        </span>
                        <input type="password" class="form-control" placeholder="Confirm Password">
                    </div>
                    <div v-if="!isSignUp" class="d-flex mb-3 justify-content-between">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input uf-form-check-input" id="rememberMe">
                            <label class="form-check-label text-white" for="rememberMe">Remember Me</label>
                        </div>
                        <a href="/" class="pwdFroget">Forgot password?</a>
                    </div>
                    <div class="col-12 d-flex justify-content-center">
                        <div class="d-grid mb-4">
                            <button class="btn btn-lg btn-primary" type="submit">{{ isSignUp ? 'Sign Up' : 'Log In' }}</button>
                        </div>
                    </div>
                    <div class="d-flex mb-3">
                        <div class="dropdown-divider m-auto w-25"></div>
                        <small class="text-nowrap text-white">Or {{ isSignUp ? 'sign up' : 'log in' }} with</small>
                        <div class="dropdown-divider m-auto w-25"></div>
                    </div>
                    <div class="uf-social-login d-flex justify-content-center">
                        <button class="google-btn" href="/">
                            <img src="https://img.icons8.com/color/48/000000/google-logo.png" alt="Google Logo">
                            <span class="text-secondary">{{ isSignUp ? 'Sign Up' : 'Continue' }} with Google</span>
                        </button>
                    </div>
                    <div class="mt-4 text-center">
                        <span class="text-white">{{ isSignUp ? 'Already have an account? ' : "Don't have an account? " }}</span>
                        <a class="toggleAuth " @click="toggleAuth()">
                            <RouterLink to="#">
                                {{ isSignUp ? 'Log In' : 'Sign Up' }}
                            </RouterLink>
                        </a>
                    </div>
                </form>
            </div>
        </div>
    </Section>
</template>

<script>
import { RouterLink } from 'vue-router';
import { FaEnvelope } from 'vue-icons-plus/fa';
import { MdPassword } from 'vue-icons-plus/md';

export default {
    data() {
        return {
            isSignUp: true,
        };
    },
    methods: {
        toggleAuth() {
            this.isSignUp = !this.isSignUp;
        },
    },
    components: {
        FaEnvelope,
        MdPassword,
        // FaUser,
        RouterLink,
    },
};
</script>

<style scoped>
.hero-wrap {
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh; 
     margin: 0;
    padding: 0;
    position: relative;
}


/* background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;  
    margin: 0;
    padding: 0;
    overflow: hidden; */

.overlay_auth {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    opacity: .2;
    background: #5a3d52;
}

.auth_section {
    display: flex;
    justify-content: center;
    align-items: center;
}

.uf-form-auth {
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

.google-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 10px 25px;
    background-color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 4px;
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

.pwdFroget, .toggleAuth {
    text-decoration: underline;
    color: #343fd1fb;
    font-weight: bold;
}
</style>
