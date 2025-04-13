//  requirement : want to add three numbers
// condition : only if three numbers are available
// assume : two of the parameters are coming from apis and one from user

// function add(a) {
//     return function (b) {
//         return function (c) {n
//             return a + b + c;
//         };
//     };
// };



// console.log(add(2)(3)(5));


// function sendEmail(to) {
//     return function (subject) {
//         return function (body) {
//             console.log("sending email to: ", to, "subject is: ", subject, "hello sir", body);
//         }
//     }
// }

let sendEmail = (a) => b => c => console.log(a + b + c);

let step1 = sendEmail("something@gmail.com");
let step2 = step1("message for university email");
step3 = step2("i'm inviting you to attend the lect/ures")

// sendEmail("temp@gmail.com")("subject: ghare padhariya hai")("baare halwa ro vichar hai")