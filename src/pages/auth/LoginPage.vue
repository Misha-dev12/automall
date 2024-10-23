<template>
	<VForm
		class="form"
		@submit="logIn"
	>
		<div class="form__field">
			<label
				for="email"
				class="form__label"
			>
				Email
			</label>
			<Field
				:rules="validateEmail"
				id="email"
				class="form__input"
				type="email"
				name="email"
				placeholder="Email"
			/>
			<ErrorMessage
				name="email"
				class="form__error"
			/>
		</div>
		<div class="form__field">
			<label
				for="password"
				class="form__label"
			>
				Password
			</label>
			<Field
				:rules="validatePassword"
				id="password"
				class="form__input"
				type="password"
				name="password"
				placeholder="Password"
			/>
			<ErrorMessage
				name="password"
				class="form__error"
			/>
		</div>
		<div class="form__actions">
			<RouterLink
				:to="{ name: 'RegistrationPage' }"
				class="form__login"
			>
				Create account
			</RouterLink>
			<button
				type="submit"
				class="form__button"
			>
				Log in
			</button>
		</div>
	</VForm>
</template>

<script>
import { ErrorMessage, Field, Form as VForm } from 'vee-validate';
import { useAuthStore } from '@/store/authStore';
import { mapActions } from 'pinia';

export default {
	name: 'LoginPage',
	components: {
		VForm,
		Field,
		ErrorMessage
	},
	methods: {
		...mapActions(useAuthStore, ['logIn']),
		validateEmail(email) {
			if (!email) return 'This field is required.';
			const validEmailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
			if (!validEmailRegex.test(email)) {
				return 'This field must be a valid email address.';
			}
			return true;
		},
		validatePassword(password) {
			if (!password) return 'This field is required.';
			if (password.length < 8) return 'Password must be at least 8 characters.';
			return true;
		}
	}
};
</script>

<style lang="scss" scoped>
.form {
	display: flex;
	flex-direction: column;
	gap: 24px;
	&__field {
		position: relative;
	}
	&__label {
		font-size: font-rem(12);
		color: $bg-dark;
		display: block;
		margin-bottom: 6px;
		font-weight: 600;
	}
	&__input {
		width: 100%;
		padding: 12px 16px;
		font-size: font-rem(14);
		border: 1px solid $grey;
		border-radius: 4px;
		transition:
			border-color 0.3s ease,
			box-shadow 0.3s ease;
		&:focus {
			border-color: $dark-blue;
			box-shadow: 0 0 5px $grey;
		}
	}
	&__error {
		color: $red;
		font-size: 12px;
		margin-top: 4px;
		position: absolute;
		bottom: -20px;
		left: 0;
	}
	&__actions {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: font-rem(18);
		font-weight: 700;
	}
	&__login,
	&__button {
		transition: $time;
		@include hover {
			color: $orange;
		}
	}
}
</style>
