<template>
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

    <form v-on:submit.prevent="tryLogin()">
      <md-card style="border-radius: 0 0 3px 3px; padding: 20px">
        <md-card-header
          style="
            text-align: center;
            text-transform: uppercase;
            font-family: 'Raleway';
          "
        >
          <div class="md-title">Login</div>
        </md-card-header>

        <md-card-content>
          <md-field :class="{ 'md-invalid': form.username.hasErrors }">
            <label>{{ language.USERNAME }}</label>
            <md-input v-model="form.username.value" required></md-input>
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

          <md-checkbox v-model="form.remember">{{
            language.REMEMBER
          }}</md-checkbox>

          <md-button
            type="submit"
            class="md-raised md-primary"
            style="width: 100%"
            :disabled="form.loading"
            >{{ language.LOGIN }}</md-button
          >
          <hr />
          <div style="text-align: center">
            {{ language.NO_ACCOUNT }}
            <br />
            <a> {{ language.CREATE_ACCOUNT }} </a>
          </div>
        </md-card-content>
      </md-card>
    </form>
    <md-snackbar
      md-position="left"
      md-duration="5000"
      :md-active.sync="showSnackbar"
      md-persistent
    >
      <span>Connection timeout. Showing limited messages!</span>
      <md-button class="md-primary" @click="showSnackbar = false"
        >Retry</md-button
      >
    </md-snackbar>
  </div>
</template>
<script>
import { LANGUAGE } from "../resources/constants";

export default {
  name: "Index",
  data: () => ({
    form: {
      username: {
        value: "",
        hasErrors: false,
      },
      password: {
        value: "",
        hasErrors: false,
      },
      remember: false,
      loading: false,
    },
    showSnackbar: false,
    determinate: "determinate",
  }),
  methods: {
    tryLogin() {
      let form = this.form;

      if (form.username.value.trim() == "") {
        form.username.hasErrors = true;
        return;
      }

      if (form.password.value.trim() == "") {
        form.password.hasErrors = true;
        return;
      }

      // Login errors

      this.$router.push("/main");
      this.determinate = "indeterminate";
      form.username.hasErrors = false;
      form.password.hasErrors = false;
      form.loading = true;
    },
  },
  computed: {
    language() {
      return LANGUAGE;
    },
  },
};
</script>
