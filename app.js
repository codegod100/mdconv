import fs from "fs"
import showdown from "showdown"
import {argv} from "node:process"
let out = ""
const dir = argv[2]
let files = fs.readdirSync(dir).reverse()
const converter = new showdown.Converter()
//console.log(files)
for(const file of files){
	if(!file.includes(".md")) continue
	let body = fs.readFileSync(`${dir}/${file}`).toString()
	//console.log(body)
	let html = converter.makeHtml(body)
	//console.log(html)
	out = out.concat(`<h1>${file}</h1>${html}`)
}
console.log(out)
