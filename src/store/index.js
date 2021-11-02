import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
    // Vue.use(axios)

export default new Vuex.Store({
    state: {
        patient: {
            nombre: '',
            correo: '',
            edad: '',
            id: ''
        },
        edit: false,
        patients: [],
        loading: false
    },
    mutations: {
        getpatients(state, patients) {
            state.patients = patients;
            state.loading = false;
        },
        loadingtable(state) {
            state.loading = true;
        }
    },
    actions: {
        actiongetpatients(context) {
            context.commit('loadingtable');
            axios.get('https://us-central1-test-435bd.cloudfunctions.net/test/patients')
                .then((accept) => {
                    let data = accept.data;
                    context.commit('getpatients', data);
                }); 
        }
    },
    modules: {}
})
