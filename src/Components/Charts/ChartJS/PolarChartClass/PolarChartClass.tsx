import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { PolarChart } from '@/utils/Constant'
import { PolarArea } from 'react-chartjs-2'
import { polarData, polarOption } from '@/Data/Charts/ChartJsData'

const PolarChartClass = () => {
  return (
    <Col xl={6} md={12} className='box-col-12'  >
      <Card>
        <CommonHeader title={PolarChart} headClass='pb-0'/>
        <CardBody className="chart-block-container radar-chartjs">
          <PolarArea data={polarData} options={polarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  )
}

export default PolarChartClass