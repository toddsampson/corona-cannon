<template>
  <v-card>
    <v-card-title class="display-1">Parts List</v-card-title>
    <v-card-text>
      <v-data-table
        :headers="headers"
        :items="partsData"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Part',
          sortable: false,
          value: 'part',
        },
        { text: 'Quantity', value: 'quantity', align: 'center' },
        { text: 'Price', value: 'price', align: 'right' },
        { text: 'Total', value: 'total', align: 'right' },
      ],
    }
  },
  props: ['parts'],
  computed: {
    partsData() {
      const p = [];
      for(let i = 0; i < this.parts.length; i++) {
        let t = {};
        t.part = this.parts[i].name;
        t.quantity = this.parts[i].quantity;
        t.price = `$${this.parts[i].costPerItem.toFixed(2)}`;
        t.total = `$${(this.parts[i].costPerItem * this.parts[i].quantity).toFixed(2)}`;
        p.push(t);
      }
      return p;
    }
  }
}
</script>
