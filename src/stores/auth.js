// stores/auth.js
import { defineStore } from 'pinia'
import axios from 'axios'
import {User} from '../services/models/user'
import router from '@/router'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    host: 'https://kikicrm.empireebusiness.com',
    prefix: 'mobile_app',
    token: null,
    user: null,
  }),
  actions: {
    /**
     * Registers a new user by sending a POST request to the server with the user data.
     *
     * @param {Object} userData - The user data for registration, including email, password, and other required fields.
     * @returns {Promise<Object>} - The server response data upon successful registration.
     * @throws {Error} - Throws an error with the server response data if the request fails.
     */
    async register(userData) {
      try {
        const response = await axios.post(
          `${this.host}/api/${this.prefix}/auth/register`,
          JSON.stringify(userData),
          {
            headers: {
              'Content-Type': 'application/json',
              'Accept-Language': 'fr',
              'Content-Language': 'fr',
            },
          },
        )
        this.token = response.data.data.token
        // this.token = response.data.token
        this.user = User.fromMap(response.data.data.user);
        return response.data
      } catch (error) {
        console.log('error', error)
        console.log('error.response', JSON.stringify(error.response))
        throw error
      }
    },

    async login(credentials) {
      try {
        const response = await axios.post(
          `${this.host}/api/${this.prefix}/auth/login`,
          JSON.stringify(credentials),
          {
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          },
        )

        this.token = response.data.token
        console.log('data', response.data)
        console.log('user', response.data['data']["user"])
        this.user = User.fromMap(response.data['data']["user"]);
         // Rediriger vers la page d'accueil après une connexion réussie
         router.push({ name: 'home' });
        return response.data
      } catch (error) {
        console.log('error', error)
        console.log('error.response', JSON.stringify(error.response))
        throw error
      }
    },

    async resendOTP(data) {
      try {
        const response = await axios.post(`${this.host}/${this.prefix}/user/otp_send`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en',
            'Content-Language': 'en',
            Authorization: `Bearer ${this.token}`,
          },
        })
        return response.data
      } catch (error) {
        throw error.response.data
      }
    },

    async verifyOTP(data) {
      try {
        const response = await axios.post(`${this.host}/${this.prefix}/user/otp_verify`, data, {
          headers: {
            'Content-Type': 'application/json',
            'Accept-Language': 'en',
            'Content-Language': 'en',
            Authorization: `Bearer ${this.token}`,
          },
        })
        return response.data
      } catch (error) {
        throw error.response.data
      }
    },

    async logout() {
      try {
        const response = await axios.post(
          `${this.host}/${this.prefix}/user/logout`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          },
        )
        this.token = null
        this.user = null
        // Rediriger vers la page de connexion après une déconnexion
        router.push({ name: 'login' });
        return response.data
      } catch (error) {
        throw error.response.data
      }
    },

    async getUserInfo() {
      try {
        const response = await axios.post(
          `${this.host}/${this.prefix}/user/user`,
          {},
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${this.token}`,
            },
          },
        )
        // this.user = response.data.data
        this.user = User.fromMap(response.data.data);
        return response.data
      } catch (error) {
        throw error.response.data
      }
    },
  },
})
