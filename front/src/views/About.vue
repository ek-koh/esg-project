<template>
  <div id="vizContainer" style="width:375px; height:900px;"></div>
  <!-- <div ref="tableau"></div> -->
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
        url: "https://public.tableau.com/views/MYESG/MYESG?:language=ko&:display_count=y&publish=yes&:origin=viz_share_link",
        options: {
            hideTabs: true
        }
    }
  },
  // methods: {
  //   initViz: function () {
  //     let viz = new tableau.Viz(this.$refs.tableau, this.url, this.options);
  //   }
  // },
  // mounted: function () {
  //   this.initViz()
  // }
}
</script>
