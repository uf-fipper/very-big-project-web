/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly asp_base_url: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
