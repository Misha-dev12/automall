<template>
	<div class="oil-filters__container">
		<div
			v-if="oilFilters?.length"
			class="oil-filters"
		>
			<h3>Air Filters</h3>
			<ul class="oil-filters__list">
				<li
					v-for="oilFilter in oilFilters"
					:key="oilFilter.id"
					class="oil-filters__item"
				>
					<ProductCard :product="oilFilter" />
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
	name: 'OilFiltersPage',
	components: { ProductCard },
	computed: {
		...mapState(useCatalogStore, ['categories']),
		oilFilters() {
			return this.categories['Oil Filters'] || [];
		}
	},
	async mounted() {
		if (!this.oilFilters.length) {
			await this.fetchCategories();
		}
	},
	methods: {
		...mapActions(useCatalogStore, ['fetchCategories'])
	}
};
</script>

<style lang="scss" scoped>
.oil-filters {
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
