import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/store/authStore';

const routes = [
	{
		path: '/',
		component: () => import('@/layouts/MainLayout.vue'),
		meta: {
			requiresAuth: true
		},
		children: [
			{
				path: '',
				name: 'HomePage',
				component: () => import('@/pages/HomePage.vue')
			},
			{
				path: 'catalog',
				children: [
					{
						path: '',
						name: 'CatalogPage',
						component: () => import('@/pages/CatalogPage.vue')
					}
				]
			},
			{
				path: 'oils',
				children: [
					{
						path: '',
						name: 'OilsPage',
						component: () => import('@/pages/oils/OilsPage.vue')
					},
					{
						path: ':id',
						name: 'SingleOilPage',
						component: () => import('@/pages/oils/SingleOilPage.vue')
					}
				]
			},
			{
				path: 'batteries',
				children: [
					{
						path: '',
						name: 'BatteriesPage',
						component: () => import('@/pages/batteries/BatteriesPage.vue')
					},
					{
						path: ':id',
						name: 'SingleBatteryPage',
						component: () => import('@/pages/batteries/SingleBatteryPage.vue')
					}
				]
			},
			{
				path: 'oils-filter',
				children: [
					{
						path: '',
						name: 'OilFiltersPage',
						component: () => import('@/pages/oilsFilter/OilFiltersPage.vue')
					},
					{
						path: ':id',
						name: 'SingleOilFilterPage',
						component: () => import('@/pages/oilsFilter/SingleOilFilterPage.vue')
					}
				]
			},
			{
				path: 'air-filter',
				children: [
					{
						path: '',
						name: 'AirFiltersPage',
						component: () => import('@/pages/airFilter/AirFiltersPage.vue')
					},
					{
						path: ':id',
						name: 'SingleAirFilterPage',
						component: () => import('@/pages/airFilter/SingleAirFilterPage.vue')
					}
				]
			},
			{
				path: 'about',
				children: [
					{
						path: '',
						name: 'AboutCompanyPage',
						component: () => import('@/pages/AboutCompanyPage.vue')
					}
				]
			},
			{
				path: 'cooperation',
				children: [
					{
						path: '',
						name: 'CooperationPage',
						component: () => import('@/pages/CooperationPage.vue')
					}
				]
			},
			{
				path: 'contacts',
				children: [
					{
						path: '',
						name: 'ContactsPage',
						component: () => import('@/pages/ContactsPage.vue')
					}
				]
			},
			{
				path: 'favorites',
				children: [
					{
						path: '',
						name: 'FavoritePage',
						component: () => import('@/pages/FavoritePage.vue')
					}
				]
			},
			{
				path: 'cart',
				children: [
					{
						path: '',
						name: 'CartPage',
						component: () => import('@/pages/CartPage.vue')
					}
				]
			}
		]
	},
	{
		path: '/auth',
		component: () => import('@/layouts/AuthLayout.vue'),
		redirect: { name: 'LoginPage' },
		children: [
			{
				path: 'login',
				name: 'LoginPage',
				component: () => import('@/pages/auth/LoginPage.vue')
			},
			{
				path: 'registration',
				name: 'RegistrationPage',
				component: () => import('@/pages/auth/RegistrationPage.vue')
			}
		]
	}
];
const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		} else {
			return { top: 0, behavior: 'smooth' };
		}
	}
});
router.beforeEach((to, from, next) => {
	const authStore = useAuthStore();
	//  Дозволяємо навігацію на HomePage для всіх користувачів
	if (to.name === 'HomePage') {
		return next();
	}
	// Якщо користувач не залогінений і сторінка вимагає авторизації - перенаправляємо на сторінку авторизації
	if (!authStore.isLoggedIn && to.meta.requiresAuth) {
		return next({ name: 'LoginPage' });
	}
	// Якщо користувач залогінений і намагається потрапити на сторінку логіну - перенаправляємо на головну сторінку
	if (authStore.isLoggedIn && to.name === 'LoginPage') {
		return next({ name: 'HomePage' });
	}
	// Дозволяємо навігацію для інших сторінок
	next();
});

export default router;
