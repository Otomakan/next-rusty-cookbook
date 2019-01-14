import Link from 'next/link'
import React from 'react'

const pages = [
	{name:"Home", link:"/"},
	{name:"About", link:"/about"},
	{name:"Recipe", link:"/recipe"},
]
const getPages = () => (
  <ul>
  {pages.map((page)=>
		<li>
			<Link href={page.link} key={page.name}>
			 <div>{page.name}</div>
      </Link>
		</li>
    )}
    <style jsx>{`
      li{
        margin:50px 20px;
        cursor:pointer;
      }
      ul {
        padding: 0;
       }
      `}
      </style>
  </ul>
)

export default (props) => (
<div>
  <div className="navbar-container">

      {getPages(props.pages)}
  </div>
    <style jsx>{`
      .navbar-container{
        position:fixed;
        height:100vh;
        background-color: rgba(255,255,255,0.2);
        top:0;
        right:0;
        padding:0 20px;
        width:auto;
        margin:0;
        margin-top:auto;
        margin-bottom:auto;
      }

      h1, a {
        font-family: "Arial";
      }

      li {
        list-style: none;
        margin: 20px 30px;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}
    </style>
  </div>
)