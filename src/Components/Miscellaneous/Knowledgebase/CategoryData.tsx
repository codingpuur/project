import { Badge, Card, CardBody, Col, Row } from 'reactstrap'
import CommonHeader from '@/Common/CommonHeader'
import { Archive, ArrowRight, FileText } from 'react-feather'
import { BrowseArticles, Href, knowledgearticl } from '@/utils/Constant'
import { knowledgeBaseData } from '@/Data/FAQ/FAQData'
import Link from 'next/link'

const CategoryData = () => {
  return (
    <Col sm={12}>
      <div className="header-faq">
        <h3 className="mb-0">{knowledgearticl}</h3>
      </div>
      <Row>
        <Col sm={12}>
          <Card>
            <CommonHeader title={BrowseArticles} />
            <CardBody>
              <Row className="browse">
                {knowledgeBaseData.map((data) => (
                  <Col xl={4} md={6} key={data.id}>
                    <div className="browse-articles">
                      <h4> <span><Archive /></span> {data.title}</h4>
                      <ul>
                        {data.knowledgeList &&
                          data.knowledgeList.map((item, index2) => (
                            <li key={index2}>
                              <Link className={!item.fileTextIcon ? 'font-primary f-w-600' : ""} href={Href}>{item.fileTextIcon ? (<span><FileText /></span>) : (<span><ArrowRight /></span>)}
                                <span>{item.text}</span>
                                {item.badge ? (<Badge color='primary' className="pull-right">{item.badge}</Badge>) : (" ")}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </Col>
                ))}
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Col>
  )
}

export default CategoryData