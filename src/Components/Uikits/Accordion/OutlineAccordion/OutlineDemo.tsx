import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { outlineData } from "@/Data/Uikits/Accordion/AccordionData";

const OutlineDemo = () => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => {
    open === id ? setOpen("") : setOpen(id);
  };
  return (
    <Accordion open={open} toggle={toggle} className='dark-accordion accordion-wrapper'>
      {outlineData &&
        outlineData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.id}>
              {item.head}
              <FeatherIcons iconName={open === item.id ? "ChevronUp" : "ChevronDown"} className='svg-color' />
            </AccordionHeader>
            <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default OutlineDemo;
