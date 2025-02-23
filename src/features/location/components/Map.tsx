export default function Map() {
	return (
		<div className="max-w-[700px] aspect-video mx-auto">
			<iframe
				src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d488.1585354145393!2d18.33137126571597!3d43.83081857668392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4758cb57a09be203%3A0x59380bdcd53ed568!2sEuropark!5e0!3m2!1sen!2sba!4v1740315367369!5m2!1sen!2sba'
				className='rounded-box mx-auto w-full h-full border-none'
				allowFullScreen={false}
				loading='lazy'
				referrerPolicy='no-referrer-when-downgrade'
			></iframe>
		</div>
	);
}
