<template>
	<div class="product">
		<AddToFavoritesButton
			:item-id="product.id"
			:initial-favorite-status="isFavorite(product.id)"
			@update-favorite="updateFavoriteStatus"
		/>
		<RouterLink
			:to="productRoute()"
			class="product__link"
		>
			<div class="product__image">
				<img
					:src="product.image_url"
					:alt="product.name"
					:title="product.name"
				/>
			</div>
			<div class="product__content">
				<h4 class="product__name">{{ product.name }}</h4>
				<p class="product__description">{{ product.description }}</p>
				<div class="product__block">
					<p
						:class="{ 'not-active': product.stock_status === 'Out of Stock' }"
						class="product__price"
					>
						{{ product.price }} {{ product.currency }}
					</p>
					<p
						:class="product.stock_status === 'In Stock' ? 'in-stock' : 'out-of-stock'"
						class="product__status"
					>
						{{ product.stock_status }}
					</p>
				</div>
			</div>
		</RouterLink>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useFavoritesStore } from '@/store/favoritesStore';
import AddToFavoritesButton from './AddToFavoritesButton.vue';

export default {
	name: 'ProductCard',
	components: { AddToFavoritesButton },
	props: {
		product: {
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
			this.updateFavorite({ item: this.product, isFavorite });
		},
		productRoute() {
			const categoryRoutes = {
				Batteries: 'SingleBatteryPage',
				'Air Filters': 'SingleAirFilterPage',
				Oils: 'SingleOilPage',
				'Oil Filters': 'SingleOilFilterPage'
			};
			const routeName = categoryRoutes[this.product.category];
			return routeName ? { name: routeName, params: { id: this.product.id } } : '#';
		}
	}
};
</script>

<style lang="scss" scoped>
.product {
	background-color: $white;
	padding: 16px 16px 25px;
	transition: $time;
	border-radius: 10px;

	height: 100%;
	@include hover {
		box-shadow:
			0 0 1px rgba(21, 34, 66, 0.12),
			0 2px 8px rgba(21, 34, 66, 0.12);
		img {
			scale: 1.1;
		}
		.product__name {
			color: $orange;
		}
	}
	// .product__link
	&__link {
		display: flex;
		flex-direction: column;
		gap: 15px;
		color: $black;
	}
	// .product__image
	&__image {
		img {
			width: 200px;
			height: 200px;
			object-fit: contain;
			transition: $time;
			margin: 0 auto;
		}
	}
	// .product__content
	&__content {
		display: flex;
		flex-direction: column;
		gap: 16px;
	}
	// .product__name
	&__name {
		font-size: font-rem(16);
		font-weight: 800;
		text-align: center;
		transition: $time;
	}
	// .product__description
	&__description {
		text-align: center;
		margin-bottom: 10px;
	}
	// .product__block
	&__block {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	// .product__price
	&__price {
		font-size: 18px;
		font-weight: 800;
		&.not-active {
			opacity: 0.2;
		}
	}
	// .product__status
	&__status {
		font-weight: 700;
		&.in-stock {
			color: $green;
		}
		&.out-of-stock {
			color: $red;
		}
	}
}
</style>
