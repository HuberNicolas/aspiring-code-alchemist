import { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
function SkillChart() {
    const [chartData, setChartData] = useState({
        series: [75],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
                toolbar: {
                    show: true
                }
            },
            plotOptions: {
                radialBar: {
                    startAngle: -0,
                    endAngle: 360,
                    hollow: {
                        margin: 0,
                        size: '80%',
                        image: undefined,
                        imageOffsetX: 0,
                        imageOffsetY: 0,
                        position: 'front',
                        dropShadow: {
                            enabled: true,
                            top: 3,
                            left: 0,
                            blur: 4,
                            opacity: 0.
                        }
                    },
                    track: {
                        strokeWidth: '67%',// margin is in pixels
                        dropShadow: {
                            enabled: true,
                            top: -3,
                            left: 0,
                            blur: 4,
                            opacity: 0.35
                        }
                    },
                    dataLabels: {
                        show: true,
                        name: {
                            offsetY: -10,
                            show: true,
                            color: '#fff',
                            fontSize: '17px'
                        },
                        value: {
                            formatter: function (val) {
                                return `${val} / 100`; // Modify the formatter to include "/ 100"
                            },
                            color: '#fff',
                            fontSize: '36px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: 'solid',
                colors: ['#009688'],
            },
            stroke: {
                lineCap: 'round'
            },
            labels: ['PHP'],
        }
    });

    return (
        <>
            <div id="card">
                <div id="chart">
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="radialBar"
                        height={chartData.options.chart.height}
                    />
                </div>
            </div>
        </>
    )
}

export default SkillChart
