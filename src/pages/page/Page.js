import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPage } from '../../store/reducers/PageReducer'
import FullPageLoader from './../../components/loading/Loading'
import { useHistory } from 'react-router-dom'

function Page(props) {
	const state = useSelector(state => state.page.page)
	const loading = useSelector(state => state.page.loading)
	const lang = useSelector(state => state.lang.lang)
	const dispatch = useDispatch()
	const slug = props.match.params.slug
	const history = useHistory()
	if(state === undefined){
		history.push('/404')
	}

	useEffect(() => {
		dispatch(getPage(slug))
	},[slug])

	return (
		<div className="page">
			<div className="container">
				<div className="page__row">
					<div className="page__title">
						<h1>{lang === 'uz' ? state?.title_uz : state?.title_ru}</h1>
					</div>

					<div className="page__content">
						<p>{lang === 'uz' ? state?.content_uz : state?.content_ru}</p>
					</div>
				</div>
			</div>
			{loading && <FullPageLoader />}
		</div>
	)
}

export default Page