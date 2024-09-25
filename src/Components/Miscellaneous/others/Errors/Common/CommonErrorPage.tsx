import { Col, Container } from 'reactstrap'
import Link from 'next/link'
import Image from 'next/image'
import { ImagePath } from '@/Constant'
import { BackToHomePage } from '@/utils/Constant'
import { ErrorPropsType } from '@/Types/MiscellaneousTypes'

const CommonErrorPage:React.FC<ErrorPropsType> = ({ tittle, tittleClassName, BtnClassName}) => {
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <Image
            className="img-100"
            src={`${ImagePath}/other-images/sad.png`}
            alt="Error"
            height={100}
            width={100}
          />
          <div className="error-heading">
            <h2 className={`headline ${tittleClassName}`}>{tittle}</h2>
          </div>
          <Col md={8} className="offset-md-2">
            <p className="sub-content">
              The page you are attempting to reach is currently not available.
              This may be because the page does not exist or has been moved.
            </p>
          </Col>
          <div>
            <Link
              className={`btn  ${BtnClassName} btn-lg`}
              href={`/dashboards/shoppingplace`}
            >
              {BackToHomePage}
            </Link>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default CommonErrorPage