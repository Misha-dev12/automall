<template>
	<div
		class="favorite-icon"
		@click="toggleFavorite"
	>
		<svg
			:class="isFavorite ? 'favorite-icon--active' : ''"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			class="favorite-icon__heart"
		>
			<path
				fill-rule="evenodd"
				d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
				clip-rule="evenodd"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'AddToFavoritesButton',
	props: {
		itemId: {
			type: [Number, String],
			required: true
		},
		initialFavoriteStatus: {
			type: Boolean,
			default: false
		}
	},
	emits: ['update-favorite'],
	data() {
		return {
			isFavorite: this.initialFavoriteStatus
		};
	},
	watch: {
		initialFavoriteStatus(newVal) {
			this.isFavorite = newVal;
		}
	},
	methods: {
		toggleFavorite() {
			this.isFavorite = !this.isFavorite;
			this.$emit('update-favorite', this.itemId, this.isFavorite);
		}
	}
};
</script>

<style lang="scss" scoped>
.favorite-icon {
	display: inline-flex;
	cursor: pointer;
	// .favorite-icon__heart
	&__heart {
		width: 24px;
		height: 24px;
		transition: fill 0.3s ease;
	}
	&--active {
		fill: #ea6520;
	}
	&__heart:not(.favorite-icon--active) {
		fill: none;
		stroke: #ea6520;
		stroke-width: 2;
	}
}
</style>
