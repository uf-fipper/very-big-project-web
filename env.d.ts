/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ASP_BASE_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
