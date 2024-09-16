import Quadra from "./Quadra";
import IAgenda from "./interfaces/IAgenda";
import ITenis from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";

export default class QuadraTenis extends Quadra {
  public normasTenis: ITenis = normas.tenis;
  public reservar<ITenis>(data: Date): IAgenda<ITenis> {
    const protocolo = (Math.random() + 1).toString(60).substring(3);
    return {
      protocolo,
      data,
      regras: this.normasTenis as ITenis,
    }
  }
}