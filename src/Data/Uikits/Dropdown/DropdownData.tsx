import { Direction } from "reactstrap/types/lib/Dropdown";

export type BasicDropdownType = {
  class: string;
  bodyClass?: string;
  position?: Direction;
  text: string;
  menulist: string[];
};
export const basicDropdownData = [
  {
    class: "secondary",
    text: "Ecommerce",
    menulist: ["Product", "Product details", "Cart"],
  },
  {
    class: "warning",
    text: "Ui kits",
    menulist: ["Typography", "Avatars", "Grid"],
  },
  {
    class: "danger",
    text: "Error page",
    menulist: ["Error 400", "Error 403", "Error 500"],
  },
];

export const roundedDropdownData = [
  {
    class: "success rounded-pill",
    text: "Success",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "info rounded-pill",
    text: "Info",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "warning rounded-pill",
    text: "Warning",
    menulist: ["Dark", "Light", "Lighter"],
  },
  {
    class: "danger rounded-pill",
    text: "Danger",
    menulist: ["Dark", "Light", "Lighter"],
  },
];

export const splitDropdownData = [
  {
    class: "secondary",
    text: "Animations",
    menulist: ["Animate", "AOS animations"],
  },
  {
    class: "success",
    text: "Charts",
    menulist: ["Echarts", "Apex chart"],
  },
  {
    class: "info",
    text: "Email",
    menulist: ["Email app", "Email compose"],
  },
  {
    class: "warning",
    text: "Icons",
    menulist: ["Flag icons", "Fontawesome icons", "Ico icons", "Feather icons"],
  },
  {
    class: "danger",
    text: "Learning",
    menulist: ["Learning List", "Detailed Course"],
  },
];

export const justifyData = [
  {
    class: "info",
    bodyClass: "text-center",
    text: "Text-center",
    menulist: ["Chocolate", "Ice-cream", "Trophy"],
  },
  {
    class: "primary",
    bodyClass: "text-end",
    text: "Text-right",
    menulist: ["I'm fine.", "ohh wow!!", "That's the good news! "],
  },
];

export const alignmentData: BasicDropdownType[] = [
  {
    class: "success",
    position: "end",
    text: "Success right",
    menulist: ["Good luck ", "Good job ", "Done!"],
  },
  {
    class: "primary",
    position: "down",
    text: "Primary bottom",
    menulist: ["It's important", "Happy life ", "Another work"],
  },
  {
    class: "danger",
    position: "start",
    text: "Danger left",
    menulist: ["Threat ", "Dangerous", "Alert "],
  },
  
];

export const helperCardData = [
  {
    class: "secondary",
    text: "Helper Card",
    menulist: ["Learn More!", "There is a lot of information available here"],
  },
  {
    class: "warning",
    text: "Warning Card",
    menulist: ["Warning!", "Please! Check your notifications."],
  },
  {
    class: "info",
    text: "Alert Card",
    menulist: ["Danger", "It's a danger path."],
  },
];

export const DividerCommonData = [
  {
    class: "success rounded-pill",
    text: "Wishlist",
    menulist: ["Shoes", "Bag", "Clothes ", "", "Separated link"],
  },
  {
    class: "primary rounded-pill",
    text: "Sports ",
    menulist: ["Badminton", "Tenis ", "Kho-Kho", "", "Separated link"],
  },
  {
    class: "secondary rounded-pill",
    text: "Colors ",
    menulist: ["Orange", "Yellow ", "Red ", "", "Separated link"],
  },
];

export const AlignmentDrodown = [
  {
    text: "Use the ",
    code: "(dropstart/dropup/dropend)",
  },
  {
    text: " this class through change dropdown directions.",
  },
];

export const BasicDropdownTopData = [
  {
    text: "When the",
    code: ".show ",
  },
  {
    text: "class starts, dropdown appears. And ",
    code: ".btn-*",
  },
  {
    text: " to change button dark background colors.",
  },
];

export const DarkDropdownData = [
  {
    code: ".dropdown-menu-dark ",
  },
  {
    text: "class through make dark mode.",
  },
];

export const DividerDropdownData = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And",
      code: ".dropdown-divider",
    },
    {
      text: " to change dropdown section.",
    },
  ];

export const DropdownSizeData = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And",
      code: "[.btn-lg/.btn-sm]",
    },
    {
      text: "class through button size changed.",
    },
  ];

  export const DropdownwithInputData = [
    {
      text: "Use the checkbox using dropdown.",
      code: "(type='checkbox'/'radio').",
    },
  ];

  export const HeadingDropdownData = [
    {
      text: "Main heading and any sub-content in dropdown.",
    },
  ];

  export const HelperCardTopdata = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears.",
    },
  ];

  export const JustifyContentData = [
    {
      text: "Use the ",
      code: "(text-start/text-center/text-end)",
    },
    {
      text: " to change dropdown texts.",
    },
  ];

  export const RoundedDropdownData = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And ",
      code: ".rounded-pill",
    },
    {
      text: " to change rounded dropdowns.",
    },
  ];

  export const SplitDropdownTopData = [
    {
      text: "When the",
      code: ".show ",
    },
    {
      text: "class starts, dropdown appears. And split the dropdown ",
      code: ".dropdown-toggle-split",
    },
  ];

  export const UniqeDropdownData = [
    {
      text: "Unique way to represent form dropdown and text dropdown.",
    },
  ];

