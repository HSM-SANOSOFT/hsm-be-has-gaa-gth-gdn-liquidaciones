import { entities } from '@hsm-sanosoft/hsm-database';
import { envs } from 'src/config';
import { DataSource } from 'typeorm';

export const DatabaseProvider = [
  {
    provide: 'DATABASE_CONNECTION_PG',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: envs.DB_HOST_PG,
        port: envs.DB_PORT_PG,
        username: envs.DB_USERNAME_PG,
        password: envs.DB_PASSWORD_PG,
        database: envs.DB_NAME_PG,
        entities: [...entities],
        synchronize: true,
        logging: true,
      });
      return dataSource.initialize();
    },
  },
];
