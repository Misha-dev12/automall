<template>
	<div class="air-filter__container">
		<div v-if="selectedAirFilter">
			<ProductInfoCard :product-info="selectedAirFilter" />
			<div class="air-filter">
				<p>{{ selectedAirFilter.categoryName || 'Category not specified' }}</p>
				<ul class="air-filter__list">
					<li
						v-for="airFilter in airFilters"
						:key="airFilter.id"
						class="air-filter__item"
					>
						<ProductCard :product="airFilter" />
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState, mapActions } from 'pinia';
import { useCatalogStore } from '@/store/catalogStore';
import ProductCard from '@/components/ProductCard.vue';
import ProductInfoCard from '@/components/ProductInfoCard.vue';

export default {
	name: 'SingleAirFilterPage',
	components: { ProductCard, ProductInfoCard },
	computed: {
		...mapState(useCatalogStore, ['airFilters', 'getSelectedAirFilter']),
		selectedAirFilter() {
			return this.getSelectedAirFilter;
		}
	},
	watch: {
		'$route.params.id': {
			async handler() {
				await this.loadFilter();
			},
			immediate: true
		}
	},
	async created() {
		await this.loadFilter();
	},
	methods: {
		...mapActions(useCatalogStore, ['getAirFilterById']),
		async loadFilter() {
			await this.getAirFilterById(this.$route.params.id);
		}
	}
};
</script>

<style lang="scss" scoped>
.air-filter {
	p {
		font-size: font-rem(22);
		font-weight: 600;
		text-align: center;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 16px;
		padding: 32px 0;
	}
}
</style>
