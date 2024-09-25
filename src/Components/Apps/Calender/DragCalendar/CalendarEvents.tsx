import { Col,Label } from "reactstrap";
import { DraggableEvents, RemoveAfterDrop } from "@/utils/Constant";
import { calendarInitialState } from "@/Data/Apps/Calender/CalenderData";

const CalendarEvents = () => {
  return (
    <Col xxl={3} xl={4} className='box-col-30'>
      <div id='external-events' className='calendar-default'>
        <h3>{DraggableEvents}</h3>
        <div className='external-events-list'>
          {calendarInitialState.events.map((event, index) => (
            <div className={`fc-event fc-h-event fc-daygrid-event fc-daygrid-block-event p-md-3 p-2 text-sm mb-3 border-0 bg-primary`} title={event.title} key={index}>
              <div className='fc-event-main'>
                <i className={`me-2 ${event.icon}`}></i>
                {event.title}
              </div>
            </div>
          ))}
        </div>
        <p>
          <input className='checkbox_animated' id='drop-remove' type='checkbox' value={""} />
          <Label htmlFor='drop-remove' className='m-0'>
            {RemoveAfterDrop}
          </Label>
        </p>
      </div>
    </Col>
  );
};

export default CalendarEvents;
