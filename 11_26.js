// 1. feladat
let tanulok = [];

let tanuloDb = prompt("Hány adatot szeretnél megadni?");

for (let i = 0; i < tanuloDb; i++) {
    let nev = prompt(`Add meg a ${i + 1}. tanuló nevét:`);
    let email = prompt(`Add meg a ${i + 1}. tanuló e-mail címét:`);

    tanulok.push({ nev: nev, email: email });
}

console.log("A tanulók adatai:");
for (let i = 0; i < tanulok.length; i++) {
    console.log(`Név: ${tanulok[i].nev} E-mail: ${tanulok[i].email}`);
}


// 2. feladat
let orarend = [
    { nap: "Hétfő", orak: ["Matematika", "Fizika", "Kémia"] },
    { nap: "Kedd", orak: ["Történelem", "Angol", "Biológia"] },
    { nap: "Szerda", orak: ["Matematika", "Fizika", "Informatika"] },
    { nap: "Csütörtök", orak: ["Kémia", "Földrajz", "Művészet"] },
    { nap: "Péntek", orak: ["Testnevelés", "Angol", "Matematika"] }
];

console.log("Heti órarend:");
orarend.forEach(ora => {
    console.log(`${ora.nap}:`);
    ora.orak.forEach(ora => {
        console.log(`- ${ora}`);
    });
});
