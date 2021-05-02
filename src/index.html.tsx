import { render } from 'preact-render-to-string'
import { Main } from './app'

export default '<!doctype html>' + render(
	<html lang="ko">
	<head>
		<meta charSet="utf-8" />
		<script defer src="./index.js" />
		<link rel="stylesheet" href="./index.css" />
		<title>Dildo</title>
	</head>
	<body>
		{ import.meta.hot ? null : <Main /> }
	</body>
	</html>
)
