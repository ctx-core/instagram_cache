<script lang="ts">
import FA_chevron_left_solid from '@ctx-core/fontawesome/ui/FA-chevron-left-solid.svelte'
import FA_chevron_right_solid from '@ctx-core/fontawesome/ui/FA-chevron-right-solid.svelte'
import type { instagram_cache_Ctx } from '../../instagram_cache_Ctx.js'
import { medium_pathname_idx$_b } from '../../medium_pathname_idx$_b.js'
import { medium_pathname$_b } from '../../medium_pathname$_b.js'
export let ctx:instagram_cache_Ctx
const medium_pathname$ = medium_pathname$_b(ctx)
const medium_pathname_idx$ = medium_pathname_idx$_b(ctx)
let img_src//region
$: img_src = `https://instagram.com${$medium_pathname$}media/?size=l`//endregion
</script>

<div class="InstagramGallery">
	<div class="prev button" on:click={medium_pathname_idx$.prev_medium_pathname}>
		<FA_chevron_left_solid></FA_chevron_left_solid>
	</div>
	<div class="media">
		<img src="{img_src}" alt="">
	</div>
	<div class="next button" on:click={medium_pathname_idx$.next_medium_pathname}>
		<FA_chevron_right_solid></FA_chevron_right_solid>
	</div>
</div>
