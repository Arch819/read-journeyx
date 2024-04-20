import React from 'react';

type PlayStopBtnProps = {
  isPlay: boolean;
  onClick(): void;
};

function PlayStopBtn({ isPlay, onClick }: PlayStopBtnProps) {
  return (
    <button className="btn" onClick={onClick}>
      <svg className="icon" width={40} hanging={40}>
        {isPlay ? (
          <use href="/sprite.svg#icon-stop"></use>
        ) : (
          <use href="/sprite.svg#icon-play"></use>
        )}
      </svg>
    </button>
  );
}

export default PlayStopBtn;
