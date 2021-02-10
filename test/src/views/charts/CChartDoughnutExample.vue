<template>
  <CChartDoughnut
    :datasets="defaultDatasets"
    :labels="['신한금융투자', 'KB증권', 'NH투자증권', '키움증권']"
  />
</template>

<script>
import { CChartDoughnut } from '@coreui/vue-chartjs'

export default {
  name: 'CChartDoughnutExample',
  components: { CChartDoughnut },
  computed: {
    defaultDatasets () {
      return [
        {
          backgroundColor: [
            '#000066',
            '#FFCC00',
            '#FFFF00',
            '#66FFFF',
            '#FF00CC'
          ],
          data: [10000000, 5000000, 2000000, 500000]
        }
      ]
    }
  }
}
</script>
