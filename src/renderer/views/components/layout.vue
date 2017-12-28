<template>
    <div class="layout">
        <div class="sidebar">
            <sidebar></sidebar>
        </div>
        <div class="resource-view"></div>
    </div>
</template>
<script>
  import sidebar from '@components/sidebar.vue'
  export default {
    components: {
      sidebar
    },
    data () {
      return {}
    }
  }
</script>
<style scoped lang="sass" src="@sass/components/layout.sass"></style>