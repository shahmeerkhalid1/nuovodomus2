import menu_image_1 from "@/assets/images/menu-image-1.png"
export const menuList = [
    {
        id: 1,
        name: "Home",
        path: "/",
        isMegaMenu: false,
        isDropdown:false,
        // isDropdown: [
        //     {
        //         id: 1,
        //         name: "Home 1",
        //         path: "/"
        //     },
        //     {
        //         id: 2,
        //         name: "Home 2",
        //         path: "/home-2"
        //     },
        //     {
        //         id: 3,
        //         name: "Home 3",
        //         path: "/home-3"
        //     },
        //     {
        //         id: 4,
        //         name: "Home 4",
        //         path: "/home-4"
        //     },

        // ]
    },
    {
        id: 2,
        name: "About",
        path: '/about-us',
        isMegaMenu: false,
        isDropdown: false
    },
    {
        id: 3,
        name: "Services",
        path: "/services",
        isDropdown: false,
        // isMegaMenu:false
        isMegaMenu: [
            {
                id: 1,
                menus: [
                    {
                        id: 1,
                        name: "Residential Design",
                        path: "/services/residential-design",
                        desc: "Everything from concept to completion"
                    },
                    {
                        id: 2,
                        name: "Commercial Design",
                        path: "/services/commercial-design",
                        desc: "Focuses on optimizing functionality and aesthetics"
                    },
                    {
                        id: 3,
                        name: "Space Planning",
                        path: "/services/space-planning",
                        desc: "Maximize the potential of your space"
                    }
                ]
            },
            {
                id: 2,
                menus: [
                    {
                        id: 4,
                        name: "Color Consultation",
                        path: "/services/color-consultation",
                        desc: "We help you choose the perfect palette"
                    },
                    {
                        id: 5,
                        name: "Project Management",
                        path: "/services/project-management",
                        desc: "We oversee every detail for a successful project"
                    },
                    {
                        id: 6,
                        name: "Custom Furnishings",
                        path: "/services/custom-furnishings",
                        desc: "Elevate your space with unique furnishings"
                    }
                ]
            },
            {
                id: 3,
                menus: [
                    {
                        id: 7,
                        name: "Concept Development",
                        path: "/services/concept-development",
                        desc: "Develop a design concept"
                    },
                    {
                        id: 8,
                        name: "Revamps & Remodels",
                        path: "/services/revamps-remodels",
                        desc: "Renovation and remodeling services that breathe new life"
                    }
                ]
            },
            {
                id: 5,
                menus: [
                    {
                        id: 9,
                        name: "Embark on a Design Journey with Us",
                        path: "#",
                        desc: "Let’s Talk",
                        img: menu_image_1
                    }
                ]
            }
        ]
    },
    {
        id: 4,
        name: "Smart Home",
        path: "/smart-home-technical-figures",
        isMegaMenu: false,
        isDropdown:false
    },
    // {
    //     id: 4,
    //     name: "Shop",
    //     path: "/product-archive",
    //     isMegaMenu: false,
    //     isDropdown:false
    // },
    {
        id: 5,
        name: "Blog",
        path: "/blog-archive",
        isMegaMenu: false,
        isDropdown: false,
        // isDropdown: [
        //     {
        //         id: 1,
        //         name: "Blog Archive",
        //         path: "/blog-archive"
        //     },
        //     {
        //         id: 2,
        //         name: "Blog Single",
        //         path: "/blog-single"
        //     },
        //     {
        //         id: 3,
        //         name: "Blog Left Sidebar",
        //         path: "/blog-left-sidebar"
        //     },
        //     {
        //         id: 4,
        //         name: "Blog Right Sidebar",
        //         path: "/blog-right-sidebar"
        //     },
        // ]
    },
    {
        id: 6,
        name: "Contact",
        path: "/contact",
        isMegaMenu: false,
        isDropdown: false
    },
]