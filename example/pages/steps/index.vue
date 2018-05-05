<template>
  <div class="page">

    <div class="page__hd">
      <div class="page__title">Steps</div>
      <div class="page__desc">步骤条</div>
    </div>

    <div class="page__bd page__bd_spacing">
      <div class="steps-item">
        <ui-steps :items="[1,2,3]" />
      </div>

      <div class="steps-item">
        <ui-steps :current="1" :items="steps" />
      </div>

      <div class="steps-item">
        <ui-steps :items="steps" finish />
      </div>
    </div>

  </div>
</template>

<script>
import uiSteps from '../../../components/steps'

export default {
  components: {
    uiSteps,
  },

  data () {
    return {
      steps: [
        { label: '步骤1', icon: 'waiting' },
        { label: '步骤2', icon: 'warn' },
        { label: '步骤3', icon: 'success' },
      ],
    }
  },
}
</script>

<style>
.steps-item {
  margin-bottom: 50px;
}
</style>
