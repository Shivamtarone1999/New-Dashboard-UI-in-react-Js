import React from "react";
import { Row, Col, Table } from "reactstrap";

import usersImg from "../../images/usersImg.svg";
import smileImg from "../../images/smileImg.svg";
import totalSale from "../../images/total-sale.svg";
import orders from "../../images/orders.svg";
import stocksImg from "../../images/stocks.svg";
import stocksDownImg from "../../images/stocksDown.svg";

import { chartData } from "./chartsMock";

import Widget from "../../components/Widget";

import s from "./Dashboard.module.scss";
import ApexChart from "react-apexcharts";

import TableStoryList from './StoryList';
import TablePublicationList from './PublicationList';


//people
import p1 from "../../images/people/p1.png";
import p2 from "../../images/people/p2.png";
import p3 from "../../images/people/p3.png";
import p4 from "../../images/people/p4.png";
import p5 from "../../images/userAvatar.png";
import CategoryList from "../category/Category";
import { TextField } from "@material-ui/core";

// import BarChart from 'react-bar-chart';

// const data = [
//   { text: 'Man', value: 500 },
//   { text: 'Woman', value: 300 }
// ];

// const margin = { top: 20, right: 20, bottom: 30, left: 40 };

// import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

// const data2 = [{ name: 'Category 1', uv: 100, pv: 500, amt: 2400 }, { name: 'Category 2', uv: 600, pv: 2400, amt: 2400 }, { name: 'Category 3', uv: 300, pv: 2400, amt: 2400 }];



