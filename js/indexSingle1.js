window.addEventListener('load', function() {

// 图1：政策时间轴
(function () {
    var myChart = echarts.init(document.querySelector('.singlebar .chart1'));
    if (window._charts) window._charts['back1'] = myChart;

    var option = {
        title: {
            text: '三农领域相关政策及标准',
            left: 'center',
            textStyle: { color: 'white', fontStyle: 'italic', fontSize: 36, textBorderColor: 'yellow', textBorderWidth: 0.8 }
        },
        xAxis: { min: 0, max: 1000, show: false, type: 'value' },
        yAxis: { min: 0, max: 1000, show: false, type: 'value' },
        legend: {
            left: 'right', top: 'bottom', orient: 'vertical', selectedMode: 'single',
            textStyle: { color: 'white', fontSize: 18 },
            data: [{ name: '政策规划' }, { name: '相关标准' }, { name: '法律法规' }]
        },
        tooltip: { enterable: true, textStyle: { color: '#000', decoration: 'none' } },
        series: [
            {
                name: '政策规划',
                type: 'graph',
                draggable: false,
                coordinateSystem: 'cartesian2d',
                itemStyle: { color: '#99cc99' },
                label: { show: true, position: 'right', fontSize: 15 },
                data: [
                    {
                        name: '2024年', value: [250, 950], symbolSize: 110,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于学习运用千万工程经验有力有效推进乡村全面振兴的意见',
                        value: [650, 950], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:460px;border-radius:5px;background:#fff">' +
                                    '印发时间：2024年2月3日<br>' +
                                    '政策内容：学习运用千万工程经验，有力有效推进乡村全面振兴，' +
                                    '以加快农业农村现代化更好推进中国式现代化建设。' +
                                    '确保国家粮食安全，确保不发生规模性返贫。' +
                                    '</div>';
                            }
                        }
                    },
                    {
                        name: '2023年', value: [250, 780], symbolSize: 100,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于做好2023年全面推进乡村振兴重点工作的意见',
                        value: [650, 780], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:460px;border-radius:5px;background:#fff">' +
                                    '印发时间：2023年2月13日<br>' +
                                    '政策内容：坚持把解决好三农问题作为全党工作重中之重，' +
                                    '推动乡村振兴取得新进展，农业农村现代化迈出新步伐，' +
                                    '牢牢守住保障国家粮食安全和不发生规模性返贫两条底线。' +
                                    '</div>';
                            }
                        }
                    },
                    {
                        name: '2022年', value: [250, 650], symbolSize: 80,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于做好2022年全面推进乡村振兴重点工作的意见',
                        value: [650, 700], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:410px;border-radius:5px;background:#fff">' +
                                    '印发时间：2022年2月22日<br>' +
                                    '政策内容：把全面推进乡村振兴作为实现中华民族伟大复兴的一项重大任务，' +
                                    '举全党全社会之力加快农业农村现代化，让广大农民过上更加美好的生活。' +
                                    '</div>';
                            }
                        }
                    },
                    {
                        name: '2021年', value: [250, 500], symbolSize: 60,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于全面推进乡村振兴加快农业农村现代化的意见',
                        value: [650, 550], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:380px;border-radius:5px;background:#fff">' +
                                    '发布日期：2021年2月21日<br>' +
                                    '文件内容：把全面推进乡村振兴作为实现中华民族伟大复兴的一项重大任务，' +
                                    '举全党全社会之力加快农业农村现代化，让广大农民过上更加美好的生活。' +
                                    '</div>';
                            }
                        }
                    },
                    {
                        name: '2020年', value: [250, 350], symbolSize: 40,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于扩大农业农村有效投资加快补上三农领域突出短板的意见',
                        value: [650, 400], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:430px;border-radius:5px;background:#fff">' +
                                    '发布日期：2020年7月<br>' +
                                    '发布单位：中央农办、农业农村部、国家发展改革委、财政部等部门<br>' +
                                    '文件内容：农业是国之根本，力求在最短时间内补上三农领域突出的短板，完成我国农业农村发展的目标。' +
                                    '</div>';
                            }
                        }
                    },
                    {
                        name: '2019年', value: [250, 200], symbolSize: 30,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于坚持农业农村优先发展做好三农工作的若干意见',
                        value: [650, 230], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:345px;border-radius:5px;background:#fff">' +
                                    '发布日期：2019年1月3日<br>' +
                                    '文件内容：发挥三农压舱石作用，为有效应对各种风险挑战赢得主动，' +
                                    '为确保经济持续健康发展和社会大局稳定奠定基础。' +
                                    '</div>';
                            }
                        }
                    },
                    {
                        name: '2016年', value: [250, 50], symbolSize: 30,
                        label: { position: 'left', offset: [-30, 0] }
                    },
                    {
                        name: '关于加大改革创新力度加快农业现代化建设的若干意见',
                        value: [650, 50], symbolSize: 15,
                        tooltip: {
                            show: true, padding: 0,
                            formatter: function() {
                                return '<div style="padding:8px;width:350px;border-radius:5px;background:#fff">' +
                                    '发布日期：2016年1月28日<br>' +
                                    '发布单位：中华人民共和国国务院<br>' +
                                    '意见内容：建立重要农产品供给保障机制，努力夯实现代农业物质基础；' +
                                    '健全农业支持保护制度，不断加大强农惠农富农政策力度。' +
                                    '</div>';
                            }
                        }
                    }
                ]
            },
            {
                name: '政策规划',
                type: 'effectScatter',
                coordinateSystem: 'cartesian2d',
                silent: true,
                rippleEffect: { brushType: 'stroke', scale: 1.7 },
                itemStyle: { color: '#99cc99' },
                data: [
                    { value: [250, 950], symbolSize: 110 },
                    { value: [250, 780], symbolSize: 100 },
                    { value: [250, 650], symbolSize: 80 },
                    { value: [250, 500], symbolSize: 60 },
                    { value: [250, 350], symbolSize: 40 },
                    { value: [250, 200], symbolSize: 30 },
                    { value: [250, 50],  symbolSize: 30 }
                ]
            },
            {
                name: '政策规划',
                type: 'lines',
                coordinateSystem: 'cartesian2d',
                zlevel: 2,
                effect: { show: true, symbolSize: 10, symbol: 'triangle' },
                tooltip: { show: false },
                lineStyle: {
                    curveness: 0.1, opacity: 0.2, width: 2,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1,
                        [{ offset: 0, color: '#58B3CC' }, { offset: 1, color: '#F58158' }], false)
                },
                data: [
                    { coords: [[250,950],[250,780]], lineStyle: { curveness: 0 } },
                    { coords: [[250,780],[250,650]], lineStyle: { curveness: 0 } },
                    { coords: [[250,650],[250,500]], lineStyle: { curveness: 0 } },
                    { coords: [[250,500],[250,350]], lineStyle: { curveness: 0 } },
                    { coords: [[250,350],[250,200]], lineStyle: { curveness: 0 } },
                    { coords: [[250,200],[250,50]],  lineStyle: { curveness: 0 } },
                    { coords: [[250,950],[650,950]] },
                    { coords: [[250,780],[650,780]] },
                    { coords: [[250,650],[650,700]] },
                    { coords: [[250,500],[650,550]] },
                    { coords: [[250,350],[650,400]] },
                    { coords: [[250,200],[650,230]] },
                    { coords: [[250,50], [650,50]]  }
                ]
            }
        ],
        animationDuration: 5000,
        animationDelay: 500
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize(); });
})();


