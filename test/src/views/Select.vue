<template>
  <div>
      <p>신재생에너지 관련 기업</p>
      <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">기업명</th>
            <th scope="col">ESG점수</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>LG전자</td>
            <td>A</td>
            <td><button class="btn btn-danger" @click="buy"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal" @click="add"><i class="fas fa-bookmark"></i> 추가</button></td>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">내 포트폴리오에 추가</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <animated-number :value="value" :duration="500" :formatValue="formatToPrice" v-if="this.animateDisplayFlag" />
                        <br> <input v-model="value" type="number" /> <br> <br> <button type="button" @click="test"> 숫자 애니메이션</button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
            </tr>
        </tbody>
    </table>
    <br>
    <hr>
    <br>
    <p>신재생에너지 관련 ETF</p>
    <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">ETF명</th>
            <th scope="col">ESG점수</th>
            <th scope="col">Action</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>A</td>
            <td><button class="btn btn-danger"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success"><i class="fas fa-bookmark"></i> 추가</button></td>
            </tr>
        </tbody>
    </table>
    <div v-if="isbuy" style="height: 50px; background: #333; color: #fff;">
        <p>총 ㅁ주 매수<button @click="cancel">X</button></p>
    </div>
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
            animateDisplayFlag: false,
            isbuy: false,
        }
    },
    methods: {
        buy: function() {
            this.isbuy = true
        },
        add: function() {

        },
        cancel: function() {
            this.isbuy = false
        },
        formatToPrice(value) {
            return `${Number(value).toFixed(0)}`;
        },
        test() {
            this.animateDisplayFlag = true;
        }
    }

}
</script>

<style>

</style>