<img src="https://github.com/aniketsingh98571/Web_Development/blob/master/sale.png" style="text-align:center"/>

## Problem Statement
Many of the growing startups look at different sources to either add contents to their website or look at the entire design of the website, due to these either their website lacks in content addition or user experience/user interface design. Due to these, the clients visiting the startups website does not find enough information about the company's past projects or developers information and also the candidates who are looking to join the company also doesn't find any proper information about the company.

## Solution
Introducing a "startup website template", where startup company can add their contents easily without worrying about the design of the website. No coding knowledge required, just follow the steps below to modify the contents. After doing a lot of research, all the different sections has been added to the website which are enough to showcase your products and developers to either clients or new developers.

### How to Setup the Project:-
1.   Fork the Repository.
2.  `git clone https://github.com/<Your-GitHub-UserName>/TechTrends`
3.  Do the needful changes.
4.  Push the changes to your local repository.

### For Hosting your Website:-
You can prefer any hosting provider of your choice.

### Follow Below sections to style and add the contents:-

#### Changing the color theme of website:-
1. Head over to `index.css` or simply [Click Here](https://github.com/aniketsingh98571/TechTrends/blob/master/src/index.css)
2.  Modify the below variable values based on your requirements
```css
:root{
 --headlines:#fffffe;  /*For HeroText, NavBar Text and Top Heading of Each Section and some ALL CAPS Words,card headings*/
 --subheadline:#94a1b2;/* For paragraphs, subheadlines and cards paragraph*/
 --servicebackground:#16161a;/* Also for team background and Contact Background*/
 --aboutbackground:#242629;  /*Also for project background and teams card background*/
 --buttonbackground:#7f5af0;
}
```


#### Adding contents to the website:-
##### Adding Sub-headline of sections, Tagline and Footer Contents:-
1. Head over to `App.js` or simply [Click Here](https://github.com/aniketsingh98571/TechTrends/blob/master/src/App.js)
2.  Modify the below parameters based on your requirements:-
```js
 <Header Link1="ABOUT" Link2="SERVICES" Link3="PROJECTS" Link4="TEAM" Link5="CONTACT" LogoImage="https://res.cloudinary.com/aniket98571/image/upload/v1636621222/logo_denw3g.svg"/>
      <SectionOne HeroText="Your Commitment, Our Priority." HeroImage="https://res.cloudinary.com/aniket98571/image/upload/v1636621109/team_esifr6.svg"/>
      <About MainText="Who are We?"/>
      <Services MainText="Services"/>
      <Projects MainText="Projects"/>
      <Teams MainText="Teams"/>
      <Contact MainText="Contact"/>
      <Footer FooterLogo="https://res.cloudinary.com/aniket98571/image/upload/v1636621222/logo_denw3g.svg" FooterContents={{Contact_Email:"thor98571@gmail.com",SubHeadingText:"We Strive for better future",SocialMedia:{Text1:"Linkedin",Link1:"#",Text2:"Facebook",Link2:"#"}}}/>
```

##### Adding Contents to About Us Section:-
1. Head over to `AboutList.json` or [Click Here](https://github.com/aniketsingh98571/TechTrends/blob/master/src/components/About/AboutList.json)
2. 2. Modify the below variables based on your requirements:-
```json
[
    {
        "Title":"Creative Team",
        "Para":"We are listening to you.",
        "image":"https://res.cloudinary.com/aniket98571/image/upload/v1636441080/creative_alkc7o.svg"
    },
    {
        "Title":"Market Research",
        "Para":"Looks at the market scenarious and then takes the critical decision.",
        "image":"https://res.cloudinary.com/aniket98571/image/upload/v1636441144/market_m3wvos.svg"
    }
    

]
```

##### Adding List of Services:-
1. Head over to `ServiceList.json` or [Click Here](https://github.com/aniketsingh98571/TechTrends/blob/master/src/components/Services/ServiceList.json)
2. Modify the below variables based on your requirements:-
```json
[
    {
        "Title":"Web Development",
        "Para":"We build custom tailored web solutions with latest technologies",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636447719/web_nmjfwh.svg"

    },
    {
        "Title":"App Development",
        "Para":"We build custom tailored App solutions with latest technologies",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636447719/app_bcrpj0.svg"

    },
    {
        "Title":"Desktop Application",
        "Para":"We build custom tailored Desktop App solutions with latest technologies",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636447719/desktop_wfbea4.svg"

    }
]
```
##### Adding List of Projects:-
1. Head Over to `ProjectList.json` or [Click Here](https://github.com/aniketsingh98571/TechTrends/blob/master/src/components/Projects/ProjectsList.json)
2. Modify the below variables based on your requirements:-
```json
[
    {
        "Title":"Project 1",
        "Para":"A web app for customers to sell their home coooked food.",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636455222/website_atapbl.png",
        "Link":"https://cryptopodz.com/"
    },
    {
        "Title":"Project 1",
        "Para":"A web app for customers to sell their home coooked food.",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636455221/app_abqafh.png",
        "Link":"https://cryptopodz.com/"
    },
    {
        "Title":"Project 1",
        "Para":"A web app for customers to sell their home coooked food.",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636455222/desktop_jyhqpl.png",
        "Link":"https://cryptopodz.com/"
    }
]
 ```
 
 ##### Adding Members of your team:-
 1. Head over to `TeamList.json` or [Click Here](https://github.com/aniketsingh98571/TechTrends/blob/master/src/components/Teams/TeamList.json)
 2.  Modify the below variables based on your requirements:-
 ```json
 [
    {
        "Name":"Aniket Singh",
        "Position":"CEO",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636464608/human_nuvrpe.svg",
        "Facebook":"",
        "Twitter":"",
        "Instagram":""
    },
    {
        "Name":"Somesh Lad",
        "Position":"CTO",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636464608/human_nuvrpe.svg",
        "Facebook":"",
        "Twitter":"",
        "Instagram":""
    },
    {
        "Name":"Pushkar Khadase",
        "Position":"MD",
        "Image":"https://res.cloudinary.com/aniket98571/image/upload/v1636464608/human_nuvrpe.svg",
        "Facebook":"",
        "Twitter":"",
        "Instagram":""
    }
]

 ```
 ### Note:-
 1. The Design is not upto mark, so if you are good at UX/UI, feel free to contribute.
 2.  For images please use CDN.
 
