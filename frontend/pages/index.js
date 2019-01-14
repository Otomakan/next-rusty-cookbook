
import Link from 'next/link'
import Layout from '../components/Layout'

const Index = ()=>(
	<Layout>
	<div className="homepage-wrapper">
		<div className="title-wrapper">
		<h1>60 days of cooking</h1>
		<h2> A journey of cooking and web-designing in Japan</h2>
		</div>
	</div>
	<style jsx>{`
		.homepage-wrapper{
			margin:0;
			top:0;
			height:100vh;
			width:100vw;
			transition:2s;
			background-image: url("/static/smudginess.png");
			background-color:white;
			// background-blend-mode: exclusion
		}
		.smudge-image{
			height:100vh;
		}
		.title-wrapper{
			margin:0;
			padding:100px;
			text-transform:uppercase;
		}
		@keyframes show-line{
			from{width:0;}
			to{width:500px;}
		}
		h1{
			position:relative;
		}
		h1:after{
			content:"";
			width:100%;
			animation: show-line 2s forwards;
			border-top:solid 2px black;
			position:absolute;
			bottom:-20px;
			left:0;
		}
		h2{
			position:relative;
			margin-top:40px;
		}
		h2:after{
			content:"";
			width:100%;
			border-top:solid 2px black;
			position:absolute;
			bottom:-20px;
			animation: show-line 2s forwards;
			left:0;e
		}
	`}
	</style>
	</Layout>
)

export default (Index)