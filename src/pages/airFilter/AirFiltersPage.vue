<template>
	<div class="air-filters__container">
		<div
			v-if="airFilters?.length"
			class="air-filters"
		>
			<h3>Air Filters</h3>
			<ul class="air-filters__list">
				<li
					v-for="airFilter in airFilters"
					:key="airFilter.id"
					class="air-filters__item"
				>
					<ProductCard :product="airFilter" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCatalogStore } from '@/store/catalogStore';
import ProductCard from '@/components/ProductCard.vue';

export default {
	name: 'AirFiltersPage',
	components: { ProductCard },
	computed: {
		...mapState(useCatalogStore, ['categories']),
		airFilters() {
			return this.categories['Air Filters'] || [];
		}
	},
	async mounted() {
		if (!this.airFilters.length) {
			await this.fetchCategories();
		}
	},
	methods: {
		...mapActions(useCatalogStore, ['fetchCategories'])
	}
};
</script>

<style lang="scss" scoped>
.air-filters {
	h3 {
		padding: 20px 0;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(285px, 1fr));
		gap: 16px;
		margin-bottom: 20px;
	}
}
</style>
