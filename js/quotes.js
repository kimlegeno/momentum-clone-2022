const quotes = [
  {
    quote: "당신이 어려움을 겪고 항복하지 않기로 결정할 때, 그것이 힘이다.",
    author: "Arnold Schwarzenegger",
  },
  {
    quote: "불가능을 하는 것은 좀 재미있다.",
    author: "Walt Disney",
  },
  {
    quote: "나보다 시작이 나은 선수들이 있겠지만, 나는 끝이 강한 선수다.",
    author: "Usain Bolt",
  },
  {
    quote: "힘든 시간들은 절대로 오래가지 않지만, 강인한 사람들은 오래 간다.",
    author: "Robert H. Schuller",
  },
  {
    quote:
      "나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공하는 이유이다.",
    author: "Michael Jordan",
  },
  {
    quote:
      "당신이 키워진 틀에서 벗어나지 못하면, 당신은 세상이 얼마나 더 큰지 이해하지 못할 것이다.",
    author: "Angelina Jolie",
  },
  {
    quote:
      "하지만 저는 왠지 충분히 어두울 때만 여러분들이 별들을 볼 수 있다는 것을 압니다.",
    author: "Martin Luther King, Jr",
  },
  {
    quote: "열심히 갈고, 열심히 빛납시다.",
    author: "Dwayne Johnson",
  },
  {
    quote: "저는 이를 소망하고 희망하여 도달한게 아니라, 노력했습니다.",
    author: "Estée Lauder",
  },
  {
    quote:
      "우사인볼트가 세계에서 왜 제일 달리기 빠른 사람인줄 알아요? 끝까지 갔기 때문이에요",
    author: "Swings",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
