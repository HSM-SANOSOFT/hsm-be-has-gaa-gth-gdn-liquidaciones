import 'dotenv/config';

import * as joi from 'joi';

interface EnvVars {
  DB_USER: string;
  DB_PASSWORD: string;
  DB_CONNECTION_STRING: string;
  LD_LIBRARY_PATH: string;

  DB_USERNAME_PG: string;
  DB_PASSWORD_PG: string;
  DB_HOST_PG: string;
  DB_PORT_PG: number;
  DB_NAME_PG: string;
}

const envsSchema = joi
  .object({
    DB_USER: joi.string().required(),
    DB_PASSWORD: joi.string().required(),
    DB_CONNECTION_STRING: joi.string().required(),
    LD_LIBRARY_PATH: joi.string().default('C:/ORACLE/instantclient_12_1'),

    DB_USERNAME_PG: joi.string().required(),
    DB_PASSWORD_PG: joi.string().required(),
    DB_HOST_PG: joi.string().required(),
    DB_PORT_PG: joi.number().required(),
    DB_NAME_PG: joi.string().required(),
  })
  .unknown()
  .required();

const validationSchema = envsSchema.validate(process.env);

if (validationSchema.error) {
  throw new Error(`Config validation error: ${validationSchema.error.message}`);
}

const envVars: EnvVars = validationSchema.value as EnvVars;

export const envs = {
  DB_USER: envVars.DB_USER,
  DB_PASSWORD: envVars.DB_PASSWORD,
  DB_CONNECTION_STRING: envVars.DB_CONNECTION_STRING,
  LD_LIBRARY_PATH: envVars.LD_LIBRARY_PATH,

  DB_USERNAME_PG: envVars.DB_USERNAME_PG,
  DB_PASSWORD_PG: envVars.DB_PASSWORD_PG,
  DB_HOST_PG: envVars.DB_HOST_PG,
  DB_PORT_PG: envVars.DB_PORT_PG,
  DB_NAME_PG: envVars.DB_NAME_PG,
};
