<template>
  <Container class="!p-0">
    <div class="w-full max-w-2xl p-2 mx-auto rounded-2xl">
      <div v-for="faq in faqdata" :key="faq.question" class="mb-5">
        <div>
          <button
            @click="toggle(faq.question)"
            class="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200"
          >
            <span>{{ faq.question }}</span>
            <!-- <ChevronUpIcon
              class="transform rotate-180 w-5 h-5 text-indigo-500"
            /> -->
          </button>
          <div
            class="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300"
            v-if="open && activeFaq === faq.question"
          >
            {{ faq.answer }} {{ activeFaq }}
          </div>
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
const open = ref(false);
const activeFaq = ref("");
const faqdata = ref([
  {
    question: "Is beer good for your health",
    answer:
      "Yes, depending on your consumption rate. Don't consume too much of beer and not for people under 18 years",
  },
  {
    question: "How old before you can drink beer?",
    answer:
      "18 years and above. You must be 18 years and above in some country before you can drink beer",
  },
  {
    question: "What is your refund policy? ",
    answer:
      "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
  },
  {
    question: "Do you offer technical support? ",
    answer:
      "No, we don't offer technical support. Please purchase a support plan to get 6 months of support.",
  },
]);

const toggle = (activeFaq1) => {
  open.value = !open.value;
  activeFaq.value = activeFaq1;
};
</script>

<style>
</style>
