import React, { Component } from "react";
import Chart from "react-apexcharts";

class BrowserData extends Component {
    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "broser_data",
                    type: 'donut'
                },
                donut: {
                    size: '60%',
                    labels: {
                        show: true,
                        name: ['Apple', 'Mango', 'Orange', 'Watermelon', 'Guava']
                    }
                },
            },
            series: [44, 55, 41, 17, 15],
        };
    }

    render() {
        return (
            <Chart
                options={this.state.options}
                series={this.state.series}
                type="donut"
                width="500"
                height="500"
            />
        );
    }
}

export default BrowserData;