export const BasicInputGroupsAllData = [
  {
    text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place",
    code: `<label>`,
  },
  {
    text: "s outside the input group.",
  },
];

export const ButtonAddonsData = [
  {
    text: "Multiple add-ons are supported and can be mixed with buttons input versions.",
  },
];

export interface InputGroupButtonTypes {
  name?: string;
  divider?: boolean;
}

export type CommonButtonsWithDropdownProps = {
  dropdownItems: InputGroupButtonTypes[];
  toggleColor: string;
};

export const firstButtonsWithDropDowns: InputGroupButtonTypes[] = [{ name: "Ecommerce" }, { name: "Email" }, { name: "Users" }, { divider: true }, { name: "Bookmarks" }];

export const secondButtonsWithDropDowns: InputGroupButtonTypes[] = [{ name: "Starter kit" }, { name: "Gallery" }, { name: "Blog" }, { divider: true }, { name: "Maps" }];
export const thirdButtonsWithDropDowns: InputGroupButtonTypes[] = [{ name: "Widgets" }, { name: "Project" }, { name: "Contacts" }, { divider: true }, { name: "Tasks" }];
export const fourthButtonsWithDropDowns: InputGroupButtonTypes[] = [{ name: "To-Do" }, { name: "FAQ" }, { name: "Knowledgebase" }, { divider: true }, { name: "Support Ticket" }];

export const firstSegmentedButtonsDropDowns: InputGroupButtonTypes[] = [{ name: "Learning" }, { name: "Editors" }, { name: "Users" }, { divider: true }, { name: "Social App" }];
export const secondSegmentedButtonsDropDowns: InputGroupButtonTypes[] = [{ name: "Search Result" }, { name: "Tasks" }, { name: "Projects" }, { divider: true }, { name: "Animation" }];

export const ButtonsWithDropDownsData = [
  {
    text: "Use the",
    code: ".input-group ",
  },
  {
    text: "and",
    code: `[aria-label='']`,
  },
  {
    text: "through buttons with dropdowns.",
  },
];

