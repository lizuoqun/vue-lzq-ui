<template>
  <div id="app">
    <EchartMap
      fileName="china"
      :map-point="mapPoint"
      :map-line="mapLine"
      :map-block="mapBlock"
      :map-params="mapParams"
    />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      mapPoint: [
        {
          n: "西藏",
          value: [114.5332, 27.3779],
        },
      ],
      mapLine: [
        {
          fromName: "长沙",
          toName: "南宁",
          coords: [
            [114.5332, 27.3779],
            [114.2813, 23.6426],
          ],
        },
      ],
      mapBlock: [
        {
          name: "湖北",
          itemStyle: {
            areaColor: "#cc9e54",
          },
        },
        {
          name: "云南",
          itemStyle: {
            areaColor: "#cd4b6b",
          },
        },
        {
          name: "福建",
          itemStyle: {
            areaColor: "#d0d148",
          },
        },
        {
          name: "内蒙古",
          itemStyle: {
            areaColor: "blue",
          },
        },
      ],
      mapParams: {
        is3d: true,
        mapColor: '',
        layoutSize:''
      },
    };
  },
  mounted() {},
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
}

#app {
  height: 100%;
  width: 100%;
}
</style>