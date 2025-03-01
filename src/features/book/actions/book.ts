'use server';

import { BookFormStatus } from '@/features/book/types/status';
const nodemailer = require('nodemailer');
import path from 'path';
import { readFileSync } from 'fs';

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
		message: (formData.get('message') as string) || '<nema poruke>'
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

	transporter
		.sendMail({
			from: `"EuroPark d.o.o." <${process.env.NODEMAILER_SYSTEM_EMAIL}>`,
			to: formFields.email,
			subject: 'Vaša rezervacija je uspješno spašena!',
			text: readFileSync(
				path.join(process.cwd(), 'src/features/book/templates/confirmation.txt'),
				'utf8'
			),
			html: readFileSync(
				path.join(process.cwd(), 'src/features/book/templates/confirmation.html'),
				'utf8'
			)
		})
		.catch(() => {
			return { status: 'error' };
		});

	const reservation_text = Object.entries({
		'{{NAME}}': formFields.name,
		'{{EMAIL}}': formFields.email,
		'{{PHONE}}': formFields.phone,
		'{{DATE_FROM}}': new Date(formFields.date_from).toLocaleDateString('bs-BA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}),
		'{{DATE_TO}}': new Date(formFields.date_to).toLocaleDateString('bs-BA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}),
		'{{MESSAGE}}': formFields.message
	}).reduce(
		(txt, [placeholder, value]) => txt.replace(new RegExp(placeholder, 'g'), value),
		readFileSync(
			path.join(process.cwd(), 'src/features/book/templates/reservation.txt'),
			'utf8'
		)
	);
	const reservation_html = Object.entries({
		'{{NAME}}': formFields.name,
		'{{EMAIL}}': formFields.email,
		'{{PHONE}}': formFields.phone,
		'{{DATE_FROM}}': new Date(formFields.date_from).toLocaleDateString('bs-BA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}),
		'{{DATE_TO}}': new Date(formFields.date_to).toLocaleDateString('bs-BA', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric'
		}),
		'{{MESSAGE}}': formFields.message
	}).reduce(
		(html, [placeholder, value]) => html.replace(new RegExp(placeholder, 'g'), value),
		readFileSync(
			path.join(process.cwd(), 'src/features/book/templates/reservation.html'),
			'utf8'
		)
	);

	transporter
		.sendMail({
			from: `"EuroPark d.o.o." <${process.env.NODEMAILER_SYSTEM_EMAIL}>`,
			to: process.env.NODEMAILER_RESERVATIONS_EMAIL,
			subject: 'Nova Rezervacija [europark.ba]',
			text: reservation_text,
			html: reservation_html
		})
		.catch(() => {
			return { status: 'error' };
		});

	return { status: 'ok' };
}
