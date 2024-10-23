<template>
	<div class="home">
		<div class="home__banner">
			<div class="home__bg">
				<img
					:src="homeImg"
					alt="Home background image"
				/>
			</div>
			<div class="home__container">
				<div class="home__title">
					<h1>
						Large selection of
						<span>auto parts</span>
					</h1>
				</div>
			</div>
		</div>

		<div class="home__container">
			<ul
				v-if="randomProducts.length"
				class="home__list"
			>
				<li
					v-for="product in randomProducts"
					:key="product.id"
					class="home__item"
				>
					<ProductCard :product="product" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import { mapState } from 'pinia';
import { useCatalogStore } from '@/store/catalogStore';
import homeImg from '@/assets/images/bg.jpg';
import ProductCard from '@/components/ProductCard.vue';

export default {
	name: 'HomePage',
	components: { ProductCard },
	data() {
		return {
			homeImg,
			randomProducts: []
		};
	},
	computed: {
		...mapState(useCatalogStore, ['categories'])
	},
	async created() {
		const catalogStore = useCatalogStore();
		await catalogStore.fetchCategories();
		this.selectRandomProducts(12);
	},
	methods: {
		selectRandomProducts(count) {
			const allProducts = Object.values(this.categories).flat();
			const shuffled = allProducts.sort(() => 0.5 - Math.random());
			this.randomProducts = shuffled.slice(0, count);
		}
	}
};
</script>

<style lang="scss" scoped>
.home {
	&__banner {
		position: relative;
		min-height: 250px;
		@include b-up(md) {
			min-height: 350px;
		}
	}
	// .home__bg
	&__bg {
		position: absolute;
		top: 0;
		height: 100%;
		right: 0;
		left: 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	&__title {
		position: relative;
		font-weight: 800;
		padding-top: 50px;
		color: $white;
		@include b-up(md) {
			padding-top: 80px;
		}
	}
	span {
		display: block;
		color: $orange;
	}
	&__list {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 16px;
		padding: 32px 0;
	}
}
</style>
