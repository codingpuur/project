import { useState } from "react";
import { flushData } from "@/Data/Uikits/Accordion/AccordionData";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

const FlushDemo = () => {
  const [open, setOpen] = useState("flush1");

  const toggle = (id: string) => (open === id ? setOpen("") : setOpen(id));
  return (
    <Accordion open={open} toggle={toggle} className='dark-accordion' flush={true}>
      {flushData &&
        flushData.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionHeader targetId={item.id}>{item.head}</AccordionHeader>
            <AccordionBody accordionId={item.id}>{item.text}</AccordionBody>
          </AccordionItem>
        ))}
    </Accordion>
  );
};

export default FlushDemo;
