<template>
  <div id="app">
   
    <h1>{{ titulo }}</h1>
    <hr>
    <input type="text" placeholder="Cidade, UF">
    <button>Pesquisar</button>

    <div>
      <div>
        <p>Cidade pesquisada</p>
        <p>data</p><span>hora</span>
      </div>
      <div>
        <p>Temperatura 30 °C</p>
        <p>Umidade 50%</p>
        <p>Vento 3 Km/h</p>
      </div>
      <button>Salvar</button>
    </div>


    <!-- lista das cidades Salvas -->
      
     <div>
      <div>
        <p>Cidade pesquisada</p>
        <p>Cidade pesquisada</p>
        <p>Cidade pesquisada</p>
       <p>Cidade pesquisada</p>
       <p>Cidade pesquisada</p>
      </div>
      <button>Comparar</button>
    </div>


    <!-- lista das cidades Comparadas -->
  <table>
    <head>
      <tr>
        <th>Cidade</th>
        <th>Temperatura</th>
        <th>Umidade</th>
        <th>Vento</th>
      </tr>
    </head>
    <tbody>
      <tr>
        <td></td>
      </tr>
    </tbody>
  </table>


   
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      titulo: 'App previsão do tempo'
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
