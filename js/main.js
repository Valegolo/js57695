setTimeout(function() {
    const superheroes = ['Superman', 'Spiderman', 'Batman', 'Mujer Maravilla', 'Iron Man', 'Capitan America', 'Hulk', 'Thor', 'Black Widow', 'Flash'];

    function playGame() {
        const secretHero = superheroes[Math.floor(Math.random() * superheroes.length)];
        let attempts = 0;
        
        function checkGuess() {
            let guess = prompt('Introduce un nombre de superhéroe:');
            if (!guess) {
                alert("Por favor, escribe el nombre de un superhéroe.");
                checkGuess();
                return;
            }
            guess = guess.trim();
            const guessLowerCase = guess.toLowerCase();
            if (!superheroes.map(hero => hero.toLowerCase()).includes(guessLowerCase)) {
                alert("Por favor, escribe un superhéroe válido.");
                checkGuess();
                return;
            }
            attempts++;
            if (guessLowerCase === secretHero.toLowerCase()) {
                alert("¡Felicidades! ¡Has adivinado al superhéroe ganador!");
            } else {
                alert("Sigue intentando. No has adivinado al superhéroe ganador.");
                checkGuess();
            }
        }

        checkGuess();

        alert("¡Felicidades! Adivinaste el superhéroe en " + attempts + " intentos.");
    }

    playGame();
}, 1000);

