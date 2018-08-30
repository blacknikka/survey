<template>
  <div class="mainpage">
    <div class="container">
      <div>Mail</div>
      <!-- eslint-disable-next-line max-len -->
      <input type="email" v-model="mail" placeholder="sample@sample.com" size="30">
      <div>Password</div>
      <!-- eslint-disable-next-line max-len -->
      <input type="password" v-model="psw" size="30">

      <div class="button-container">
        <!-- eslint-disable-next-line max-len -->
        <input type="button" value=Login @click="Login">
      </div>

      <div v-if="isError" class="error">
        ログインエラー。入力情報を確認してください。
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import Dbg from '../Util/Debug';

export default {
  data() {
    return {
      mail: '',
      psw: '',

      isError: false,
    };
  },
  methods: {
    Login() {
      const data = {
        mail: this.mail,
        psw: this.psw,
      };
      axios
        .post('http://localhost:8000/login', data)
        .then(response => {
          Dbg.console(response);

          if ('result' in response.data) {
            if (response.data.result === true) {
              // save token to vuex.
              this.$store.commit('UpdateLoggedInStatus', {
                token: response.data.token,
                questions: response.data.survey,
                mail: this.mail,
              });

              // Use 'replace'
              // This method replace the current path.
              // (not push but replace, DON'T push a path)
              this.$router.replace({
                name: 'Main',
              });
            } else {
              this.DoError();
            }
          } else {
            this.DoError();
          }
        })
        .catch(() => {
          this.DoError();
        });
    },
    DoError() {
      this.isError = true;
    },
  },
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.mainpage {
  width: 50%;
  padding-right: 25%;
  padding-left: 25%;
}
.container {
  border-top: 1px solid black;
  border-bottom: 1px solid black;
}
.submit-container {
  margin: 2px;
}
.button-container {
  margin: 10px;
}
.error {
  color: red;
  font-size: 20px;
  margin: 5px;
}
.mail {
  width: 200px;
}
.psw {
  width: 200px;
}
input:invalid:not(:focus) {
  outline: 1px solid #f00;
}
</style>
