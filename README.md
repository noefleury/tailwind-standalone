## Tailwind CSS Standalone

### Why this project ?

This little project allow you to play with [Tailwind CSS framework](https://tailwindcss.com) easily.

No need to have Node.js or any other dependencies installed.

You can of course use this source-code as your initial project files.

### How to build ?

**Download executable for your OS**

Find [latest release](https://github.com/tailwindlabs/tailwindcss/releases/latest) compatible with your OS.

Rename the file : `mv executable_name tailwindcss`

Give executable permission : `chmod +x tailwindcss`

**Build CSS**

Development : ```./tailwindcss -i src/style.css -o public/style.css --watch```

Production : ```./tailwindcss -i src/style.css -o public/style.css --minify```

**Enjoy**

You are ready.

Just open ```public/index.html``` and enjoy.

### Go further

You can find more details on [the official Tailwind CSS blog](https://tailwindcss.com/blog/standalone-cli).