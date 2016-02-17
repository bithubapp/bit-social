import faker from 'faker'; 
import _ from 'lodash';

export default _.range(9).map(function() {
	return {
		text: faker.lorem.sentence(),
		url: faker.internet.url(),
		image: faker.image.imageUrl()
	};
})
