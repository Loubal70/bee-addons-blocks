export default function blocksTypeExcludes() {
	return {
		blocks: [],
		loaded: false,

		init() {
			this.getBlocks();
			this.$watch('blocks', (newValue, oldValue) => {
				this.updateBlocks(newValue);
			})
		},

		async getBlocks() {
			try {
				const response = await fetch(wpData.siteUrl + 'wp-json/bee-addons-blocks/v1/get-blocks-types-excluded', {
					method: 'GET',
					headers: {
						'Content-Type': 'application/json'
					}
				});

				if (response.ok) {
					this.blocks = await response.json();
					this.loaded = true;
				} else {
					const errorData = await response.text();
					console.error('La requête a échoué avec le statut : ' + response.status + ' - ' + errorData);
				}
			} catch (error) {
				console.error(error);
			}
		},

		async updateBlocks(values) {
			try {
				const response = await fetch(wpData.siteUrl + 'wp-json/bee-addons-blocks/v1/blocks-types-excluded', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify(values)
				});

				if (response.ok) {
					const responseData = await response.json();
				} else {
					const errorData = await response.text();
					console.error('La requête a échoué avec le statut : ' + response.status + ' - ' + errorData);
				}
			} catch (error) {
				console.error(error);
			}
		}
	};
}
