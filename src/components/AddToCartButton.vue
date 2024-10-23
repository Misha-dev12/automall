<template>
	<div
		class="cart-icon"
		@click="addToCart"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="cart-icon__basket"
		>
			<path
				d="M7 4h10l1.5 8.5H5.5L7 4zm1-2a1 1 0 0 0-1 1v1H4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1.2l1.5 8.5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1l1-6a1 1 0 0 0-1-1h-1.5l-1.5-8.5A1 1 0 0 0 17 2H8a1 1 0 0 0-1-1zM8 6h8l1 5H7l1-5z"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'AddToCartButton',
	props: {
		itemId: {
			type: [Number, String],
			required: true
		}
	},
	emits: ['add-to-cart'],
	methods: {
		addToCart() {
			this.$emit('add-to-cart', this.itemId);
		}
	}
};
</script>

<style lang="scss" scoped>
.cart-icon {
	display: inline-flex;
	cursor: pointer;

	&__basket {
		width: 24px;
		height: 24px;
		transition: fill 0.3s ease;
	}
}
</style>
