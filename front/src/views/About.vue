<template>
  <CCol>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-justify-center"/> <strong> About Us </strong>
      </CCardHeader>
      <CCardBody>
        <CJumbotron header="Bootstrap 4" lead="">
          <h1 class="display-5">안녕하세요,</h1>
          <h1 class="display-5">으쓱-입니다!</h1>
          <p>
            으쓱-은 신한금융투자에서 제공하는 ESG투자 플랫폼입니다.
          </p>
          <hr class="my-4">
          <p>
            ESG투자, 더이상 어렵지 않습니다. 제대로 된 기업을 찾아 투자하세요!
            으쓱을 사용하시면 기업들의 ESG등급을 몇번의 클릭으로 바로 조회 가능하고, 나만의 종합 ESG포트폴리오를
            구성하여 한 눈에 관리하실 수 있습니다.
          </p>
          <CButton color="primary" href="https://www.shinhaninvest.com/index.html">신한금융투자 웹사이트 가기</CButton>
          <br><br>
          <div style="float:right">
            <CIcon name="cil-bell"></CIcon><small>문의: 02-1234-5678</small>
          </div>
        </CJumbotron>
      </CCardBody>
    </CCard>
  </CCol>
</template>

<script>
export default {
  name: 'Typography'
}
</script>
