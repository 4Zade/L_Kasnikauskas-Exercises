let text;

/* Parašykite programą, kuri nustato ar stačiakampis atvirukas, kurio matmenys c ir d mm
tilps į voką, kurio vidiniai matmenys a ir b mm. Norint įdėti atviruką į voką, reikia 1 mm
tarpo kiekvienoje pusėje. */

const a = 30;
const b = 20;

const c = 28;
const d = 18;

if ((a -2) >= c && (b -2) >= d) {
  text = 'Atvirukas telpa';
}
else {
  text = 'Atvirukas Netelpa';
}

console.log(text);