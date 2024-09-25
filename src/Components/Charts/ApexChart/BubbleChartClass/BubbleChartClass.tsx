import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import ReactApexChart from 'react-apexcharts'
import { BubbleChart } from '@/utils/Constant'
import { apex3DbubbleCharts } from '@/Data/Charts/ApexChartsData'

const BubbleChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-12">
      <Card>
        <CommonHeader title={BubbleChart} headClass='pb-0' />
        <CardBody>
          <div id="chart-bubble">
            <ReactApexChart options={apex3DbubbleCharts} series={apex3DbubbleCharts.series} type="bubble" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default BubbleChartClass