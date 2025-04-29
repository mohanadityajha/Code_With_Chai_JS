// const name = "hitesh"
// const repoCount = 50
// console.log(name + repoCount + " value") // its is outdated using + symbol
// console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)  // This is correct way

//const gameName = new String("hitesh-hc-com")
// console.log(gameName[0])
// console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(0));
// console.log(gameName.indexOf("t"));

// const newString = gameName.substring(0, 4)
// console.log(newString)

// const anotherString = gameName.slice(-8,4)
// console.log(anotherString);

// const newStringOne = " hitesh   "
// console.log(newStringOne)
// console.log(newStringOne.trim())

// const url = "https://hitesh.com/hitesh20%choudhary"
// console.log(url.replace("20%", "-"))
// console.log(url.includes("hitesh"))
// console.log(url.includes("Aditya"))
// console.log(gameName.split("-"))

//.........................................................................................................................//
// Self Study



// Length Method

// const text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ12";
// const result = text.length;
// console.log(text)
// console.log(result)

// charAt Method

// const text = "Aditya"
// const result = text.charAt(1)
// console.log(text)
// console.log(result)

//charCodeAt Method

// const text = "ADITYA"
// const result = text.charCodeAt(2)
// console.log(text);
// console.log(result)


// JavaScript String toUpperCase

// let text = "Hello World!";
// const result = text.toUpperCase()
// console.log(text);
// console.log(result)

// JavaScript String toLowerCase

// const text = "Hello World!";
// const result = text.toLowerCase();
// console.log(text)
// console.log(result)

// JavaScript String concat()

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2)
// console.log(text3)

// JavaScript String trim

// let text1 = "      Hello World!      ";
// const result = text1.trim();
// console.log(result)


// JavaScript String repeat

// let text = "Hello world!";
// const result = text.repeat(4)
// console.log(result)


// Replacing String

// let text = "Please visit Microsoft!";
// const result = text.replace("Microsoft", "google");
// console.log(result);


//JavaScript String ReplaceAll()

// let text = "I love cats. Cats are very easy to love. Cats are very popular."
// const result = text.replaceAll("cats", "Dogs")
// const res = text.replaceAll("Cats", "dogs")
// console.log(result)
// console.log(res);


//JavaScript String split

// let text = "a,b,c,d,e,f";
// const result = text.split(",")
// console.log(result)


// JavaScript String indexOf

// const text = "Please locate where 'locate' occurs!";
// const result = text.indexOf("locate")
// console.log(result)

// JavaScript String lastIndexOf

// let text = "Please locate where 'locate' occurs!";
// let result = text.lastIndexOf("locate");
// console.log(result);


// JavaScript String search

// const text = "Please locate where 'locate' occurs!";
// const result = text.search("locate")
// console.log(result);

// JavaScript String match

// let text = "The rain in SPAIN stays mainly in the plain";
//const result = text.match("ain")
// const result = text.match(/ain/)
// const result = text.match(/ain/g)
// console.log(result)

//JavaScript String includes()
// let text = "Hello world, welcome to the universe.";
// const result = text.includes("universe")
// console.log(result)

// String Literal

// const firstName = "Aditya"
// const lastName = "Mohan"
// const text = `welcome ${firstName}, ${lastName}`
// console.log(text)

// Slice Method
let text = "Apple, Banana, Kiwi";
let part = text.slice(-4,10);
console.log(part);
