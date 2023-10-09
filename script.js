const chapters = {
    'debut': {
        'titre': 'En route!',
        'description': 'Vous et vos compagnons entrez dans une caverne à la recherche d\'aventures.',
        'image': './assets/debut.jpg',
        'boutons': [
            {'titre': 'Aller de l\'avant', 'destination': 'troll'}, 
            {'titre': 'Rebrousser chemin', 'destination': 'abandon'}
        ]
    },
    'abandon': {
        'titre': 'Fin de l\'aventure',
        'description': 'Vous abandonnez. Aucun récits ne seronts écrits sur vous.',
        'image': './assets/abandon.jpg',
        'boutons': [
            {'titre': 'Recommencer', 'destination': 'debut'}
        ]
    },
    'troll': {
        'titre' : 'Rencontre inatendue',
        'description': 'Un troll de 12 pieds, arme à la main, se dresse devant vous.',
        'image': './assets/troll.jpg',
        'boutons': [
            {'titre': 'Continuer', 'destination': 'attaque'}, 
        ]
    },
    'attaque': {
        'titre': 'À vos armes!',
        'description': 'Le troll s\'apprête à attaquer',
        'image': './assets/attaque.jpg',
        'boutons': [
            {'titre': 'Rester en retrait alors que vos compagnons prennent les armes', 'destination': 'mort'}, 
            {'titre': 'Préparer son arme', 'destination': 'sacoche'}
        ]
    },
    'mort': {
        'titre': 'Fin de l\'aventure',
        'description': 'Vous et vos compagnons mourrez au combat.',
        'image': './assets/mort.jpg',
        'boutons': [
            {'titre': 'Recommencer', 'destination': 'debut'}
        ]
    },
    'sacoche':  {
        'titre': 'L\'équipement du sorcier',
        'description': 'Vous ouvrez votre sacoche magique.',
        'image': './assets/sacoche.jpg',
        'boutons': [
            {'titre': 'Continuer', 'destination': 'armes'}, 
        ]
    },
    'armes': {
        'titre': 'Un choix judicieux',
        'description': 'Plusieurs choix d\'armes s\'offrent à vous',
        'image': './assets/armes.jpg',
        'boutons': [
            {'titre': 'Choisir le manuscrit ancien', 'destination': 'parchemin'}, 
            {'titre': 'Choisir le bâton magique', 'destination': 'baton'}
        ]
    },
    'parchemin':  {
        'titre': 'Le manuscrit ancien',
        'description': 'Le parchemin est vieux et délabré, mais le sort semble puissant.',
        'image': './assets/parchemin.jpg',
        'boutons': [
            {'titre': 'Continuer', 'destination': 'coup'}, 
        ]
    },
    'baton':  {
        'titre': 'Le bâton magique',
        'description': 'L\'arme classique du sorcier, vous ne manquez jamais un sort lorsqu\'il est entre vos mains',
        'image': './assets/baton.jpg',
        'boutons': [
            {'titre': 'Continuer', 'destination': 'coup'}, 
        ]
    },
    'coup':  {
        'titre': 'Attaque surprise',
        'description': 'Le troll s\'apprête à vous infliger un coup',
        'image': './assets/coup.jpg',
        'boutons': [
            {'titre': 'Lancer un sort', 'destination': 'sort'}, 
            {'titre': 'Esquiver', 'destination': 'seul'}
        ]
    },
    'seul': {
        'titre': 'Fin de l\'aventure',
        'description': 'Le coup s\'abat sur vos compagnons. Vous ne pouvez pas achever le troll seul et mourrez.',
        'image': './assets/seul.jpg',
        'boutons': [
            {'titre': 'Recommencer', 'destination': 'debut'}
        ]
    },
    // Choix du baton magique
    'sort': {
        'titre': 'Félicitations!',
        'description': 'Le coup s\'abat sur vos compagnons. Vous ne pouvez pas achever le troll seul et mourrez.',
        'image': './assets/felicitations.jpg',
        'boutons': [
            {'titre': 'Recommencer', 'destination': 'debut'}
        ]
    },
    // Choix du manuscrit ancien
    'sort': {
        'titre': 'Fin de l\'aventure',
        'description': 'Le sort du manuscrit n\'arrive pas à contrer l\'arme du troll. Vous mourrez.',
        'image': './assets/mort.jpg',
        'boutons': [
            {'titre': 'Recommencer', 'destination': 'debut'}
        ]
    }
}

let twist = false;

function goToChapter(chapter) {
    const boutons = document.querySelector('.barre_boutons');
    while (boutons.firstChild) {
        boutons.removeChild(boutons.firstChild);
    }
    if (chapters[chapter]) {
        document.querySelector('.titre_chapitre').innerText = chapters[chapter].titre;
        document.querySelector('.intro').innerText = chapters[chapter].description;
        document.querySelector('.image_accueil').src = chapters[chapter].image;
        for (let i = 0; i < chapters[chapter].boutons.length; i++) {
            const nouveauBtn = document.createElement('button'); 
            nouveauBtn.textContent = chapters[chapter].boutons[i].titre; 
            nouveauBtn.addEventListener('click', () => { 
                goToChapter(chapters[chapter].boutons[i].destination); 
            }); 
            boutons.appendChild(nouveauBtn); 
        } if (chapter === 'armes') {
            let twist = true;
            console.log('twist = true');
        }
    } else {
        console.log('Mauvaise clé de chapitre');
    }
}

goToChapter('debut');