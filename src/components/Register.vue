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
            <md-field :class="{ 'md-invalid': form.email.hasErrors }">
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
                type="text"
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
      email: {
        value: "mfilype201c7@gmail.coc",
        min_length: 6,
        max_length: 100,
        hasErrors: false,
      },
      username: {
        value: "",
        min_length: 6,
        max_length: 24,
        hasErrors: false,
      },
      password: {
        value: "matheus1478c",
        min_length: 8,
        max_length: 72,
        hasErrors: false,
      },
      rpassword: {
        value: "",
        hasErrors: false,
      },
      loading: false,
    },
    snackbar: {
      error: "",
      duration: 7000,
    },
    determinate: "determinate",
  }),
  methods: {
    formLoading(value) {
      if (value === true) {
        this.determinate = "indeterminate";
        this.form.loading = true;

        return;
      }

      this.determinate = "determinate";
      this.form.loading = false;
    },
    tryRegister() {
      let form = this.form;

      for (let t in form) {
        const field = form[t];
        if (t == "loading" || t == "rpassword") {
          continue;
        }

        if (field.value.length > field.max_length) {
          this.snackbar.error = this.language.MAX_CARACT.replace(
            "{field}",
            t
          ).replace("{length}", field.max_length);
          return;
        }

        if (field.value.length < field.min_length) {
          this.snackbar.error = this.language.MIN_CARACT.replace(
            "{field}",
            t
          ).replace("{length}", field.min_length);
          return;
        }
      }

      if (form.username.value.trim() == "") {
        form.username.hasErrors = true;
        return;
      }

      if (form.password.value.trim() == "") {
        form.password.hasErrors = true;
        return;
      }

      if (form.email.value.trim() == "") {
        form.email.hasErrors = true;
        return;
      }

      /*if (form.rpassword.value != form.password.value) {
        this.snackbar.error = this.language.PASSWORD_REPEAT_ERROR;
        return;
      }*/
    },
  },
  computed: {
    language() {
      return LANGUAGE;
    },
    showSnackbar: {
      get() {
        return !(this.snackbar.error == "");
      },
      set() {
        return !(this.snackbar.error == "");
      },
    },
  },
};
</script>