import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { Elementswebdesign, SimpleAccordionText, SimpleAccordionText1, SimpleAccordionText2, Usewebdesign, Webdesignersdo } from "@/utils/Constant";

const SimpleDemo = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };
  return (
    <Accordion open={open} toggle={toggle} className='dark-accordion'>
      <AccordionItem>
        <AccordionHeader targetId='1' className='bg-light-primary font-primary'>
          {Webdesignersdo}
          <FeatherIcons iconName={open === "1" ? "ChevronUp" : "ChevronDown"} className='svg-color' />
        </AccordionHeader>
        <AccordionBody accordionId='1'>{SimpleAccordionText}</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='2' className='bg-light-primary font-primary'>
          {Usewebdesign}
          <FeatherIcons iconName={open === "2" ? "ChevronUp" : "ChevronDown"} className='svg-color' />
        </AccordionHeader>
        <AccordionBody accordionId='2'>{SimpleAccordionText1}</AccordionBody>
      </AccordionItem>
      <AccordionItem>
        <AccordionHeader targetId='3' className='bg-light-primary font-primary'>
          {Elementswebdesign}
          <FeatherIcons iconName={open === "3" ? "ChevronUp" : "ChevronDown"} className='svg-color' />
        </AccordionHeader>
        <AccordionBody accordionId='3'>{SimpleAccordionText2}</AccordionBody>
      </AccordionItem>
    </Accordion>
  );
};

export default SimpleDemo;
