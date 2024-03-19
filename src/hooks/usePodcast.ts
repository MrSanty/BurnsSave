import { AppState } from 'react-native';
import { useEffect, useState } from 'react';
import TrackPlayer, { useProgress } from 'react-native-track-player';

export const usePodcast = (initialState: any) => {
  const { position, duration } = useProgress();
  const [audioState, setAudioSettings] = useState({
    hasAudio: false,
    playing: false,
    loading: false,
  });


  useEffect(() => {
    const suscription = AppState.addEventListener('change', state => {
      if (state === 'background' || state === 'inactive') {
        TrackPlayer.pause();
        setAudioSettings({ ...audioState, playing: false });
      }
    });

    return () => {
      suscription.remove();
      TrackPlayer.reset();
    };
  }, []);

  const changeState = (action: string) => {
    switch (action) {
      case 'setAudio':
        setAudio();
        break;
      case 'playAudio':
        TrackPlayer.play();
        setAudioSettings({ ...audioState, playing: true });
        break;
      case 'pauseAudio':
        TrackPlayer.pause();
        setAudioSettings({ ...audioState, playing: false });
        break;
      default:
        break;
    }
  };

  const setAudio = async () => {
    setAudioSettings({ ...audioState, loading: true });
    await TrackPlayer.add([{ ...initialState }]);
    setAudioSettings({ ...audioState, loading: false, hasAudio: true });
  };

  const positionMinutes = `${Math.floor(position / 60)}:${
    Math.floor(position % 60) < 10
      ? `0${Math.floor(position % 60)}`
      : Math.floor(position % 60)
  }`;

  const durationMinutes = `${Math.floor(duration / 60)}:${
    Math.floor(duration % 60) < 10
      ? `0${Math.floor(duration % 60)}`
      : Math.floor(duration % 60)
  }`;

  return {
    hasAudio: audioState.hasAudio,
    loading: audioState.loading,
    playing: audioState.playing,
    duration: durationMinutes,
    position: positionMinutes,
    changeState,
  };
};
