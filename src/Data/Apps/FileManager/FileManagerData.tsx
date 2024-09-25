import { AlertCircle, Clock, Folder, Home, Star, Trash2 } from "react-feather";

export const sideButtons = [
  {
    className: "btn btn-primary",
    icon: <Home />,
    title: "Home",
  },
  {
    className: "btn btn-light",
    icon: <Folder />,
    title: "All",
  },
  {
    className: "btn btn-light",
    icon: <Clock />,
    title: "Recent",
  },
  {
    className: "btn btn-light",
    icon: <Star />,
    title: "Starred",
  },
  {
    className: "btn btn-light",
    icon: <AlertCircle />,
    title: "Recovery",
  },
  {
    className: "btn btn-light",
    icon: <Trash2 />,
    title: "Deleted",
  },
];



export const quickAccessData = [
    {
        title:"Videos",
        icons:"youtube-play",
        color:"danger"
    },
    {
        title:"Apps",
        icons:"th",
        color:"info"
    },
    {
        title:"Document",
        icons:"file-text",
        color:"secondary"
    },
    {
        title:"Music",
        icons:"music",
        color:"warning"
    },
    {
        title:"Download",
        icons:"download",
        color:"primary"
    },
    {
        title:"Folder",
        icons:"folder",
        color:"info"
    },
    {
        title:"Zip File",
        icons:"file-archive-o",
        color:"secondary"
    },
    {
        title:"Trash",
        icons:"trash",
        color:"danger"
    }
];

export const foldersData = [
    {
        icons:"file-archive-o",
        title:"Tivo admin",
        file:"20 file",
        time:"2 Hour ago"
    },
    {
        icons:"folder",
        title:"Viho admin",
        file:"14 file",
        time:"3 Hour ago"
    },
    {
        icons:"file-archive-o",
        title:"Unice admin",
        file:"15 file",
        time:"3 Day ago"
    },
    {
        icons:"folder",
        title:"Koho admin",
        file:"10 file",
        time:"1 Day ago"
    }
]

 

export const FileListData = [
    {
      id: 1,
      icon: "f-22 fa fa-folder font-info",
      name: "Logo.psd",
      size: "2.0 MB",
      modify: "7 hour ago",
      folderClass: "f-44 fa fa-file-archive-o txt-warning",
      title: "Tivo admin",
      folderSize: "20 file",
      modifyFolder: "2 Hour ago",
    },
    {
      id: 2,
      icon: "f-22 fa fa-file-excel-o font-success",
      name: "Backend.xls",
      size: "3.0 GB",
      modify: "2 Day ago",
      folderClass: "f-44 fa fa-folder txt-warning",
      title: "Viho admin",
      folderSize: "14 file",
      modifyFolder: "3 Hour ago",
    },
    {
      id: 3,
      icon: "f-22 fa fa-file-archive-o font-warning",
      name: "Project.zip",
      size: "1.9 GB",
      modify: "1 Day ago,",
      folderClass: "f-44 fa fa-file-archive-o txt-warning",
      title: "Unice admin",
      folderSize: "15 file",
      modifyFolder: "1 Day ago",
    },
    {
      id: 4,
      icon: "f-22 fa fa-folder font-primary",
      name: "Report.txt",
      size: "0.9 KB",
      modify: "1 Day ago",
      folderClass: "f-44 fa fa-folder txt-warning",
      title: "Koho admin",
      folderSize: "10 file",
      modifyFolder: "1 Day ago",
    },
  ];
  