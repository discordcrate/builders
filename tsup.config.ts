import { defineConfig } from 'tsup'
import { esbuildPluginVersionInjector } from 'esbuild-plugin-version-injector';

export default defineConfig({
    esbuildPlugins: [esbuildPluginVersionInjector()],
    entry: ["./src/index.ts"]
})