async function loadGame() {
  const response = await fetch('/emoji-game');
  const { character, options } = await response.json();

  const gameDiv = document.getElementById('game');
  gameDiv.innerHTML = `
    <p>What is the name of this emoji? ${character}</p>
    <form id="emojiForm">
      ${options
        .map(
          (option) => `
        <input type="radio" name="emojiName" value="${option.name}"> ${option.name} <br>
      `,
        )
        .join('')}
      <button type="submit">Submit</button>
    </form>
  `;

  document.getElementById('emojiForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const selectOption = formData.get('emojiName');

    const result = await fetch('/check-guess', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ guess: selectOption }),
    });
    const { correct, message } = await result.json();
    alert(message);

    loadGame();
  });
}

loadGame();

////////////////ffffffff
//////// all from little mistake !! 🤯
// worst things is the little things that i forget
