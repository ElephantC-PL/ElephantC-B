const set = 'local' 
//const set = 'zlotPoziomek'

let settings = {}

if (set === 'local') {
   settings = {
        HOST: "localhost",
        USER: "root",
        PASSWORD: "secred",
        DB: "elephantc-test",
        ORIGINS: ["http://localhost:4200", "http://localhost:5000"]
    }
} else if (set === 'zlotPoziomek') {
    settings = {
        HOST: "elephantc.api.kubaadamczyk.pl",
        USER: "adamczyk_elephantc",
        PASSWORD: "DPSVcBdq6cesKJbDmRSK",
        DB: "adamczyk_elephantc",
        ORIGINS: ["http://localhost:4200", "http://localhost:5000","http://www.demo.zlotpoziomek.pl", "http://www.elephantc.kubaadamczyk.pl"]
    }
}

module.exports =  {...settings}


