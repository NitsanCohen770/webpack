import './hello-world-button.scss';

class HelloWorldButton {
  buttonCssClass = 'hello-world-button';
  render() {
    const button = document.createElement('button');
    button.classList.add(this.buttonCssClass);
    button.innerHTML = 'Hello World';
    button.onclick = function () {
      const p = document.createElement('p');
      p.innerHTML = 'it was clicked';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    };
    const body = document.querySelector('body');
    body.appendChild(button);
  }
}
export default HelloWorldButton;
