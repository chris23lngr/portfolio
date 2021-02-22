new Vue({
    el: '#content-wrapper',
    data: {

        // logo
        logo_dir: "../assets/logo_normal.png",
        logo_inverted_dir: "../assets/logo_inverted.png",

        // footer
        footer_navigation: "navigate.",
        footer_social: "social.",
        footer_legal: "legal",

        // home
        home: "home.",
        home_url: '../',

        // work
        work: "work.",
        work_url: '../work/',

        // myself
        myself: "myself.",
        myself_url: '../myself/',

        // contact
        contact: "contact.",
        contact_url: '../contact',

        // socials
        socials: [
            { title: "Github.", url: "https://github.com/chris23lngr" },
            { title: "Instagram.", url: "https://instagram.com/chris23lngr" },
            { title: "StackOverflow.", url: "https://stackoverflow.com/users/13482140/chris23lngr" },
        ],

    }
})