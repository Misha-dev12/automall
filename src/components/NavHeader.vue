<template>
	<nav class="nav">
		<ul class="nav__list">
			<li
				v-for="(item, idx) in navHeader"
				:key="idx"
			>
				<RouterLink
					:to="item.route"
					:exact-active-class="item.exact && 'nav__link--active'"
					active-class="nav__link--active"
					class="nav__link"
					@click="handleMenuClick"
				>
					{{ item.name }}
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<script>
import { navHeader } from '@/blocks/header/navHeaderData';

export default {
	name: 'NavHeader',
	emits: ['menu-item-click'],
	data() {
		return {
			navHeader
		};
	},
	methods: {
		handleMenuClick() {
			this.$emit('menu-item-click');
		}
	}
};
</script>

<style lang="scss" scoped>
.nav {
	@include b-down(lg) {
		position: absolute;
		top: -100vh;
		left: 0;
		width: 100%;
		height: calc(100vh - 32px);
		display: flex;
		align-items: start;
		justify-content: space-between;
		padding: 60px 16px;
		background-color: $dark-blue;
		transition: 0.2s;
		overflow-y: auto;
		overflow-x: hidden;
		flex-direction: column;
		z-index: 100;
	}
	&__list {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 20px;
		transition: 0.3s;
		width: 100%;

		@include b-up(xl) {
			flex-direction: row;
			gap: 50px;
		}
		@include b-up(xxl) {
			gap: 70px;
		}
	}
	&__link {
		text-transform: uppercase;
		font-size: 16px;
		font-weight: 600;
		transition: $time;
		color: $white;
		@include hover {
			color: $orange;
		}
		&--active {
			color: $orange;
		}
	}
}
</style>
