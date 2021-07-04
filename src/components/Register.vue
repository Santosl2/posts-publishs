<template>
  <div class="md-layout md-alignment-center-center">
    <div
      class="
        md-layout-item
        md-medium-size-33
        md-small-size-50
        md-xsmall-size-100
        md-size-20
      "
    >
      <md-progress-bar :md-mode="determinate"></md-progress-bar>

      <form v-on:submit.prevent="tryRegister()">
        <md-card style="border-radius: 0 0 3px 3px; padding: 20px">
          <md-card-header
            style="
              text-align: center;
              text-transform: uppercase;
              font-family: 'Raleway';
            "
          >
            <div class="md-title">Registro</div>
          </md-card-header>

          <md-card-content>
            <md-field :class="{ 'md-invalid': form.username.hasErrors }">
              <label>{{ language.EMAIL }}</label>
              <md-input
                type="email"
                v-model="form.email.value"
                required
              ></md-input>
              <md-icon>mail</md-icon>

              <span class="md-error">{{ language.PASSWORD_ERROR }}</span>
            </md-field>

            <md-field :class="{ 'md-invalid': form.username.hasErrors }">
              <label>{{ language.USERNAME }}</label>
              <md-input
                type="email"
                v-model="form.username.value"
                required
              ></md-input>
              <md-icon>person</md-icon>

              <span class="md-error">{{ language.PASSWORD_ERROR }}</span>
            </md-field>

            <md-field :class="{ 'md-invalid': form.password.hasErrors }">
              <label>{{ language.PASSWORD }}</label>
              <md-input
                type="password"
                v-model="form.password.value"
                required
              ></md-input>
              <span class="md-error">{{ language.PASSWORD_ERROR }}</span>
            </md-field>

            <md-field :class="{ 'md-invalid': form.password.hasErrors }">
              <label>{{ language.REPEAT_PASSWORD }}</label>
              <md-input
                type="password"
                v-model="form.rpassword.value"
                required
              ></md-input>
              <span class="md-error">{{ language.EMPTY_FIELD }}</span>
            </md-field>

            <md-button
              type="submit"
              class="md-raised md-primary"
              style="width: 100%"
              :disabled="form.loading"
              >{{ language.LOGIN }}</md-button
            >
            <hr />
            <div style="text-align: center">
              {{ language.HAS_ACCOUNT }}
              <br />
              <router-link to="/"> {{ language.LOGIN_NOW }} </router-link>
            </div>
          </md-card-content>
        </md-card>
      </form>
      <md-snackbar
        md-position="left"
        :md-duration="snackbar.duration"
        :md-active.sync="showSnackbar"
        md-persistent
      >
        <span>{{ snackbar.error }}</span>
        <md-button class="md-primary" @click="snackbar.error = ''"
          >Fechar</md-button
        >
      </md-snackbar>
    </div>
  </div>
</template>
<script>
import { LANGUAGE } from "../resources/constants";

export default {
  name: "Register",
  data: () => ({
    form: {
      username: {
        value: "mfilype201c7@gmail.coc",
        hasErrors: false,
      },
      email: {
        value: "",
        hasErrors: false,
      },
      password: {
        value: "matheus1478c",
        hasErrors: false,
      },
      rpassword: {
        value: "",
        hasErrors: false,
      },
      remember: false,
      loading: false,
    },
    snackbar: {
      error: "",
      duration: 7000,
    },
    determinate: "determinate",
  }),

  computed: {
    language() {
      return LANGUAGE;
    },
  },
};
</script>