const orderValueOverride = {
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(255, 173, 1, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -9,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const convertionRateOverride = {
  series: [
    {
      data: [280, 300, 170, 200, 230, 190, 260, 100, 290, 280, 300, 250, 240],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["rgba(246, 121, 93, 0.3)"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        distributed: true,
        endingShape: "rounded",
        startingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: -8,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area = {
  series: [
    {
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'solid',
      colors: ["rgba(252, 215, 206, .25)"]
    },
    colors: ["rgba(246, 121, 93)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const area2 = {
  series: [
    {
      data: [31, 40, 28, 51, 42, 109, 100],
    },
  ],
  options: {
    stroke: {
      show: true,
      curve: "smooth",
      width: 3,
    },
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      type: 'solid',
      colors: ["rgba(255, 230, 179, .25)"]
    },
    colors: ["rgba(255, 173, 1)"],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    xaxis: {
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
      },
    },
    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    grid: {
      padding: {
        left: 5,
        right: 0,
      },
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
  },
};

const splineArea = {
  series: [
    {
      name: "Income",
      data: [31, 40, 28, 51, 42, 109, 100],
    },
    {
      name: "Outcome",
      data: [11, 32, 45, 32, 34, 52, 41],
    },
  ],
  options: {
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      colors: ["rgba(255, 205, 101, .2)", 'rgba(0,0,0,0)'],
      type: 'solid'
    },
    colors: ["#FFBF69", "#323232"],
    legend: {
      position: "top",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    yaxis: {
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
      labels: {
        style: {
          colors: [
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
            "rgba(18, 4, 0, .5)",
          ],
          fontWeight: 300,
        },
      },
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
  },
};



class Dashboard extends React.Component {
  constructor() {
    super();
    this.forceUpdate = this.forceUpdate.bind(this)
  }
  state = {
    orderValue: { ...chartData.apex.column, ...orderValueOverride },
    convertionRate: { ...chartData.apex.column, ...convertionRateOverride },
    area: { ...area },
    area2: { ...area2 },
    splineArea: { ...splineArea },
  };

  componentDidMount() {
    window.addEventListener("resize", this.forceUpdate.bind(this))
  }

  forceUpdate() {
    return this.setState({})
  }

  render() {
    return (
      <div className={s.root}>

        {/* Box date */}

        <Row>
          <Col xl={12}>
            <Widget
              title={
                <Row>
                  <Col xs={12} sm={5}>
                    <p style={{ fontWeight: 700, marginTop: 30 }}>Select Date</p>
                  </Col>
                  <Col xs={12} sm={7}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="">
                        <p style={{ fontWeight: 700 }}>From</p>
                        <form noValidate>
                          <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>
                      </div>
                      <div className="">
                        <p style={{ fontWeight: 700 }}>To</p>
                        <form noValidate>
                          <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              }

            >
            </Widget>
          </Col>
        </Row>


        {/* Box date ends */}

        <Row>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Number of Subscriber</p>}

            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>872 4</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  {/* <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>40%</p> */}
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.orderValue.series}
                    options={this.state.orderValue.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>

          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Active User</p>}

            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>2085</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  {/* <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>15%</p> */}
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.convertionRate.series}
                    options={this.state.convertionRate.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>

          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Number of Stories</p>}

            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>5000</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  {/* <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}>15%</p> */}
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.convertionRate.series}
                    options={this.state.convertionRate.options}
                    type={"bar"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>

        </Row>
        <Row>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}> Number of Publication </p>}

            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>1000</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}></p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.area.series}
                    options={this.state.area.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Number of Category</p>}

            >
              <Row className={`justify-content-between mt-3`} noGutters>
                <Col sm={8} className={"d-flex align-items-center"}>
                  <h3 className={"fw-semi-bold mb-0"}>12</h3>
                </Col>
                <Col
                  sm={4}
                  className={"d-flex align-items-center justify-content-end"}
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  <p className={"text-success mb-0"}></p>
                </Col>
              </Row>
              <Row style={{ marginBottom: -9, marginTop: -1 }}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    height={80}
                    series={this.state.area2.series}
                    options={this.state.area2.options}
                    type={"area"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={window.innerWidth > 1280 ? 2 : 4} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  {/* <img src={totalSale} alt="" style={{ paddingTop: 30 }} /> */}
                  <h4 className={"fw-semi-bold text-center pt-1 mb-0"}>No. Of Podcast</h4>

                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <p className={"fw-semi-bold pt-1 mb-0"}>4526</p>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  {/* <p className={"fw-thin text-success mb-0"}>15%</p> */}
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={2} className={`${s.dashboardBlock}`} sm={6}>
            <Widget>
              <Row
                className={`${s.row} justify-content-center align-items-center`}
              >
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center mb-2"
                  }
                >
                  <h4 className={"fw-semi-bold text-center pt-1 mb-0"}>Today's Playing</h4>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  <p className={"fw-semi-bold pt-1 mb-0"}>3240</p>
                </Col>
                <Col
                  sm={12}
                  className={"d-flex justify-content-center align-items-center"}
                >
                  {/* <h5 className={"fw-thin pt-1 mb-0"}>Orders</h5> */}
                </Col>
                <Col
                  sm={12}
                  className={
                    "d-flex justify-content-center align-items-center pt-1"
                  }
                >
                  <img src={stocksImg} alt="" className={"mr-1"} />
                  {/* <p className={"fw-thin text-danger mb-0"}>15%</p> */}
                </Col>
              </Row>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col xl={12}>
            <Widget
              title={
                <Row>
                  <Col xs={12} sm={5}>
                    <p style={{ fontWeight: 700, marginTop: 30 }}>Select Date</p>
                  </Col>
                  <Col xs={12} sm={7}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <div className="">
                        <p style={{ fontWeight: 700, }}>From</p>
                        <form noValidate>
                          <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>
                      </div>
                      <div className="">
                        <p style={{ fontWeight: 700, }}>To</p>
                        <form noValidate>
                          <TextField
                            id="date"
                            label="Date"
                            type="date"
                            defaultValue="2017-05-24"
                            InputLabelProps={{
                              shrink: true,
                            }}
                          />
                        </form>
                      </div>
                    </div>
                  </Col>
                </Row>
              }

            >
            </Widget>
          </Col>
        </Row>



        <Row>
          <Col xl={8}>
            <Widget
              title={
                <Row>
                  <Col xs={12} sm={5}>
                    <p style={{ fontWeight: 700 }}>Stories (by date)</p>
                  </Col>
                  <Col xs={12} sm={7}>
                    <div className="" />
                  </Col>
                </Row>
              }

            >
              <Row className={s.dailyLineChart}>
                <Col sm={12}>
                  <ApexChart
                    className="sparkline-chart"
                    series={this.state.splineArea.series}
                    options={this.state.splineArea.options}
                    type={"area"}
                    height={"350px"}
                  />
                </Col>
              </Row>
            </Widget>
          </Col>
          <Col xl={4}>
            <Widget
              title={<p style={{ fontWeight: 700 }}>Publications</p>}

            >
              <Row
                className={`${s.row} justify-content-center`}
                noGutters
                style={{ marginBottom: 30, marginTop: 24 }}
              >
                <ApexChart
                  className="sparkline-chart"
                  type={"donut"}
                  height={274}
                  series={chartData.apex.pie.series}
                  options={chartData.apex.pie.options}
                />
              </Row>
            </Widget>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Widget

              title={<p className={"fw-bold"}>Categories</p>}
            >

              {/* Barchart */}



            </Widget>
          </Col>
        </Row>

        {/* table 0 */}

        <Row>
          <Col sm={12}>
            <Widget
            >
              {/* Publication List */}
              <div className="Category">
                <CategoryList />
              </div>
            </Widget>
          </Col>
        </Row>


        <Row>
          <Col sm={12}>
            <Widget
            >

              {/* table 1 */}

              <div className="TableStoryList">
                <TableStoryList />
              </div>


            </Widget>
          </Col>
        </Row>

        {/* table 2 */}
        <Row>
          <Col sm={12}>
            <Widget
            >
              {/* Publication List */}
              <div className="TablePublicationList">
                <TablePublicationList />
              </div>
            </Widget>
          </Col>
        </Row>



        {/* table 2 */}

      </div>
    );
  }
}

export default Dashboard;
