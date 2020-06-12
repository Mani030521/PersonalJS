// const classNames = require("classnames")

// const styleClass = {
// 	default: "",
// 	raised: "py-2 px-3 rounded shadow",
// 	rounded: "py-2 px-3 rounded-full"
// }

// const hello = {
// 	variant: "rounded",
// // 	className:
// // 		"py-15 block border-b border-grey-light no-underline text-black leading-normal text-lg font-sans-light"
// // }

// // function getCH() {
// // 	const { variant } = hello

// // 	let { className } = hello
// // 	className = classNames(
// // 		className,
// // 		{
// // 			[styleClass.default]: variant === "simple"
// // 		},
// // 		{
// // 			[styleClass.raised]: variant === "raised"
// // 		},
// // 		variant === "rounded" ? [styleClass[variant]] : ""
// // 	)
// // 	console.log({ [styleClass.rounded]: variant === "rounded" })
// // 	return className
// // }

// // console.log(getCH())

// const obj = {
// 	name: 'Mani',
// 	dept: 'CSE',
// 	ma: () => {
// 		console.log(this)
// 		return this.name + this.dept;
// 	}
// }

// obj.ma();
// asd = 'Man';

// console.log(global.asd)
// function sample(name){
// 	console.log(name)
// 	// console.log(arguments['0']())
// }
// console.log(sample('Mani'))
// console.log(sample(() => {
// 	console.log('asdas')
// }))
// // // obj.prototype.ma = () => {
// // // 	return this.name + this.dept
// // // }
// // const obj2 = {
// // 	name: 'Mani',
// // 	dept: 'DEP'
// // }
// // obj.ma.apply(obj2)

// function Book(title, name){
// 	this.title = title;
// 	this.name = name;
// 	this.printYear = () => {console.log(this.title + this.asdasd)}
// }

// Book.prototype.printName  = () => {
// 	console.log(this)
// }

// Book.prototype.asdasd = 'asdasd'

// const b = new Book('Mani', 'asd');
// b.printYear()


// function b(ti){
// 	this.ti = ti;
// 	return () => {
// 		console.log(this)
// 	}
// }
// b('Mani')()


const obj = {
	name: 'Mani'
}

obj.__proto__.dept = 'CSE'

const obj2 = {
	name: 'Manikandan'
}
// function ob(){
// 	return true;
// }
// console.log(Object.getPrototypeOf(obj))
console.log(obj.dept)
console.log(obj2.dept)