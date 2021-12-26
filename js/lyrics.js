const lyrics = [
    {
        lyric: "비가 되어 하염없이 너는 내려 바람 되어 내 맘속으로 불어와 너를 고이고이 담아둔 채 흘려보내지를 못해 오직 그 안에 잠겨만 가",
        song:"내일의 나에게",
    },
    {
        lyric: "약속할게 만날 거야 꼭 다시 지금 내 맘이 널 잡지 못해 흔들리지만 기억할게 When I Fly 저기 하늘을 넘어 널 볼 수 있는 걸",
        song:"- 하늘을 넘어, 드림캐쳐",
    },
    {
        lyric: "날 보며 웃을 때 마다 맘 속 깊은 곳에선 심각해지는 병이 있어요 이러면 안 되는데 널 안고 싶어 느끼고 싶어 함께 꿈꾸고 싶어",
        song:"- 방백, 샤이니",
    },
    {
        lyric: "나는 눈을 감아 너의 맘속 바다 깊은 곳 한편에 잠겨간다 네가 있는 곳으로 너는 깊은 바달 홀로 걷고 있었다 이제 널 놓지 않아",
        song:"- 너의 바다, 호피폴라",
    },
    {
        lyric: "지친 하루에 길을 헤맬 때 하늘 위의 별을 문득 바라보면 손에 닿지 않아도 느껴지는 따스함 내게 와줘 위로가 돼줘",
        song:"- Like a Star, 도영",
    },
    {
        lyric: "일 년에 단 하루만으론 한없이 모자란 걸 매일 아침 눈뜨는 너를 향해 속삭여 줄래 오늘 행복하길 바랄게",
        song:"- 너의 하루, NCT127",
    },
    {
        lyric: "놓지 말아 줘 네가 있다는 게 나에게는 마지막 희망 한 줄기의 빛이니까 붙잡아 줘 살아 있다는 게 두렵고 버겁긴 하지만 견딜 수 있어 오로지 너의 그 사랑이 있다면",
        song:"- You make me, 데이식스",
    },
    {
        lyric: "너는 내게로 와 향기만 남기고 그렇게 홀연히 떠나갔네 그때의 그대와 지금의 나는 조금은 닮지 않았나 가끔 생각한다네",
        song:"- Cherokee, Band Oyster",
    },
    {
        lyric: "You can't sense right through how I truly was You were gripping me without noticing Was so, so strange like Someone never loved me",
        song:"- Square, Yerin Baek",
    },
    {
        lyric: "두려움 그건 이제 날 움직이게 하는 이유가 된 걸거야 오늘의 난 살아가 내일의 내가 행복하게 마지막 날 미소가 가득 담겨있게",
        song: "- Best Part, 데이식스",
    },
]

const lyric = document.querySelector("#lyric span:first-child");
const song = document.querySelector("#lyric span:last-child");

const todaysLyrics = lyrics[Math.floor(Math.random() * lyrics.length)];

lyric.innerText = todaysLyrics.lyric;
song.innerText = todaysLyrics.song;
