import Character from "./Character";
import MeleeCharacter from "./MelleCharacter";
import LongRangeCharacter from "./LongRangeCharacter";

const charYoshi = new MeleeCharacter('Yoshi', 'Super fart');
const charSamus = new LongRangeCharacter('Samus', 'Super scream of fire');

// charYoshi.talk();
// charYoshi.specialMove();

// charSamus.talk();
// charSamus.specialMove();

Character.characterPresentation(charYoshi);
Character.characterPresentation(charSamus);