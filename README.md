# Rick & Morty Episode viewer

This is a small app that lets you see and like episodes from the show Rick & Morty.

It's made with **Typescript** and **React**, making use of Hooks and Redux toolkit.

To run it:

```bash
git clone https://github.com/Skatedan/Rick-Morty

cd rick-morty

npm install

npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## /src contents

### `Index.tsx`

The main component which renders the characters and list of prefered ones using `react-router` to route the pages defined on `/pages`.

### Components

Presentational component to define the list of episodes brought from the API.

### Pages

The pages that display the list of characher on homepage and the favorite ones.

### `*.interface.tsx`

It contains the different types of data used in this application. It's one of the main advantages of using Typescript.

### `Store.tsx`

It uses `Context` and `reducer` to manage how data flow based on actions, and by that, the state of our application.

### `favoritesSlice.ts`
It used to define a redux toolkit reducers for manage a prefered characters list