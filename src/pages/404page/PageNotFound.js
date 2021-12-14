import React from 'react'
import { Link } from 'react-router-dom'

export default function PageNotFound() {
	return (
		<div className='pageNotFound'>
			<div className='container'>
				<div className="pageNotFound__row">
					<div className="pageNotFound__content">
						<div className="pageNotFound__content-title">
							<h1>404</h1>
							<h3>Page Not Found</h3>
						</div>
						<div className="pageNotFound__content-text">
							<p>Noto&apos;g&apos;ri manzil ko&apos;rsatilgan</p>
						</div>
						<div className="pageNotFound__content-btn">
							<Link to="/">
								<button>Bosh sahifaga qaytish</button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
