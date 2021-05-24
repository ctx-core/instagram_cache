<script>
import FA_chevron_left_solid from '@ctx-core/fontawesome/ui/FA-chevron-left-solid.svelte'
import FA_chevron_right_solid from '@ctx-core/fontawesome/ui/FA-chevron-right-solid.svelte'
import { medium_pathname_b } from '../../src'
import { medium_pathname_idx_b } from '../../src'
export let ctx
const medium_pathname = medium_pathname_b(ctx)
const medium_pathname_idx = medium_pathname_idx_b(ctx)
let img_src//region
$: img_src = `https://instagram.com${$medium_pathname}media/?size=l`//endregion
</script>

<div class="InstagramGallery">
	<div class="prev button" on:click={medium_pathname_idx.prev_medium_pathname}>
		<FA_chevron_left_solid></FA_chevron_left_solid>
	</div>
	<div class="media">
		<img src="{img_src}" alt="">
	</div>
	<div class="next button" on:click={medium_pathname_idx.next_medium_pathname}>
		<FA_chevron_right_solid></FA_chevron_right_solid>
	</div>
</div>
