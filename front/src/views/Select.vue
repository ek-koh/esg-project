<template>
  <div class="jb-xx-small">
      <h4><strong>전기차</strong> 관련 기업</h4><br>
      <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col">종목코드</th>
            <th scope="col">기업</th>
            <th scope="col">등급</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">011790</th>
            <td>SKC</td>
            <td>A</td>
            <td><button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal2"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fas fa-bookmark"></i> 추가</button></td>
            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel2"><strong>매수하기</strong></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3><animated-number :value="value" :duration="500" :formatValue="formatToPrice" v-if="animateDisplayFlag" /></h3>
                            <br><input v-model="value" type="number" min="1" max="10000"/> 주
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="test">계산하기</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">매수하기</button>
                            <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel3" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">계좌번호</th>
                                                    <td>123-45-67890</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">종목명</th>
                                                    <td>SKC</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">주문수량</th>
                                                    <td>{{value}}주</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">주문단가</th>
                                                    <td>136500원</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">주문유형</th>
                                                    <td>지정가</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">주문금액</th>
                                                    <td>{{value * 136500}}원</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table class="table">
                                                <tbody>
                                                    <tr>
                                                    <th scope="row">가계산수수료</th>
                                                    <td>10원</td>
                                                    </tr>
                                                    <tr>
                                                    <th scope="row">정산금액</th>
                                                    <td>{{value * 136500 + 10}}원</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" aria-label="Close">취소</button>
                                            <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal4">매수주문</button>
                                            <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel4" aria-hidden="true">
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <p><strong>SKC</strong> 주식 총 <strong>{{value}}</strong>주 매수에 성공했습니다.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel"><strong>내 포트폴리오에 추가</strong></h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <h3><animated-number :value="value1" :duration="500" :round="1" :formatValue="formatToPrice2" v-if="animateDisplayFlag2"/></h3>
                            <br><input v-model="value1" type="number" min="1" max="10000"/> 주 구매 시
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" @click="test1">점수확인</button>
                            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal5">추가</button>
                            <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel5" aria-hidden="true">
                                <div class="modal-dialog modal-dialog-centered">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <p>성공적으로 포트폴리오에 추가했습니다.</p>
                                            <p>현재 포트폴리오 내 ESG점수는 <strong>{{ score() }}점</strong>입니다.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </tr>
            <tr>
            <th scope="row">003670</th>
            <td>포스코케미칼</td>
            <td>A</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">096770</th>
            <td>SK이노베이션</td>
            <td>A</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">051910</th>
            <td>LG화학</td>
            <td>B</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">TSLA</th>
            <td>TESLA INC.</td>
            <td>A</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">1211 HK</th>
            <td>BYD CO LTD-H</td>
            <td>B</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">006400 KS</th>
            <td>씨아이에스</td>
            <td>A</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
        </tbody>
    </table>
    <br>
    <hr>
    <br>
    <h4><strong>전기차</strong> 관련 ETF</h4><br>
    <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col">종목코드</th>
            <th scope="col">ETF</th>
            <th scope="col">등급</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">305540</th>
            <td>미래에셋TIGER<br>2차전지테마 ETF</td>
            <td>B</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
            <tr>
            <th scope="row">LIT</th>
            <td>Global X Lithium<br>&Battery Tech ETF</td>
            <td>A</td>
            <td><button class="btn btn-danger btn-sm"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success btn-sm"><i class="fas fa-bookmark"></i> 추가</button></td>
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
            animateDisplayFlag2: false,
        }
    },
    methods: {
        formatToPrice2(value1) {
            if (value1 * 2 + 88 < 100) {
                return `${Number(value1 * 2 + 88).toFixed(0) + "점 (+" + value1 * 2 + ")"}`;
            }
            else {
                return `${"100점 (+12)"}`;
            }
        },
        formatToPrice(value) {
            return `${Number(value * 136500).toFixed(0) + "원"}`;
        },
        test() {
            this.animateDisplayFlag = true;
        },
        test1() {
            this.animateDisplayFlag2 = true;
        },
        score() {
            if (this.value1 * 2 + 88 < 100) {
                return this.value1 * 2 + 88;
            }
            else {
                return 100;
            }
        }
    }

}
</script>

<style>
input[type=number]::-webkit-inner-spin-button {
    opacity: 1
}
.jb-xx-small { font-size: xx-small; }
</style>