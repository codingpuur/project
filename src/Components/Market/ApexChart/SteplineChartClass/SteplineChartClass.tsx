import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import ReactApexChart from 'react-apexcharts'
import { SteplineChart } from '@/utils/Constant'
import { apexSteplineChart } from '@/Data/Charts/ApexChartsData'

const SteplineChartClass = ({data}:any) => {
  return (
    <Col sm={12} xl={6} className="box-col-12">
      <Card>
        <CommonHeader title={SteplineChart} headClass="pb-0"/>
        <CardBody>
          <div id="stepline">
            <ReactApexChart options={apexSteplineChart} series={apexSteplineChart.series} type="line" height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default SteplineChartClass