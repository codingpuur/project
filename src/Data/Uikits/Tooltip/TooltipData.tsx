import { HtmlTooltipData2, HtmlTooltipData3, HtmlTooltipData4 } from "@/utils/Constant";

export const colorTooltipData = [
    {
        class: 'secondary',
        text: 'Secondary'
    },
    {
        class: 'success',
        text: 'Success'
    },
    {
        class: 'warning',
        text: 'Warning'
    },
    {
        class: 'danger',
        text: 'Danger'
    }
]

interface TooltipPositionType {
    class: string;
    text: string;
    tooltip: string;
    position: "right" | "bottom" | "left";
}

export const tooltipPosition:TooltipPositionType[] = [
    {
        class: 'secondary',
        text: 'Tooltip on right',
        tooltip: 'Tooltip on right',
        position: 'right'
    },
    {
        class: 'success',
        text: 'Tooltip on bottom',
        tooltip: 'Tooltip on bottom',
        position: 'bottom'
    },
    {
        class: 'warning',
        text: 'Tooltip on left',
        tooltip: 'Tooltip on left',
        position: 'left'
    }
  ]

export const htmlTooltipData = [
    {
        class: 'warning',
        text: 'Last Warning',
        tooltip: <div dangerouslySetInnerHTML={{__html:HtmlTooltipData2}} />,
    },
    {
        class: 'danger',
        text: "It's Danger",
        tooltip: <div dangerouslySetInnerHTML={{__html:HtmlTooltipData3}} />,
    },
    {
        class: 'info',
        text: 'Coming soon',
        tooltip: <div dangerouslySetInnerHTML={{__html:HtmlTooltipData4}} />,
    }
]

export const flippedtooltipData = [
    {
        class: 'btn-outline-secondary',
        text: 'Tooltip Secondary',
        tooltip: 'Tooltip Secondary'
    },
    {
        class: 'btn-outline-success',
        text: 'Tooltip Success',
        tooltip: 'Tooltip Success'
    },
    {
        class: 'btn-outline-info',
        text: 'Tooltip Info',
        tooltip: 'Tooltip Info'
    }
]

export const BasicTooltipData = [
    {
      text: "Use the ",
      code: "data-bs-title",
    },
    {
      text: " to change tooltip title and ",
      code: "data-bs-toggle",
    },
    {
      text: " to add tooltip attribute.",
    },
  ];

export const ColoredTooltipTopData = [
    {
      text: "Use the ",
      code: "btn- *",
    },
    {
      text: " to change dark background color and ",
      code: "data-bs-placement='*' ",
    },
    {
      text: "to tooltip positions change.",
    },
  ];


  export const FilledtooltipTopData = [
    {
      text: "Tooltip in hover effect through fill dark color.",
      code: "[.btn-outline-*]",
    },
    {
      text: ". and",
      code: "data-bs-title ",
    },
    {
      text: "to the content under the HTML Tag.",
    },
  ];
  
  export const HtmlTooltipTopData = [
    {
      text: "Use the ",
      code: "bg-*-light",
    },
    {
      text: " to change light background color and ",
      code: "data-bs-title ",
    },
    {
      text: " to the content under the HTML tag.",
    },
  ];

  export const TooltipDirectionData = [
    {
      text: "Use the ",
      code: "btn- *",
    },
    {
      text: " to change dark background color and",
      code: " data-bs-placement='*'",
    },
    {
      text: "[top/right/bottom/left] to tooltip direction change.",
    },
  ];