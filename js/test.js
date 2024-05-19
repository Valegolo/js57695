setTimeout(function() {
    const superheroes = [
        { name: 'Superman', alias: 'Clark Kent', powers: ['Super fuerza', 'Vuelo', 'Visión de rayos X'] },
        { name: 'Spiderman', alias: 'Peter Parker', powers: ['Sentido arácnido', 'Trepar paredes', 'Super agilidad'] },
        { name: 'Batman', alias: 'Bruce Wayne', powers: ['Inteligencia', 'Habilidades de combate', 'Tecnología avanzada'] },
        { name: 'Mujer Maravilla', alias: 'Diana Prince', powers: ['Super fuerza', 'Inmortalidad', 'Lazo de la verdad'] },
        { name: 'Iron Man', alias: 'Tony Stark', powers: ['Armadura avanzada', 'Inteligencia', 'Tecnología avanzada'] },
        { name: 'Capitan America', alias: 'Steve Rogers', powers: ['Super fuerza', 'Escudo indestructible', 'Estrategia'] },
        { name: 'Hulk', alias: 'Bruce Banner', powers: ['Fuerza sobrehumana', 'Resistencia', 'Regeneración'] },
        { name: 'Thor', alias: 'Thor Odinson', powers: ['Fuerza divina', 'Control del trueno', 'Inmortalidad'] },
        { name: 'Black Widow', alias: 'Natasha Romanoff', powers: ['Espionaje', 'Habilidades de combate', 'Agilidad'] },
        { name: 'Flash', alias: 'Barry Allen', powers: ['Super velocidad', 'Viaje en el tiempo', 'Reflejos rápidos'] }
    ];

    function findHeroByNameOrAlias(query) {
        return superheroes.find(hero => 
            hero.name.toLowerCase() === query.toLowerCase() || hero.alias.toLowerCase() === query.toLowerCase()
        );
    }

    function playGame() {
        const secretHero = superheroes[Math.floor(Math.random() * superheroes.length)];
        let attempts = 0;

        while (true) {
            let guess = prompt('Introduce el nombre o alias de un superhéroe:');
            if (!guess) {
                alert("Por favor, escribe el nombre o alias de un superhéroe.");
                continue; 
            }
            guess = guess.trim();

            const guessedHero = findHeroByNameOrAlias(guess);
            if (!guessedHero) {
                alert("Por favor, escribe un superhéroe válido.");
                continue; 
            }

            attempts++;
            if (guessedHero.name.toLowerCase() === secretHero.name.toLowerCase()) {
                alert("¡Felicidades! ¡Has adivinado al superhéroe ganador!");
               
                alert(`Detalles del superhéroe:\nNombre: ${secretHero.name}\nAlias: ${secretHero.alias}\nPoderes: ${secretHero.powers.join(', ')}`);
                break; 
            } else {
                alert("Sigue intentando. No has adivinado al superhéroe ganador.");
            }
        }

        alert("¡Felicidades! Adivinaste el superhéroe en " + attempts + " intentos.");
    }

    playGame();
}, 1000);

