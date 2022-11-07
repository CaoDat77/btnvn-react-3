function Control({ music, onPrev, onNext, onPlay }) {
  return (
    <div className="player">
      <div className="container-fluid">
        <div className="row align-items-center  justify-content-between">
          <div className="col-lg-3">
            <div className="row  align-items-center">
              <div className="col-lg-3">
                <div className="thumbnail spin">
                  <img src={music.thumbnail} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="content">
                  <div className="title">{music.title}</div>
                  <div className="singer">{music.singer}</div>
                </div>
              </div>
              <div className="col-lg-1">
                <div className="action">
                  <i className="bx bxs-heart"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-flex justify-content-center align-items-center btn">
            <div className="">
              <div className="control d-flex justify-content-center align-items-center">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path>
                  <path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path>
                </svg>
                <i onClick={onPrev} className="bx bx-skip-previous-circle"></i>

                <i onClick={onPlay} className="bx bx-play-circle  play-btn"></i>

                <i
                  onClick={onPlay}
                  className="pause-btn bx bx-pause-circle"
                ></i>
                <i onClick={onNext} className="bx bx-skip-next-circle"></i>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
                </svg>
              </div>
              <div className="timer d-flex">
                <div className="remaining"></div>
                <input type="range" name="" id="" />
                <div className=" duration"></div>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-end gap"></div>
          </div>
        </div>
      </div>
      <audio id="song" src={music.link}></audio>
    </div>
  );
}

function App() {
  const [index, setIndex] = React.useState(0);
  const musics = [
    {
      thumbnail: "andiez.jpg",
      title: "Chờ đợi có đáng sợ",
      singer: "Andiez",
      link: "Cho-Doi-Co-Dang-So-Andiez.mp3",
    },

    {
      thumbnail: "sontung.jpg",
      title: "1 Phút",
      singer: "Andiez",
      link: "1-Phut-Cover-Long-Hoang.mp3",
    },

    {
      thumbnail: "myanh.jpeg",
      title: "Real Love",
      singer: "Mỹ Anh",
      link: "Real-Love.mp3",
    },
  ];

  const song = document.querySelector("#song");
  const playBtn = document.querySelector(".play-btn");
  const pauseBtn = document.querySelector(".pause-btn");
  const durationTime = document.querySelector(".duration");
  const remainingTime = document.querySelector(".remaining");
  const input = document.querySelector("input");
  let isplay = true;
  console.log(input);

  const handlerPlay = () => {
    song.addEventListener("ended", endedSong);
    function endedSong() {
      if (index == musics.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }

    input.addEventListener("change", range);
    function range() {
      song.currentTime = input.value;
    }

    function displayTimer() {
      const { duration, currentTime } = song;
      remainingTime.textContent = formatTimer(currentTime);
      input.max = duration;
      input.value = currentTime;
      if (!duration) {
        durationTime.innerHTML = "00:00";
      } else {
        durationTime.textContent = formatTimer(duration);
      }
    }

    displayTimer();
    let timer = setInterval(displayTimer, 1000);

    function formatTimer(number) {
      const minutes = Math.floor(number / 60);
      const seconds = Math.floor(number - minutes * 60);

      return `${minutes < 10 ? "0" + minutes : minutes}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    }

    if (isplay) {
      song.play();
      isplay = false;
      playBtn.style.display = "none";
      pauseBtn.style.display = "block";
    } else {
      song.pause();
      isplay = true;
      playBtn.style.display = "block";
      pauseBtn.style.display = "none";
    }
  };

  const handlerNext = () => {
    if (index == musics.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlerPrev = () => {
    if (index == 0) {
      setIndex(musics.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const music = musics[index];

  return (
    <Control
      music={music}
      onPlay={handlerPlay}
      onPrev={handlerPrev}
      onNext={handlerNext}
    />
  );
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
