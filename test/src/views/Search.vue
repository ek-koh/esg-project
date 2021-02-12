<template>
  <div>
    <div class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/90/27/5c/90275cb88dfa4196c65df4c4bbd37548.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">신재생에너지</div>
        <div class="caption_desc">
          신재생에너지관련섹터
          <a herf="#" class="caption_link" style="margin:10px">더 보기</a>
        </div>
      </div>
    </div>
    <div class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/ed/93/1f/ed931f7bac82e67b4e6c24dad1406c2f.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">전기차</div>
        <div class="caption_desc">
          전기차관련섹터
          <a herf="#" class="caption_link" style="margin:10px">더 보기</a>
        </div>
      </div>
    </div>
    <div class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/8e/de/a1/8edea18badb862a5a155cfa1668ab596.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">수소에너지</div>
        <div class="caption_desc">
          수소에너지관련섹터
          <a herf="#" class="caption_link" style="margin:10px">더 보기</a>
        </div>
      </div>
    </div>
    <div class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://www.ikont.co.jp/company/img/ph-company-08.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">동물</div>
        <div class="caption_desc">
          동물관련섹터
          <a herf="#" class="caption_link" style="margin:10px">더 보기</a>
        </div>
      </div>
    </div>
    <div class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://i.pinimg.com/564x/9f/14/b5/9f14b5d633947854a59f1f029b8896e1.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">동물</div>
        <div class="caption_desc">
          동물관련섹터
          <a herf="#" class="caption_link" style="margin:10px">더 보기</a>
        </div>
      </div>
    </div>
    <div class="hover_effect_box hover_effect_1" style="float:left;">
      <div class="content_bg">
        <img class="bd-placeholder-img bd-placeholder-img-lg" width="100%" height="100%" src="https://www.ikont.co.jp/company/img/ph-company-08.jpg" aria-label="Placeholder: Card image" preserveAspectRatio="xMidYMid slice" role="img" style="flex-shrink: 0;"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"/><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Card image</text>
      </div>
      <div class="caption">
        <div class="caption_title">동물</div>
        <div class="caption_desc">
          동물관련섹터
          <a herf="#" class="caption_link" style="margin:10px">더 보기</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
    }
  },
  methods: {
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
</style>