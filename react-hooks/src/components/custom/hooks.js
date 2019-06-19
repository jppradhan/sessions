import MyReact from './MyReact';

const Counter = () => {
  const [counter, setCounter] = MyReact.useState(0);
  return {
    click() {
      setCounter(counter + 1);
    },
    render() {
      console.log(console.log('COUNTER: ', counter));
    },
  };
};
let Capp = MyReact.render(Counter);
Capp.click();
Capp = MyReact.render(Counter);
Capp.click();
Capp = MyReact.render(Counter);
Capp.click();
Capp = MyReact.render(Counter);
Capp.click();
Capp = MyReact.render(Counter);
