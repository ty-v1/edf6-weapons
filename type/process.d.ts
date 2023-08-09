declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        NODE_ENV?: string;
        CYCLIC_DB: string;
        CYCLIC_BUCKET_NAME: string;
      }
    }
  }
}
