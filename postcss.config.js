module.exports = {
	plugins: [
		require('postcss-import')({
		}),
		require('postcss-apply'),
		require('postcss-custom-selector'),
		require('postcss-custom-media')({
			preserve:false
		}),
		require('postcss-preset-env')({
				autoprefixer: {
					grid:true,
					flexbox:false,
					},
					customProperties: false
		})
  ]
}
