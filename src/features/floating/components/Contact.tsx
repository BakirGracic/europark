import NextLink from 'next/link';
import ViberPNG from '@/images/communication/viber.png';
import WhatsappPNG from '@/images/communication/whatsapp.png';
import Image from 'next/image';

export default function Contact() {
	return (
		<div className='fixed right-0 bottom-0 z-50 flex flex-col items-center gap-3 p-4'>
			<NextLink
				href='viber://chat/?number=+38761487818'
				target='_blank'
				className='btn btn-circle btn-xl bg-[#643D89] shadow-lg'
			>
				<Image src={ViberPNG} alt='Viber Logo' height={28} width={28} />
			</NextLink>
			<NextLink
				href='https://wa.me/+38761487818'
				target='_blank'
				className='btn btn-circle btn-xl bg-[#2CD46B] shadow-lg'
			>
				<Image src={WhatsappPNG} alt='Whatsapp Logo' height={28} width={28} />
			</NextLink>
		</div>
	);
}
