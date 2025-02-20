import ViberPNG from '@/images/communication/viber.png';
import WhatsappPNG from '@/images/communication/whatsapp.png';
import Image from 'next/image';

export default function Floating() {
	return (
		<div className='fixed right-0 bottom-0 z-10 flex items-center gap-3 p-4'>
			<div className='btn btn-circle btn-xl bg-[#643D89] shadow-lg'>
				<Image src={ViberPNG} alt='Viber Logo' height={28} width={28} />
			</div>
			<div className='btn btn-circle btn-xl bg-[#2CD46B] shadow-lg'>
				<Image src={WhatsappPNG} alt='Whatsapp Logo' height={28} width={28} />
			</div>
		</div>
	);
}
