# Pimer

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

Don't forget to add:

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

to your vscode settings, if you are using it :)

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
