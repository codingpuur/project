import { SidebarMenuTypes } from "./SidebarTypes";

export const SidebarMenu: SidebarMenuTypes[] = [
  // {
  //   title: "General",
  //   svgIcon: "home",
  //   title1: "General",
  //   subMenu: [
  //     {
  //       svgIcon: "home",
  //       title: "Dashboards",
  //       subMenu: [
  //         { title: "Shopping Place", link: `/dashboards/shoppingplace`, type: "link" },
  //         { title: "CRM Dashboard", link: `/dashboards/crmdashboard`, type: "link" },
  //       ],
  //     },
  //     {
  //       svgIcon: "widget",
  //       title: "Widget",
  //       subMenu: [
  //         { title: "General", link: `/widget/general`, type: "link" },
  //         { title: "Chart", link: `/widget/chart`, type: "link" },
  //       ],
  //     },
  //     {
  //       svgIcon: "layout",
  //       title: "Page layout",
  //       subMenu: [
  //         { title: "Hide Nav Scroll",link: `/pagelayout/hidenavscroll`,type: "link",},
  //         {title: "Footer Dark",link: `/pagelayout/footerdark`,type: "link",},
  //         {title: "Footer Fixed",link: `/pagelayout/footerfixed`,type: "link",},
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Ui Kits",
  //   svgIcon: "Ui-kites",
  //   title1: "Components",
  //   subMenu: [
  //     {
  //       svgIcon: "ui-kits",
  //       title: "Ui Kits",
  //       subMenu: [
  //         {title: "Typography",link: `/uikits/typography`,type: "link",},
  //         {title: "Avatars",link: `/uikits/avatars`,type: "link",},
  //         {title: "Helper Classes",link: `/uikits/helperclasses`,type: "link",},
  //         {title: "Grid",link: `/uikits/grid`,type: "link",},
  //         {title: "Tag & Pills",link: `/uikits/tag&pills`,type: "link",},
  //         {title: "Progress",link: `/uikits/progress`,type: "link",},
  //         {title: "Modal",link: `/uikits/modal`,type: "link",},
  //         {title: "Alert",link: `/uikits/alert`,type: "link",},
  //         {title: "Popover",link: `/uikits/popover`,type: "link",},
  //         {title: "Tooltip",link: `/uikits/tooltip`,type: "link",},
  //         {title: "Dropdown",link: `/uikits/dropdown`,type: "link",},
  //         {title: "Accordion",link: `/uikits/accordion`,type: "link",},
  //         {title: "Tab",link: `/uikits/tab`,type: "link",},
  //         {title: "Lists",link: `/uikits/lists`,type: "link",},
  //       ],
  //     },
  //   ],
  // },
  {
    title: "Markets",
    svgIcon: "Perk-Ui",
    title1: "Markets",
    subMenu: [
      {
        svgIcon: "bonus-kit",
        title: "Commodity",
        subMenu: [
          {title: "Copper",link: `/dashboards/markets/commodity/copper`,type: "link",},
          {title: "Zinc",link: `/dashboards/markets/commodity/zinc`,type: "link",},
          {title: "Aluminium",link: `/dashboards/markets/commodity/aluminium`,type: "link",},
          {title: "Gold",link: `/dashboards/markets/commodity/gold`,type: "link",},
          {title: "Silver",link: `/dashboards/markets/commodity/silver`,type: "link",},
          {title: "Crude Oil",link: `/dashboards/markets/commodity/crude-oil`,type: "link",},
          {title: "Natural gas",link: `/dashboards/markets/commodity/natural-gas`,type: "link",},
       
        ],
      },
      {
        svgIcon: "icons",
        title: "Stock Market",
        subMenu: [
          {title: "Nifty",link: `/dashboards/markets/stockmarket/nifty`,type: "link",},
          {title: "Bank Nifty",link: `/dashboards/markets/stockmarket/bank-nifty`,type: "link",},
          {title: "Sensex",link: `/dashboards/markets/stockmarket/sensex`,type: "link",},
          {title: "Bankex",link: `/dashboards/markets/stockmarket/bankex`,type: "link",},
          {title: "Midc",link: `/dashboards/markets/stockmarket/midc`,type: "link",},
          // {title: "Whether Icon",link: `/icons/whethericon`,type: "link",},
        ],
      },
   
    ],
  },
  {
    
    
    title1: "Chat",
  
    svgIcon: "home",
          title: "Chat",
          subMenu: [
            {title: "Chat App",link: `/chat/chatapp`,type: "link"},]

  },
  // {
  //   title: "Perk Ui",
  //   svgIcon: "Perk-Ui",
  //   title1: "Components",
  //   subMenu: [
  //     {
  //       svgIcon: "bonus-kit",
  //       title: "Bonus Ui",
  //       subMenu: [
  //         {title: "Scrollable",link: `/bonusui/scrollable`,type: "link",},
  //         {title: "Tree view",link: `/bonusui/treeview`,type: "link",},
  //         {title: "Toasts",link: `/bonusui/toasts`,type: "link",},
  //         {title: "Rating",link: `/bonusui/rating`,type: "link",},
  //         {title: "dropzone",link: `/bonusui/dropzone`,type: "link",},
  //         {title: "Tour",link: `/bonusui/tour`,type: "link",},
  //         {title: "SweetAlert2",link: `/bonusui/sweetalert2`,type: "link",},
  //         {title: "Owl Carousel",link: `/bonusui/owlcarousel`,type: "link",},
  //         {title: "Ribbons",link: `/bonusui/ribbons`,type: "link",},
  //         {title: "Pagination",link: `/bonusui/pagination`,type: "link",},
  //         {title: "Breadcrumb",link: `/bonusui/breadcrumb`,type: "link",},
  //         {title: "Range Slider",link: `/bonusui/rangeslider`,type: "link",},
  //         {title: "Image cropper",link: `/bonusui/imagecropper`,type: "link",},
  //         {title: "Basic Card",link: `/bonusui/basiccard`,type: "link",},
  //         {title: "Creative Card",link: `/bonusui/creativecard`,type: "link",},
  //         {title: "Timeline",link: `/bonusui/timeline`,type: "link",},
  //       ],
  //     },
  //     {
  //       svgIcon: "icons",
  //       title: "Icons",
  //       subMenu: [
  //         {title: "Flag icon",link: `/icons/flagicon`,type: "link",},
  //         {title: "Fontawesome Icon",link: `/icons/fontawesomeicon`,type: "link",},
  //         {title: "Ico Icon",link: `/icons/icoicon`,type: "link",},
  //         {title: "Themify Icon",link: `/icons/themifyicon`,type: "link",},
  //         {title: "Feather Icon",link: `/icons/feathericon`,type: "link",},
  //         {title: "Whether Icon",link: `/icons/whethericon`,type: "link",},
  //       ],
  //     },
  //     {
  //       svgIcon: "button",
  //       title: "Buttons",
  //       subMenu: [
  //         {title: "Default Style",link: `/buttons/defaultstyle`,type: "link",},
  //         {title: "Flat Style",link: `/buttons/flatstyle`,type: "link",},
  //         {title: "Edge Style",link: `/buttons/edgestyle`,type: "link",},
  //         {title: "Raised Style",link: `/buttons/raisedstyle`,type: "link",},
  //         {title: "Button Group",link: `/buttons/buttongroup`,type: "link",},
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Forms",
  //   svgIcon: "Form",
  //   title1: "Forms & Tables",
  //   subMenu: [
  //     {
  //       svgIcon: "form",
  //       title: "Forms",
  //       subMenu: [
  //         {
  //           title: "Form Controls",
  //           subMenu: [
  //             {title: "Form Validation",link: `/forms/formcontrols/formvalidation`,bookmark: true,type: "link"},
  //             {title: "Base Inputs",link: `/forms/formcontrols/baseinputs`,type: "link",},
  //             {title: "Checkbox & Radio",link: `/forms/formcontrols/checkbox&radio`,type: "link",},
  //             {title: "Input Groups",link: `/forms/formcontrols/inputgroups`,type: "link",},
  //             {title: "Input Mask",link: `/forms/formcontrols/inputmask`,type: "link",},
  //             {title: "Mega Options",link: `/forms/formcontrols/megaoptions`,type: "link",},
  //           ],
  //         },
  //         {
  //           title: "Form Widgets",
  //           subMenu: [
  //             {title: "Datepicker",link: `/forms/formwidgets/datepicker`,type: "link"},
  //             {title: "Touchspin",link: `/forms/formwidgets/touchspin`,type: "link"},
  //             {title: "Switch",link: `/forms/formwidgets/switch`,type: "link"},
  //             {title: "Typeahead",link: `/forms/formwidgets/typeahead`,type: "link"},
  //             {title: "Clipboard",link: `/forms/formwidgets/clipboard`,type: "link"},
  //           ],
  //         },
  //         {
  //           title: "Form layout",
  //           subMenu: [
  //             {title: "Form Wizard 1",link: `/forms/formlayout/formwizard1`,type: "link"},
  //             {title: "Form Wizard 2",link: `/forms/formlayout/formwizard2`,type: "link"},
  //             {title: "Two Factor",link: `/forms/formlayout/twofactor`,type: "link"},
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       svgIcon: "table",
  //       title: "Tables",
  //       subMenu: [
  //         {
  //           title: "Reactstrap Tables",
  //           subMenu: [
  //             {title: "Basic Tables",link: `/tables/reactstraptables/basictables`,bookmark: true,type: "link"},
  //             {title: "Table components",link: `/tables/reactstraptables/tablecomponents`,type: "link"},
  //           ],
  //         },
  //         {
  //           title: "Data Tables",
  //           subMenu: [
  //             {title: "Basic Init",link: `/tables/datatables/basicinit`,type: "link"},
  //             {title: "Advance Init",link: `/tables/datatables/advanceinit`,type: "link"},
  //             {title: "API",link: `/tables/datatables/api`,type: "link"},
  //             {title: "Data Sources",link: `/tables/datatables/datasources`,type: "link"},
  //           ],
  //         },
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Charts",
  //   svgIcon: "charts",
  //   title1: "Components",
  //   subMenu: [
  //     {
  //       svgIcon: "charts",
  //       title: "Charts", 
  //       subMenu: [
  //         {title: "Apex Chart",link: `/charts/apexchart`,type: "link"},
  //         {title: "Google Chart",link: `/charts/googlechart`,type: "link"},
  //         {title: "Chatjs Chart",link: `/charts/chatjschart`,type: "link"},
  //       ],
  //     },
  //   ],
  // },
  // {
  //   title: "Apps",
  //   svgIcon: "Editor",
  //   title1: "Application",
  //   subMenu: [
  //     {
  //       svgIcon: "project",
  //       title: "Project",
  //       subMenu: [
  //         {title: "Project List",link: `/apps/project/projectlist`,type: "link"},
  //         {title: "Create new",link: `/apps/project/createnew`,type: "link"},
  //       ],
  //     },
  //     {title: "File manager",svgIcon: "file",link: `/apps/filemanager`},
  //     {
  //       svgIcon: "ecommerce",
  //       title: "Ecommerce",
  //       subMenu: [
  //         {title: "Product",link: `/ecommerce/product`,type: "link"},
  //         {title: "Product page",link: `/ecommerce/productpage`,type: "link"},
  //         {title: "Product list",link: `/ecommerce/productlist`,type: "link"},
  //         {title: "Payment Details",link: `/ecommerce/paymentdetails`,type: "link"},
  //         {title: "Order History",link: `/ecommerce/orderhistory`,type: "link"},
  //         {title: "Invoice",link: `/ecommerce/invoice`,type: "link"},
  //         {title: "Cart",link: `/ecommerce/cart`,type: "link"},
  //         {title: "Wishlist",link: `/ecommerce/wishlist`,type: "link"},
  //         {title: "Checkout",link: `/ecommerce/checkout`,type: "link"},
  //         {title: "Pricing",link: `/ecommerce/pricing`,type: "link"},
  //       ],
  //     },
  //     {
  //       svgIcon: "email",
  //       title: "Email",
  //       subMenu: [
  //         {title: "Email App",link: `/email/emailapp`,type: "link",bookmark: true,},
  //         {title: "Email Compose",link: `/email/emailcompose`,type: "link",},
  //       ],
  //     },
  //     {
  //       svgIcon: "chat",
  //       title: "Chat",
  //       subMenu: [
  //         {title: "Chat App",link: `/chat/chatapp`,type: "link"},
  //         {title: "Video chat",link: `/chat/videochat`,type: "link"},
  //       ],
  //     },
  //     {
  //       svgIcon: "user",
  //       title: "Users",
  //       subMenu: [
  //         {title: "Users Profile",link: `/users/usersprofile`,type: "link"},
  //         {title: "Users Edit",link: `/users/usersedit`,type: "link"},
  //         {title: "Users Cards",link: `/users/userscards`,type: "link"},
  //       ],
  //     },
  //     {title: "Bookmarks",svgIcon: "bookmark",link: `/apps/bookmark`},
  //     {title: "Contacts",svgIcon: "contact",link: `/apps/contact`},
  //     {title: "Tasks",svgIcon: "task",link: `/apps/task`},
  //     {title: "Calendar",svgIcon: "calendar",link: `/apps/calender`},
  //     {title: "Social App",svgIcon: "social",link: `/apps/socialapp`},
  //     {title: "To-Do",svgIcon: "to-do",link: `/apps/todo`},
  //     {title: "Search Result",svgIcon: "search",link: `/apps/searchresult`},
  //   ],
  // },
  // {
  //   title: "Pages",
  //   svgIcon: "Grid",
  //   title1: "Miscellaneous",
  //   subMenu: [
  //     {title: "Sample page",svgIcon: "sample-page",link: `/pages/samplepage`},
  //     {
  //       svgIcon: "others",
  //       title: "Other",
  //       subMenu: [
  //         {
  //           title: "Error Page",
  //           subMenu: [
  //             {title: "Error 400",link: `/pages/others/error400`,type: "link"},
  //             {title: "Error 401",link: `/pages/others/error401`,type: "link"},
  //             {title: "Error 403",link: `/pages/others/error403`,type: "link"},
  //             {title: "Error 404",link: `/pages/others/error404`,type: "link"},
  //             {title: "Error 500",link: `/pages/others/error500`,type: "link"},
  //             {title: "Error 503",link: `/pages/others/error503`,type: "link"},
  //           ],
  //         },
  //         {
  //           title: "Authentication",
  //           subMenu: [
  //             {title: "Login Simple",link: `/pages/authentication/loginsimple`,type: "link"},
  //             {title: "Login with bg image",link: `/pages/authentication/loginwithbgimage`,type: "link"},
  //             {title: "Login with image two",link: `/pages/authentication/loginwithimagetwo`,type: "link"},
  //             {title: "Login With validation",link: `/pages/authentication/loginwithvalidation`,type: "link"},
  //             {title: "Login with tooltip",link: `/pages/authentication/loginwithtooltip`,type: "link"},
  //             {title: "Login with sweetalert",link: `/pages/authentication/loginwithsweetalert`,type: "link"},
  //             {title: "Register Simple",link: `/pages/authentication/registersimple`,type: "link"},
  //             {title: "Register with Bg Image",link: `/pages/authentication/registerwithbgimage`,type: "link"},
  //             {title: "Register with image two",link: `/pages/authentication/registerwithimagetwo`,type: "link"},
  //             {title: "Register wizard",link: `/pages/authentication/registerwizard`,type: "link"},
  //             {title: "Unlock User",link: `/pages/authentication/unlockuser`,type: "link"},
  //             {title: "Forget Password",link: `/pages/authentication/forgetpassword`,type: "link"},
  //             {title: "Reset Password",link: `/pages/authentication/resetpassword`,type: "link"},
  //             {title: "Maintenance",link: `/pages/authentication/maintenance`,type: "link"},
  //           ],
  //         },
  //         {
  //           title: "Coming Soon",
  //           subMenu: [
  //             {title: "Coming Simple",link: `/pages/comingsoon/comingsimple`,type: "link"},
  //             {title: "Coming with Bg video",link: `/pages/comingsoon/comingwithbgvideo`,type: "link"},
  //             {title: "Coming with Bg Image",link: `/pages/comingsoon/comingwithbgimage`,type: "link"},
  //           ],
  //         },
  //       ],
  //     },
  //     {
  //       svgIcon: "gallery",
  //       title: "Gallery",
  //       subMenu: [
  //         {title: "Gallery Grid",link: `/gallery/gallerygrid`,type: "link"},
  //         {title: "Gallery Grid Desc",link: `/gallery/gallerygriddesc`,type: "link"},
  //         {title: "Masonry Gallery",link: `/gallery/masonrygallery`,type: "link"},
  //         {title: "Masonry with Desc",link: `/gallery/masonrywithdesc`,type: "link"},
  //         {title: "Hover Effects",link: `/gallery/hovereffects`,type: "link"},
  //       ],
  //     },
  //     {
  //       svgIcon: "blog",
  //       title: "Blog",
  //       subMenu: [
  //         {title: "Blog Details",link: `/blog/blogdetails`,type: "link"},
  //         {title: "Blog Single",link: `/blog/blogsingle`,type: "link"},
  //         {title: "Add Post",link: `/blog/addpost`,type: "link"},
  //       ],
  //     },
  //     {
  //       svgIcon: "faq",
  //       title: "Faq",
  //       link: `/pages/faq`,
  //       type: "link",
  //     },
  //     {
  //       title: "Job Search",
  //       svgIcon: "job-search",
  //       subMenu: [
  //         {title: "Cards view",link: `/jobsearch/cardsview`,type: "link"},
  //         {title: "List View",link: `/jobsearch/listview`,type: "link"},
  //         {title: "Job Details",link: `/jobsearch/jobdetails`,type: "link"},
  //         {title: "Apply",link: `/jobsearch/apply`,type: "link"},
  //       ],
  //     },
  //     {
  //       title: "Learning",
  //       svgIcon: "learning",
  //       subMenu: [
  //         {title: "Learning List",link: `/learning/learninglist`,type: "link"},
  //         {title: "Detailed Course",link: `/learning/detailedcourse`,type: "link"},
  //       ],
  //     },
  //     {
  //       title: "Maps",
  //       svgIcon: "maps",
  //       subMenu: [
  //         {title: "Google Map",link: `/maps/googlemap`},
  //         {title: "Leaflet Maps",link: `/maps/leafletmaps`},
  //       ],
  //     },
  //     {
  //       title: "Editors",
  //       svgIcon: "editors",
  //       subMenu: [
  //         {title: "CK editor",link: `/editors/ckeditor`,type: "link"},
  //         {title: "MDE editor",link: `/editors/mdeeditor`},
  //         {title: "ACE code editor",link: `/editors/acecodeeditor`,type: "link"},
  //       ],
  //     },
  //     {title: "Knowledgebase",svgIcon: "knowledgebase",link: `/pages/knowledgebase`},
  //     {title: "Support Ticket",svgIcon: "support-tickets",link: `/pages/supportticket`},
  //   ],
  // },



  {
    title: "F&O",
    svgIcon: "fo-icon",
    title1: "F&O",
    subMenu: [
      { title: "Individual", link: `/fo/individual`, type: "link" },
      { title: "Social", link: `/fo/social`, type: "link" }
    ]
  },
  {
    title: "Portfolio",
    svgIcon: "portfolio-icon",
    title1: "Portfolio",
    subMenu: [
      { title: "Current Holding", link: `/dashboards/portfolio/current-holding`, type: "link" },
      { title: "History", link: `/dashboards/portfolio/history`, type: "link" },
      { title: "User Statistics", link: `/dashboards/portfolio/user-statistics`, type: "link" },
      { title: "Watchlist", link: `/dashboards/portfolio/watchlist`, type: "link" },
      { title: "Sentiment Analysis", link: `/dashboards/portfolio/sentiment-analysis`, type: "link" },
      { title: "Suggested Area / Recommendation", link: `/dashboards/portfolio/suggestions`, type: "link" },
      { title: "Future Hit Map", link: `/dashboards/portfolio/future-hit-map`, type: "link" },
      { title: "Top Traded Commodity", link: `/dashboards/portfolio/top-traded-commodity`, type: "link" },
      { title: "Most Active Commodity", link: `/dashboards/portfolio/most-active-commodity`, type: "link" }
    ]
  },
  {
    title: "News & Events",
    svgIcon: "news-events-icon",
    title1: "News & Events",
    subMenu: [
      { title: "News", link: `/news`, type: "link" },
      { title: "Economic Calendar", link: `/economic-calendar`, type: "link" },
      { title: "Live Data", link: `/live-data`, type: "link" },
      { title: "Latest Regulations and Circulars", link: `/regulations`, type: "link" }
    ]
  },
  {
    title: "Gamifications",
    svgIcon: "gamifications-icon",
    title1: "Gamifications",
    subMenu: [
      { title: "TBD with Murli", link: `/gamifications/tbd`, type: "link" }
    ]
  },
  {
    title: "Reports",
    svgIcon: "reports-icon",
    title1: "Reports",
    subMenu: [
      { title: "Annual Reports", link: `/dashboards/reports/annual-reports`, type: "link" },
      { title: "Management Commentary", link: `/dashboards/reports/management-commentary`, type: "link" },
      { title: "Brokerage House Views", link: `/dashboards/reports/brokerage-house-views`, type: "link" }
    ]
  },
  {
    title: "Profile",
    svgIcon: "profile-icon",
    title1: "Profile",
    subMenu: [
      { title: "Personal Information", link: `/profile/personal-info`, type: "link" },
      { title: "Security Settings", link: `/profile/security-settings`, type: "link" },
      { title: "Preferences", link: `/profile/preferences`, type: "link" },
      { title: "Payment Gateway", link: `/profile/payment-gateway`, type: "link" }
    ]
  },
  {
    title: "Learning Corner",
    svgIcon: "learning-corner-icon",
    title1: "Learning Corner",
    subMenu: [
      {
        title: "Beginners",
        subMenu: [
          { title: "Flowchart and Trading Terminology", link: `/learning/beginners/flowchart`, type: "link" },
          { title: "Short Videos", link: `/learning/beginners/videos`, type: "link" }
        ]
      },
      {
        title: "Advanced",
        subMenu: [
          { title: "How to Manage Risks", link: `/learning/advanced/manage-risks`, type: "link" },
          { title: "How to Manage Capital", link: `/learning/advanced/manage-capital`, type: "link" },
          { title: "Deciding Options Strike Prices", link: `/learning/advanced/strike-prices`, type: "link" },
          { title: "Miscellaneous Links", link: `/learning/advanced/misc-links`, type: "link" }
        ]
      }
    ]
  },
  {
    title: "Settings",
    svgIcon: "settings-icon",
    title1: "Settings",
    subMenu: [
      { title: "Account Settings", link: `/settings/account`, type: "link" },
      { title: "Application Settings", link: `/settings/application`, type: "link" },
      { title: "Allow Advertisement", link: `/settings/advertisement`, type: "link" }
    ]
  },
  {
    title: "Help",
    svgIcon: "help-icon",
    title1: "Help",
    subMenu: [
      { title: "FAQs", link: `/help/faqs`, type: "link" },
      { title: "Support", link: `/help/support`, type: "link" },
      { title: "Documentation", link: `/help/documentation`, type: "link" },
      { title: "Terms & Conditions", link: `/help/terms`, type: "link" },
      { title: "Chatbot", link: `/help/chatbot`, type: "link" }
    ]
  },
  {
    title: "Fingenie",
    svgIcon: "fingenie-icon",
    title1: "Fingenie",
    subMenu: [
      { title: "Fingenie Home", link: `/fingenie`, type: "link" }
    ]
  }
];

export const BookMarkedData = [
  { title: "Form Validation", link: `/forms/formcontrols/formvalidation`, icon1: 'form', type: "link" },
  { title: "Basic Tables", link: `/tables/reactstraptables/basictables`, icon1: 'table', type: "link" },
  { title: "Email App", link: `/email/emailapp`, type: "link", icon1: 'email' },
]
