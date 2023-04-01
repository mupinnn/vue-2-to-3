<template>
  <li
    class="flex flex-col items-center mb-1 bg-[#212833] cursor-pointer first-of-type:rounded-t-md"
  >
    <p class="flex-grow break-all mb-2 p-4">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id, laborum.
    </p>
    <span class="flex w-full">
      <button
        class="bg-none broder-none text-[#68d391] p-2 text-2xl text-center inline-block cursor-pointer bg-[#1d232c] rounded-b-md hover:bg-[#15191f] hover:text-[#489967] w-1/2"
      >
        &#10003;
      </button>
      <button
        class="bg-none broder-none text-[#c53030] p-2 text-2xl text-center inline-block cursor-pointer bg-[#1d232c] rounded-b-md hover:bg-[#15191f] hover:text-[#971919] w-1/2"
      >
        &#10005;
      </button>
    </span>
  </li>
</template>

<script>
export default {
  name: 'TodoItem',
};
</script>
