import Banner from "./../assets/website/footer-pattern.jpg"


const FooterLinks = [
    {
        id:1,
        title: "Home",
        link: "/#",
    },
    {
        id:2,
        title: "About",
        link: "/#about",
    },
    {
        id:3,
        title: "Contact",
        link: "/#contact",
    },
    {
        id:4,
        title: "Blog",
        link: "/#blog",
    },
];


const BannerImgStyle = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

export{FooterLinks, BannerImgStyle}