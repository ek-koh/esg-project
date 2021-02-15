<template>
  <CRow>
    <CCol sm="6" lg="3">
      <CWidgetDropdown color="success" header="나의 ESG 총자산 변화" text="현재 13,500,000원">
        <template #footer>
          <CChartLineSimple
            pointed
            class="mt-3 mx-3"
            style="height:70px"
            :data-points="[10000000, 10500000, 11000000, 12000000, 12500000, 12000000, 13500000]"
            point-hover-background-color="success"
            label="자산"
            labels="months"
          />
        </template>
      </CWidgetDropdown>
      <CCard>
        <CCardHeader>
          <CIcon name="cil-justify-center"/> <strong> ESG등급 분포 </strong>
        </CCardHeader>
        <CCardBody>
          <CChartRadarExample/>
        </CCardBody>
        <CCardFooter>
          <CRow class="text-center">
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">환경(Environment) 점수</div>
              <strong>90점</strong>
              <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="success"
                :value="90"
              />
              <br>
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">사회(Social) 점수</div>
              <strong>43점</strong>
              <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="info"
                :value="43"
              />
              <br>
            </CCol>
            <CCol md sm="12" class="mb-sm-2 mb-0">
              <div class="text-muted">지배구조(Governance) 점수</div>
              <strong>85점</strong>
              <CProgress
                class="progress-xs mt-2"
                :precision="1"
                color="warning"
                :value="85"
              />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
    </CCol>
  </CRow>
</template>

<script>
import CChartRadarExample from './charts/CChartRadarExample'
import CChartLineSimple from './charts/CChartLineSimple'

export default {
  name: 'Myesg',
  components: {
    CChartRadarExample,
    CChartLineSimple
  }
}
</script>
