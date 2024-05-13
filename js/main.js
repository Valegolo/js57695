setTimeout(function() {
    const superheroes = ['Superman', 'Spiderman', 'Batman', 'Mujer Maravilla', 'Iron Man', 'Capitan America', 'Hulk', 'Thor', 'Black Widow', 'Flash'];

    function playGame() {
        const secretHero = superheroes[Math.floor(Math.random() * superheroes.length)]; 
        let attempts = 0; 
        function checkGuess() {
            let guess = prompt('Introduce un nombre de superhéroe:');
            while (!guess || !superheroes.includes(guess.trim())) {
                if (!guess) {
                    alert("Escribe el nombre de un superhéroe.");
                } else {
                    alert("El término introducido no es un superhéroe válido :( Intentalo de nuevo.");
                }
                guess = prompt('Introduce un nombre de superhéroe:');
            }
            attempts++; 
            if (guess.toLowerCase() !== secretHero.toLowerCase()) {
                checkGuess(); 
            }
        }

        checkGuess();

        alert("¡Felicidades! Adivinaste el superhéroe en " + attempts + " intentos.");
    }

    playGame();
}, 1000);
