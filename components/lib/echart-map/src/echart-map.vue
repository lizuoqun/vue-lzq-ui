<template>
  <div :id="echartId" class="echart-map"></div>
</template>

<script>
import * as echarts from 'echarts';
import { initEcharts } from './js/initEchart'
import China from '../../../../public/mapJson/china.json'
import { uuid } from 'vue-uuid';
export default {
  name: 'EchartMap',
  mixins: [initEcharts],
  props: {
    fileName: {
      type: String,
      require: true,
      default: ''
    },
    mapPoint: {
      type: Array,
      require: true,
      default: null
    },
    mapLine: {
      type: Array,
      require: true,
      default: null
    },
    mapBlock: {
      type: Array,
      require: true,
      default: null
    },
    mapParams:{
      type: Object,
      require: true,
      default: null
    },
  },
  data() {
    return {
      echartId: "",
      MapJson:null
    }
  },
  created() {
    const uuidMap = uuid.v1().replaceAll('-', '')
    this.echartId = `echart-map-${uuidMap}`
  },
  mounted() {
    this.MapJson = China
    console.log(China, this.MapJson, this.fileName, this.mapLine, this.mapPoint)
    this.drawMap()
  },
  methods: {
    drawMap() {
      echarts.registerMap('china', this.MapJson, {});
      const myChart = echarts.init(document.getElementById(this.echartId));
      this.initMap(this.mapPoint, this.mapLine,this.mapBlock,this.mapParams)
      myChart.setOption(this.mapOption);
      window.addEventListener('resize', () => {
        myChart.resize();
      });
    }
  }
}
</script>

<style>
.echart-map {
  height: 100%;
  width: 100%;
}
</style>
