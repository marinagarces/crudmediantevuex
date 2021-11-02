<template>
  <div id="Pacientes">
    <el-button type="primary" @click="add">Agregar Paciente</el-button>
    <el-table v-loading="loading" :data="patientlist" style="width: 100%">
      <el-table-column
        prop="nombre"
        label="Nombre"
        width="180"
      ></el-table-column>
      <el-table-column
        prop="correo"
        label="Correo"
        width="180"
      ></el-table-column>
      <el-table-column prop="edad" label="Edad"></el-table-column>
      <el-table-column fixed="right" label="Operaciones" width="120">
        <span slot-scope="scope">
          <el-button @click="todelete(scope.row['id'])" type="text" size="small"
            >Eliminar</el-button
          >
          <el-button @click="edit(scope.row)" type="text" size="small"
            >Editar</el-button
          >
        </span>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
// import Firebase from 'firebase';
import { mapState } from "vuex";
import axios from "axios";
export default {
  mounted() {
    this.cargatabla();
  },
  methods: {
    cargatabla() {
      this.$store.dispatch("actiongetpatients");
    },
    todelete(id) {
      axios
        .delete(
          `https://us-central1-test-435bd.cloudfunctions.net/test/patient/${id}`
        )
        .then((accept) => {
          this.cargatabla();
        });
    },
    edit(row) {
      this.$store.state.edit = true;
      this.$store.state.patient = row;
    },
    add() {
      this.$store.state.edit = false;
      this.$store.state.patient = {};
    },
  },
  computed: {
    ...mapState(["patients", "loading"]),
    patientlist() {
      return this.patients.map((patient) => {
        patient.data.id = patient.id;
        return patient.data;
      });
    },
  },
};
</script>
