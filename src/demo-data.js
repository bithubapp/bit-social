import faker from 'faker';

export default new Array(10).fill(0).map(function() {
	return {
		text: faker.lorem.sentence(),
		url: faker.internet.url(),
		image: faker.image.imageUrl()
	};
});
