import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { RadarChart } from '@/utils/Constant'
import { Radar } from 'react-chartjs-2'
import { radarChartData } from '@/Data/Charts/ChartJsData'

const RadarChartClass = () => {
  return (
    <Col xl={6} md={12} className='box-col-12' >
      <Card className="height-equal custom-radar-chart">
        <CommonHeader title={RadarChart} /> 
        <CardBody className='radar-chartjs'>
          <Radar id="myRadarGraph" data={radarChartData} height={200} width={200}/>
        </CardBody>
      </Card>
    </Col>
  )
}

export default RadarChartClass