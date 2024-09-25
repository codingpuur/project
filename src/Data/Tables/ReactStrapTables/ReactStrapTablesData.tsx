import { AlertCircle, AlertTriangle, CheckCircle } from "react-feather";

export const basicTablesSubTitle = [
   {
    text:"Use a class ",
    code:" table "
   },
   {
    text:"to any table, and ",
    code:" .border-bottom-*"
   },
   {
    text:" class for Border bottom color"
   }
]

export const basicTableData = [
    {
      id: 1,
      img: "1.jpg",
      firstName: "Ram Jacob",
      lastName: "Wolfe",
      userName: "RamJacob@twitter",
      role: "Developer",
      company: "Apple Inc.",
      language: "Php",
      badgeClass: "badge-light-danger text-danger",
      credit: "$3500.00",
      borderColor: "border-bottom-secondary",
      country: "IND",
      badgeColor: "danger",
    },
    {
      id: 2,
      img: "2.png",
      firstName: "John Deo",
      lastName: "Gummer",
      userName: "JohnDeo@twitter",
      role: "Designer",
      company: "Hewlett packard",
      language: "Html",
      badgeClass: "badge-light-success text-success",
      credit: "$2400.00",
      borderColor: "border-bottom-success",
      country: "US",
      badgeColor: "success",
    },
    {
      id: 3,
      img: "3.jpg",
      firstName: "Elana John",
      lastName: "Cazale",
      userName: "ElanaJohn@twitter",
      role: "Designer",
      company: "Microsoft",
      language: "Pug",
      badgeClass: "badge-light-danger text-danger",
      credit: "$2560.00",
      borderColor: "border-bottom-info",
      country: "UK",
      badgeColor: "danger",
    },
    {
      id: 4,
      img: "3.png",
      firstName: "Meryl Streep",
      lastName: "Roberts",
      userName: "MerylStreep@twitter",
      role: "Developer",
      company: "Tata Ltd.",
      language: "React",
      badgeClass: "badge-light-success text-success",
      credit: "$1870.00",
      borderColor: "border-bottom-warning",
      country: "IDN",
      badgeColor: "success",
    },
    {
      id: 5,
      img: "6.jpg",
      firstName: "Emma Stone",
      lastName: "Stone",
      userName: "EmmaStone@twitter",
      role: "Developer",
      company: "Wipro Ltd.",
      badgeClass: "badge-light-primary text-primary",
      language: "Vue",
      credit: "$4580.00",
      borderColor: "border-bottom-danger",
      country: "IRN",
      badgeColor: "danger",
    },
    {
      id: 6,
      img: "7.jpg",
      firstName: "Eliana Jons",
      lastName: "Jons",
      userName: "ElianaJons@twitter",
      role: "Developer",
      company: "Info Ltd.",
      badgeClass: "badge-light-primary text-primary",
      language: "Vue",
      credit: "$4580.00",
      borderColor: "border-bottom-light",
      country: "IRN",
      badgeColor: "primary",
    },
  ];

export const inverseTableSpan =[
    {
        text:"Use a class ",
        code:"table-inverse "
    },
    {
        text:" inside table element.",
    }
]

export const inverseTable = [
    {
      id: 1,
      firstName: "Stephan",
      lastName: "Laiten",
      office: "Tokyo",
      role: "Accountant",
      salary: "$2100.00",
      age: 20,
      join: "21/01/2023",
    },
    {
      id: 2,
      firstName: "Fay",
      lastName: "Van Damme",
      office: "London",
      role: "CEO",
      salary: "$1420.00",
      age: 22,
      join: "14/02/2022",
    },
    {
      id: 3,
      firstName: "Brevin",
      lastName: "Oleveria",
      office: "New York",
      role: "Software Engineer",
      salary: "$1340.00",
      age: 18,
      join: "04/06/2023",
    },
    {
      id: 4,
      firstName: "Regina",
      lastName: "Ottandy",
      office: "France",
      role: "Pre-sale Support",
      salary: "$3400.00",
      age: 25,
      join: "10/08/2023",
    },
    {
      id: 5,
      firstName: "Vani",
      lastName: "Shah",
      office: "Los Angeles",
      role: "Senior Developer",
      salary: "$3500.00",
      age: 28,
      join: "23/07/2023",
    },
  ];

