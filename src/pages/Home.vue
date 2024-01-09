<script setup>
//Tabelle importieren
import Table from "../components/Table.vue"
</script>

<template>
  <div class="w-full px-5 text-center">
   <h1 class="text-2xl font-bold">Herzlich Willkommen auf unserer Webseite.</h1>
    <p>Wir sind eine Non-Profit-Organisation, die sich gegen den Klimawandel einsetzt. Mit einer tabellarischen Aufstellung der derzeitigen CO²-Emissionen von Unternehmen, wollen wir über die aktuelle Situation aufklären und hinweisen. Die untenstehende Tabelle verfügt über eine Sortier- und Filterfunktion.</p> 
    <div class="px-5 rounded overflow-hidden shadow-lg">

        <Table></Table>
    </div>
  </div>
</template>
