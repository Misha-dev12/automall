<template>
	<header
		:class="{ 'nav--open': isOpen }"
		class="header"
	>
		<div class="header__container">
			<div class="header__inner">
				<div class="header__wrap">
					<button
						type="button"
						class="header__burger"
						@click.stop="toggleMenu"
					>
						<MenuIcon fill-color=" #ea6520 " />
					</button>
					<div class="header__logo">
						<RouterLink :to="{ name: 'HomePage' }">
							<img
								src="@/assets/images/logo.png"
								alt="logo"
								title="logo"
								@click="closeMenu"
							/>
						</RouterLink>
					</div>

					<div class="header__nav">
						<NavHeader @menu-item-click="toggleMenu" />
					</div>
				</div>
				<div class="header__right">
					<RouterLink
						:to="{ name: 'FavoritePage' }"
						@click="closeMenu"
					>
						<div class="header__favorite">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
								class="header__favorite-icon"
							>
								<path
									fill-rule="evenodd"
									d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
									clip-rule="evenodd"
								/>
							</svg>
							<span class="header__favorite-count">{{ favoritesCount }}</span>
						</div>
					</RouterLink>
					<RouterLink
						:to="{ name: 'CartPage' }"
						@click="closeMenu"
					>
						<div class="header__favorite">
							<svg
								viewBox="0 0 508 508"
								class="header__cart-icon"
							>
								<path
									d="M18 2c26.3 0 50.6 9.8 69.3 26.2 18.2 16 31 38.3 34.7 63.7l.1.8.1.8 1.9 17.6H490c4.8 0 9.4 2.2 12.4 5.9 2.9 3.5 4.1 8.1 3.4 12.6l-.1.4-14.9 71.4c-.8 3.7-2.8 6.9-5.6 9.1-2.8 2.3-6.3 3.6-10.1 3.6-1.1 0-2.2-.1-3.3-.3-4.3-.9-7.9-3.5-10.1-6.9-2.1-3.2-3.1-7.2-2.4-11.2l.1-.4 10.9-52.2H127.6l18.7 172h244c10.5 0 20.8-3.5 29.6-9.5 8.7-6 16-14.6 20.5-24.9 1.8-4 5-7 8.8-8.5 3.8-1.5 8.2-1.5 12.2.3s7 5 8.5 8.8c1.5 3.8 1.5 8.2-.3 12.2-7.1 16.3-18.5 29.7-32.4 39-13.4 9-29 14.2-45.4 14.5H135c-6.6 0-12.6 2.7-17 7s-7 10.3-7 17c0 7.7 2.7 13.6 7 18 4.1 4.1 9.8 6.8 16 7h263c15.2 0 28.9 6.2 38.9 16.1 10 10 16.1 23.7 16.1 38.9s-6.2 28.9-16.1 38.9c-10 10-23.7 16.1-38.9 16.1s-28.9-6.2-38.9-16.1c-10-10-16.1-23.7-16.1-38.9 0-6.6 1.2-13 3.3-18.9l.3-.7 1.3-3.4h-98c3.2 7 5 14.8 5 23 0 15.2-6.2 28.9-16.1 38.9-10 10-23.7 16.1-38.9 16.1s-28.9-6.2-38.9-16.1c-10-10-16.1-23.7-16.1-38.9 0-6.6 1.2-13 3.3-18.9l.3-.7 1.3-3.4H135c-15.4 0-29.4-6.3-39.6-16.4S79 387.4 79 372c0-12.1 3.3-22.5 8.9-31.3 5.8-9 14.2-16.3 24.1-20.8l.6-.3 2-.8L90.5 97.4c-2.4-18.1-11.4-34-24.4-45.3C53.2 40.8 36.2 34 18 34c-4.4 0-8.4-1.8-11.3-4.7S2 22.4 2 18 3.8 9.6 6.7 6.7 13.6 2 18 2zm379 426c-6.3 0-12.1 2.6-16.3 6.7-4.2 4.2-6.7 9.9-6.7 16.3s2.6 12.1 6.7 16.3c4.2 4.2 9.9 6.7 16.3 6.7s12.1-2.6 16.3-6.7c4.2-4.2 6.7-9.9 6.7-16.3s-2.6-12.1-6.7-16.3c-4.2-4.1-10-6.7-16.3-6.7zm-198 0c-6.3 0-12.1 2.6-16.3 6.7-4.2 4.2-6.7 9.9-6.7 16.3s2.6 12.1 6.7 16.3c4.2 4.2 9.9 6.7 16.3 6.7s12.1-2.6 16.3-6.7c4.2-4.2 6.7-9.9 6.7-16.3 0-6.3-2.6-12.1-6.7-16.3-4.2-4.1-10-6.7-16.3-6.7z"
									fill="#374250"
								/>
							</svg>
						</div>
					</RouterLink>
					<div class="header__login">
						<div @click="toggleLogoutMenu">
							<span
								v-if="isLoggedIn"
								class="header__login-initials"
							>
								{{ userInitials }}
							</span>
							<RouterLink
								v-else
								:to="{ name: 'LoginPage' }"
								class="header__login-link"
								@click="closeMenu"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="header__login-icon"
								>
									<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
									<polyline points="10 17 15 12 10 7" />
									<line
										x1="15"
										y1="12"
										x2="3"
										y2="12"
									/>
								</svg>
							</RouterLink>
						</div>
						<div
							v-if="showLogout"
							class="header__logout-menu"
						>
							<button
								type="button"
								@click="handleLogout"
							>
								Logout
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useFavoritesStore } from '@/store/favoritesStore';
import { useAuthStore } from '@/store/authStore';
import MenuIcon from 'vue-material-design-icons/Menu.vue';
import NavHeader from '@/components/NavHeader.vue';

