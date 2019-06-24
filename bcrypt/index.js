//test bcrytp
const bcrypt = require('bcrypt');
const password = 'mypasss';

// /**
//  * CALLBACK FUNCTION------------------------------------------------------------
//  */

// bcrypt.genSalt(10, (err, salt) => {
//     if(err) console.log({err : true, message: err.message});
//     bcrypt.hash(password, salt, (err, hashString) => {
//         if(err) console.log({err : true, message : err.message});
//         console.log(`HashString : ${hashString}`);
//     })  
// })


// const passHash = '$2b$10$mcTq6sMxlvJl2jApSup2oeR6vcINas8E3AjlArx61fmGO9ujx/CKi';

// bcrypt.compare(password, passHash, (err, data) => {
//     if(err) console.log({err : true, message : err.message});
//         console.log(`data :${data}`);
// })


// /**
//  * PROMISE------------------------------------------------------------------------
//  */

// bcrypt.genSalt(10)
//     .then(salt => {
//         bcrypt.hash(password, salt)
//             .then(result => console.log(`passHash : ${result}`))
//             .catch(err => console.log(err));
//     })
//     .catch(err => console.log(err));


// const passHash ='$2b$10$TXvMOLh3bItRbMOOT10Krex0XJCGmoe6OzmEthGBGurDIsLWo9I8a';

// bcrypt.compare(password, passHash)
//     .then(result => console.log(`result :${result}`))
//     .catch(err => console.log(err))


/**
 * ASYNC AWAIT------------------------------------------------------------------
 */

// const hashPass = async () => {
//     let salt = await bcrypt.genSalt(10);
//     let hashString = await bcrypt.hash(password, salt);
//     console.log(`hashString : ${hashString}`);
// }

const passHash = '$2b$10$Ocq1fHFU/YqyabU6/tS0FuWQnRS6nbxLZSD0ywB9Uyz3cLrTcXncm';
let comparePass = async () => {
    let isMatch = await bcrypt.compare(password, passHash);
    console.log(` result : ${isMatch}`);
    //if(true) => luu session.......................................cloud cloud.
}
// hashPass();
comparePass();