<template>
  <div id="app">
 <router-view name="header"></router-view>
        <main>
           
                <router-view/>
           
        </main>
        <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang='scss'>
$fa-font-path: "~@fortawesome/fontawesome-free/webfonts";
@import "~@fortawesome/fontawesome-free/scss/fontawesome";
@import "~@fortawesome/fontawesome-free/scss/solid"; // fas
@import "~@fortawesome/fontawesome-free/scss/regular"; // far
@import "~@fortawesome/fontawesome-free/scss/brands"; // fab
</style>
