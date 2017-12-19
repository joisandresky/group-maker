import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        kelompok: [],
        mhs: [],
        loaded: false
    },
    getters: {
        getMhs(state) {
            return state.mhs.filter(mhs => {
                return !mhs.done
            })
        },
        getKelompok(state) {
            return state.kelompok.map(klmpk => {
                return klmpk
            })
        },
        getTotalMhs(state) {
            return state.mhs.filter((m) => {
                return !m.done
            }).length
        },
        loaded(state) {
            return state.loaded
        }
    },
    mutations: {
        acak(state, payload) {
            let m = null
            let klmpk = []
            let angka = 0
            const tk = payload.genap ? parseInt(payload.tk) : parseInt(payload.tk) + 1
            const max = payload.max
            let tmh = this.getters.getTotalMhs
            let tmp = null
            state.kelompok = new Array(tk)
            for (let i = 0; i < tk; i++) {
                klmpk = []
                let x = 1
                while (x <= max) {
                    angka = Math.floor((Math.random() * this.getters.getTotalMhs))
                    m = this.getters.getMhs[angka]
                    if (m !== undefined) {
                        klmpk.push(m)
                        tmp = state.mhs.indexOf(m)
                        state.mhs[tmp].done = true
                        if (klmpk.length === max) {
                            break
                        }
                    } else {
                        console.log('Undefined : ' + this.getters.getTotalMhs)
                    }
                    x++
                }
                if (klmpk.length > 0) {
                    state.kelompok[i] = klmpk
                }
            }
            state.loaded = true
        },
        fillMhs (state, payload) {
            this.state.mhs = payload
        }
    },
    actions: {
        setMhs ({commit}, payload) {
            commit('fillMhs', payload)
        }
    }
});