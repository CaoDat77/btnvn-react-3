function Control({ music, onPrev, onNext }) {
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
          <div className="col-lg-6">
            <div className="d-flex justify-content-center">
              <audio controls autoPlay src={music.link}></audio>
            </div>
            <div className="d-flex justify-content-center ">
              <button onClick={onPrev} className="d-flex align-items-center">
                <i className="bx bx-skip-previous"></i>
              </button>
              <button onClick={onNext} className="d-flex align-items-center">
                <i className="bx bx-skip-next"></i>
              </button>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="d-flex justify-content-end gap">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17 17h-1.559l-9.7-10.673A1 1 0 0 0 5.001 6H2v2h2.559l4.09 4.5-4.09 4.501H2v2h3.001a1 1 0 0 0 .74-.327L10 13.987l4.259 4.686a1 1 0 0 0 .74.327H17v3l5-4-5-4v3z"></path>
                <path d="M15.441 8H17v3l5-3.938L17 3v3h-2.001a1 1 0 0 0-.74.327l-3.368 3.707 1.48 1.346L15.441 8z"></path>
              </svg>

              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M7 7h10v3l4-4-4-4v3H5v6h2V7zm10 10H7v-3l-4 4 4 4v-3h12v-6h-2v4z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
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
      thumbnail: "/myanh.jpeg",
      title: "Real Love",
      singer: "Mỹ Anh",
      link: "Real-Love.mp3",
    },
  ];

  const handlerNext = () => {
    if (index == musics.length - 1) setIndex(0);
    else setIndex(index + 1);
  };

  const handlerPrev = () => {
    if (index == 0) setIndex(musics.length - 1);
    else setIndex(index - 1);
  };

  const music = musics[index];

  return <Control music={music} onPrev={handlerPrev} onNext={handlerNext} />;
}

const root = ReactDOM.createRoot(document.querySelector("#app"));
root.render(<App />);
