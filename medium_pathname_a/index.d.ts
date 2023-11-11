import type { val__be_computed_pair_T } from '@ctx-core/nanostores'
export declare const [
	medium_pathname_a$_,
	medium_pathname_a_,
]:val__be_computed_pair_T<string[]>
export { medium_pathname_a$_ as medium_pathname_a__ }
export declare function medium_pathname_a__new():Promise<string[]>
export { medium_pathname_a__new as _arr__pathname__medium }
export declare function medium_pathname_a__fetch_get(
	params?:medium_pathname_a__fetch__params_T
):Promise<Response&{ json():Promise<Object> }>
export {
	medium_pathname_a__fetch_get as fetch_medium_pathname_a,
	medium_pathname_a__fetch_get as fetch__arr__pathname__medium,
}
export interface medium_pathname_a__fetch__params_T {
	Bucket?:string
	MEDIUM_PATHNAME_A_KEY?:string
}
export declare type fetch_medium_pathname_a_opts_T =
	medium_pathname_a__fetch__params_T
