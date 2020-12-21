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
    </div>
    <div class="status">
      <p>Motor A:</p>
      <p>Motor B:</p>
      <p>Motor A Curva:</p>
      <p>Motor B Curva:</p>
      <p>Bateria:</p>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {TheMask} from 'vue-the-mask'

export default {
  name: 'Home',
  components: {
    TheMask
    //HelloWorld
  }
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
</style>