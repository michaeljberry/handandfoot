<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    </v-app-bar>

    <v-content>
      <Table/>
    </v-content>
  </v-app>
</template>

<script>
import Table from '@/components/Table.vue';

export default {
  name: 'App',

  components: {
    Table,
  },

  data: () => ({
    //
  }),
};
</script>
