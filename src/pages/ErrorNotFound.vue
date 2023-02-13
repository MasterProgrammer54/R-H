<template>
  <div class="fullscreen bg-secondary text-primary text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div :class="[$q.screen.xs ? 'text-h4': 'text-h2']" style="opacity:.4">
        OOPS...<br/> OCURRIO UN ERROR
      </div>

      <q-btn
        class="q-mt-xl"
        outline
        color="primary"
        text-color="primary"
        unelevated
        to="/"
        label="Ir al inicio"
        no-caps
        size="lg"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
