import { defineConfig } from 'vite'
import { execSync } from 'child_process'

const commitHash = execSync('git rev-parse --short HEAD').toString().trim()

export default defineConfig({
    define: {
        __COMMIT_HASH__: JSON.stringify(commitHash),
    },
})
