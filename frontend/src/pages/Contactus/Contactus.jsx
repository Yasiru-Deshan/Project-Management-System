import React from 'react';

const Contactus = () => {
	return (
		<section className='container mt-5 pb-5'>
			<div className='row text-center mb-5'>
				<h1>Contact us</h1>
			</div>
			<div className='row pb-5'>
				<div className='col-sm-12 col-md-12'>
					<div className='mb-4'>
						<iframe
							title='gym-location'
							src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d19329.521903529716!2d79.9729445!3d6.9146775!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2c63e344ab9a7536!2sSri%20Lanka%20Institute%20of%20Information%20Technology!5e1!3m2!1sen!2slk!4v1616672392111!5m2!1sen!2slk'
							width='100%'
							height='450'
							frameBorder='0'
							style={{ border: '0' }}
							allowFullScreen=''
							aria-hidden='false'
							tabIndex='0'></iframe>
					</div>

					<div className='row text-center'>
						<div className='col-md-4'>
							<div className='px-3 py-2 rounded text-white mb-2 d-inline-block'>
								<img
									alt='icon of address'
									src='https://img.icons8.com/cotton/64/000000/worldwide-location--v1.png'
								/>
							</div>
							<div>
								{' '}
								<h3>Visit us</h3>
								Your address
							</div>
						</div>
						<div className='col-md-4'>
							<div className='px-3 py-2 rounded text-white mb-2 d-inline-block'>
								<img
									alt='icon of phone'
									src='https://img.icons8.com/cotton/64/000000/phone-message.png'
								/>
							</div>
							<div>
								<h3>Call us</h3>
								011-22242543
							</div>
						</div>
						<div className='col-md-4'>
							<div className=' px-3 py-2 rounded text-white mb-2 d-inline-block'>
								<img
									alt='icon of email'
									src='https://img.icons8.com/cotton/64/000000/email-open.png'
								/>
							</div>
							<div>
								<h3>Mail us</h3>alphafitness@gmail.com
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contactus;
