import { Href } from '@/utils/Constant'
import { emailSidbar } from '@/Data/Apps/Email/EmailData'
import { Badge } from 'reactstrap'
import Link from 'next/link'

const DynamicEmailSideBar = () => {
  return (
    <>
      {emailSidbar &&
        emailSidbar.map((item,index) => (
          <li key={index}>
            {!item.line ? (
              <Link href={Href}>
                <span className="title text-uppercase">
                  <i className={item.className}></i>
                  {item.title}
                </span>
                <Badge color='' className="pull-right email-badge">
                  {item.badge && `(${item.badge})`}
                </Badge>
              </Link>
            ) : (
              item.line
            )}
          </li>
        ))}
    </>
  )
}

export default DynamicEmailSideBar