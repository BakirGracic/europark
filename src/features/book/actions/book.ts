'use server';

import { BookFormStatus } from '@/features/book/types/status';

export async function bookAction(
	state: BookFormStatus,
	formData: FormData
): Promise<BookFormStatus> {
	const formFields = {
		name: formData.get('name') as string,
		email: formData.get('email') as string,
		phone: formData.get('phone') as string,
		date_from: formData.get('date_from') as string,
		date_to: formData.get('date_to') as string,
		message: formData.get('message') as string
	};

	return { status: 'ok' };
}
