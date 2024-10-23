<template>
	<div
		v-if="favorite && favorite.name"
		class="favorite"
	>
		<div class="favorite__left">
			<button
				type="button"
				class="favorite__remove-button"
				@click="removeFromFavorites"
			>
				<svg
					viewBox="0 0 512 512"
					class="favorite__remove-icon"
				>
					<path
						d="M469.3 85.3H362.6v-64c0-11.8-9.5-21.3-21.3-21.3H170.7c-11.8 0-21.3 9.6-21.3 21.3v64H42.7c-11.8 0-21.3 9.6-21.3 21.3S30.9 128 42.7 128H64v320c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V128h21.3c11.8 0 21.3-9.6 21.3-21.3s-9.5-21.4-21.3-21.4zM192 42.7h128v42.7H192V42.7zM405.3 448c0 11.8-9.6 21.3-21.3 21.3H128c-11.8 0-21.3-9.6-21.3-21.3V128h298.7l-.1 320z"
						fill="#606975"
					/>
					<path
						d="M192 170.7c-11.8 0-21.3 9.6-21.3 21.3v192c0 11.8 9.5 21.3 21.3 21.3s21.3-9.6 21.3-21.3V192c0-11.8-9.5-21.3-21.3-21.3zM320 170.7c-11.8 0-21.3 9.6-21.3 21.3v192c0 11.8 9.5 21.3 21.3 21.3s21.3-9.6 21.3-21.3V192c0-11.8-9.5-21.3-21.3-21.3z"
						fill="#606975"
					/>
				</svg>
			</button>
			<div class="favorite__img">
				<img
					:src="favorite.image_url"
					:alt="favorite.name"
					:title="favorite.name"
				/>
			</div>
			<RouterLink :to="getProductRoute()">
				<div class="favorite__description">
					<h4 class="favorite__name">{{ favorite.name }}</h4>
					<p>{{ favorite.description }}</p>
				</div>
			</RouterLink>
		</div>

		<p class="favorite__price">{{ favorite.price }} {{ favorite.currency }}</p>
	</div>
</template>

<script>
import { mapActions } from 'pinia';
import { useFavoritesStore } from '@/store/favoritesStore';

export default {
	name: 'FavoriteCard',

	props: {
		favorite: {
			type: Object,
			required: true
		}
	},
	methods: {
		...mapActions(useFavoritesStore, ['updateFavorite']),
		removeFromFavorites() {
			this.updateFavorite({ item: this.favorite, isFavorite: false });
		},
		getProductRoute() {
			const category = this.favorite.category;
			switch (category) {
				case 'Batteries':
					return { name: 'SingleBatteryPage', params: { id: this.favorite.id } };
				case 'Oils':
					return { name: 'SingleOilPage', params: { id: this.favorite.id } };
				case 'Oil Filters':
					return { name: 'SingleOilFilterPage', params: { id: this.favorite.id } };
				case 'Air Filters':
					return { name: 'SingleAirFilterPage', params: { id: this.favorite.id } };
				default:
					return '#';
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.favorite {
	display: flex;
	justify-content: space-between;
	gap: 5px;
	align-items: center;
	box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.52);
	border-radius: 10px;
	background-color: hsl(0, 0%, 100%);
	padding: 10px 20px;
	flex-direction: column;
	@include b-up(md) {
		flex-direction: row;
	}
	&__left {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 5px;
		@include b-up(md) {
			flex-direction: row;
		}
	}
	// .favorite__img
	&__img {
		width: 100px;
		height: 100px;
		padding: 10px;
		background-color: $white;
		border-radius: 10px;
		img {
			width: 100%;
			height: 100%;
			object-fit: contain;
			border-radius: 8px;
		}
	}
	// .favorite__info
	&__info {
		display: flex;
		align-items: center;
		gap: 15px;
	}
	// .favorite__wrap
	&__wrap {
		display: flex;
		justify-content: space-between;
	}
	// .favorite__description
	&__description {
		transition: $time;
		text-align: center;
		@include b-up(md) {
			text-align: left;
		}
		@include hover {
			.favorite__name {
				color: $orange;
			}
		}
	}
	// .favorite__name
	&__name {
		transition: $time;
		max-width: 410px;
	}

	// .favorite__block
	&__block {
		margin-top: 20px;
	}
	// .favorite__price
	&__price {
		font-size: 24px;
		font-weight: 700;
		&.not-active {
			opacity: 0.2;
		}
	}
	&__remove-button {
		background: transparent;
		border: none;
		cursor: pointer;
		@include hover {
			.favorite__remove-icon {
				color: $orange;
			}
		}
	}
	&__remove-icon {
		color: $black;
		width: 20px;
		height: 20px;
		transition: $time;
	}
}
</style>
