let xn: unknown;
xn = 100;
xn = 'Diego';
xn = 900;
xn = '10'
const y = 800;


//  A utilizacao do Unknown deve sempre verificar que tipo e antes de usar
if(typeof xn === 'number')
    console.log(xn + y)