import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const club = new Clube();
const quadraFut = new QuadraFutebol();

club.adicionarQuadra(quadraFut);

console.log(quadraFut.reservar(new Date('2010/11/11')));

const reservarQuadraFutebol = club.buscarQuadra<QuadraFutebol>(0)
.reservar(new Date('2010/11/11'));
// console.log('BUSCAR QUADRA:', club.buscarQuadra<QuadraFutebol>(0));

console.log(reservarQuadraFutebol);

const quadraTenis = new QuadraTenis();
const reservarQuadraTenis = club.buscarQuadra<QuadraTenis>(0).reservar(new Date('2011/10/11'));
