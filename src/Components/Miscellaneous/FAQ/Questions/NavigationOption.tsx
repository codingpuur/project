import Link from "next/link";
import { askQuestionData } from "@/Data/FAQ/FAQData";
import { AskOurCommunity, Contactus, Href } from "@/utils/Constant";
import { Mail, MessageCircle } from "react-feather";

const NavigationOption = () => {
  return (
    <div className='navigation-option'>
      <ul>
        {askQuestionData.map((item, i) => (
          <li key={i}>
            <Link href={Href}>
              {item.icon}
              {item.title}
            </Link>
            <span className={item.class}>{item.val}</span>
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        <li>
          <Link href={Href}>
            <MessageCircle />
            {AskOurCommunity}
          </Link>
        </li>
        <li>
          <Link href={Href}>
            <Mail />
            {Contactus}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationOption;
