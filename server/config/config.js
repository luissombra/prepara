module.exports = {
	development: {
  	url: 'postgres://postgres:somepass@localhost:5432/preparadb',
  	dialect: 'postgres'
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: true
    },
  },
  staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    logging: false,
    dialectOptions: {
      ssl: true
    }
  },
  test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:somepass@localhost:5432/preparadb_test',
    dialect: 'postgres',
    logging: false
  }
};
