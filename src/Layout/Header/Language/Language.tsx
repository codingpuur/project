import { languageData, languageDataType } from "@/Data/Layout/Header/LanguageData";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";

const Language = () => {
  const [open, setOpen] = useState(false);
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage;
  const router = useRouter();
  const Language = Cookies.get("i18next");
  const [selectedLang, setSelectedLang] = useState<any>({});
  const [lang, setLang] = useState("EN");
  const [flag, setFlag] = useState("us");
  const changeLanguage = (lng: languageDataType) => {
    setLang(lng.languageParameter);
    setFlag(lng.languageIconClassName);
    i18n.changeLanguage(lng.languageParameter);
    setOpen(false);
  };
  const LanguageSelection = (open: boolean) => {
    if (open) {
      setOpen(!open);
    } else {
      setOpen(!open);
    }
  };
  useEffect(() => {
    const defaultLanguage = languageData.find((data) => data.languageParameter == currentLanguage);
    setSelectedLang(defaultLanguage);
    router.refresh();
  }, []);

  useEffect(() => {
    if (lang === "ae") {
      document.body.classList.add("rtl");
      document.body.classList.remove("ltr");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "rtl";
    } else {
      document.body.classList.add("ltr");
      document.body.classList.remove("rtl");
      document.body.classList.remove("box-layout");
      document.documentElement.dir = "ltr";
    }
  }, [lang]);

  return (
    <li className='language-nav'>
      <div className={`translate_wrapper ${open ? "active" : ""}`}>
        <div className='current_lang'>
          <div className='lang' onClick={() => LanguageSelection(open)}>
            <i className={`flag-icon fi fi-${flag}`}></i>
            <span className='lang-txt'>{lang}</span>
          </div>
        </div>
        <div className={`more_lang ${open ? "active" : ""}`}>
          {languageData.map((data, index) => (
            <div className='lang selected' key={index} onClick={() => changeLanguage(data)}>
              <i className={`flag-icon fi fi-${data.languageIconClassName}`}></i>
              <span className='lang-txt'>
                {data.languageName}
                {data.subTitle && <span> ({data.subTitle})</span>}
              </span>
            </div>
          ))}
        </div>
      </div>
    </li>
  );
};

export default Language;
