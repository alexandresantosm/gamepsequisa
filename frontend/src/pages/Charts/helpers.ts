import { Game } from './types';
import { RecordItem } from '../Record/types';

export const buildBarSeries = (games: Game[], records: RecordItem[]) => {
  const mappedGames = games.map(game => {
    const filteredGames = records.filter(record => {
      return record.gameTitle === game.title && record.gamePlatform === game.platform;
    });

    return {
      x: `${game.title} | ${game.platform}`,
      y: filteredGames.length
    }
  });

  const sortedGames = mappedGames.sort((a, b) => {
    return b.y - a.y;
  });

  return sortedGames.slice(0, 8);
}

export const getPlatformChartData = (records: RecordItem[]) => {
  const platforms = ["PC", "PLAYSTATION", "XBOX"];

  const series = platforms.map(platform => {
    const filteredGames = records.filter(record => {
      return platform === record.gamePlatform;
    });

    return filteredGames.length;
  });

  return {
    labels: platforms,
    series
  };
}

export const getGenreChartData = (records: RecordItem[]) => {
  const genreByAmount = records.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue.genreName] !== undefined) {
      accumulator[currentValue.genreName] += 1;
    } else {
      accumulator[currentValue.genreName] = 1;
    }

    return accumulator;
  }, {} as Record<string, number>);

  const labels = Object.keys(genreByAmount);
  const series = Object.values(genreByAmount);

  return {
    labels,
    series
  };
}