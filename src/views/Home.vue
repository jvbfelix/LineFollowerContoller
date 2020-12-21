<template>
  <div class="home">
    <div class="container">
    <img alt="RoboCin logo" class="RCLogo" src="../assets/logo.png">
    <div class="controle">
      <the-mask type="text" name="pwma" v-model="pwma" placeholder="0.00" mask="#.##"></the-mask>
      <button>Atualizar PWMA</button>
      <the-mask type="text" name="pwmb" v-model="pwmb" placeholder="0.00" mask="#.##"></the-mask>
      <button>Atualizar PWMB</button>
      <the-mask type="text" name="pwmca" v-model="pwmca" placeholder="0.00" mask="#.##"></the-mask>
      <button>Atualizar PWMA Curva</button>
      <the-mask type="text" name="pwmcb" v-model="pwmcb" placeholder="0.00" mask="#.##"></the-mask>
      <button>Atualizar PWMB Curva</button>
      <div>
        <button>Calibrar</button>
        <button>Reiniciar Calibração</button>
      </div>
    </div>
    <div class="status">
      <p>Motor A:{{p_pwma}}</p>
      <p>Motor B:{{p_pwmb}}</p>
      <p>Motor A Curva:{{p_pwmca}}</p>
      <p>Motor B Curva:{{p_pwmcb}}</p>
      <p>Bateria:{{bateria}}</p>
    </div>
    <div v-if="loading" class="loading">
      <div class="bar"></div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {TheMask} from 'vue-the-mask'
import store from '../store'

export default {
  name: 'Home',
  components: {
    TheMask
    //HelloWorld
  },
  data() {
    return {
    pwma:0,
    pwmb:0,
    pwmca:0,
    pwmcb:0,
    p_pwma:0,
    p_pwmb:0,
    p_pwmca:0,
    p_pwmcb:0,
    bateria:0,
    }
  },
  computed: {
    loading: () => store.getters.loading,
  },
  created: function () {
    const option = { name: 'RC Line'}
    store.dispatch('webBluetooth/addDevice',option)
    let options = {device: 'RC Line'}
    store.dispatch('webBluetooth/connectDevice',options)
    let option2 = { device: 'RC Line', uuid: BluetoothUUID.canonicalUUID(0x180F) }
    store.dispatch('webBluetooth/discoverServices',option2)
    let valueToWrite = Uint8Array.of(1)
    let option1 = { characteristic: 'RC Line', value: valueToWrite }
    store.dispatch('webBluetooth/writeCharacteristic',option1)
  },
  beforeDestroy: function () {
    let options = {device: 'RC Line'}
    store.dispatch('webBluetooth/disconnectDevice',options)
  },
}
</script>

<style lang="scss">
body {
  margin: 0;
}
.container{
  background-color: #000000AA;
  height: 100%;
  width: 100%;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 15px;
  }
  &::-webkit-scrollbar-track {
    background: #CACACA;
    border-radius: 20px;
    border: 2px #FFFFFF solid;
  }
  &::-webkit-scrollbar-thumb {
    background: #174C74;
    border-radius: 20px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #174C74CC;
  }  
}
.home {
  background-image: url('../assets/back.jpg');
  background-size: cover;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

.RCLogo {
  width: 200px;
  max-width: 80%;
}
.controle {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  input {
    width: 500px;
    max-width: 80%;
    margin: 10px;
    padding: 5px 15px;
    border-radius: 15px;
    border: 1px solid #000000;
  }
  button {
    width: fit-content;
    margin-bottom: 15px;
    background-color: #C4C4C4;
    border-radius: 15px;
    border: 1px solid #000000;
    padding: 5px 15px;
    cursor: pointer;
  }
  input:focus{
    outline: 0;
  }
  button:focus{
    outline: 0;
  }
}

.status {
  text-align: left;
  color: #FFFFFF;
  padding: 25px;
}

.loading {
  background-color: #000000BB;
  width: 100vw;
  height: 100vh;
  position: absolute;
  z-index: 20;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .bar {
    border: 4px solid #FFFFFF;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background: radial-gradient(#FFFFFF00, #FFFFFF55);
    animation-name: girar;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
}
</style>