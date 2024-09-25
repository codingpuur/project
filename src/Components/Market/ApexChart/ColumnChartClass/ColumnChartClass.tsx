import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import ReactApexChart from 'react-apexcharts'
import { ColumnChart } from '@/utils/Constant'
import { apexColumnChartsone } from '@/Data/Charts/ApexChartsData'

const ColumnChartClass = () => {
  return (
    <Col sm={12} xl={6} className="box-col-6">
      <Card>
        <CommonHeader title={ColumnChart} headClass='pb-0'/>
        <CardBody>
          <div id="column-chart">
            <ReactApexChart options={apexColumnChartsone} series={apexColumnChartsone.series} type="bar" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ColumnChartClass