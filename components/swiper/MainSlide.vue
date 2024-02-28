<script setup>
	const NFTs = ref([
		{
			image: "/assets/media/banking/business-people-analyzing-stock-market_53876-96070.jpg",
		},
		{
			name: "Again",
			floor: "20.23 ETH",
			volume: "12,21",
			image: "/assets/media/banking/flat-lay-business-concept_53876-24738.jpg",
		},
		{
			name: "Maldiva",
			floor: "1.23 Matic",
			volume: "11,420",
			image: "/assets/media/banking/green-arrow-is-going-up-stacks-coins-arranged-bar-graph_35913-3151.jpg",
		},
		{
			name: "Greener",
			floor: "91.23 Matic",
			volume: "11,420",
			image: "/assets/media/banking/man-hand-holding-virtual-world-with-internet-connection-metaverse-global-business-marketing-banking-financial-pass-thru-application-technology-concept_616485-32.jpg",
		},
	]);
</script>

<template>
	<div class="py-4 w-100">
		<Swiper
			:modules="[SwiperAutoplay]"
			:space-between="10"
			:loop="true"
			:autoplay="{
				delay: 3000,
				disableOnInteraction: true,
			}"
		>
			<SwiperSlide v-for="(nft, i) in NFTs" :key="i">
				<div class="card border-0">
					<div class="card-body p-0">
						<img
							:src="nft.image"
							alt=""
							class="w-100 h-200px h-md-300px h-lg-400px rounded-3 "
						/>
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	</div>
</template>

<style scoped></style>
