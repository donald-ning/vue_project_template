if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u0016[33mThis repository must using popm as the package manager ` +
      `for scripts to work properly. \u001b [39m\n`,
  )
  process.exit(1)
}
