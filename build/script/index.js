import chalk from 'chalk'
import { runBuildConfig } from './build-config'
import { runBuildCNAME } from './build-cname'

export const runBuild = async () => {
  try {
    runBuildConfig()
    runBuildCNAME()
    console.log(`✨ ${chalk.cyan('build successfully!')}`)
  } catch (error) {
    console.log(chalk.red('vite build error:\n' + error))
    process.exit(1)
  }
}

// 这里打包的时候运行了
runBuild()