export const hoverableRowsBorderSpan= [
    {
        text:"Hoverable row use a class ",
        code:"table-hover"
    },
    {
        text:"and for Horizontal border use a class ",
        code:".table-border-horizontal"
    },
    {
        text:"Solid border Use a class ",
        code:".border-solid .table"
    },
    {
        text:"class."
    },
]

export const hoverTableData = [
    {
      id: 1,
      icon: <AlertTriangle className="m-0" />,
      status: "No Signal",
      signalName: "Astrid: NE Shared managed",
      security: "Medium",
      stage: "Triaged",
      schedule: "0.33",
      bgClass: "bg-light-primary font-primary",
      teamLead: "Chase Nguyen",
    },
    {
      id: 2,
      icon: <AlertTriangle className="m-0" />,
      status: "Offline",
      signalName: "Cosmo: prod shared ares",
      security: "Huge",
      stage: "Triaged",
      schedule: "0.39",
      bgClass: "bg-light-danger font-danger",
      teamLead: "Brie Furman",
    },
    {
      id: 3,
      icon: <AlertCircle className="m-0" />,
      status: "Online",
      signalName: "Phoenix: prod shared lyra-lists",
      security: "Minor",
      stage: "No Triaged",
      schedule: "3.12",
      bgClass: "bg-light-success font-success",
      teamLead: "Jeremy Lake",
    },
    {
      id: 4,
      icon: <CheckCircle className="m-0" />,
      status: "No Signal",
      signalName: "Astrid: NE Shared managed",
      security: "Negligible",
      stage: "triaged",
      schedule: "13.18",
      bgClass: "bg-light-primary font-danger",
      teamLead: "Angelica Howards",
    },
    {
      id: 5,
      icon: <CheckCircle className="m-0" />,
      status: "Online",
      signalName: "Astrid: NE Shared managed",
      security: "Negligible",
      stage: "triaged",
      schedule: "5.33",
      bgClass: "bg-light-success font-success",
      teamLead: "Diane Okuma",
    },
  ];

  export const InverseTablePrimaryBackgroundSpan = `Use a class <code>.bg-info, .bg-success, .bg-warning and .bg-danger classes.</code> with light text on dark backgrounds inside table element.<br>To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal`
  export const inverseTableSpans = [
    {text:"Use a class ", code:".bg-info, .bg-success, .bg-warning and .bg-danger classes."},
    {text:"with light text on dark backgrounds inside table element.<br>To set the light background color use .bg-[color] class where [color] is the value of your selected color from stack color palette. So for teal color background class will be .bg-teal "},
  ]

  export const inverseTableData = [
    {
      id: 1,
      firstName: "Ram Jacob",
      lastName: "Wolfe",
      company: "Apple Inc.",
      credit: "$3500.00",
      email: "RamJacob@twitter",
      role: "Developer",
      country: "IND",
    },
    {
      id: 2,
      firstName: "John Deo",
      lastName: "Gummer",
      company: "Hewlett packard",
      credit: "$2400.00",
      email: "JohnDeo@twitter",
      role: "Designer",
      country: "US",
    },
    {
      id: 3,
      firstName: "Elana John",
      lastName: "Cazale",
      company: "Microsoft",
      credit: "$2560.00	",
      email: "ElanaJohn@twitter",
      role: "Designer",
      country: "UK",
    },
    {
      id: 4,
      firstName: "Meryl Streep",
      lastName: "Roberts",
      company: "Tata Ltd.",
      credit: "$1870.00",
      email: "MerylStreep@twitter",
      role: "Developer",
      country: "IND",
    },
    {
      id: 5,
      firstName: "Emma Stone",
      lastName: "Stone",
      company: "Wipro Ltd.",
      credit: "$4580.00",
      email: "EmmaStone@twitter",
      role: "Developer",
      country: "IND",
    },
    {
      id: 6,
      firstName: "Eliana Jons",
      lastName: "jons",
      company: "Info Ltd.",
      credit: "$3910.00",
      email: "ElianaJons@twitter",
      role: "Developer",
      country: "IND",
    },
  ];

  export const captionTableData = [
    {
      id: 1,
      firstName: "Mark",
      name: "Elana Robbert",
      email: "ElanaRob@gmail.com",
      lastName: "Otto",
      exp: "1 Year",
      sex: "Male",
      contact: "+91 9789887777",
      userName: "Mark@twitter",
      age: "28",
      dessert: "KitKat",
      calories: "518",
      fat: "26",
      price: "20",
    },
    {
      id: 2,
      firstName: "Elana",
      name: "Stiphen Deo",
      email: "Stiphen@yahoo.com",
      lastName: "Thornton",
      exp: "6 Month",
      sex: "Female",
      contact: "+91 9874563210",
      userName: "Elana@twitter",
      age: "22",
      dessert: "Donut",
      calories: "452",
      fat: "25",
      price: "80",
    },
    {
      id: 3,
      firstName: "Larry",
      name: "Genelia Ottre",
      email: "Genelia@gmail.com",
      lastName: "Otthe Birdto",
      exp: "2 Days",
      sex: "Male",
      contact: "+91 8794562135",
      userName: "Larry@twitter",
      age: "24",
      dessert: "Eclair",
      calories: "262",
      fat: "16",
      price: "10",
    },
  ];

  export const tableHeadOptionsSpan = [{text:"Similar to tables , use the modifier classes",code:"table-[color]"},{text:"to make",code:"thead"},  {text:"appear in any color."}]

  export const stripedRowWithInverseTableSpan =[
    {
      text:"Use",
      code:".table-striped"
    },
    {
      text:"to add zebra-striping to any table row within the "
    },
    {
      text:". This styling doesn't work in IE8 and below as :nth-child CSS selector isn't supported."
    }
  ] 

  export const stripedWithInverseTableData = [
    {
      id: 1,
      dessert: "Kitkat",
      type: "Ice-cream",
      calories: "518",
      weigth: "250ml",
      fat: "28",
      price: "60",
    },
    {
      id: 2,
      dessert: "Donut",
      type: "Sweet-Snacks",
      calories: "482",
      weigth: "200gm",
      fat: "30",
      price: "120",
    },
    {
      id: 3,
      dessert: "Brownie",
      type: "Cake",
      calories: "415",
      weigth: "500gm",
      fat: "268",
      price: "250",
    },
  ];

  export const breckPointSpecificSpan =[
    {
      text:"Use",
      code:".table-responsive'❴-sm|-md|-lg|-xl|-xxl❵'"
    },
    {
      text:"functions like a heading for a table. It helps users with screen readers to find a table and understand what it’s about and decide if they want to read it."
    }
  ]

  export const breckPointSpecific = [
    {
      id: 1,
      name: "Iphone X Grey",
      oderid: "C12345",
      price: "$12550",
      qty: "1",
      total: "$12550",
    },
    {
      id: 2,
      name: "Titan Watch",
      oderid: "A14725",
      price: "$120",
      qty: "2",
      total: "$240",
    },
    {
      id: 3,
      name: "Apple Airpods",
      oderid: "B54213",
      price: "$210",
      qty: "1",
      total: "$210",
    },
  ];

  export const responsiveTablesSpan =[{
    text:"A",
    code:".table-responsive ,.light-card"
  },
{
  text:"inside table element."
}] 

