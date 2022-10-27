import { expect, it } from 'vitest';
import { m } from 'vitest/dist/index-4a906fa4';

interface User {
	id: number;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
	id: 1,
	firstName: 'Hello',
	lastName: 'World',
	isAdmin: true,
};

const getUserId = (user: User) => {
	return user.id;
};

it('Should get the user id', () => {
	expect(getUserId(defaultUser)).toEqual(1);
});
