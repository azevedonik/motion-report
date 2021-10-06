import { AutoOptions, SequelizeAuto } from 'sequelize-auto';
import { Sequelize } from 'sequelize';

const db = new Sequelize({
  dialect: 'sqlite',
  storage: __dirname + '/../data.db',
});

const options: AutoOptions = {
  lang: 'ts',
  directory: 'migrations',
  singularize: false,
};

const auto = new SequelizeAuto(db, null, null, options);
auto.run();
