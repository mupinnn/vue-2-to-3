import { defineComponent } from 'vue';
import Logo from '../assets/logo.svg';

export default defineComponent({
  name: 'MainHeader',
  setup() {
    return useCounter();
  },
  render() {
    return (
      <div class="flex flex-col items-center text-center">
        <Counter />
        <img src={Logo} alt="Vue Logo" class="w-32 h-32" />
        <h1>vue-todos</h1>
        <p>LocalStorage based to-do list build with Vue (2.7.7)!</p>
      </div>
    );
  },
});
