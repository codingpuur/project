import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { AreaSpalineChart } from '@/utils/Constant'
import { areaSpaline } from '@/Data/Charts/ApexChartsData'

const AreaSpalineChartClass = ({data}:any) => {
  return (
    <Col sm={12} xl={6} className='box-col-6'>
        <Card>
          <CommonHeader title={AreaSpalineChart} headClass='pb-0'/>
          <CardBody>
            <div id='basic-apex'>
              <ReactApexChart options={areaSpaline} series={areaSpaline.series} height="350" type="area" />
            </div>
          </CardBody>
        </Card>
    </Col>
  )
}

export default AreaSpalineChartClass