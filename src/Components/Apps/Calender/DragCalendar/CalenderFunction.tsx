import { EventClickArg } from "@/Types/Apps/CalanderTypes";
import Swal from "sweetalert2";


export const calenderEventClick = (eventClick:EventClickArg) => {
    Swal.fire({
      title: eventClick.event.title,
      html: `
      <div className="table-responsive">
            <table className="table">
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td><strong>${eventClick.event.title}</strong></td>
                    </tr>
                    <tr>
                        <td>Start Time</td>
                        <td><strong>${eventClick.event.start}</strong></td>
                    </tr>
                </tbody>
            </table>
      </div>            
        `,
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Remove Event',
      cancelButtonText: 'Close',
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove();
        Swal.fire('Deleted!', 'Your Event has been deleted.', 'success');
      }
    });
  };