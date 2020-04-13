// connects to the remote Prisma DB and let's us
// query it with JS

const { Prisma } = require('prisma-binding');

const db = new Prisma({
  typeDefs: 'src/generated/prisma.graphql',
  endpoint: 'https://sick-fits-production.herokuapp.com/sick-fits-prod/prod',
  secret: process.env.PRISMA_SECRET,
  debug: false
});

module.exports = db;