// 图2：恩格尔系数
(function () {
    var myChart = echarts.init(document.querySelector('.singlebar .chart2'));
    if (window._charts) window._charts['back2'] = myChart;

    var option = {
        tooltip: {
            trigger: 'axis',
            formatter: function(params) {
                var res = params[0].name;
                for (var i = 0; i < params.length; i++) {
                    res += '<br/>' + params[i].seriesName + ' : ' + (params[i].value || '-') + (params[i].seriesType === 'line' ? '%' : '%');
                }
                return res;
            }
        },
        grid: { top: '10%', containLabel: true },
        legend: {
            top: '30px',
            data: ['居民恩格尔系数(%)', '城镇居民恩格尔系数(%)', '农村居民恩格尔系数(%)'],
            textStyle: { color: 'white' }
        },
        xAxis: [{
            type: 'category',
            axisTick: { alignWithLabel: true },
            data: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]
        }],
        dataZoom: [
            { type: 'slider', xAxisIndex: 0, start: 0, end: 100 },
            { type: 'slider', yAxisIndex: 0, start: 0, end: 100 },
            { type: 'inside', xAxisIndex: 0, start: 0, end: 100 },
            { type: 'inside', yAxisIndex: 0, start: 0, end: 100 }
        ],
        yAxis: [
            { type: 'value', name: '百分比', min: 0, position: 'left', axisLabel: { formatter: '{value} %' } },
            { type: 'value', name: '对比', min: 0, position: 'right', axisLabel: { formatter: '{value} %' } }
        ],
        series: [
            {
                name: '居民恩格尔系数(%)', type: 'line',
                lineStyle: { width: 3, shadowColor: 'rgba(0,0,0,0.4)', shadowBlur: 10, shadowOffsetY: 10 },
                label: { show: true, position: 'top', fontSize: 11, color: '#ccc', textBorderWidth: 0 },
                data: [29.3, 29.8, 30.1, 30.5, 29.8, 30.2, 28.2, 28.4, 29.3, 30.1, 30.6, 31, 31.2, 33, 33.6]
            },
            {
                name: '城镇居民恩格尔系数(%)', type: 'bar', yAxisIndex: 1,
                label: { show: true, position: 'top', fontSize: 11, color: '#ccc', textBorderWidth: 0 },
                data: [28.3, 28.8, 29.2, 29.5, 28.6, 29.2, 27.6, 27.7, 28.6, 29.3, 29.7, 30, 30.1, 32, 32.3]
            },
            {
                name: '农村居民恩格尔系数(%)', type: 'bar', yAxisIndex: 1,
                label: { show: true, position: 'top', fontSize: 11, color: '#ccc', textBorderWidth: 0 },
                data: [31.8, 32.3, 32.8, 33, 32.7, 32.7, 30, 30.1, 31.2, 32.2, 33, 33.6, 34.1, 35.9, 37.1]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize(); });
})();

