import { Alert, AllMail, Draft, Important, Notes, Outbox, Sent, Spam, Starred, Trash, Unread, Update } from "@/utils/Constant";

export const emailSidbar = [
    {
        className: 'icon-folder',
        title: AllMail,
    },
    {
        className: 'icon-new-window',
        title: Sent,
        badge: (69),
    },
    {
        className: 'icon-pencil-alt',
        title: Draft,
        badge: (59),
    },
    {
        className: 'icon-trash',
        title: Trash,
        badge: (99),
    },
    {
        className: 'icon-info-alt',
        title: Important,
    },
    {
        className: 'icon-star',
        title: Starred,
    },
    {
        line: <hr />
    },
    {
        className: 'icon-email',
        title: Unread,
    },
    {
        className: 'icon-export',
        title: Spam,
    },
    {
        className: 'icon-share',
        title: Outbox,
    },
    {
        className: 'icon-file',
        title: Update,
    },
    {
        className: 'icon-bell',
        title: Alert,
    },
    {
        className: 'icon-notepad',
        title: Notes,
        badge: '20',
    },
];

export let emailList = [
    {tittle:'Pork Lorn ',date:15,month:"July",year:2018,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:'Lorm Lpsa ',date:20,month:"january",year:2020,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:'Hileri Makr ',date:20,month:"August",year:2018,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:"Lion Lorpa ",date:2,month:"Jun",year:2016,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:"Lion Lorpa " ,date:25,month:"july",year:2015,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:"Solvn Relto " ,date:15,month:"july",year:2018,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:"Repro Soft " ,date:2,month:"jun",year:2016,paragraph:"Mattis luctus. Donec nisi diam"},
    {tittle:"Lion Lorpa ",date:2,month:"jun",year:2016,paragraph:"Mattis luctus. Donec nisi diam"},
]