<template>
    <div>
        <h1>Comparar Cidades</h1>
        <!-- Retorna a pagina inicial -->
<router-link to="/">Buscar Cidade</router-link>
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
    name:'lv-comparar',
}
</script>