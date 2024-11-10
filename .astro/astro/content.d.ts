declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"projects": {
"baseball-attendance.mdx": {
	id: "baseball-attendance.mdx";
  slug: "baseball-attendance";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"bullyproof.mdx": {
	id: "bullyproof.mdx";
  slug: "bullyproof";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"cartoonify.mdx": {
	id: "cartoonify.mdx";
  slug: "cartoonify";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"ev-range-pred.mdx": {
	id: "ev-range-pred.mdx";
  slug: "ev-range-pred";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"finger-sign-language.mdx": {
	id: "finger-sign-language.mdx";
  slug: "finger-sign-language";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"grammar-ninja.mdx": {
	id: "grammar-ninja.mdx";
  slug: "grammar-ninja";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"graphic-memoir-analysis.mdx": {
	id: "graphic-memoir-analysis.mdx";
  slug: "graphic-memoir-analysis";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"human-connectome.mdx": {
	id: "human-connectome.mdx";
  slug: "human-connectome";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"jarvis.mdx": {
	id: "jarvis.mdx";
  slug: "jarvis";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"llm-inference-engine.mdx": {
	id: "llm-inference-engine.mdx";
  slug: "llm-inference-engine";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"motion-gpt1.5.mdx": {
	id: "motion-gpt1.5.mdx";
  slug: "motion-gpt15";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"multi-object-tracking.mdx": {
	id: "multi-object-tracking.mdx";
  slug: "multi-object-tracking";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"plantify-dr.mdx": {
	id: "plantify-dr.mdx";
  slug: "plantify-dr";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"puber.mdx": {
	id: "puber.mdx";
  slug: "puber";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"responsible-ai-audit.mdx": {
	id: "responsible-ai-audit.mdx";
  slug: "responsible-ai-audit";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
"sketch-n-solve.mdx": {
	id: "sketch-n-solve.mdx";
  slug: "sketch-n-solve";
  body: string;
  collection: "projects";
  data: any
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
