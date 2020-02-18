module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'luis',
  password: 'luis1234',
  database: 'dock',
  port: 4040,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
  timezone: '-03:00',
  logging: false,
};
