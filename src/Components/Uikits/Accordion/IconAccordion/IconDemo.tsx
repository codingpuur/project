import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import FeatherIcons from "@/utils/CommonSvgIcon/FeatherIcons";
import { iconDemoData } from "@/Data/Uikits/Accordion/AccordionData";

const IconDemo = () => {
  const [open, setOpen] = useState("");
  const toggle = (id: string) => (id !== open ? setOpen(id) : setOpen(""));

  return (
    <Accordion open={open} toggle={toggle}>
      {iconDemoData &&
        iconDemoData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.id}>
              <FeatherIcons iconName={item.icon} />
              {item.head}
              <FeatherIcons iconName={open === item.id ? "ChevronUp" : "ChevronDown"} className='svg-color' />
            </AccordionHeader>
            <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default IconDemo;
