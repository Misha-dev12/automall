<template>
	<div class="oil-filter__container">
		<div v-if="selectedOilFilter">
			<ProductInfoCard :product-info="selectedOilFilter" />
			<div class="oil-filter">
				<p>{{ selectedOilFilter.categoryName || 'Category not specified' }}</p>
				<ul class="oil-filter__list">
					<li
						v-for="oilFilter in oilFilters"
						:key="oilFilter.id"
						class="oil-filter__item"
					>
						<ProductCard :product="oilFilter" />
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
	name: 'SingleOilFilterPage',
	components: { ProductCard, ProductInfoCard },
	computed: {
		...mapState(useCatalogStore, ['oilFilters', 'getSelectedOilFilter']),
		selectedOilFilter() {
			return this.getSelectedOilFilter;
		}
	},
	watch: {
		'$route.params.id': {
			async handler() {
				await this.loadOilFilter();
			},
			immediate: true
		}
	},
	async created() {
		await this.loadOilFilter();
	},
	methods: {
		...mapActions(useCatalogStore, ['getOilFilterById']),
		async loadOilFilter() {
			await this.getOilFilterById(this.$route.params.id);
		}
	}
};
</script>

<style lang="scss" scoped>
.oil-filter {
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
