<template>
  <div class="home">
    <el-container>
      <el-main>
        <agregar-paciente></agregar-paciente>
        <pacientes></pacientes>
      </el-main>
    </el-container>

    <input type="button" v-on:click="logout" value="Cerrar Sesion" />
  </div>
</template>

<script>
import { auth } from "@/config/firebase.js";
import AgregarPaciente from "./AgregarPaciente";
import Pacientes from "./Pacientes";

export default {
  name: "Home",
  components: {
    AgregarPaciente,
    Pacientes,
  },
  methods: {
    logout() {
      auth
        .signOut()
        .then((accept) => {
          console.log("Deslogueado con exito");
          this.$router.push("login");
        })
        .catch((error) => {
          console.log("Error deslogueando: ", error);
        });
    }, //fin logout
  }, //fin methods
}; //fin export
</script>
