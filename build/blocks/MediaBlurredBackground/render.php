<?php

use BeeAddonsBlocks\BeeAddonsBlocks;

$MediaBorderRadius = BeeAddonsBlocks::parseRadius($attributes['style']['border']['radius'] ?? 0);
$ContentBorderRadius = BeeAddonsBlocks::parseRadius($attributes['style']['border']['radius'] ?? 0, true);
$block_wrapper_attributes = get_block_wrapper_attributes([
	'class' => 'are-vertically-aligned-'.$attributes['InnerTextPosition'],
]);

$mediaSize = (array_key_exists('align', $attributes) && in_array($attributes['align'], ['wide', 'full'])) ? 'full' : 'large';

$contentBackgroundColor = array_key_exists('backgroundColor', $attributes) ? sprintf('var(--wp--preset--color--%s)', $attributes['backgroundColor']) :
		(!empty($attributes['style']['color']) ? array_values($attributes['style']['color'])[0] : 'transparent');
?>

<div <?php echo $block_wrapper_attributes; ?>>
	<?php if (!empty($attributes['MediaUrl'])): ?>
		<div class="media-wrapper">
			<?php echo wp_get_attachment_image($attributes['MediaId'], $mediaSize, '', [
				'style' => "border-radius: $MediaBorderRadius;"
			]) ?>
		</div>
	<?php endif; ?>

	<div class="content-wrapper"
		 style="
			 background: <?php echo $contentBackgroundColor ?>;
			 border-radius: <?php echo $ContentBorderRadius ?>;
			 padding: <?php echo $attributes['InnerTextPadding'] / 2 . 'px ' . $attributes['InnerTextPadding'] . 'px'?>;
			 backdrop-filter: blur(<?php echo $attributes['InnerTextBlur'] ?>px);
		 "
	>
		<?php echo $content; ?>
	</div>
</div>

