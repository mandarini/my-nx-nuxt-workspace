# Nx workspace with Nuxt

This is a Nx workspace with a Nuxt app, a Vue app, and three Vue libraries. It was generated using [Nx](https://nx.dev).

## How to use

1. Install dependencies

```bash
npm install
```

2. Run the Nuxt app

```bash
nx serve my-nuxt-app
```

3. View the project graph

```bash
nx graph
```

## For types

Check out [apps/my-nuxt-app-2](apps/my-nuxt-app-2). In there, I am including the types from the `.nuxt` directory.

### TS issue

Look into [`apps/my-nuxt-app-2/src/pages/about.vue`](apps/my-nuxt-app-2/src/pages/about.vue). In there, I am importing two workspace libs (their paths defined in [`tsconfig.base.json`](tsconfig.base.json)). Build and serve work, and the libs get bundled. But in VSC you can see a TS error:

```
Cannot find module '@my-nuxt-workspace/my-vue-lib-1' or its corresponding type declarations.ts(2307)
```

You can build and serve to see it working:

```bash
nx serve my-nuxt-app-2
```

```bash
nx build my-nuxt-app-2
```

### Are the types which are included correct?

Look into [`apps/my-nuxt-app-2/tsconfig.json`](apps/my-nuxt-app-2/tsconfig.json). In there, we are including some types from the `.nuxt` directory:

```
  "include": [
    "./.nuxt/nuxt.d.ts",
    "./.nuxt/imports.d.ts",
    "./.nuxt/components.d.ts",
    "./.nuxt/types/**/*.ts"
  ],
```

Are these all the types we need to know about? Is there anything else we should be including?

We cannot extend from `.nuxt/tsconfig.json` because we get conflicts with the paths we define in our `tsconfig.base.json`, and we need to extend from our `tsconfig.base.json` file.

## Documentation

Read more about the Nx Nuxt plugin here:

- Blog post: [https://blog.nrwl.io/introducing-nx-nuxt-enhanced-nuxt-js-support-in-nx-01eac78034fc](https://blog.nrwl.io/introducing-nx-nuxt-enhanced-nuxt-js-support-in-nx-01eac78034fc)
- Nx documentation: [https://nx.dev/nx-api/nuxt](https://nx.dev/nx-api/nuxt)
