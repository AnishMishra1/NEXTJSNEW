import { Roboto } from "next/font/google"

const roboto = Roboto({
	weight:'100',
	subsets:['latin'],
	display:'swap'
})

export default function Fontsize(){
	return(
		<div>
			<h1 className={roboto.className}>heading h1</h1>
		</div>
	)
}