export const responsiveTableData = [
  {
    id: 1,
    task: "Web Development",
    email: "Pixel@efo.com",
    phone: "+91 7874226671",
    assign: "Mark Jecno",
    date: "12/07/2023",
    price: "$2315.00",
    status: "Pending",
    progress: "75%",
  },
  {
    id: 2,
    task: "Graphic Design",
    email: "Strap@google.com",
    phone: "+91 8347855785",
    assign: "Elana John",
    date: "23/08/2023",
    price: "$4125.00",
    status: "Pending",
    progress: "45%",
  },
  {
    id: 3,
    task: "WordPress",
    email: "Pixelstrap@gmail.com",
    phone: "+91 635609347",
    assign: "John Deo",
    date: "	15/04/2023",
    price: "$6123.00",
    status: "Done",
    progress: "100%",
  },
];

export const sizeTableSpan = [{
  text:"Example of Extra large table, Add ",
  code:".table-xl"
},
{
  text:"class to the ",
  code:".table"
},
{
  text:", Large table Add ",
  code:".table-lg"
},
{
  text:", Default table Add ",
  code:".table-de"
},
{
  text:", Small table Add ",
  code:".table-sm"
},
{
  text:"to create a table."
}]

export const sizingTableData = [
  {
    id: 1,
    name: "Mark Jecno",
    date: "Mark Jecno",
    status: "On leave",
    time: "0",
    performance: "29/30",
  },
  {
    id: 2,
    name: "Elana Robbert",
    date: "21/08/2022",
    status: "Present",
    time: "10",
    performance: "30/30",
  },
  {
    id: 3,
    name: "John Deo",
    date: "18/08/2022",
    status: "On leave",
    time: "8",
    performance: "28/30",
  },
];


