var dataStrArray = ["dataDataBase", "dataGISData", "dataPassword",
    "dataArcGIS", "dataProject", "dataJava"];
var dataMainPage=[ {
    title: "Main Page",
    longTitle: "main page",
    url: "./MainPage/mainPage.html",
    subItem: []
}]
var dataDataBase = [{
    title: "MSSQL",
    longTitle: "Microsoft SQL",
    url: "./Database/sql.html",
    subItem: []
}, {
    title: "PostgreSQL",
    longTitle: "PostgreSQL",
    url: "https://www.postgresql.org/",
    keyword: ["PostgreSQL", "Java", "Connection"],
    subItem: [{
        title: "Connection with Java",
        longTitle: "PostgreSQL Connection with Java",
        url: "./Database/postgreSQLJava.html",
        subItem: []
    }, {
        title: "SQL Injection",
        longTitle: "Prevent PostgreSQL Injection",
        url: "./Database/postgreSQLInjection.html",
        subItem: []
    }]
}];
var dataGISData = [{
    title: "Station Data",
    longTitle: "Station Data",
    url: "https://gis.ncdc.noaa.gov/maps/ncei/cdo/hourly",
    subItem: []
}, {
    title: "Satellite Data",
    longTitle: "Satellite Data",
    url: "sql.html",
    subItem: [{
        title: "TRMM Data",
        longTitle: "TRMM Data",
        url: "https://disc.gsfc.nasa.gov/",
        subItem: []
    }, {
        title: "MODIS Data",
        longTitle: "MODIS Data",
        url: "https://ladsweb.modaps.eosdis.nasa.gov/",
        subItem: []
    }]
}];
var dataArcGIS = [{
    title: "ArcMap",
    longTitle: "ArcMap",
    url: "./Data/a.docx",
    subItem: []
}, {
    title: "ArcGIS Pro",
    longTitle: "ArcGIS Pro",
    url: "https://gis.ncdc.noaa.gov/maps/ncei/cdo/hourly",
    subItem: []
}, {
    title: "ArcGIS Engine",
    longTitle: "ArcGIS Engine",
    url: "https://gis.ncdc.noaa.gov/maps/ncei/cdo/hourly",
    subItem: []
}];
var dataProject = [
    {
        title: "Disaster Project",
        longTitle: "Scraper in Disaster Project",
        url: "./Project/disasterProject.html",
        subItem: []
    },
    {
        title: "ArcEngine Development",
        longTitle: "ArcEngine Development",
        url: "",
        subItem: [
            {
                title: "Weather Bureau",
                longTitle: "ArcEngine Development for Weather Bureau",
                url: "",
                subItem: []
            },
            {
                title: "ESRI Contest",
                longTitle: "ArcEngine Development for ESRI",
                url: "http://contest.esrichina.com.cn/html/zuopinzhanshi/2016huojiangzuopinzhanshi/2017/0103/385.html",
                subItem: []
            }]
    }, {
        title: "Data Process",
        longTitle: "Data check and process with SQL",
        url: "",
        subItem: []
    }];
var dataPassword = [{
    title: "Common Password",
    longTitle: "Common Password",
    url: "test.html",
    subItem: []
}, {
    title: "Science Password",
    longTitle: "Common Password",
    url: "./Data/OpenGIS.htm",
    subItem: []
}, {
    title: "Game",
    longTitle: "Game Password",
    url: "commonPassword.html",
    subItem: []
}];
var dataCourse = [{
    title: "Open GIS",
    longTitle: "Open GIS",
    url: "./Data/OpenGIS/OpenGIS.pdf",
    subItem: [{
        title: "01 introduction",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/01 introduction.pdf",
        subItem: []
    }, {
        title: "02 technical background",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/02 technical background.pdf",
        subItem: []
    }, {
        title: "03 simple featue concept spatial dbms",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/03 simple featue concept spatial dbms.pdf",
        subItem: []
    }, {
        title: "04 geodatabases",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/04 geodatabases.pdf",
        subItem: []
    }, {
        title: "05 view services",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/05 view services.pdf",
        subItem: []
    }, {
        title: "06 wmts service",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/06 wmts service.pdf",
        subItem: []
    }, {
        title: "07 geojson wfs fes",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/07 geojson wfs fes.pdf",
        subItem: []
    }, {
        title: "08 metadata csw",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/08 metadata csw.pdf",
        subItem: []
    }, {
        title: "09 open data",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/09 open data.pdf",
        subItem: []
    }, {
        title: "10 inspire gdpr",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/10 inspire gdpr.pdf",
        subItem: []
    }, {
        title: "11 inspire view servies1",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/11 inspire view servies1.pdf",
        subItem: []
    }, {
        title: "12 ogc sos swe sensorthings",
        longTitle: "Open GIS",
        url: "./Data/OpenGIS/12_190619_ogc_sos_swe_sensorthings.pdf",
        subItem: []
    }]
}];
var dataJavaScript = [{
    title: "jQuery",
    longTitle: "jQuery",
    url: "https://jquery.com/",
    subItem: [{
        title: "svg tag",
        longTitle: "svg jquery",
        url: "./Javascript/svgJQuery.html",
        subItem: []
    }]
}, {
    title: "HTML 5",
    longTitle: "svg jquery",
    url: "./Javascript/svgJQuery.html",
    subItem: [{
        title: "Animation",
        longTitle: "animation jquery transform opacity",
        url: "./Javascript/animationHtml5.html",
        subItem: []
    }]
}, {
    title: "Import Javascript",
    longTitle: "import javascript",
    url: "./Javascript/importJS.html",
    subItem: []
}
];
var dataJava = [{
    title: "Framework",
    longTitle: "framework",
    url: "",
    subItem: [{
        title: "Spring",
        longTitle: "spring",
        url: "https://spring.io/projects/spring-boot",
        subItem: [{
            title: "Spring Boot",
            longTitle: "spring boot",
            url: "./Java/Framework/Spring/springBoot.html",
            subItem: []
        }]
    }, {
        title: "Maven",
        longTitle: "maven",
        url: "./Java/Framework/maven.html",
        subItem: []
    }, {
        title: "Hibernate",
        longTitle: "hibernate",
        url: "./Java/Framework/hibernate.html",
        subItem: []
    },]
},
    {
        title: "Time",
        longTitle: "Time",
        url: "./Java/time.html",
        subItem: []
    }, {
        title: "String Match",
        longTitle: "string match",
        url: "./Java/stringMatch.html",
        subItem: []
    }];

