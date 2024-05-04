const superheroes = ['Superman', 'Spiderman', 'Batman', 'Mujer Maravilla', 'Iron Man', 'Capitan America', 'Hulk', 'Thor', 'Black Widow', 'Flash'];
    const secretHero = superheroes[Math.floor(Math.random() * superheroes.length)];
    let attempts = 0;

    function checkGuess() {
      let guess = document.getElementById('guessInput').value.trim().toLowerCase();

      while (!guess) {
        guess = prompt('Por favor, introduce un nombre de superhéroe:');
      }

      attempts++;

      if (guess === secretHero.toLowerCase()) {
        alert(`¡Felicidades! Adivinaste al superhéroe secreto ${secretHero} en ${attempts} intentos.`);
      } else {
        alert('Ese no es el superhéroe secreto. ¡Inténtalo de nuevo!');
      }
    }
    
   