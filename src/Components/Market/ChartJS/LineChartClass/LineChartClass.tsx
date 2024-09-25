import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { LineChart } from '@/utils/Constant'
import { Line } from 'react-chartjs-2'
import { lineChartData, lineChartOptions } from '@/Data/Charts/ChartJsData'

const LineChartClass = () => {
  return (
    <Col xl={6} md={12} className='box-col-12' >
      <Card>
        <CommonHeader title={LineChart} headClass='pb-0'/>
        <CardBody className="chart-block">
          <Line data={lineChartData} options={lineChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default LineChartClass