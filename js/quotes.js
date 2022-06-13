const quotes = [
    {
        quote: "A ship in harbor is safe, but that is not what ships are build.",
        author: "Tony Ko",
    },
    {
        quote: "First, you need to shot bullets as much as you can, then it works!",
        author: "kaist",
    },
    {
        quote: "Stay Foolish, Stay Hungry",
        author: "Steve Jobs",
    },
    {
        quote: "gEt oUt oF cOmforT zonE",
        author: "soMebodY",
    },
    {
        quote: "여기까지 왔으면 이곳 사람들, 이곳 건물들 별거 아닌 것까지 세세히 보면서 이곳이 왜 세계 최고인지 고민해봐",
        author: "Tony Ko",
    },
    {
        quote: "We all have two lives. The second begins when you realize you only have one.",
        author: "작자미상",
    },
    {
        quote: "호시우행 - Festina Lente",
        author: "호랑이의 눈으로, 소의 움직음으로 - 서둘러라 천천히!",
    },
    {
        quote: "Dies hic hodiernus quem frustra vixi crastinus ille estdies quem certe qui heri periit vivere volebat",
        author: "네가 헛되이 보낸 오늘은 어제 죽은 이가 그토록 바라던 내일이다",
    },
    {
        quote: "The greatest thing about tomorrow is, I will be better than I am today. And that's how I look at my life. I will be a better golfer, I will be a better person, I will be a better father, I will be a better husband, I will be a better friend. That's the beauty of tomorrow",
        author: "Tiger Woods"
    },
    {
        quote: "You hit a bad shot, you have to get over it right there and then so you can get focused on the next one",
        author: "Tiger Woods",
    }
]

const quote = document.querySelector("#quote div:first-child");
const author = document.querySelector("#quote div:last-child");

const todayQuote =  quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author 