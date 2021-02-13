<template>
  <div>
      <p>신재생에너지 관련 기업</p>
      <table class="table table-hover text-center">
        <thead>
            <tr>
            <th scope="col">#</th>
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
            <td><button class="btn btn-danger" @click="buy"><i class="fas fa-donate"></i> 매수</button> <button class="btn btn-success" @click="add"><i class="fas fa-bookmark"></i> 추가</button></td>
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
            <th scope="col">#</th>
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
        <p>총 ㅁ주 매수</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "Select",
    data() {
        return {
            isbuy: false,
        }
    },
    methods: {
        buy: function() {
            this.isbuy = true
        },
        add: function() {

        }
    }

}
</script>

<style>

</style>