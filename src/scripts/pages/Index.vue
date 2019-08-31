<template>
  <div>
    <div class="index-component">
      <div class="title">sample</div>
      <div class="body">test</div>
      <div class="footer">aiueo</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Prop, Component } from 'vue-property-decorator'

@Component
class Index extends Vue {
  @Prop({ type: String })
  readonly sample!: string
}
export default Index
</script>

<style lang="scss" scoped>
//
</style>
