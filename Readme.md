# @ctx-core/instagram_cache

Caches the paths to the media in an instagram account to S3.

Also contains a `InstagramGallery` svelte component to navigate through the media.

## Usage

###  `cache-instagram.js`

```shell
npm install @ctx-core/instagram_cache
cache-instagram.js
```

### InstagramGallery

```html
<script>
	import InstagramGallery from '@ctx-core/instagram_cache/InstagramGallery.svelte'
</script>

<InstagramGallery></InstagramGallery>

<style type="text/scss">
	@import "~@ctx-core/instagram_cache/InstagramGallery";
	@import "your-css/variables";
	@include InstagramGallery(
		$fill__Icon: mix(white, $color-primary-lighter, 75%),
		$fill__hover__Icon: white
	)
</style>
```

## Environment Variables

`INSTAGRAM_NAME` -
	Name of the instagram account

`MEDIUM_PATHNAME_A_KEY` -
	S3 Key for the file containing the Array of Paths of Media
