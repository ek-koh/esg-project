<template>
  <div>
      <h3>전기차 관련 기업</h3><br>
      <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col">종목코드</th>
            <th scope="col">기업명</th>
            <th scope="col">ESG점수</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">011790</th>
            <td>SKC</td>
            <td>A</td>
            <td><button class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-bookmark"></i> 추가</button></td>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">매수하기</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h3><animated-number :value="value" :duration="500" :formatValue="formatToPrice" v-if="this.animateDisplayFlag" /></h3>
                        <br><input v-model="value" type="number" min="1" max="10000" style="opacity: 1;"/> 주
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="test">계산하기</button>
                        <button type="button" class="btn btn-primary">매수하기</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">내 포트폴리오에 추가</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <h3><animated-number :value1="value1" :duration="500" :formatValue2="formatToPrice2" v-if="this.animateDisplayFlag" /></h3>
                        <br><input v-model="value" type="number" /> 주 구매 시
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" @click="test">점수확인</button>
                        <button type="button" class="btn btn-primary">추가</button>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">닫기</button>
                    </div>
                    </div>
                </div>
            </div>
            </tr>
            <tr>
            <th scope="row">003670</th>
            <td>포스코케미칼</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">096770</th>
            <td>SK이노베이션</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">051910</th>
            <td>LG화학</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">222080</th>
            <td>씨아이에스</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">TSLA</th>
            <td>TESLA INC.</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">1211 HK</th>
            <td>BYD CO LTD-H</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">006400 KS</th>
            <td>씨아이에스</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
        </tbody>
    </table>
    <br>
    <hr>
    <br>
    <h3>전기차 관련 ETF</h3><br>
    <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col">종목코드</th>
            <th scope="col">ETF명</th>
            <th scope="col">ESG점수</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">305540</th>
            <td>미래에셋<br>TIGER 2차전지테마 ETF</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">LIT</th>
            <td>Global X Lithium & Battery Tech ETF</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
import AnimatedNumber from "animated-number-vue";

export default {
    name: "Select",
    components: {
        AnimatedNumber
    },
    data() {
        return {
            value: 0,
            value1: 0,
            animateDisplayFlag: false,
        }
    },
    methods: {
        formatToPrice2(value) {
            return `${Number(value * 2 + 88).toFixed(0) + "점"}`;
        },
        formatToPrice(value) {
            return `${Number(value * 80000).toFixed(0) + "원"}`;
        },
        test() {
            this.animateDisplayFlag = true;
        }
    }

}
</script>

<style>
input[type=number]::-webkit-inner-spin-button {
    opacity: 1
}
</style>