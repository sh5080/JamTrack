export interface Config {
  port: number;

  jwt: {
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
    REFRESH_TOKEN_EXPIRES_IN: string;
    ACCESS_TOKEN_EXPIRES_IN: string;
  };
  database: {
    DB_HOST: string;
    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
  };
  bcrypt: {
    saltRounds: number;
  };
}