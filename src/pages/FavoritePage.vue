<template>
	<div class="favorites">
		<div class="favorites__container">
			<h1>Wish list</h1>
			<ul
				v-if="favoriteProducts.length > 0"
				class="favorites__list"
			>
				<li
					v-for="product in favoriteProducts"
					:key="product.id"
					class="favorites__item"
				>
					<FavoriteCard :favorite="product" />
				</li>
			</ul>
			<p
				v-else
				class="favorites__no-favorite"
			>
				No favorite products yet!
			</p>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useFavoritesStore } from '@/store/favoritesStore';
import FavoriteCard from '@/components/FavoriteCard.vue';

export default {
	name: 'FavoritesPage',
	components: { FavoriteCard },
	computed: {
		...mapState(useFavoritesStore, ['favorites']),
		favoriteProducts() {
			return this.favorites;
		}
	},
	created() {
		this.fetchFavorites();
	},
	methods: {
		...mapActions(useFavoritesStore, ['fetchFavorites'])
	}
};
</script>

<style lang="scss" scoped>
.favorites {
	h1 {
		text-align: center;
		margin: 20px;
	}
	// .favorites__list
	&__list {
		display: grid;
		grid-template-columns: repeat(1, 1fr);
		gap: 10px;
		margin-bottom: 20px;
	}
	// .favorites__no-favorite
	&__no-favorite {
		text-align: center;
	}
}
</style>
