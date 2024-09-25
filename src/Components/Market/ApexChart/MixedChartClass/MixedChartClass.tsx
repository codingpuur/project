import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { MixedChart } from '@/utils/Constant'
import ReactApexChart from 'react-apexcharts'
import { apexMixedCharts } from '@/Data/Charts/ApexChartsData'

const MixedChartClass = () => {
  return (
    <Col sm={12} xl={12} className="box-col-12">
      <Card>
        <CommonHeader title={MixedChart} headClass="pb-0"/>
        <CardBody>
          <div id="mixedchart">
            <ReactApexChart options={apexMixedCharts} series={apexMixedCharts.series} type="line" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default MixedChartClass