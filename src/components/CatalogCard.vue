<template>
	<div class="catalog-card">
		<RouterLink
			:to="catalogCard.route"
			:exact-active-class="catalogCard.exact && 'catalog-card__link--active'"
			active-class="catalog-card__link--active"
			class="catalog-card__link"
		>
			<div class="catalog-card__img">
				<img
					:src="catalogCard.icon"
					alt="catalog-card icon"
				/>
			</div>
			<p class="catalog-card__name">{{ catalogCard.name }}</p>
			<p class="catalog-card__count">{{ catalogCard.productCount }} pcs.</p>
		</RouterLink>
	</div>
</template>

<script>
export default {
	name: 'CatalogCard',
	props: {
		catalogCard: {
			type: Object,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
.catalog-card {
	display: flex;
	justify-content: center;
	gap: 20px;
	box-shadow: 2px 2px 8px 0px rgba(0, 0, 0, 0.52);
	border-radius: 10px;
	background-color: $white;
	padding: 10px;
	@include hover {
		img {
			scale: 1.1;
		}
	}
	&__link {
		display: flex;
		flex-direction: column;
		align-items: center;
		transition: $time;
		@include hover {
			color: $orange;
		}
		&--active {
			background-color: $light-grey;
			color: $orange;
		}
	}
	&__img {
		overflow: hidden;
		width: 100px;
		height: 100px;
		padding: 15px;
		object-fit: cover;
		img {
			transition: $time;
			width: 100%;
			height: 100%;
		}
	}
	&__count {
		margin-top: 10px;
		font-size: 14px;
		color: $grey-dark;
	}
}
</style>
