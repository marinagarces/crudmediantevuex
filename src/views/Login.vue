<template>
  <div id="Login">
      <form>
          <label for="correo">Ingrese Correo:</label><br>
          <input type="text" v-model="usuario" id="correo" name="correo" value="John@correo.com"><br>
          <label for="contrasena">Ingrese Contraseña:</label><br>
          <input type="password" v-model="pass" id="contrasena" name="contrasena" value="contrasena"><br><br>
          <input type="button" v-on:click="login" value="Enviar">
      </form>
  </div>
</template>

<script>
import { auth } from '@/config/firebase.js'
export default{
  data(){
    return{
        usuario: '',
        pass: '',
    }//fin return
  },//fin data
  methods:{
    login(){
          auth.signInWithEmailAndPassword(this.usuario, this.pass)
          .then( accept => {
                console.log('Credenciales Validas: ', accept);
                this.$router.push('home');
          })
          .catch( error =>{
              console.log('Error de autenticacion: ', error);
          });
    }//fin Login
  },//fin methods
}//fin export

</script>
