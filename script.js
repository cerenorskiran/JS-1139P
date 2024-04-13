function incrementScore(team) {
    const score = document.getElementById(team + 'Score');
    score.textContent = parseInt(score.textContent) + 1;
}

function decrementScore(team) {
    const score = document.getElementById(team + 'Score');
    const currentScore = parseInt(score.textContent);
    if (currentScore > 0) {
        score.textContent = currentScore - 1;
    }
}

function setScore(team) {
    const newScore = prompt('Yeni sayıyı girin:');
    if (!isNaN(newScore)) {
        const score = document.getElementById(team + 'Score');
        score.textContent = parseInt(newScore);
    } else {
        alert('Geçersiz bir giriş yaptınız. Lütfen bir sayı girin.');
    }
}

function resetScore(team) {
    document.getElementById(team + 'Score').textContent = '0';
}
