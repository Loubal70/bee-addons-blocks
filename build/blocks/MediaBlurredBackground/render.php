<?php

use BeeAddonsBlocks\BeeAddonsBlocks;

$MediaBorderRadius = BeeAddonsBlocks::parseRadius($attributes['style']['border']['radius'] ?? 0);
$ContentBorderRadius = BeeAddonsBlocks::parseRadius($attributes['style']['border']['radius'] ?? 0, true);

$block_wrapper_attributes = get_block_wrapper_attributes();
//dd($content);
?>

<div <?php echo $block_wrapper_attributes; ?>>
	<?php if (!empty($attributes['MediaId'])): ?>
		<div class="media-wrapper">
			<?php echo wp_get_attachment_image($attributes['MediaId'], 'large', '', [
				'style' => "border-radius: $MediaBorderRadius;"
			]) ?>
		</div>
	<?php endif; ?>

	<div class="content-wrapper"
		 style="
			 background-color: <?php echo $attributes['InnerTextBackground'] ?>;
			 border-radius: <?php echo $ContentBorderRadius ?>;
			 padding: <?php echo $attributes['InnerTextPadding'] ?>px;
			 backdrop-filter: blur(<?php echo $attributes['InnerTextPadding'] ?>px);
		 "
	>
		<?php echo $content; ?>
	</div>
</div>

