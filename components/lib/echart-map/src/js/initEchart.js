const initEcharts = {
    data() {
        return {
            mapOption: {}
        };
    },
    methods: {
        initMap(POINT, LINE, BLOCK, params) {
            if(!params.mapColor && params.mapColor === ''){
                params.mapColor = '#397e82'
            }
            if(!params.layoutSize && params.layoutSize === ''){
                params.layoutSize = '100%'
            }
            this.mapOption = {
                tooltip: {
                    trigger: 'item',
                    renderMode: 'html',
                    triggerOn: 'click',
                    enterable: true,
                    padding: 0,
                    textStyle: {
                        color: '#000',
                        fontSize: '12'
                    },
                    extraCssText: 'box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);'
                },
                dispatchAction: {
                    type: 'downplay'
                },
                layoutCenter: ['50%', '50%'],
                layoutSize: params.layoutSize,
                geo: {
                    map: 'china',
                    roam: false,
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    itemStyle: {
                        normal: {
                            areaColor: params.mapColor,
                            borderColor: '#fff',
                            shadowColor: params.mapColor,
                            borderWidth: 1,
                        },
                        emphasis: {
                            borderWidth: 0.5,
                            borderColor: '#fff',
                            areaColor: params.mapColor
                        }
                    },
                    emphasis: {
                        label: {
                            show: false
                        }
                    },
                    regions: [{
                        name: '南海诸岛',
                        itemStyle: {
                            areaColor: '#fff',
                            borderColor: '#fff',
                            normal: {
                                opacity: 0,
                                label: {
                                    show: false,
                                    color: '#fff'
                                }
                            }
                        },
                        label: {
                            show: false,
                            color: '#FFFFFF',
                            fontSize: 12
                        }
                    }]
                },
                legend: {
                    orient: 'horizontal',
                    width: 300,
                    bottom: 10,
                    left: 10,
                    align: 'auto',
                    paddding: 20,
                    itemGap: 20,
                    itemStyle: {
                        borderColor: 'inherit',
                        borderWidth: 0
                    },
                    lineStyle: {
                        width: 3
                    },
                    textStyle: {
                        color: '#fff',
                        padding: [0, 0, 0, 8]
                    },
                    data: [{
                            name: '严重硬件故障',
                            icon: 'circle'
                        },
                        {
                            name: '严重光缆故障',
                            icon: 'line'
                        },
                        {
                            name: '重要硬件故障',
                            icon: 'circle'
                        },
                        {
                            name: '重要光缆故障',
                            icon: 'line'
                        }
                    ],
                    selected: []
                },
                series: [
                    // {
                    //     name: '严重光缆故障',
                    //     type: 'lines',
                    //     zlevel: 2,
                    //     effect: {
                    //         show: true,
                    //         period: 6,
                    //         trailLength: 0,
                    //         symbolSize: 4
                    //     },
                    //     lineStyle: {
                    //         normal: {
                    //             type: 'solid',
                    //             color: '#ff0a05',
                    //             width: 5,
                    //             opacity: 1,
                    //             curveness: 0.1
                    //         }
                    //     },
                    //     tooltip: {
                    //         show: false
                    //     },
                    //     data: []
                    // },
                    // {
                    //     name: '重要光缆故障',
                    //     type: 'lines',
                    //     zlevel: 2,
                    //     effect: {
                    //         show: true,
                    //         period: 6,
                    //         trailLength: 0,
                    //         symbolSize: 4
                    //     },
                    //     lineStyle: {
                    //         normal: {
                    //             type: 'solid',
                    //             color: '#f88900',
                    //             width: 5,
                    //             opacity: 1,
                    //             curveness: 0.1
                    //         }
                    //     },
                    //     tooltip: {
                    //         show: false
                    //     },
                    //     data: []
                    // },
                    // {
                    //     name: '严重硬件故障',
                    //     type: 'effectScatter',
                    //     coordinateSystem: 'geo',
                    //     symbolSize: 10,
                    //     zlevel: 2,
                    //     rippleEffect: {
                    //         color: 'transparent'
                    //     },
                    //     symbol: 'circle',
                    //     itemStyle: {
                    //         color: '#ff0a05',
                    //         borderColor: '#fff',
                    //         borderWidth: 1
                    //     },
                    //     data: []
                    // },
                    // {
                    //     name: '重要硬件故障',
                    //     type: 'effectScatter',
                    //     coordinateSystem: 'geo',
                    //     symbolSize: 10,
                    //     zlevel: 2,
                    //     rippleEffect: {
                    //         color: 'transparent'
                    //     },
                    //     symbol: 'circle',
                    //     itemStyle: {
                    //         color: '#f88900',
                    //         borderColor: '#fff',
                    //         borderWidth: 1
                    //     },
                    //     data: []
                    // },
                    {
                        name: '',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        symbolSize: 10,
                        zlevel: 2,
                        rippleEffect: {
                            color: 'transparent'
                        },
                        symbol: 'circle',
                        itemStyle: {
                            color: '#86f304',
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        data: POINT
                    },
                    {
                        name: '',
                        type: 'lines',
                        zlevel: 2,
                        effect: {
                            show: true,
                            period: 6,
                            trailLength: 0,
                            symbolSize: 4
                        },
                        lineStyle: {
                            normal: {
                                type: 'solid',
                                color: '#86f304',
                                width: 2,
                                opacity: 1,
                                curveness: 0.1
                            }
                        },
                        tooltip: {
                            show: false
                        },
                        data: LINE
                    },
                    {
                        type: 'map',
                        map: 'china',
                        label: {
                            normal: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 14
                                }
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    color: '#fff',
                                    fontSize: 16
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                borderWidth: 0.8,
                                borderColor: '#8afcdf',
                                areaColor: {
                                    type: 'linear-gradient',
                                    x: 0,
                                    y: 900,
                                    x2: 300,
                                    y2: 0,
                                    colorStops: [{
                                            offset: 0.5,
                                            color: 'rgba(57,126,130,0.4)' // 0% 处的颜色
                                        },
                                        {
                                            offset: 1,
                                            color: 'rgba(57,126,130,0.2)' // 100% 处的颜色B3F6F0
                                        }
                                    ],
                                    global: true
                                }
                            },
                            emphasis: {
                                areaColor: 'rgba(57,126,130,0.5)'
                            }
                        },
                        data: BLOCK
                    },
                ]
            }
            if (params.is3d) {
                this.mapOption.geo.itemStyle.normal.shadowOffsetX = 6
                this.mapOption.geo.itemStyle.normal.shadowOffsetY = 8
                this.mapOption.geo.itemStyle.normal.opacity = 0.5
            }
        }
    }
}

export {
    initEcharts
};