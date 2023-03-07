const fetch = require('./ex02');

const exx03 = async function(param) {

    try{
        const data = await fetch(param);
        console.log(data);
    } catch(err) {
        console.error(err);
    }
}

// success
//exx03("data");

// fail
exx03("");

console.log("wait...");









