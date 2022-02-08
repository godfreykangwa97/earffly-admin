import React, { Component } from "react";
import Chart from "react-apexcharts";

class BigChart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar",
                    type: 'bar'
                },
                plotOptions: {
                    bar: {
                        horizontal: false
                    }
                },
                stacked: true,
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
                }
            },
            series: [{
                data: [{
                    x: 'category A',
                    y: 10
                }, {
                    x: 'category B',
                    y: 18
                }, {
                    x: 'category C',
                    y: 13
                }]

            }]
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="area"
                width="100%"
                height="250"
            />
        );
    }
}

export default BigChart;