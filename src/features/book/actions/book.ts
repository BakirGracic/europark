'use server';

import { BookFormStatus } from '@/features/book/types/status';
const nodemailer = require('nodemailer');

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

	const transporter = nodemailer.createTransport({
		host: process.env.NODEMAILER_SERVER,
		port: 465,
		secure: true,
		auth: {
			user: process.env.NODEMAILER_SYSTEM_EMAIL,
			pass: process.env.NODEMAILER_PASSWORD
		}
	});

	// confirmation to user
	transporter
		.sendMail({
			from: `"EuroPark d.o.o." <${process.env.NODEMAILER_SYSTEM_EMAIL}>`,
			to: formFields.email,
			subject: 'Vaša rezervacija je uspješno spašena!',
			html: '<b>Hello world? TEST!</b>' // TODO napravi html temaplte za confirmation
		})
		.catch(() => {
			return { status: 'error' };
		});

	// reservation to system
	transporter
		.sendMail({
			from: `"EuroPark d.o.o." <${process.env.NODEMAILER_SYSTEM_EMAIL}>`,
			to: process.env.NODEMAILER_RESERVATIONS_EMAIL,
			subject: 'Nova Rezervacija [europark.ba]',
			html: '<b>Hello world? TEST!</b>' // TODO napravi html temaplte za rezervaciju
		})
		.catch(() => {
			return { status: 'error' };
		});

	return { status: 'ok' };
}
