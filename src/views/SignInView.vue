<template>
    <section class="auth_section">
        <div class="hero-wrap js-fullheight" :style="{ backgroundImage: `url('../assets/images/back_07.jpg')` }">
            <div class="overlay_auth"></div>

            <div class="uf-form-auth m-8 ">
                <div class="col-12 text-center">
                    <a href="/"><img src="@/assets/images/logo/kiki_logo-2.png" alt="" width="100" height="100"></a>
                    <h1 class="text-white h3">{{ isSignUp ? 'Create Account' : 'Account Login' }}</h1>
                </div>
                <!-- Afficher les erreurs -->
                <div v-if="errors.length > 0" class="error-messages">
                    <p v-for="(error, index) in errors" :key="index">{{ error }}</p>
                </div>
                <form class="mt-4">
                    <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <FaUser />
                        </span>
                        <input v-model="formData.fullName" type="text" class="form-control" placeholder="Full Name">
                    </div>
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <FaEnvelope />
                        </span>
                        <input v-model="formData.email" type="text" class="form-control" placeholder="Email address">
                    </div>
                    <div class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <MdPassword />
                        </span>
                        <input v-model="formData.password" type="password" class="form-control" placeholder="Password">
                    </div>
                    <div v-if="isSignUp" class="input-group uf-input-group input-group-lg mb-3">
                        <span class="input-group-text">
                            <MdPassword />
                        </span>
                        <input v-model="formData.password_confirmation" type="password" class="form-control"
                            placeholder="Confirm Password">
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
                            <button class="btn btn-lg btn-primary" type="submit" @click.prevent="handleAuth">{{ isSignUp
                                ? 'Sign Up' : 'Log In'
                                }}</button>

                            <!-- <b-button variant="primary" disabled>
                                <b-spinner small type="grow"></b-spinner>
                                Loading...
                            </b-button> -->
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
                    <div class="col-12 d-flex justify-content-center mt-4 text-center">
                        <span class="text-white">
                            {{ isSignUp ? 'Already have an account? ' : "Don't have an account? " }}
                        </span>
                        <span class="toggleAuth" @click="toggleAuth">
                            {{ isSignUp ? ' Log In' : ' Sign Up' }}
                        </span>
                    </div>
                </form>
                <!-- Trigger the modal with a button -->
                <div class="col-12 d-flex justify-content-center mt-4 text-center">
                    <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open
                        Modal</button>
                </div>

            </div>
        </div>
    </section>

    <!-- Modal -->
    <div id="myModal" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Modal Header</h4>
                </div>
                <div class="modal-body">
                    <p>Some text in the modal.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { FaEnvelope, FaUser } from 'vue-icons-plus/fa';
import { MdPassword } from 'vue-icons-plus/md';

import { useAuthStore } from '@/stores/auth'; // Importez votre store Pinia

export default {
    setup() {
        const authStore = useAuthStore(); // Initialisez le store
        let isSignUp = ref(true);

        const errors = ref([]); // Stocker les erreurs

        const formData = ref({
            fullName: '',
            email: '',
            password: '',
            password_confirmation: '',
        });

        const toggleAuth = () => {
            console.log("Avant basculement :", isSignUp.value);
            isSignUp.value = !isSignUp.value;
            console.log("Après basculement :", isSignUp.value);
        };
        const validatePassword = (password) => {
            const errors = [];
            if (password.length < 8) {
                errors.push('Le mot de passe doit contenir au moins 8 caractères.');
            }
            if (!/[A-Z]/.test(password)) {
                errors.push('Le mot de passe doit contenir au moins une majuscule.');
            }
            if (!/[a-z]/.test(password)) {
                errors.push('Le mot de passe doit contenir au moins une minuscule.');
            }
            return errors;
        };
        const handleAuth = async () => {
            errors.value = []; // Réinitialiser les erreurs
            if (isSignUp.value && formData.value.password !== formData.value.password_confirmation) {
                alert('Les mots de passe ne correspondent pas.');
                return;
            }

            if (!formData.value.email || !formData.value.password) {
                alert('Veuillez remplir tous les champs obligatoires.');
                return;
            }
            // Validation côté client
            // const passwordErrors = validatePassword(formData.value.password);
            // if (passwordErrors.length > 0) {
            //     errors.value.push(...passwordErrors);
            //     return;
            // }
            try {
                if (isSignUp.value) {
                    // Inscription
                    await authStore.register(formData.value);
                    alert('Inscription réussie !');
                } else {
                    // Connexion
                    await authStore.login({
                        email: formData.value.email,
                        password: formData.value.password,
                    });
                    alert('Connexion réussie !');
                }
            } catch (error) {
                console.log('error =>', error);
                console.log('error.response =>', JSON.stringify(error));
                if (error.response) {
                    const { message, errors: serverErrors } = error.response.data;

                    // Ajouter le message général aux erreurs
                    errors.value.push(message);

                    // Ajouter les erreurs détaillées
                    if (serverErrors && serverErrors.length > 0) {
                        errors.value.push(...serverErrors);
                    }
                } else {
                    errors.value.push('Erreur réseau ou de configuration : ' + error.message);
                }
            }
        };

        return { isSignUp, errors, toggleAuth, formData, handleAuth };
    },
    data() {
        return {
            // isSignUp: true,
        };
    },
    methods: {
        clickTest(report) {
            console.log('click received', report);
        }
    },
    components: {
        FaEnvelope,
        MdPassword,
        FaUser,
        // RouterLink,
    },
};
</script>

<style scoped>
.error-messages {
    color: red;
    margin-top: 10px;
}

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

.pwdFroget,
.toggleAuth {
    text-decoration: underline;
    color: #d1348afb;
    /* color: #343fd1fb; */
    font-weight: bold;
}
</style>
