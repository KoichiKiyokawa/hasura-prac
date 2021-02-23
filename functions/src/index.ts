import glob = require('tiny-glob/sync')

glob('./src/controllers/**/*.ts').forEach((path) => {
  const funcName = path.match(/([a-zA-Z]+)\.ts/)?.[1]

  if (funcName == null) return

  const executingFuncName = process.env.K_SERVICE
  if (executingFuncName == null || executingFuncName === funcName) {
    const pathInLibDir = './' + path.replace('src/', '').replace('.ts', '')
    console.log({ funcName, pathInLibDir })
    exports[funcName] = require(pathInLibDir)[funcName]
  }
})
