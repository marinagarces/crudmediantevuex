<template>
  <div id="AgregarPaciente">
    <el-form inline :model="patient" class="demo-form-inline">
      <el-form-item label="Nombre">
        <el-input v-model="patient.nombre" placeholder="Nombre"></el-input>
      </el-form-item>
      <el-form-item label="Correo">
        <el-input v-model="patient.correo" placeholder="Correo"></el-input>
      </el-form-item>
      <el-form-item label="Edad">
        <el-input v-model="patient.edad" placeholder="Edad"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          v-if="edit"
          :loading="loading"
          @click="editpatient"
          >Editar</el-button
        >
        <el-button type="primary" v-else :loading="loading" @click="addpatient"
          >Agregar</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import Firebase from 'firebase';
import { mapState, mapMutations } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      loading: false,
    }; //Fin return
  }, //fin data
  methods: {
    addpatient() {
      let patient = {
        nombre: this.patient.nombre,
        correo: this.patient.correo,
        edad: this.patient.edad,
      };
      this.loading = true;
      axios
        .post(
          "https://us-central1-test-435bd.cloudfunctions.net/test/patient",
          this.patient
        )
        .then((accept) => {
          this.loading = false;
          this.$store.dispatch("actiongetpatients");
        }); //fin de la resolucion de la promesa
    }, //fin addpatient
    editpatient() {
      let patient = {
        nombre: this.patient.nombre,
        correo: this.patient.correo,
        edad: this.patient.edad,
      };
      this.loading = true;
      axios
        .put(
          `https://us-central1-test-435bd.cloudfunctions.net/test/patient/${this.patient.id}`,
          patient
        )
        .then((accept) => {
          this.loading = false;
          this.$store.dispatch("actiongetpatients");
        }); //Fin actiongetpatients
    }, //fin editpatient
  }, //Fin methods
  computed: {
    ...mapState(["patient", "edit"]),
  }, //fin computed
}; //Fin export
</script>
