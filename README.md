# Corona Cannon: An open-source Coronavirus (Covid-19) UV Sterilizer

## Setup
0. You must have Node, Yarn and Git installed.
1. Add Gridsome CLI: `yarn global add @gridsome/cli`
2. Add Sanity.io CLI: `yarn global add @sanity/cli`
3. Clone and CD into the repo `git clone git@github.com:toddsampson/corona-cannon.git && cd corona-cannon`

## Running the development servers
1. To run the Gridsome dev server, run `gridsome develop` then visit `http://localhost:8080`
2. To start the Sanity.io CMS dev server, run `cd cms && sanity start` then visit `http://localhost:3333`
3. If you make changes to the Sanity schemas, run `sanity deploy && sanity graphql deploy` from the ./cms directory to publish the updates.
4. Happy coding 🎉🙌

## Editing Using the CMS
If you don't need to change the CMS schema, you can login to `http://corona-cannon.sanity.studio/` and edit without running a local server.

