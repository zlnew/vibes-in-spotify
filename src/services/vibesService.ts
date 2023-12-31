export interface IVibe {
  type: 'energetic' |'melancholic' |'relaxing' | 'upbeat' | 'uplifting' | 'love' | 'thoughtful';
}

export const vibeStyleClass: Record<IVibe['type'], { text: string, textHover: string, border: string }> = {
  energetic: {
    text: 'text-energetic',
    textHover: 'hover:text-energetic',
    border: 'border-energetic',
  },
  melancholic: {
    text: 'text-melancholic',
    textHover: 'hover:text-melancholic',
    border: 'border-melancholic'
  },
  relaxing: {
    text: 'text-relaxing',
    textHover: 'hover:text-relaxing',
    border: 'border-relaxing',
  },
  upbeat: {
    text: 'text-upbeat',
    textHover: 'hover:text-upbeat',
    border: 'border-upbeat',
  },
  uplifting: {
    text: 'text-uplifting',
    textHover: 'hover:text-uplifting',
    border: 'border-uplifting',
  },
  love: {
    text: 'text-love',
    textHover: 'hover:text-love',
    border: 'border-love',
  },
  thoughtful: {
    text: 'text-thoughtful',
    textHover: 'hover:text-thoughtful',
    border: 'border-thoughtful',
  }
}

export const vibeGenres: Record<IVibe['type'], { genres: string[] }> = {
  energetic: {
    genres: ['pop', 'dance', 'electronic', 'funk', 'r&b'],
  },
  melancholic: {
    genres: ['ballads', 'indie', 'acoustic', 'folk', 'soul'],
  },
  relaxing: {
    genres: ['ambient', 'chillout', 'downtempo', 'jazz', 'lo-fi'],
  },
  upbeat: {
    genres: ['hip-hop', 'rap', 'edm', 'rock', 'pop'],
  },
  uplifting: {
    genres: ['pop-rock', 'alternative', 'inspirational', 'electronic', 'indie'],
  },
  love: {
    genres: ['r&b', 'pop', 'ballads', 'indie', 'romantic-classics'],
  },
  thoughtful: {
    genres: ['indie', 'folk', 'alternative', 'ambient', 'classical'],
  }
}

export function getRandomGenres(vibeType: IVibe['type'], count: number): string[] {
  const vibe = vibeGenres[vibeType];

  if (!vibe) {
    throw new Error(`Invalid vibe type: ${vibeType}`);
  }

  const allGenres = vibe.genres;
  const selectedGenres: string[] = [];

  for (let i = 0; i < count; i++) {
    const randomIndex = Math.floor(Math.random() * allGenres.length);
    const randomGenre = allGenres[randomIndex];
    selectedGenres.push(randomGenre);
    allGenres.splice(randomIndex, 1);
  }

  return selectedGenres;
}