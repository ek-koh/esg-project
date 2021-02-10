<template>
  <div>
    <CCard>
      <CCardTitle>
        <CRow class="align-items-center">
          <CCol sm xs="12" class="text-center mt-3">
            <CButton color="primary" to="/">
              <CIcon name="cil-lightbulb"/>&nbsp;My 총자산
            </CButton>&nbsp;
            <CButton color="success" to="theme/colors">
              <CIcon name="cil-lightbulb"/>&nbsp;My ESG자산
            </CButton>
          </CCol>
        </CRow>
      </CCardTitle>
      <CCardBody>
        <CChartDoughnutExample2 style="margin-top:10px;"/>
        <br>
        <CRow class="text-center">
          <CCol sm="5">
            <h4 id="cma" class="card-title mb-0">ESG 총자산</h4>
            <div class="small text-muted">13,500,000원</div>
          </CCol>
        </CRow>
      </CCardBody>
      <CCardFooter>
        <CRow class="text-center">
          <CCol md sm="12" class="mb-sm-2 mb-0">
            <div class="text-muted">나의 ESG 점수</div>
            <strong>88점</strong>
            <CProgress
              class="progress-xs mt-2"
              :precision="1"
              color="success"
              :value="88"
            />
          </CCol>
        </CRow>
      </CCardFooter>
    </CCard>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            보유종목 Top 10
          </CCardHeader>
          <CCardBody>
            <CRow>
              <CCol sm="12" lg="6">
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      BGF리테일
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="90"
                    />
                  </div>
                </div>
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      LG
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="80"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      CJ제일제당
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="70"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      NAVER
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="60"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      JYP Ent.
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="50"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      GS리테일
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="40"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      나노엔텍
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="30"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      기업은행
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="20"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      경동나비엔
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="10"
                    />
                  </div>
                </div>                
                <div class="progress-group mb-4">
                  <div class="progress-group-prepend">
                    <span class="progress-group-text">
                      SK이노베이션
                    </span>
                  </div>
                  <div class="progress-group-bars">
                    <CProgress
                      class="progress-xs"
                      color="info"
                      :value="5"
                    />
                  </div>
                </div>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  </div>
</template>

<script>
import CChartDoughnutExample2 from './charts/CChartDoughnutExample2'

export default {
  name: 'Dashboard',
  components: {
    CChartDoughnutExample2,
  },
  data () {
    return {
    }
  },
  methods: {
    color (value) {
      let $color
      if (value <= 25) {
        $color = 'info'
      } else if (value > 25 && value <= 50) {
        $color = 'success'
      } else if (value > 50 && value <= 75) {
        $color = 'warning'
      } else if (value > 75 && value <= 100) {
        $color = 'danger'
      }
      return $color
    }
  }
}
</script>
