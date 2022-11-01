<script>
import feather from 'feather-icons';
import ContactForm from '@/components/contact/ContactForm.vue';
import ContactDetails from '@/components/contact/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Bandar Lampung, Indonesia',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'rodhifaisalmufid2@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '+62 852 6674 5599',
					icon: 'phone',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
	methods: {},
};
</script>

<template>
	<div
		class="container mx-auto flex flex-col-reverse md:flex-row py-5 md:py-10 md:mt-10"
	>
		<ContactForm />

		<ContactDetails :contacts="contacts" />
	</div>
</template>
