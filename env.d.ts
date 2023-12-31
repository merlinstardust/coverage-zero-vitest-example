/// <reference types="vite/client" />

declare module "*.vue" {
  import type { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare global {
	const suite: typeof import('vitest')['suite']
	const test: typeof import('vitest')['test']
	const describe: typeof import('vitest')['describe']
	const it: typeof import('vitest')['it']
	const expect: typeof import('vitest')['expect']
	const assert: typeof import('vitest')['assert']
	const vitest: typeof import('vitest')['vitest']
	const vi: typeof import('vitest')['vitest']
	const beforeAll: typeof import('vitest')['beforeAll']
	const afterAll: typeof import('vitest')['afterAll']
	const beforeEach: typeof import('vitest')['beforeEach']
	const afterEach: typeof import('vitest')['afterEach']
}
