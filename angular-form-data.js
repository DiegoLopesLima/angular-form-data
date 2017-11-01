angular

	.module('ngFormData', [])

	.service('ngFormData', function() {

		this.getFormData = function(data) {

			var

				formData = new FormData(),

				dataPropertyNames = Object.getOwnPropertyNames(data);

			for (var dataPropertyIndex = 0, dataPropertySize = dataPropertyNames.length; dataPropertyIndex < dataPropertySize; dataPropertyIndex++) {

				var

					dataIndex = dataPropertyNames[dataPropertyIndex],

					current = data[dataIndex];

				if (current instanceof FileList) {

					for (var fileIndex = 0; fileIndex < current.length; fileIndex++)

						formData.append(dataIndex + '[' + fileIndex + ']', current[fileIndex]);

				} else

					formData.append(dataIndex, current);

			}

			console.log('formData', formData);

			return formData;

		};

	})

	.directive('ngInputFile', function() {

		return {
			restrict: 'A',
			scope: {
				ngModel: '='
			},
			link: function(scope, element, attributes) {

				if (element.is('input') && attributes.type === 'file') {

					var input = element.get(0);

					if (input.form && input.form.enctype === 'multipart/form-data')

						element

							.on('change', function() {

								scope.ngModel = this.files;

								scope.$apply();

							});

				}

			}
		};

	});
