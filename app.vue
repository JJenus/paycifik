<script setup >
	useHead({
		script: [
			{},
			{
				src: "https://salesiq.zohopublic.com/widget?wc=siqad025883b3ba07dcf44cd0144f1877b8c15c222d8bebc143429b0fb15d514038",
				async: true,
				tagPosition: "bodyClose",
				id: "zsiqscript",
			},
			
		],
	});

	if (process.client) {
		 window.$zoho = window.$zoho || {};
		 $zoho.salesiq = $zoho.salesiq || { ready: function () {} };
	}
</script>

<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	@import url("https://fonts.googleapis.com/css2?family=Lobster&family=Truculenta:opsz,wght@12..72,800&display=swap");

	/* 
	font-family: 'Lobster', cursive;
font-family: 'Truculenta', sans-serif;
	 */
	.logo-color {
		columns: #226b8d;
	}
	.zipay-logo-dark {
		color: rgb(255, 93, 83);
	}

	@media (max-width: 765px) {
		.mobile-aside {
			padding-bottom: 60px !important;
		}
	}

	/* Remove up and down arrows (spinners) from number input */
	input[type="number"]::-webkit-inner-spin-button,
	input[type="number"]::-webkit-outer-spin-button {
		-webkit-appearance: none;
		appearance: none;
		margin: 0;
	}
</style>
