<template>
	<div
		v-if="productInfo && productInfo.name"
		class="product-info"
	>
		<div class="product-info__img">
			<img
				:src="productInfo.image_url"
				:alt="productInfo.name"
				:title="productInfo.name"
			/>
		</div>
		<div class="product-info__info">
			<div class="product-info__wrap">
				<p
					:class="productInfo.stock_status === 'In Stock' ? 'in-stock' : 'out-of-stock'"
					class="product-info__status"
				>
					{{ productInfo.stock_status }}
				</p>
				<AddToFavoritesButton
					:item-id="productInfo.id"
					:initial-favorite-status="isFavorite(productInfo.id)"
					@update-favorite="updateFavoriteStatus"
				/>
			</div>
			<h2 class="product-info__name">{{ productInfo.name }}</h2>

			<p class="product-info__description">{{ productInfo.description }}</p>
			<p class="product-info__vehicle">
				Vehicle compatibility: {{ productInfo.vehicle_compatibility.join(', ') }}
			</p>
			<p>Manufacturer: {{ productInfo.manufacturer }}</p>
			<div class="product-info__block">
				<p
					:class="{ 'not-active': productInfo.stock_status === 'Out of Stock' }"
					class="product-info__price"
				>
					{{ productInfo.price }} {{ productInfo.currency }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useFavoritesStore } from '@/store/favoritesStore';
import AddToFavoritesButton from './AddToFavoritesButton.vue';

export default {
	name: 'ProductInfoCard',
	components: { AddToFavoritesButton },
	props: {
		productInfo: {
			type: Object,
			required: true
		}
	},
	computed: {
		...mapState(useFavoritesStore, ['favorites']),
		isFavorite() {
			return id => this.favorites.some(fav => fav.id === id);
		}
	},
	methods: {
		...mapActions(useFavoritesStore, ['updateFavorite']),
		updateFavoriteStatus(itemId, isFavorite) {
			this.updateFavorite({ item: this.productInfo, isFavorite });
		}
	}
};
</script>

<style lang="scss" scoped>
.product-info {
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 40px;
	padding: 20px;
	@include b-up(md) {
		padding: 20px;
		flex-direction: row;
	}
	// .product-info__img
	&__img {
		width: 300px;
		height: 300px;
		padding: 30px;
		background-color: $white;
		border-radius: 10px;
		@include b-up(md) {
			width: 350px;
			height: 350px;
		}
		@include b-up(lg) {
			width: 400px;
			height: 400px;
		}
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: 8px;
		}
	}
	// .product-info__info
	&__info {
		display: flex;
		flex-direction: column;
		gap: 15px;
	}
	// .product-info__wrap
	&__wrap {
		display: flex;
		justify-content: space-between;
	}

	// .product-info__description
	&__description {
		font-size: 16px;
	}
	// .product-info__block
	&__block {
		margin-top: 20px;
	}
	// .product-info__price
	&__price {
		font-size: 28px;
		font-weight: 700;
		&.not-active {
			opacity: 0.2;
		}
	}
	// .product-info__status
	&__status {
		font-weight: 700;
		&.in-stock {
			color: green;
		}

		&.out-of-stock {
			color: red;
		}
	}
	// .product-info__origin-name
	&__origin-name {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
	// .product-info__link
	&__link {
		font-size: font-rem(14);
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
