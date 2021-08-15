const SetTitleAndFavicon = (favicon: string, title: string): void => {
  const faviconHTMLElement = document.getElementById('favicon') as HTMLLinkElement;
  faviconHTMLElement.href = favicon;

  // change title in page
  document.title = title;
};

export const SetTimeMachineAttributes = (): void => {
  const favicon = 'https://img.icons8.com/plasticine/100/000000/time-machine.png';
  const title = 'Time Machine';
  SetTitleAndFavicon(favicon, title);
};

export const SetTicTacToeAttributes = (): void => {
  const favicon = 'https://img.icons8.com/ultraviolet/80/000000/tic-tac-toe.png';
  const title = 'Tic Tac Toe';
  SetTitleAndFavicon(favicon, title);
};
