/*
 Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
BONUS 1:
Trasformare la stringa foto in una immagine effettiva
BONUS 2:
Organizzare i singoli membri in card/schede (allego qualche immagine per darvi ispirazione
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
 */


// # FASE DI PREPARAZIONE
// Recupero gli elementi dal DOM
const row = document.querySelector('#team-cards .row');
console.log(row);

// Creo l'array di oggetti per rappresentare i membri del team (nome, ruolo, foto)
const membersTeam = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg'
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg'
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg'
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg'
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg '
    }
]
console.table(membersTeam);

// # FASE DI ELABORAZIONE
// Creo una variabile d'appoggio per creare il template literal
let templateHTML = '';
for (let i = 0; i < membersTeam.length; i++) {

    // Recupero i membri del team (elementi dell'array)
    const member = membersTeam[i];
    console.log(member);

    // $ Preparo le variabili per le key degli oggetti
    // Preparo il nome
    const memberName = member.name;
    console.log('name:', memberName);

    // Preparo il ruolo
    const memberRole = member.role;
    console.log('role:', memberRole);

    // Preparo le immagini
    const memberImage = member.image;
    console.log(memberImage);

    // Concateno il template
    templateHTML += `
    <div class="col">
        <div class="card mb-3 border-0">
            <div class="row g-0">
                <div class="col-5">
                    <img src="img/${memberImage}" class="rounded-start" alt="${memberName}">
                </div>
                <div class="col-7">
                    <div class="card-body h-100 d-flex flex-column justify-content-center mt-0">
                        <h5 class="card-title">${memberName}</h5>
                        <p class="card-text text-blue">${memberRole}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
}
console.log(templateHTML);

// # FASE DI OUTPUT
// Arcodo il template alla row in pagina
row.innerHTML = templateHTML;

