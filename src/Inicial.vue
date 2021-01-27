<template>
    <div>
        <h1>Buscar Cidade</h1>
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
    <router-link to="/comparar">Comparar</router-link>
      <button>Comparar</button>
    </div>
    
    </div>
</template>

<script>
export default {
    name:'lv-inicial',
}
</script>