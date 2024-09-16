import IAgenda from "./interfaces/IAgenda";

export default abstract class Quadra {
  abstract reservar<T>(data: Date): IAgenda<T>;
}