export default {
	name: 'TheHeader',
	components: { MenuIcon, NavHeader },
	props: {
		isOpen: {
			type: Boolean,
			required: true
		}
	},
	emits: ['on-toggle'],
	data() {
		return {
			showLogout: false
		};
	},
	computed: {
		...mapActions(useFavoritesStore, ['favoritesCount']),
		...mapState(useAuthStore, {
			isLoggedIn: state => state.isLoggedIn,
			userInitials: state => state.userInitials
		})
	},
	watch: {
		isLoggedIn(newVal) {
			if (!newVal) {
				this.closeLogoutMenu();
			}
		}
	},
	mounted() {
		document.addEventListener('click', this.handleClickOutside);
		window.addEventListener('resize', this.handleResize);
		this.$router.afterEach(() => {
			document.body.classList.remove('no-scroll');
		});
	},
	beforeUnmount() {
		document.removeEventListener('click', this.handleClickOutside);
		window.removeEventListener('resize', this.handleResize);
	},
	methods: {
		...mapActions(useAuthStore, ['logOut']),
		toggleLogoutMenu() {
			this.showLogout = !this.showLogout;
		},
		async handleLogout() {
			await this.logOut(); // Виклик дії для виходу
			this.closeMenu(); // Закриття бургер-меню
		},
		handleClickOutside(event) {
			const logoutMenu = this.$el.querySelector('.header__logout-menu');
			const loginButton = this.$el.querySelector('.header__login');
			if (logoutMenu && !logoutMenu.contains(event.target) && !loginButton.contains(event.target)) {
				this.showLogout = false;
			}
		},
		closeLogoutMenu() {
			this.showLogout = false;
		},
		toggleMenu() {
			this.$emit('on-toggle');
			if (!this.isOpen) {
				document.body.classList.add('no-scroll');
			} else {
				document.body.classList.remove('no-scroll');
			}
		},
		closeMenu() {
			if (this.isOpen) {
				this.$emit('on-toggle');
				document.body.classList.remove('no-scroll');
			}
		},
		handleResize() {
			if (window.innerWidth > 1200 && this.isOpen) {
				this.$emit('on-toggle');
				document.body.classList.remove('no-scroll');
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	padding: 10px 0;
	background-color: $dark-blue;
	position: relative;
	@include b-up(md) {
		padding: 20px 0;
	}
	&.nav--open {
		.nav {
			top: 100%;
		}
	}
	&__inner {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}
	// .header__wrap
	&__wrap {
		display: flex;
		align-items: center;
		flex-grow: 1;
		gap: 15px;
		@include b-up(xl) {
			flex-direction: row;
		}
	}
	// .header__burger
	&__burger {
		width: 40px;
		height: 40px;
		transition: $time;
		border-radius: 50%;

		@include b-up(xl) {
			display: none;
		}
	}
	// .header__logo
	&__logo {
		flex-grow: 1;
		a {
			display: block;
			width: 110px;
			height: 40px;
			@include b-up(md) {
				width: 215px;
				height: 55px;
			}
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
	// .header__nav
	&__nav {
		flex-grow: 1;
	}
	&__right {
		display: flex;
		align-items: center;
		gap: 20px;
		@include b-up(md) {
			gap: 25px;
		}
	}
	&__favorite {
		position: relative;
	}
	&__favorite-count {
		position: absolute;
		color: $orange;
		left: 28px;
		top: -6px;
	}
	&__favorite-icon {
		width: 28px;
		height: 28px;
		fill: none;
		stroke: $white;
		stroke-width: 2;
		transition: $time;
		@include hover {
			stroke: $orange;
		}
	}
	// .header__login
	&__login {
		position: relative;
		@include b-up(md) {
			margin-left: 25px;
		}
	}
	&__login-icon {
		color: $white;
		width: 25px;
		height: 25px;
		transition: $time;
		@include b-up(md) {
			width: 26px;
			height: 26px;
		}
		@include hover {
			color: $orange;
		}
	}
	&__cart-icon {
		color: $white;
		width: 25px;
		height: 25px;
		transition: $time;
		@include b-up(md) {
			width: 26px;
			height: 26px;
		}
		@include hover {
			color: $orange;
		}
	}
	&__login-initials {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: $orange;
		width: 40px;
		height: 40px;
		border-radius: 50%;
		color: $white;
		cursor: pointer;
	}
	&__logout-menu {
		position: absolute;
		right: 0;
		background: white;
		border: 1px solid #ddd;
		padding: 10px;
		box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
		z-index: 100;
		button {
			background: none;
			border: none;
			color: #ea6520;
			cursor: pointer;
			font-size: 16px;
		}
	}
}
</style>
