// import { useEffect, useRef } from 'react';
// import { AppState } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// const useInactivityHandler = (timeoutDuration, onTimeout) => {
//   const navigation = useNavigation();
//   const timer = useRef(null);
//   const appState = useRef(AppState.currentState);

//   const resetTimer = () => {
//     if (timer.current) {
//       clearTimeout(timer.current);
//     }
//     timer.current = setTimeout(onTimeout, timeoutDuration);
//   };

//   const handleAppStateChange = (nextAppState) => {
//     if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
//       resetTimer();
//     }
//     appState.current = nextAppState;
//   };

//   useEffect(() => {
//     const subscription = AppState.addEventListener('change', handleAppStateChange);
//     resetTimer();

//     return () => {
//       subscription.remove();
//       if (timer.current) {
//         clearTimeout(timer.current);
//       }
//     };
//   }, []);

//   useEffect(() => {
//     const navigationListener = navigation.addListener('focus', resetTimer);

//     return () => {
//       navigationListener.remove();
//     };
//   }, [navigation]);

//   return resetTimer;
// };

// export default useInactivityHandler;

import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';

const useInactivityHandler = (timeoutDuration, onTimeout) => {
  const timer = useRef(null);
  const appState = useRef(AppState.currentState);

  const resetTimer = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(onTimeout, timeoutDuration);
  };

  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      resetTimer();
    }
    appState.current = nextAppState;
  };

  const handleUserInteraction = () => {
    resetTimer();
  };

  useEffect(() => {
    const subscription = AppState.addEventListener('change', handleAppStateChange);
    resetTimer();

    return () => {
      subscription.remove();
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return handleUserInteraction;
};

export default useInactivityHandler;
