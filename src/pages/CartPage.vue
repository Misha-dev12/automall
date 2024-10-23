<template>
	<div class="cart">
		<h1>My cart</h1>
		<ul
			v-if="cartItems.length > 0"
			class="cart__list"
		>
			<li
				v-for="item in cartItems"
				:key="item.id"
				class="cart__item"
			>
				<FavoriteCard
					v-if="item.name"
					:favorite="item"
				/>
			</li>
		</ul>
		<p
			v-else
			class="cart__empty"
		>
			Your cat is empty!
		</p>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCartStore } from '@/store/cartStore';
import FavoriteCard from '@/components/FavoriteCard.vue';

export default {
	name: 'CartPage',
	components: { FavoriteCard },
	computed: {
		...mapState(useCartStore, ['cartItems'])
	},
	created() {
		this.fetchCart();
	},
	methods: {
		...mapActions(useCartStore, ['fetchCart'])
	}
};
</script>

<style lang="scss" scoped>
.cart {
	h1 {
		text-align: center;
		margin: 20px;
	}

	&__list {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 10px;
	}

	&__empty {
		text-align: center;
	}
}
</style>
