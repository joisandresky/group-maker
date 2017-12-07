import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        kelompok: [],
        mahasiswa: [
            { nama: 'Jois Andresky', npm: '43A87006150581', done: false},
            { nama: 'Saepul Anwar', npm: '43A87006150249', done: false},
            { nama: 'Ines', npm: '43A87006150100', done: false},
            { nama: 'Dzikra Rifat Akmal', npm: '43A87006150224', done: false},
            { nama: 'Luffy M.S.', npm: '43A87006150250', done: false},
            { nama: 'Rivaldi A.M.', npm: '43A87006150075', done: false},
            { nama: 'Anita', npm: '43A87006150076', done: false},
            { nama: 'Fenny E.L.', npm: '43A87006150078', done: false},
            { nama: 'Dessy Rachmawati', npm: '43A87006150096', done: false},
            { nama: 'Siti Mayasyaroh', npm: '43A87006150104', done: false},
            { nama: 'Vivianti Rivai', npm: '43A87006150105', done: false},
            { nama: 'Sintia Apriliani', npm: '43A87006150112', done: false},
            { nama: 'Rohana', npm: '43A87006150102', done: false},
            { nama: 'Choirul Iqbal', npm: '43A87006150127', done: false},
            { nama: 'M. Tasrifuddin', npm: '43A87006150133', done: false},
            { nama: 'Tulus', npm: '43A87006150161', done: false},
            { nama: 'Tunik D.L.', npm: '43A87006150176', done: false},
            { nama: 'M. Hendri', npm: '43A87006150225', done: false},
            { nama: 'P. Nadia', npm: '43A87006150226', done: false},
            { nama: 'R. Gilang', npm: '43A87006150227', done: false},
            { nama: 'Ahmad Kurnianto', npm: '43A87006150231', done: false},
            { nama: 'M. Iqbal R.', npm: '43A87006150233', done: false},
            { nama: 'Roky A.D.', npm: '43A87006150234', done: false},
            { nama: 'Ahmad Nabrih', npm: '43A87006150236', done: false},
            { nama: 'Deny I.G.', npm: '43A87006150243', done: false},
            { nama: 'Yudhi J.', npm: '43A87006150245', done: false},
            { nama: 'Ahmad Fadloli', npm: '43A87006150254', done: false},
            { nama: 'Rizal Firmansyah', npm: '43A87006150272', done: false},
            { nama: 'Ferra Fernanda', npm: '43A87006150593', done: false},
            { nama: 'Jaka Kelana', npm: '43A87006150600', done: false},
            { nama: 'Qori I.', npm: '43A87006150085', done: false},
            { nama: 'Firda W.', npm: '43A87006150071', done: false},
            { nama: 'Hari A.', npm: '43A87006150229', done: false},
            { nama: 'Fahmi F', npm: '43A87006150081', done: false},
            { nama: 'Nanang K', npm: '43A8706150246', done: false},
            { nama: 'Nur Huda', npm: '43A87006150120', done: false}
        ],
        loaded: false
    },
    getters: {
        getMahasiswa(state){
            return state.mahasiswa.filter((mhs) => {
                return !mhs.done
            })
        },
        getKelompok(state){
            return state.kelompok.map(klmpk => {
                return klmpk
            })
        },
        getTotalMhs(state){
            return state.mahasiswa.filter((mhs) => {
                return !mhs.done
            }).length
        },
        loaded(state){
            return state.loaded
        }
    },
    mutations: {
        acak(state, payload){
            console.log(payload)
            let mhs = null
            let klmpk = []
            let angka = 0
            const tk = payload.genap ? parseInt(payload.tk) : parseInt(payload.tk) +1
            const max = payload.max
            let tmh = this.getters.getTotalMhs
            let tmp = null
            state.kelompok = new Array(tk)
            for(let i = 0; i < tk;i++){
                klmpk = []
                let x = 1
                while(x <= max){
                    angka = Math.floor((Math.random() * this.getters.getTotalMhs))
                    mhs = this.getters.getMahasiswa[angka]
                    if(mhs !== undefined) {
                        klmpk.push(mhs)
                        tmp = state.mahasiswa.indexOf(mhs)
                        state.mahasiswa[tmp].done = true
                        //state.mahasiswa.splice(tmp, 1)
                        if(klmpk.length === max){
                            break
                        }
                    } else {
                        console.log('Undefined : '+ this.getters.getTotalMhs)
                    }
                    x++
                }
                if(klmpk.length > 0){
                    state.kelompok[i] = klmpk
                }
            }
            state.loaded = true
        }
    }
});