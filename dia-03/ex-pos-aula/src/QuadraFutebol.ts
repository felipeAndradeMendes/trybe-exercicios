import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import normas from "./normas/normasDeUso";

export default class QuadraFutebol extends Quadra {
  public reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    const regrasFutebol = normas.futebol.chuteira;
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data,
      regras: regrasFutebol as IFutebol,
    }
  }
}