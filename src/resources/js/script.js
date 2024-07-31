document.addEventListener('DOMContentLoaded', () => {
	const formBox = document.querySelector('.section-form__form-box');
	const successBox = document.querySelector('.section-form__success-box');
	const form = document.querySelector('.section-form__form');
	const submitBtn = document.querySelector('.section-form__form-submit');
	const resultInput = document.querySelector('.section-form__form-result');
	const heartsRow = document.querySelector('.section-form__hearts-row');
	const hearts = document.querySelectorAll('.section-form__heart');

	heartsRow.addEventListener('mouseenter', () => {
		deselectHearts();
	})

	heartsRow.addEventListener('mouseleave', () => {
		if (resultInput.value) {
			const currentValue = parseInt(resultInput.value);
			selectAllPrevHearts(currentValue);
		} else {
			deselectHearts();
		}
	})

	hearts.forEach((heart, index) => {
		heart.addEventListener('click', () => {
			resultInput.value = index + 1;
			form.classList.remove('section-form__form--error');
		})
		heart.addEventListener('mouseenter', () => {
			selectAllPrevHearts(index);
		})
	})
	const deselectHearts = () => {
		hearts.forEach((heart, index) => {
			heart.classList.remove('section-form__heart--active');
		})
	}
	const selectAllPrevHearts = (limit) => {
		deselectHearts();
		for (let i = 0; i < limit; i++) {
			hearts[i].classList.add('section-form__heart--active');
		}
	}

	// Отправка формы
	form.addEventListener('submit', handleFormSubmit);

	async function handleFormSubmit(e) {
		e.preventDefault();
		submitBtn.disabled = true;

		if (!resultInput.value) {
			form.classList.add('section-form__form--error');
			submitBtn.disabled = false;
			return;
		}

		//....
		// Отправка формы
		//....

		formBox.style.display = 'none'; // Скрыть форму
		successBox.style.display = 'block'; // Показать сообщение об успехе

		submitBtn.disabled = false;
	}
})
