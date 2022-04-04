<template>
  <div class="center">
    <div class="col-6 col-offset-3">
      <h3>Zaloguj się</h3>
      <div class="field grid">
        <label for="email" class="col-fixed" style="width: 100px">
          Email:
        </label>
        <div class="col">
          <InputText id="email" v-model="user.email" type="text"  />
        </div>
      </div>

      <div class="field grid">
        <label for="password" class="col-fixed" style="width: 100px">
          Hasło:
        </label>
        <div class="col">
          <Password id="password" v-model="user.password" :feedback="false" />
        </div>
      </div>

      <div class="field grid">
        <div class="col-fixed">
          <Button @click="onLogin"
            icon="pi pi-check"
            iconPos="right"
            label="Zaloguj"
            style="margin-left: 100px"
          />
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import UserService from "../services/UserService";

import InputText from "primevue/inputtext";
import Password from "primevue/password";
import Button from "primevue/button";

export default {
  data() {
    return {
      user: {},
    };
  },
  methods: {
    onLogin() {
      UserService.login(this.user)
        .then((response) => {
          console.log(this.user);
          console.log(response);
          this.user = {};
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  components: {
    InputText,
    Password,
    Button,
  },
};
</script>

<style scoped>
.center {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