export const CheckBoxesAndRadiosData = [
  {
    text: "Input groups include support for custom selects and custom",
    code: "file uploads",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const CustomFileInputData = [
  {
    text: "Input groups include support for custom selects and custom",
    code: "file uploads",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const CustomFormsAllData = [
  {
    text: "Input groups include support for",
    code: "custom selects and custom file inputs",
  },
  {
    text: ". Browser default versions of these are not supported.",
  },
];

export const MultipleInputsAllData = [
  {
    text: "While multiple",
    code: `<input>`,
  },
  {
    text: "s are supported visually, validation styles are only available for input groups with a single ",
    code: `<input>`,
  },
  {
    text: ".",
  },
];

export const SegmentedButtonsData = [
  {
    text: "Multiple add-ons are supported and can be mixed with",
    code: "dropdowns",
  },
  {
    text: "versions.",
  },
];

export const SizingData = [
  {
    text: "Add the relative form sizing classes to the",
    code: " .input-group",
  },
  {
    text: "itself and contents within will automatically resize—no need for repeating the form control size classes on each element.",
  },
];

export const VariationOfAddonsData = [
  {
    text: "Place one add-on or button on either side of an input. You may also place one on both sides of an input. Remember to place",
    code: `<label>`,
  },
  {
    text: "s outside the input group.",
  },
];

export const DefaultStyleDataData = [
  {
    text: "This option is show by default you don't need to add any extra class.",
  },
];

// Megaoption data
export const paymentMethodData = [
  { name: "BOB", imagePath: "card" },
  { name: "MasterCard", imagePath: "mastercard", defaultChecked: true },
  { name: "Paypal", imagePath: "paypal" },
  { name: "Visa", imagePath: "visa" },
];

export const webDesignCourseList = ["A. HTML ", "B. CSS", "C. Javascript", "D. Above the all "];

export const radioOptionsWithCreativeOptionsData = [
  {
    strokeClassName: "danger",
    options: "The notification icon displayed new messages.",
    svgName: "notification",
  },
  {
    strokeClassName: "success",
    options: "The download icon indicated completion.",
    svgName: "stroke-calendar",
  },
  {
    strokeClassName: "second",
    options: "The tag icon allowed easy categorization.",
    svgName: "tag",
  },
  {
    strokeClassName: "primary",
    options: "The email icon was inaccessibly located.",
    svgName: "stroke-email ",
  },
];

export const activitiesNameData = [
  { className: "success", name: "Reading" },
  { className: "success", name: "Watching TV" },
  { className: "danger", name: "Listening to music" },
  { className: "", name: "Playing video games" },
  { className: "success", name: "Painting/Drawing" },
];

export const selectRequirementsData = [
  { themeName: "Voxo", sale: 270 },
  { themeName: "Cion", sale: "4.8k" },
  { themeName: "Multikart", sale: "2.6k" },
  { themeName: "Viho", sale: "2k", defaultChecked: true },
];

export const defaultStyleFormData = [
  { Type: "COD", price: "50", priceClassName: "primary", deliveryTime: 2 },
  {
    Type: "FAST",
    price: "100",
    priceClassName: "secondary",
    deliveryTime: 1,
  },
];

export const withoutBordersStyleForm = [
  {
    price: 39,
    badgeText: "100 MBPS",
    className: "warning",
    detail: "Plans for 2/4/6 months are offered to new clients.",
    defaultChecked: true,
  },
  {
    price: 50,
    badgeText: "Hired",
    className: "info",
    detail: " Plans for 2 years projects offered to new clients.",
  },
];

export const solidBorderStyleInlineFormData = [
  { detail: "We provide end to end digital solutions, right from designing your website/application development: Domain, Web Hosting, Email Hosting Registration.", imagePath: "blog/img.png" },
  { detail: "When someone visits your homepage, your design should inspire them to stay. Therefore, your value proposition should be established on the homepage for visitors.", imagePath: "blog/blog.jpg" },
];

export const offerStyleBorderFormData = [
  {
    checkBoxClassName: "success",
    imageName: "11",
    detail: "Fruits are an essential part of a healthy diet, and offer many health benefits. They're packed with vitamins, minerals, and fiber, which can help improve digestion.",
  },
  {
    checkBoxClassName: "danger",
    imageName: "10",
    detail: "Flowers have long been used to express feelings and sentiments, and each bloom has its own distinct significance. For instance, while daisies signify innocence and purity.",
  },
];

export const inlineStyleFormData = [
  {
    className: "warning",
    deliveryType: "COD",
    price: "50 INR",
    deliveryText: "Estimated 14-20 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    className: "secondary",
    deliveryType: "Fast",
    price: "50 INR",
    deliveryText: "Estimated 1 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    className: "secondary",
    deliveryType: "Standard",
    price: "80 INR",
    deliveryText: "Estimated 3 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
  {
    className: "warning",
    deliveryType: "Local",
    price: "Free",
    deliveryText: "Estimated 15 Day Shipping ( Duties end taxes may be due upon delivery )",
  },
];

export const verticalStyleFormData = [
  {
    className: "primary",
    deliveryType: "COD",
    price: "50 INR",
    text: "Estimated 10 to 15 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    className: "secondary",
    deliveryType: "FAST",
    price: "100 INR",
    text: "Estimated 10 to 12 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    className: "success",
    deliveryType: "Standard",
    price: "80 INR",
    text: "Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    className: "info",
    deliveryType: "LOCAL",
    price: "FREE",
    text: "Estimated 3 to 5 Day Shipping ( Duties end tax may be due delivery )",
  },
];

export const buyingOptionsData = [
  {
    className: "warning",
    tittle: "Pixelstrap",
    price: "250 INR",
    totalRating: 5,
    starRating: ["txt-warning", "txt-warning", "txt-warning", "txt-warning", "txt-warning m-r-5"],
  },
  {
    tittle: "Multikart",
    className: "danger",
    price: "150 INR",
    totalRating: 2,
    starRating: ["txt-warning", "txt-warning", "", "", "m-r-5"],
  },
];

export const horizontalStyleFormData = [
  {
    className: "primary",
    deliveryType: "COD",
    price: "50 INR",
    text: "Estimated 5 Day Shipping ( Duties end tax may be due delivery )",
  },
  {
    className: "secondary",
    deliveryType: "FAST",
    price: "100 INR",
    text: "Estimated 1 Day Shipping ( Duties end tax may be due delivery )",
  },
];

export const horizontalStyleFormBuyingOptionsData = [
  {
    className: "success",
    tittle: "Pixelstrap",
    price: "250 INR",
    totalRating: 5,
    starRating: ["txt-warning", "txt-warning", "txt-warning", "txt-warning", "txt-warning m-r-5"],
  },
  {
    colClassName: "offset-sm-3",
    tittle: "Tivo",
    className: "info",
    price: "150 INR",
    totalRating: 1,
    starRating: ["txt-warning", "", "", "", "m-r-5"],
  },
];

export const HorizontalStyleData = [
  {
    text: "horizontal style in mega-options. Use the",
    code: ".mega-horizontal",
  },
  { text: "class through created horizontal alignments." },
];

export const InlineStyleData = [{ text: "For Create inline megaoption add", code: ".mega-inline" }, { text: "class in form tag" }];

export const OfferStyleBorderData = [{ text: "Use the", code: ".offer-style " }, { text: "class to", code: " .mega-inline" }, { text: "you can archive this style." }];

export const SolidBorderStyleData = [
  {
    text: "Use the",
    code: ".border-style",
  },
  {
    text: "class to",
    code: ".mega-inline",
  },
  {
    text: "you can archive this style.",
  },
];

export const VariationCheckBoxData = [
  {
    text: "We can create any creative design by using",
    code: "(type='checkbox')",
  },
  { text: "attribute." },
];

export const VerticalStyleData = [
  {
    text: "vertical style in mega-options. Use the",
    code: ".mega-vertical ",
  },
  {
    text: "class through created vertical alignments.",
  },
];

export const WithoutBordersStyleData = [
  {
    text: "By adding",
    code: ".plain-style ",
  },
  { text: "class to", code: ".mega-inline" },
  { text: "You can archive this style" },
];

export const VariationRadioData = [
  {
    text: "Use the",
    code: "radio",
  },
  { text: "attribute through create variation of radio designs." },
]

export const AnimatedButtonsData = [
  {
    code: `.radio_animated `,
    text: `Use the`,
  },
  {
    text: `through animated checkbox and radios.`,
  },
];

export const favoriteSocialMediaItems = ["Instagram", "Facebook", "Whatsapp", "Twitter"];

export const iconBoxData = [
  { icon: "sliders", header: "Sliders" },
  { icon: "user", header: "User" },
  { icon: "tags", header: "Tags" },
  { icon: "android", header: "Android" },
  { icon: "eye-slash", header: "Hidden" },
  { icon: "folder-open", header: "Folder" },
  { icon: "paper-plane", header: "Send" },
  { icon: "cloud-upload", header: "Upload" },
];

export const filledCheckBoxData = ["warning", "danger", "info"];

export const imagesWithData = [{ tittle: "Custom" }, { tittle: "Checked Image", defaultChecked: true }, { tittle: "Disable Image", disabled: true }, { tittle: "Disable Checked Image", disabled: true, defaultChecked: true }];

export const iconRadioBoxData = [
  { name: "Koho", color: "secondary" },
  { name: "Roxo", color: "success" },
  { name: "Voxo", color: "warning" },
  { name: "Zeta", color: "info" },
];

export const filledRadioData = [
  { heading: "Product", colorName: "primary" },
  { heading: "Order history", colorName: "warning" },
  { heading: "Invoice", colorName: "danger" },
  { heading: "Wishlist", colorName: "info" },
];

export const inlineCheckboxData = [{ tittle: "I", defaultChecked: true }, { tittle: "II" }, { tittle: "III (disabled)", disabled: true }];

export const inlineRadioBoxData = [{ tittle: "1", defaultChecked: true }, { tittle: "2" }, { tittle: "3(disabled)", disabled: true }];

export const inlineSwitchesData = [{ defaultChecked: true }, { defaultChecked: false }, { disabled: true }];

export const paymentMethodName = ["Visa", "MasterCard", "Paypal", "G-pay", "Bitpay"];

export const simpleCheckboxNames = ["Blog", "Gallery", "Faq", "Email", "Icons"];

export const simpleRadioBoxNames = ["Maps", "Tasks", "To-do", "Forms", "Login"];

export const radioToggleButtonsData = ["Checked", "Radio", "Disabled", "Radio"];

export const outLineCheckBoxData = [
  { className: "info", name: "Single toggle" },
  { className: "danger", name: "Checked", defaultChecked: true },
  {
    className: "success",
    name: "Checked success radio",
    defaultChecked: true,
  },
  { className: "dark", name: "Dark radio" },
];

export const BasicRadioAndCheckboxData = [
  {
    code: `.form-check-inline `,
    text: `Use the`,
  },
  {
    text: `through display inline.`,
  },
];

export const CustomCheckBoxData = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for checkbox. And filled checkbox used",
    code: ".checkbox-solid-*",
  },
  { text: "and bordered checkbox used", code: ".checkbox-*." },
];

export const CustomRadioData = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for radios.",
  },
];

export const DefaultCheckBoxData = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for checkbox.",
  },
];