export const customTableSpan =[
  {
    text:"Use class ",
    code:"table-hover, table-striped table-*table-info,table-success,table-success,table-info,table-danger,table-primary,table-secondary,table-light,table-active "
  }, 
  {text:"inside table element."}
] 

export const customTableColorData = [
  {
    id: 1,
    title: "Frozen",
    releasedDate: "2013",
    studio: "Disney",
    budget: "$150,000,000",
    gross: "$400,953,009",
  },
  {
    id: 2,
    title: "Minions",
    releasedDate: "2015",
    studio: "Universal",
    budget: "$74,000,000",
    gross: "$336,205,000",
  },
  {
    id: 3,
    title: "Zootopia",
    releasedDate: "2016",
    studio: "Disney",
    budget: "$150,000,000",
    gross: "$341,258,140",
  },
  {
    id: 4,
    title: "Finding Dory",
    releasedDate: "2016",
    studio: "Disney Pixar",
    budget: "$175,000,000",
    gross: "$486,125,203",
  },
  {
    id: 5,
    title: "Toy Story 3",
    releasedDate: "2010",
    studio: "Disney Pixar",
    budget: "$200,000,000",
    gross: "$415,452,880",
  },
];


export const dashedBorderSpan =[
  {
    text:"Dashed border use class ",
    code:".table-dashed"
  },
  {
    text:", for Dotted border use class ",
    code:".table-dotted"
  },
  {
    text:", for Double border use class ",
    code:".table-Double"
  },

]

export const dashedBorderData = [
  {
    id: 1,
    name: "	Crit Cardio",
    type: "Gym",
    time: "9:00 AM - 11:00 AM",
    trainer: "	Aaron Chapman",
    spots: "10",
  },
  {
    id: 2,
    name: "Zumba Dance",
    type: "Dance",
    time: "8:00 AM - 9:00 AM",
    trainer: "Donna Wilson",
    spots: "12",
  },
  {
    id: 3,
    name: "Like a butterfly",
    type: "Boxing",
    time: "9:00 AM - 10:00 AM",
    trainer: "	Randy Porter",
    spots: "13",
  },
  {
    id: 4,
    name: "Pilates Reformer",
    type: "Gym",
    time: "7:00 AM - 8:30 AM",
    trainer: "Aaron Chapman",
    spots: "15",
  },
  {
    id: 5,
    name: "Mind & Body",
    type: "Yoga",
    time: "8:00 AM - 9:00 AM",
    trainer: "Adam Stewart",
    spots: "20",
  },
];