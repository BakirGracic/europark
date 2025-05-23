export default function Map() {
	return (
		<div className='mx-auto aspect-video max-w-[700px]'>
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1439.102803801294!2d18.330633355561886!3d43.83083458404374!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cb39c712393d%3A0xbcafbf50a30dd75c!2sParking%20Europark%20Sarajevo!5e0!3m2!1sen!2sba!4v1747477594261!5m2!1sen!2sba'
				className='rounded-box mx-auto h-full w-full border-none'
				allowFullScreen={false}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
}
