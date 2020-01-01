## Getting started

- Use create-react-app or start your own react project.
- Redux is required.
- make the design/ux presentable but no need to spend too much time on it.

## Specs

1. When a user navigates to the app for the first time, the app should download the games data (from games.json). While the game data is being fetched, an indication of progress should be displayed.

2. Upon the completion of the games data download, a listing of games should be displayed on screen. The order of the listing should be determined by the `Order` field in the games data. Each item in the listing should display the following:

- Game icon
- Game name
- Whether the game supports addons
- Whether the game supports voice

3. When a user clicks on an item in the listing, the app should display a view which shows the details of the game. The game detail view should include all the data from the item in the listing and the following additions:

- Game slug
- List of game file names
- List of category section names

4. Implement game search functionality

**please append a brief writeup explaining your technical design decisions**

## Grading criteria

1. clean code (semantic variable names, html)
2. code maintainability (file organization structure, css organization)
3. react/css best practices

## Bonus, Not Required

- Implement Redux state and component testing using react-testing
- Implement the project in TypeScript
- Implement functionality to periodically re-download the game data file (in case it has updated)
-  You dont need to set up a separate server/backend for the scope of this takehome. But it would be nice if you can import the data but use fetch/axios to make a get request
