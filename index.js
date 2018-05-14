const Xray = require('x-ray');
const x = Xray();
x('https://kiki.ccu.edu.tw/~ccmisp06/Course/5304.html',
'table > tr', [
{
no: 'td:nth-child(2)',
name: 'td:nth-child(3)',
teacher: 'td:nth-child(4)',
},
]).write('./dist/hello.json');