// 图3：农民教育水平
(function () {
    var myChart = echarts.init(document.querySelector('.singlebar .chart3'));
    if (window._charts) window._charts['back3'] = myChart;

    var option = {
        grid: { top: '15%', containLabel: true },
        tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
        toolbox: {
            feature: {
                dataView: { show: true, readOnly: false },
                magicType: { show: true, type: ['line', 'bar'] },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        legend: {
            top: '20px',
            data: ['农村普通高中招生数(万人)', '农村受教育普及率'],
            textStyle: { color: 'white' }
        },
        xAxis: [{
            type: 'category',
            data: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011]
        }],
        yAxis: [
            { type: 'value', name: '万人', interval: 50, axisLabel: { formatter: '{value}' } },
            { type: 'value', name: '百分比', interval: 5, axisLabel: { formatter: '{value} %' } }
        ],
        series: [
            {
                name: '农村普通高中招生数(万人)', type: 'bar',
                label: { show: true, position: 'top', fontSize: 11, color: '#ccc', textBorderWidth: 0 },
                data: [900.0, 880.0, 862.3, 847.5, 774.9, 776.4, 739.5, 592.7, 600.1, 502.9, 596.6, 596.6, 622.7, 644.6, 450.8]
            },
            {
                name: '农村受教育普及率', type: 'line', yAxisIndex: 1,
                label: { show: true, position: 'top', fontSize: 11, color: '#ccc', textBorderWidth: 0 },
                data: [72.0, 70.5, 68.8, 67.0, 60.2, 54.3, 54.5, 56.3, 47.2, 42.3, 30.4, 32.0, 31.5, 20.0, 26.2]
            }
        ]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize(); });
})();

// 图4：农村网络普及
(function () {
    var myChart = echarts.init(document.querySelector('.singlebar .chart4'));
    if (window._charts) window._charts['back4'] = myChart;

    var option = {
        backgroundColor: 'rgba(3,29,51,0.45)',
        tooltip: {
            show: true, trigger: 'axis',
            backgroundColor: 'RGBA(0,49,85,1)',
            borderColor: 'rgba(0,151,251,1)',
            borderWidth: 1,
            textStyle: { color: '#BCE9FC', fontSize: 16 }
        },
        grid: { top: '20%', width: '80%', bottom: '5%', containLabel: true },
        xAxis: {
            type: 'category',
            boundaryGap: true,
            data: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011],
            axisLabel: { interval: 0, textStyle: { color: '#65D5FF', fontSize: 14 } },
            axisTick: { show: false },
            axisLine: { lineStyle: { color: 'rgba(77,128,254,0.2)' } },
            splitLine: { show: true, lineStyle: { color: 'rgba(77,128,254,0.2)' } }
        },
        yAxis: [{
            type: 'value',
            axisLabel: { textStyle: { color: '#65D5FF', fontSize: 14 } },
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: true, lineStyle: { color: 'rgba(77,128,254,0.2)' } }
        }],
        series: [{
            name: '农村网络接入用户(万户)',
            type: 'pictorialBar',
            barWidth: '60%',
            symbol: 'path://M12.000,-0.000 C12.000,-0.000 16.074,60.121 22.731,60.121 C26.173,60.121 -3.234,60.121 0.511,60.121 C7.072,60.121 12.000,-0.000 12.000,-0.000 Z',
            itemStyle: {
                color: {
                    type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
                    colorStops: [
                        { offset: 0, color: 'rgba(0,151,251,1)' },
                        { offset: 1, color: 'rgba(0,34,66,0.2)' }
                    ]
                }
            },
            data: [21500, 20000, 17823.5, 15770.48, 14189.65, 13477.33, 11741.67, 9377.3, 7454.03, 6398.37, 4873.71, 4737.27, 4075.9, 3308.8, 2475.7]
        }]
    };

    myChart.setOption(option);
    window.addEventListener('resize', function() { myChart.resize(); });
})();

}); // end window.addEventListener('load')