export const DefaultRadioData = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for radios.",
  },
];

export const DefaultSwitchesData = [
  {
    code: `.form-switch`,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for switches.",
  },
];

export const ImagesWithCheckBoxData = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for image checkbox.",
  },
];

export const ImagesWithRadioData = [
  {
    code: `.form-check-input  `,
    text: `Use the`,
  },
  {
    text: `and`,
    code: `.form-check-label `,
  },
  {
    text: "for image radio.",
  },
];

export const InlineInputTypesData = [
  {
    code: `.form-check-inline `,
    text: `Group checkboxes or radios on the same horizontal row by adding`,
  },
  {
    text: `to any`,
    code: `.form-check `,
  },
];

export const OutlinedCheckBoxStylesData = [
  {
    code: `[multiple selected]`,
    text: `The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. `,
  },
  {
    text: `.`,
  },
];

export const RadioToggleButtonsAlldata = [
  {
    code: `[any one selected]`,
    text: `The choice between these two approaches will depend on the type of toggle you are creating, and whether or not the toggle will make sense to users when announced as a checkbox or as an actual button. `,
  },
];

export const BasicFloatingInputControlData = [
  {
    text: `Give textual form controls like`,
    code: `<input>`,
  },
  {
    code: `<textarea>`,
    text: `s and`,
  },
  {
    text: "s an upgrade with custom styles, sizing, focus states, and more.",
  },
];

