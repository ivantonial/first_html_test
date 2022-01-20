module.exports = {
    apps: [
      {
        script: 'npm start',
        cwd: 'backend/',
        name: 'Backend',
        watch: true,
        env: {
          NODE_ENV: 'development'
        }
      },
      {
        script: 'npm start',
        cwd: 'frontend/',
        name: 'Frontend',
        watch: true,
        env: {
          NODE_ENV: 'development'
        }
      }
    ]
  }