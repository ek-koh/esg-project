<template>
  <CChartRadar
    :datasets="defaultDatasets"
    :options="defaultOptions"
    :labels="[
      'A+', 'A', 'B+', 'B',
      'C', 'D'
    ]"
  />
</template>

<script>
import { CChartRadar } from '@coreui/vue-chartjs'

export default {
  name: 'CChartRadarExample',
  components: { CChartRadar },
  computed: {
    defaultDatasets () {
      return [
        {
          label: 'E',
          backgroundColor: 'rgba(000,153,051,0.2)',
          borderColor: 'rgba(000,153,051,1)',
          pointBackgroundColor: 'rgba(000,153,051,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(000,153,051,1)',
          tooltipLabelColor: 'rgba(000,153,051,1)',
          data: [45, 30, 90, 81, 56, 55]
        },
        {
          label: 'S',
          backgroundColor: 'rgba(000,204,204,0.2)',
          borderColor: 'rgba(000,204,204,1)',
          pointBackgroundColor: 'rgba(000,204,204,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(000,204,204,1)',
          tooltipLabelColor: 'rgba(000,204,204,1)',
          data: [28, 48, 40, 19, 80, 33]
        },
        {
          label: 'G',
          backgroundColor: 'rgba(255,255,000,0.2)',
          borderColor: 'rgba(255,255,000,1)',
          pointBackgroundColor: 'rgba(255,255,000,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(255,255,000,1)',
          tooltipLabelColor: 'rgba(255,255,000,1)',
          data: [20, 76, 40, 33, 30, 27]
        }
      ]
    },
    defaultOptions () {
      return {
        aspectRatio: 1.5
      }
    }
  }
}
</script>
