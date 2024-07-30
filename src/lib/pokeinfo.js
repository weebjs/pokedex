async function lookupPokemon() {
    const pokemonInput = document.getElementById('pokemon-input');
    const pokemonName = pokemonInput.value.toLowerCase();
  
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      const data = await response.json();
  
      const modalTitle = document.getElementById('modal-title');
      modalTitle.textContent = data.name.toUpperCase();
  
      const modalContent = document.getElementById('modal-content');
      modalContent.innerHTML = `
        <button class="btn btn-neutral" style="display: block; margin-bottom: 5px; border-radius: 30px;">ID: ${data.id}</button>
<button class="btn btn-neutral" style="display: block; margin-bottom: 5px; border-radius: 30px;">Height: ${data.height} cm</button>
<button class="btn btn-neutral" style="display: block; margin-bottom: 5px; border-radius: 30px;">Weight: ${data.weight} kg</button>
<button class="btn btn-neutral" style="display: block; margin-bottom: 5px; border-radius: 30px;">Types: ${data.types.map(type => type.type.name).join(', ')}</button>
<img src="${data.sprites.front_default}" alt="${data.name}" class="mx-auto my-4" style="display: block; width: 300px; height: 300px;">
      `;
  
      const modal = document.getElementById('pokemon-modal');
      modal.showModal();
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
      alert('Sorry, we couldn\'t find that Pokémon. Please try again.');
    }
  }