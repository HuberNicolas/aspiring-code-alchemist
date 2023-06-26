import {useState} from 'react';
import ReactApexChart from 'react-apexcharts';

const SkillChart = ({ percentage, label }) => {
    const getColor = (percentage) => {
        return '#FAD000FF';
    };


    const [chartData, setChartData] = useState({
        series: [percentage],
        options: {
            chart: {
                height: 250,
                type: 'radialBar',
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: true,
                    easing: 'easeout',
                    speed: (Math.random()+1)*10000,
                    animateGradually: {
                        enabled: true,
                        delay: 15000
                    },
                    dynamicAnimation: {
                        enabled: true,
                        speed: 350
                    }
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
                            opacity: 0
                        }
                    },
                    track: {
                        strokeWidth: '67%', // margin is in pixels
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
                            fontSize: '24px',
                            show: true,
                        }
                    }
                }
            },
            fill: {
                type: 'solid',
                colors: [getColor(percentage)],
            },
            stroke: {
                lineCap: 'round'
            },
            labels: [label],
        }
    });

    return (
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
    );
};

export default SkillChart;
