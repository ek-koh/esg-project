<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="primary" header="나의 총자산 변화" text="현재 17,500,000원">
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[10000000, 12500000, 15000000, 17000000, 16500000, 16000000, 17500000]"
            point-hover-background-color="primary"
            label="자산"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="info" header="총 수익률 변화" text="현재 11.52%">
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[1.98, 18.33, 9.87, 17.21, 34.77, 22.32, 11.52]"
            point-hover-background-color="info"
            :options="{ elements: { line: { tension: 0.00001 }}}"
            label="수익률"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="warning"
        header="예수금"
        text="2,000,000원"
      >
        <template #footer>
          <CChartLineSimple
            class="mt-3"
            style="height:70px"
            background-color="rgba(255,255,255,.2)"
            :options="{ elements: { line: { borderWidth: 2.5 }}}"
            point-hover-background-color="warning"
            label="예수금"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
    <CCol sm="6" lg="3">
      <CWidgetDropdown
        color="danger"
        header="나의 거래 증권사"
        text="4개 증권사"
      >
        <template #footer>
          <CChartBarSimple
            class="mt-3 mx-3"
            style="height:70px"
            background-color="rgb(250, 152, 152)"
            label="Members"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
    </CCol>
  </CRow>
</template>

<script>
import CChartLineSimple from './charts/CChartLineSimple'
import CChartBarSimple from './charts/CChartBarSimple'

export default {
  name: 'Myasset',
  components: { CChartLineSimple, CChartBarSimple }
}
</script>
