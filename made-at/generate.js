const fs        = require("fs")
const path      = require("path")
const writefile = require("writefile")
const events    = require("./../events")

const years = [
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
    2021,
    2022,
    2023,
    2024,
    2025,
    2026,
    2027,
    2028,
    2029,
    2030,
    2031,
    2032,
    2034,
    2035,
    2036,
    2037,
    2038,
    2039,
    2040,
    2041,
    2042,
    2043,
    2044,
    2045,
    2046,
    2047,
    2048,
    2049,
    2050,
]

function ensureDirectoryExistence(filePath) {
    var dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
      return true;
    }
    ensureDirectoryExistence(dirname);
    fs.mkdirSync(dirname);
  }

events.forEach((event) => {

    years.forEach((year) => {
        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" width="250" height="20" viewBox="0 0 250 20">
                <title>JH-${event.name} Badge</title>
                <a href="https://jugendhackt.org">
                    <rect x="0" y="0" width="136" height="20" style="fill:#555"/>
                    <rect x="135" y="0" width="7000" height="20" style="fill:#${event.color}"/>
                    <text transform="translate(8 14)" style="isolation:isolate;font-size:11px;fill:#fff;" font-family="Verdana,Geneva,sans-serif">Made at Jugend hackt</text>
                    <text transform="translate(160 14)" style="isolation:isolate;font-size:11px;fill:#fff;" font-family="Verdana,Geneva,sans-serif">${event.name} ${year}</text>
                    <rect x="144.9" y="10.55" width="1.09" height="1.09" style="fill:#fff"/>
                    <rect x="151.46" y="10.55" width="1.09" height="1.09" style="fill:#fff"/>
                    <polygon points="149.28 12.73 148.18 12.73 148.18 11.64 147.09 11.64 147.09 13.83 150.37 13.83 150.37 11.64 149.28 11.64 149.28 12.73" style="fill:#fff"/>
                    <path d="M153.65,5.08V4h-2.19V5.08h-1.09V6.17h-3.28V5.08H146V4h-2.19V5.08h-1.09v8.75h1.09v1.09h1.09V16h7.66V14.92h1.09V13.83h1.09V5.08Zm0,7.65h-1.09v1.1h-1.1v1.09H146V13.83h-1.1v-1.1h-1.09V9.45h1.09V8.36h7.66V9.45h1.09Z" style="fill:#fff"/>
                </a>
            </svg>
        `
        event.codes.forEach((code) => {
            console.log(`Ensuring directory existence ("${__dirname + "/" + code}")...`)
            if (!fs.existsSync(__dirname + "/" + code)){
                fs.mkdirSync(__dirname + "/" + code);
            }
            console.log(`Ensuring directory existence ("${__dirname + "/" +  code + "/" +  year}")...`)
            if (!fs.existsSync(__dirname + "/" +  code + "/" +  year)){
                fs.mkdirSync(__dirname + "/" +  code + "/" +  year);
            }
            console.log(`Writing to "${__dirname + "/" +  code + "/" + year + "/index.svg"}"...`)
            fs.writeFileSync(__dirname + "/" +  code + "/" + year + "/index.svg", svg)  
        })
    })
})