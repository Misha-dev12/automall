<template>
	<div class="page">
		<div class="page__content">
			<TheHeader
				:is-open="isNavOpen"
				@on-toggle="isNavOpen = !isNavOpen"
			/>
			<main class="page__main">
				<RouterView />
			</main>
			<TheFooter />
		</div>
	</div>
</template>

<script>
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/blocks/header/TheHeader.vue';

export default {
	name: 'MainLayout',
	components: { TheHeader, TheFooter },
	data() {
		return {
			isNavOpen: false
		};
	}
};
</script>

<style lang="scss" scoped>
.page {
	// .page__content
	&__content {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		position: relative;
	}
	// .page__main
	&__main {
		background-color: $page-bg;
		flex: 1 1 auto;
	}
}
</style>
