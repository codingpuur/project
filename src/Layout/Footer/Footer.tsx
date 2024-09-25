import { Col, Container, Row } from 'reactstrap'
import SVG from '../../utils/CommonSvgIcon/SVG'
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  const darkFooter = pathname === `/pagelayout/footerdark` ? "footer-dark" : "";
  const fixedFooter = pathname === `/pagelayout/footerfixed` ? "footer-fix" : "";
  return (
    <footer className={`footer ${darkFooter} ${fixedFooter}`}>
        <Container fluid >
            <Row>
                <Col md={6} className="footer-copyright">
                    <p className="mb-0">Copyright 2024 © Cion theme by pixelstrap.</p>
                </Col> 
                <Col md={6}>
                    <p className="float-end mb-0">Hand crafted &amp; made with
                        <SVG iconId='heart' className="footer-icon" />
                    </p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer