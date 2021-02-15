<template>
  <div style="text-align:center;">
    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example" style="display:inline-block; margin-bottom:10px;">
      <button type="button" class="btn btn-secondary" @click="E">E</button>
      <button type="button" class="btn btn-secondary" @click="S">S</button>
      <button type="button" class="btn btn-secondary" @click="G">G</button>
      <button type="button" class="btn btn-secondary" @click="all">All</button>

    </div>
    <br>
    <div v-show="isE" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/ed/93/1f/ed931f7bac82e67b4e6c24dad1406c2f.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">전기차</div>
        <div class="caption_desc">
          전기차관련섹터
          <router-link to="select" class="caption_link" style="margin:15px">더 보기</router-link>
        </div>
      </div>
    </div>
    <div name="fade" v-show="isE" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/90/27/5c/90275cb88dfa4196c65df4c4bbd37548.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">신재생에너지</div>
        <div class="caption_desc">
          신재생에너지관련섹터
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isE" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/8e/de/a1/8edea18badb862a5a155cfa1668ab596.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">수소에너지</div>
        <div class="caption_desc">
          수소에너지관련섹터
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isS" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://img.hankyung.com/photo/201802/BD.16043706.1.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">양성평등</div>
        <div class="caption_desc" style="margin:0px;">
          양성평등을<br>실천하는 기업
          <a herf="#" class="caption_link" style="margin:15px;">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isS" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1_41WpeZD3_ayZsiHVGdTd_zsDxtmXJWHOQ&usqp=CAU" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">준법경영</div>
        <div class="caption_desc">
          준법경영을<br>실천하는 기업
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isS" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://www.kisa.or.kr/img/contribution_v2.png" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">사회공헌</div>
        <div class="caption_desc">
          사회공헌활동을<br>실천하는 기업
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isG" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://png.pngtree.com/png-vector/20190728/ourlarge/pngtree-accounting-audit-banking-calculation-calculator-flat-color-i-png-image_1621624.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">회계제도</div>
        <div class="caption_desc">
          최신화된 회계제도를<br>적용하는 기업
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isG" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="data:image/jpeg;base64,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" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">주주권리</div>
        <div class="caption_desc">
          주주의 권리를 위해<br>노력하는 기업
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
    <div v-show="isG" class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://img.etoday.co.kr/pto_db/2019/04/600/20190415183700_1320276_275_275.png" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">금융감독체계정비</div>
        <div class="caption_desc">
          금융감독체계가<br>정비된 금융(증권)사
          <a herf="#" class="caption_link" style="margin:15px">더 보기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import func from '../../vue-temp/vue-editor-bridge'
export default {
  name: 'Search',
  data() {
    return {
      isE: true,
      isS: true,
      isG: true
    }
  },
  methods: {
    E: function() {
      this.isS = false
      this.isG = false
      this.isE = true
    },
    S: function() {
      this.isE = false
      this.isG = false
      this.isS = true
    },
    G: function() {
      this.isG = true
      this.isS = false
      this.isE = false
    },
    all: function() {
      this.isE = true
      this.isS = true
      this.isG = true
    }
  }
}
</script>

<style>
.hover_effect_box {
   width: 180px;
   height: 180px;
   margin: 0px;
   border: 5px solid #f3f3f3;
   overflow: hidden;
   position: relative;
   text-align: center;
   -webkit-box-shadow: 1px 1px 2px #e6e6e6;
   -moz-box-shadow: 1px 1px 2px #e6e6e6;
   box-shadow: 1px 1px 2px #e6e6e6;
   cursor: default;
   background: #fff;
   box-sizing: initial;
}
.hover_effect_box .caption {
   width: 180px;
   height: 180px;
   position: absolute;
   overflow: hidden;
   top: 0;
   left: 0;
}
.hover_effect_box .content_bg {
   display: block;
   position: relative;
}
.hover_effect_box .caption_title {
   text-transform: uppercase;
   color: #fff;
   text-align: center;
   position: relative;
   font-size: 17px;
   padding: 10px;
   background: rgba(0, 0, 0, 0.8);
   margin: 20px 0 0 0;
}
.hover_effect_box .caption_desc {
    font-size: 0.9em;
    line-height: 1.5;
    position: relative;
    color: #fff;
    padding: 30px 20px 40px;
    text-align: center;
 }
