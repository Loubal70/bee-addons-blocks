<?php
$block_wrapper_attributes = get_block_wrapper_attributes([
	'style' => 'padding-left:10px;'
]);
if ($attributes['linkedPost'] ?? null) {
	$post_uri = get_permalink($attributes['linkedPost']);
}
?>
<a href="<?php echo $post_uri ?? "#"; ?>" <?php echo $block_wrapper_attributes; ?> <?php echo $attributes['openInNewTab'] ? 'target="blank"' : '' ?>
><?php echo $attributes['labelText'] ?>
</a>
