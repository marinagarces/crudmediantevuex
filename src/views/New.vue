<template>
  <div id="New">
      <form>
          <label for="correo">Ingrese Nuevo Correo:</label><br>
          <input type="text" v-model="nuevousuario" id="correo" name="correo" value="John@correo.com"><br>
          <label for="contrasena">Ingrese Nueva Contraseña:</label><br>
          <input type="password" v-model="nuevopass" id="contrasena" name="contrasena" value="contrasena"><br><br>
          <input type="button" v-on:click="crearusuario" value="Crear Usuario">
      </form>
  </div>
</template>

<script>
import { auth } from '@/config/firebase.js'
export default{
  data(){
    return{
        nuevousuario: '',
        nuevopass: '',
    }//fin return
  },//fin data
  methods:{
    crearusuario(){
          auth.createUserWithEmailAndPassword(this.nuevousuario, this.nuevopass)
          .then( accept => {
                console.log('NUEVO USUARIO CREADO: ', accept);
                this.$router.push('home');
          })
          .catch( error =>{
              console.log('Error de creacion: ', error);
          });
    }//fin Login
  },//fin methods
}//fin export

</script>
