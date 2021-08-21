import React, { ReactElement } from 'react';
import { useEffect } from 'react';

const AdUnit = (): ReactElement => {
	useEffect(() => {
		(window.adsbygoogle = window.adsbygoogle || []).push({});
	}, []);

	return (
		<ins
			className='adsbygoogle'
			style={{ display: 'block' }}
			data-ad-client='ca-pub-2800277021459468'
			data-ad-slot='5697444693'
			data-ad-format='auto'
			data-full-width-responsive='true'
		/>
	);
};

export default AdUnit;
