<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PokeVault</title>
  <script src="src/lib/pokeinfo.js" defer></script>
</head>
<body>
    <div class="hero bg-base-300 min-h-screen">
        <div class="hero-content text-center">
          <div class="max-w-md">
            <h1 class="text-5xl font-bold">PokeVault</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <div class="flex flex-col items-center">
              <input type="text" id="pokemon-input" placeholder="Type Pokémon name" class="input input-bordered w-full max-w-xs" />
              <button class="btn btn-neutral btn-wide mt-4" onclick="lookupPokemon()">Look up</button>
            </div>
          </div>
        </div>
      </div>

      <!-- Modal -->
      <dialog id="pokemon-modal" class="modal">
        <div class="modal-box">
          <h3 class="text-lg font-bold" id="modal-title"></h3>
          <div id="modal-content" class="py-4"></div>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
</body>
</html>