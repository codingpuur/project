import Link from "next/link";
import { navLinkList } from "@/Data/Layout/ThemeCustomizer/ThemeCustomizerData";

const Navlinks = () => {
  return (
    <>
      {navLinkList &&
        navLinkList.map((item, index) => (
          <Link
            key={index}
            className="nav-link"
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <i className={`${item.icon}`}></i>
            </div>
            <span>{item.name}</span>
          </Link>
        ))}
    </>
  );
};

export default Navlinks;
