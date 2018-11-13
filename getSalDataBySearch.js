
var dat = JSON.parse(document.getElementsByClassName('blob-code blob-code-inner js-file-line')[0].innerText);
var titleArr = [];
var analyst = [];
var engineer = [];
var wrangler = [];
var scientist = [];

function parseTitle(obj, term){
	for(i=0; i< dat.length; i++){
		if(term.test(dat[i].title) === true && /boston/i.test(dat[i].geo) === true){
			obj.push(dat[i].highSal);
		}
    }
}

function av(values){
	let sum = values.reduce((previous, current) => current += previous);
	return sum / values.length;
}

parseTitle(analyst, /analyst/i)
parseTitle(engineer, /engineer/i)
parseTitle(scientist, /scientist/i)

var analystSal = new Array(av(analyst.map(r=>{return parseInt(r)})));
var engineerSal = new Array(av(engineer.map(r=>{return parseInt(r)})));
var scientistSal = new Array(av(scientist.map(r=>{return parseInt(r)})))