export const BasicFormData = [
  {
    text: "Use the",
    code: `.form-label `,
  },
  {
    text: "and",
    code: `.form-control `,
  },
  {
    text: "through create basic form.",
  },
];

export const BasicHTMLInputControlData = [
  {
    text: `Give textual form controls like`,
    code: `<input>`,
  },
  {
    code: `<textarea>`,
    text: `s and`,
  },
  {
    text: "s an upgrade with custom styles, sizing, focus states, and more.",
  },
];

export const EdgesInputStyleData = [
  {
    text: `Use the`,
    code: `.btn-pill`,
  },
  {
    text: `through defined border-radius.`,
  },
];

export const FileInputData = [
  {
    code: `<input>`,
    text: `For default file/multiple file/disabled file/small file/large file input for use`,
  },
  {
    code: `(type='file').`,
    text: `with`,
  },
];

export const FlatInputStyleData = [
  {
    code: `.btn-square `,
    text: `Use the`,
  },
  {
    text: `through defined 0px border-radius.`,
  },
];

export const FloatingFormData = [
  {
    text: "Use the",
    code: `.form-label `,
  },
  {
    text: "and",
    code: `.form-control `,
  },
  {
    text: "through create basic form.",
  },
];

export const FormControlSizingData = [
  {
    text: `Set heights using classes like`,
    code: ".form-control-lg",
  },
  {
    code: `.form-control-sm`,
    text: `and`,
  },
];

export const RaiseInputStyleData = [
  {
    text: `Use the`,
    code: `input-air-*`,
  },
  {
    text: `through defined bottom box-shadow.`,
  },
];

export const SelectSizingData = [
  {
    code: ".form-select",
  },
  {
    code: `[form-select-lg/form-select-sm].`,
    text: `to trigger the custom styles. You may also choose from small and large custom selects to match our similarly sized text inputs. class:-`,
  },
];

export const BrowserDefaultData = [
  {
    text: `Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? Depending on your browser and OS,While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.`,
  },
];

export const TooltipFormValidationData = [
  {
    text: "If your form layout allows it, you can swap the",
    code: `.{'valid|invalid'}`,
  },
  {
    text: "-feedback classes for",
    code: `.{'valid|invalid'}`,
  },
  {
    text: "-tooltip classes to display validation feedback in a styled tooltip. Be sure to have a parent with",
    code: "position: relative",
  },
  { text: "on it for tooltip positioning." },
];

export const ValidationFormData = [
  {
    text: "Custom feedback styles apply custom colors, borders, focus styles, and background icons to better communicate feedback.Background icons for",
    code: `<select>`,
  },
  {
    text: "s are only available with ",
    code: `.form-select`,
  },
  {
    text: "and not",
    code: ".form-control.",
  },
];

export const InputMasksContainerData = [
  {
    text: "Input mask used in form-validations,forms,card-details,and etc.",
  },
];
