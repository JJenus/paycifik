export const useLiveChat = () => {
	const openChat = () => {
	};

	const closeChat = () => {
	};

	const load = () => {
		if (process.client) {
			const auth = useAuth();

			const interval = setInterval(() => {
				if (auth.isAuthenticated()) {
					
					clearInterval(interval);
				}
			}, 2000);
		}
	};

	const loadChatraScript = () => {
		
	};

	return {
		loadChatraScript,
		load,
		openChat,
		closeChat,
	};
};
