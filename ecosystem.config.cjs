module.exports = {
  apps: [
    {
      name: "bhushan-sons",
      script: "npm",
      args: "start",
      cwd: "/root/bhushan-sons",
      env: {
        NODE_ENV: "production",
        PORT: 7001
      }
    }
  ]
};