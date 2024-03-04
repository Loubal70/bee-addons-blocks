<?php
$block_wrapper_attributes = get_block_wrapper_attributes([
	'style' => 'text-align: center; margin-top: -2rem',
]);
?>

<style>
	@keyframes bounce {
		0%, 10% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(<?php echo $attributes['TranslateAnimation']; ?>px);
		}
		100% {
			transform: translateY(0);
		}
	}
</style>


<div <?php echo $block_wrapper_attributes; ?>>
	<?php echo $content; ?>
	<svg class="bee-arrow" xmlns="http://www.w3.org/2000/svg" width="33.334" height="16.519" viewBox="0 0 33.334 16.519">
		<g id="Groupe_1866" data-name="Groupe 1866" transform="translate(734.534 -311.027) rotate(90)">
			<g id="noun-back-1270512" transform="translate(326.138 732.059) rotate(180)">
				<path id="Tracé_74" data-name="Tracé 74" d="M14.111,24.946,3.528,14.489,14.111,3.654V0L0,14.615,14.111,28.474Z" transform="translate(0 0)" fill="#efefef" stroke="#efefef" stroke-width="2"/>
			</g>
		</g>
	</svg>
</div>


<script defer>
	const scrollButtons = document.querySelectorAll(".wp-block-bee-addons-blocks-scroll-down");
	scrollButtons.forEach(function(button) {
		button.addEventListener("click", function() {
			window.scrollBy({
				top: <?php echo $attributes['scroll'] ?? 100; ?>,
				behavior: 'smooth'
			});
		});
	});
</script>