.hover_effect_box .caption_link {
   display: inline-block;
   text-decoration: none;
   padding: 7px 14px;
   background: #000;
   color: #fff;
   text-transform: uppercase;
   -webkit-box-shadow: 0 0 1px #000;
   -moz-box-shadow: 0 0 1px #000;
   box-shadow: 0 0 1px #000;
}
.hover_effect_box .caption_link:hover {
   -webkit-box-shadow: 0 0 5px #000;
   -moz-box-shadow: 0 0 5px #000;
   box-shadow: 0 0 5px #000;
}

.hover_effect_1 .content_bg {
   -webkit-transition: all 0.2s linear;
   -moz-transition: all 0.2s linear;
   -o-transition: all 0.2s linear;
   -ms-transition: all 0.2s linear;
   transition: all 0.2s linear;
}
.hover_effect_1 .caption {
   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
   filter: alpha(opacity=0);
   opacity: 0;
   background-color: rgba(131, 123, 112, 0.7);
   -webkit-transition: all 0.4s ease-in-out;
   -moz-transition: all 0.4s ease-in-out;
   -o-transition: all 0.4s ease-in-out;
   -ms-transition: all 0.4s ease-in-out;
   transition: all 0.4s ease-in-out;
}
.hover_effect_1 .caption_title {
   -webkit-transform: translateY(-100px);
   -moz-transform: translateY(-100px);
   -o-transform: translateY(-100px);
   -ms-transform: translateY(-100px);
   transform: translateY(-100px);
   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
   filter: alpha(opacity=0);
   opacity: 0;
   -webkit-transition: all 0.2s ease-in-out;
   -moz-transition: all 0.2s ease-in-out;
   -o-transition: all 0.2s ease-in-out;
   -ms-transition: all 0.2s ease-in-out;
   transition: all 0.2s ease-in-out;
}
.hover_effect_1 .caption_desc {
   -webkit-transform: translateY(100px);
   -moz-transform: translateY(100px);
   -o-transform: translateY(100px);
   -ms-transform: translateY(100px);
   transform: translateY(100px);
   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
   filter: alpha(opacity=0);
   opacity: 0;
   -webkit-transition: all 0.2s linear;
   -moz-transition: all 0.2s linear;
   -o-transition: all 0.2s linear;
   -ms-transition: all 0.2s linear;
   transition: all 0.2s linear;
}
.hover_effect_1:hover .content_bg {
   -webkit-transform: scale(1.1,1.1);
   -moz-transform: scale(1.1,1.1);
   -o-transform: scale(1.1,1.1);
   -ms-transform: scale(1.1,1.1);
   transform: scale(1.1,1.1);
}
.hover_effect_1 .caption_link {
   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=0)";
   filter: alpha(opacity=0);
   opacity: 0;
   -webkit-transition: all 0.2s ease-in-out;
   -moz-transition: all 0.2s ease-in-out;
   -o-transition: all 0.2s ease-in-out;
   -ms-transition: all 0.2s ease-in-out;
   transition: all 0.2s ease-in-out;
}
.hover_effect_1:hover .caption {
   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
   filter: alpha(opacity=100);
   opacity: 1;
}
.hover_effect_1:hover .caption_title,
.hover_effect_1:hover .caption_desc,
.hover_effect_1:hover .caption_link {
   -ms-filter: "progid: DXImageTransform.Microsoft.Alpha(Opacity=100)";
   filter: alpha(opacity=100);
   opacity: 1;
   -webkit-transform: translateY(0px);
   -moz-transform: translateY(0px);
   -o-transform: translateY(0px);
   -ms-transform: translateY(0px);
   transform: translateY(0px);
}
.hover_effect_1:hover .caption_desc {
   -webkit-transition-delay: 0.1s;
   -moz-transition-delay: 0.1s;
   -o-transition-delay: 0.1s;
   -ms-transition-delay: 0.1s;
   transition-delay: 0.1s;
}
.hover_effect_1:hover .caption_link {
   -webkit-transition-delay: 0.2s;
   -moz-transition-delay: 0.2s;
   -o-transition-delay: 0.2s;
   -ms-transition-delay: 0.2s;
   transition-delay: 0.2s;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>