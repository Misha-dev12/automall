<template>
	<div class="auth">
		<h1 class="auth__title">{{ title }}</h1>
		<div class="auth__content">
			<RouterView />
		</div>
	</div>
</template>

<script>
export default {
	name: 'AuthLayout',
	computed: {
		title() {
			return this.$route.path.includes('login') ? 'Log in' : 'Registration';
		}
	}
};
</script>

<style lang="scss" scoped>
.auth {
	font-size: font-rem(20);
	background-color: $dark-blue;
	padding: 20px;
	height: 100vh;
	width: 100vw;
	display: flex;
	gap: 20px;
	flex-direction: column;
	justify-content: center;

	// .auth__title
	&__title {
		font-weight: 500;
		color: $white;
		text-align: center;
	}
	// .auth__content
	&__content {
		background-color: $white;
		border-radius: 5px;
		box-shadow: 0 0 2px 0 $bg-card;
		padding: 20px;
		min-width: 35%;
		margin: 0 auto;
	}
}
</style>
