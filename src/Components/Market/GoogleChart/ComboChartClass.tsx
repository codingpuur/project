import { Card, CardBody, Col } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import Chart from 'react-google-charts'
import { ComboChart } from '@/utils/Constant'
import { comboChartClassData, comboChartClassOption } from '@/Data/Charts/GoogleChartData'

const ComboChartClass = () => {
  return (
    <Col sm={12}>
      <Card>
        <CommonHeader title={ComboChart} headClass='pb-0'/>
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={"100%"}
              height={"300px"}
              chartType={"ComboChart"}
              loader={<div>{"Loading Chart"}</div>}
              data={comboChartClassData}
              options={comboChartClassOption}
              rootProps={{
                "data-testid": "1",
              }}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default ComboChartClass