const  data = require( './backend/config/speakx_questions.json');
const a = {}

const b = {
    name:"pawan"
}

const c = {
    name:"singh"
}

a[b] = {
    name:"1st name"
}

a[c] = {
    name:"0 name"
}

console.log(a[b]);
