<template>
  <div>
    <div class="index-component">
      <button class="button" @click="event">toggl</button>
      <div v-show="val" class="title">sample</div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { useData, useComputed } from 'vue-hooks'
import useToggle from '../util/useToggle'

const Index = {
  hooks() {
    const [val, event] = useToggle(false)
    return {
      val,
      event
    }
  }
}
export default Index
</script>

<style lang="scss" scoped>
//
</style>
