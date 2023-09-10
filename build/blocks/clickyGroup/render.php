<?php
use BeeAddonsBlocks\BeeAddonsBlocks;
	$blockGap = BeeAddonsBlocks::convert_custom_properties($attributes['style']['spacing']['blockGap'] ?? 0);
	$blockWrapperAttributes = get_block_wrapper_attributes([
		'style' => 'gap: ' . $blockGap . '; justify-content: ' . $attributes['justifyContent']
	]);
?>
<div <?php echo $blockWrapperAttributes ?>>
	<?php echo $content; ?>
</div>
