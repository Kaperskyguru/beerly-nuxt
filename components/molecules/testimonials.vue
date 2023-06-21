

<template>
  <Container>
    <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
      <div class="lg:col-span-2 xl:col-auto">
        <div
          class="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800"
        >
          <p class="text-2xl leading-normal">
            Switching to Beerly helps me reduce my
            <mark
              class="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"
              >Lactose</mark
            >
            intake and increase my health by 30%.
          </p>

          <Avatar
            :image="userOneImg"
            name="Sarah Steiner"
            title="VP Sales at Google"
          />
        </div>
      </div>
      <div class="">
        <div
          class="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800"
        >
          <p class="text-2xl leading-normal">
            I stop guessing and switched to Beerly becuase I can easily see
            <mark
              class="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"
              >ranking of beers</mark
            >
            and decide which is good for my health.
          </p>

          <Avatar
            :image="userTwoImg"
            name="Dylan Ambrose"
            title="Lead marketer at Netflix"
          />
        </div>
      </div>
      <div class="">
        <div
          class="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800"
        >
          <p class="text-2xl leading-normal">
            Before I buy a beer from any brand, I use Beerly to make sure it
            <mark
              class="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200"
            >
              good for my health</mark
            >
            before I proceed.
          </p>

          <Avatar
            :image="userThreeImg"
            name="Gabrielle Winn"
            title="Co-founder of Acme Inc"
          />
        </div>
      </div>
    </div>
  </Container>
</template>

<script setup>
import userOneImg from "/img/user1.jpg";
import userTwoImg from "/img/user2.jpg";
import userThreeImg from "/img/user3.jpg";
</script>

