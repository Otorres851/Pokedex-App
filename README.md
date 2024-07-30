# 🔴⚪Pokemon Application.⚪🔴

![Pikachu](https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png)

This project is a pokemon application built with React.js. It utilizes the RESTful Pokémon API - PokéApi to fetch pokemons data and display details.

## 📋 Table of Contents

- [🚀 Installation](#-installation)
- [📖 Usage](#-usage)
- [🧩 Components](#-components)
  - [🐭 Pokémon](#-pokémon)
  - [⚡🐭 PokémonDetailPage](#-pokémondetailpage)
  - [📜 CardPokémon](#-cardpokémon)
  - [🔤 Filter](#-filter)
- [🔧 Environment Variables](#-environment-variables)
- [📚 Documentation](#-documentation)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/Otorres851/Pokedex-App.git

cd Pokedex-App
```

2. Install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Create a ".env.local" file in the root directory and add your RESTful Pokémon API:

```bash
VITE_REACT_APP_POKEMON_API_BASE_URL=https://pokeapi.co/api/v2/
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## 📖 Usage
The application allows users to search for Pokémon and view details for each Pokémon. It consists of the following components:

## 🧩 Components

### 🐭 Pokémon
Description: Displays a Pokémon card with to image, name, and info.

Functionality: Clicking on the card navigates to the Pokemon's detail page.

### ⚡🐭 PokémonDetailPage
Description: Fetches and displays detailed information about a Pokémon using the Pokemon's ID from the URL.

Functionality: Shows Pokémon name, ID, level, image, width, height.

### 📜 CardPokémon
Description: Displays a list of Pokemon cards.

Functionality: Uses the CardPokemon component to display each Pokémon.

### 🔤 Filter
Description: filter Pokémons of different types according to element (Earth, Water, Fire, etc..) 

This project uses [Vite Documentation](https://vitejs.dev/) and [React Documentation](https://legacy.reactjs.org/docs/getting-started.html) to optimize and autoload our application.

This project uses metodology [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) for estructure the styles Css and metodology [BEM](https://en.bem.info/) for names of class. 

## 🔧 Environment Variables
You need to set up the following environment variable in your .env.local file:

```bash
- NEXT_PUBLIC_API_KEY: Your RESTful Pokémon API.
```

## 📚 Documentation 
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
- [React Router V6 Documentation](https://reactrouter.com/en/v6.3.0/getting-started/overview)
- [PokéApi Documentation](https://pokeapi.co/)
- [Loaders Documentation](https://uiball.com/loaders/)

## Learn More

To learn more about React.js and Vite, take a look at the following resources:

- [React Documentation](https://legacy.reactjs.org/tutorial/tutorial.html) - learn about React.js tutorial intro.
- [Learn Vite features](https://es.vitejs.dev/guide/features.html) - and functionality of Vite.

## 🤝 Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request.

## 📜 License
This project is licensed under the GNU GENERAL PUBLIC LICENSE. See the LICENSE file for details.
