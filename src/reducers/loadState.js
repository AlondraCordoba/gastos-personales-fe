export const loadState = () => {
    try {
      const serialState = localStorage.getItem('appState');
      if (serialState === null) {
        return undefined;
      }
      return JSON.parse(serialState);
    } catch (err) {
      return undefined;
    }
};