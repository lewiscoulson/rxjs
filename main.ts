import {Observable} from 'rxjs';

/*
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

class MyObserver {
	next(value) {
		console.log(`value: ${value}`);
	}

	error(e) {
		console.log(`error: ${e}`);
	}

	complete() {
		console.log('complete')
	}
}

source.subscribe(new MyObserver());
*/



/*
let numbers = [1, 5, 10];
let source = Observable.from(numbers);

source.subscribe(
	value => console.log(`value: ${value}`),
	e => console.log(`error: ${e}`),
	() => console.log('complete')
);
*/



/*
let numbers = [1, 5, 10];
let source = Observable.create(observer => {
	for (let n of numbers) {
		observer.next(n);
	}

	observer.complete();
});

source.subscribe(
	value => console.log(`value: ${value}`),
	e => console.log(`error: ${e}`),
	() => console.log('complete')
);
*/


/*
let numbers = [1, 5, 10];
let source = Observable.create(observer => {
	let index = 0;

	let provideValue = () => {
		observer.next(numbers[index++]);

		if (index < numbers.length) {
			setTimeout(provideValue, 2000);
		} else {
			observer.complete();
		}
	};

	provideValue();
});

source.subscribe(
	value => console.log(`value: ${value}`),
	e => console.log(`error: ${e}`),
	() => console.log('complete')
);
*/






/*
let numbers = [1, 5, 10];
let source = Observable.create(observer => {
		let index = 0;

		let provideValue = () => {
			observer.next(numbers[index++]);

			if (index < numbers.length) {
				setTimeout(provideValue, 200);
			} else {
				observer.complete();
			}
		};

		provideValue();
	})
	.map(n => n * 2)
	.filter(n => n > 4);

source.subscribe(
	value => console.log(`value: ${value}`),
	e => console.log(`error: ${e}`),
	() => console.log('complete')
);
*/



/*
let numbers = [1, 5, 10];
let circle = document.getElementById('circle');
let source = Observable
	.fromEvent(document, 'mousemove')
	.map((e : MouseEvent) => {
		return {
			x: e.clientX,
			y: e.clientY
		}
	})
	.filter(value => {
		return value.x < 500;
	})
	.delay(300);

function onNext(val) {
	circle.style.left = val.x + 'px';
	circle.style.top = val.y + 'px';
}

source.subscribe(
	onNext,
	e => console.log(`error: ${e}`),
	() => console.log('complete')
);
*/





/*
let output = document.getElementById('output');
let button = document.getElementById('button');

let click = Observable.fromEvent(button, 'click');

function load(url : string) {
	let xhr = new XMLHttpRequest();

	xhr.addEventListener('load', () => {
		let movies = JSON.parse(xhr.responseText);

		movies.forEach(m => {
			let div = document.createElement('div');
			
			div.innerText = m.title;
			output.appendChild(div);
		})
	})


	xhr.open('get', url);
	xhr.send();
}

click.subscribe(
	e => load('movies.json'),
	e => console.log(`error: ${e}`),
	() => console.log('complete')
);
*/





