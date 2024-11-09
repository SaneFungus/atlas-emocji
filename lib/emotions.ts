import { Emotion, EmotionsDatabase, LocalizedString } from './types';
const emotionsData = require('../public/data/emotions.json') as EmotionsDatabase;

export function getAllEmotions(): Emotion[] {
  const database = emotionsData as EmotionsDatabase;
  return Object.values(database.emotions);
}

export function getEmotionById(id: string): Emotion | undefined {
  const database = emotionsData as EmotionsDatabase;
  return database.emotions[id];
}

export function searchEmotions(query: string, language: keyof LocalizedString = 'pl'): Emotion[] {
  const database = emotionsData as EmotionsDatabase;
  const searchTerm = query.toLowerCase();
  
  return Object.values(database.emotions).filter(emotion => {
    const nameMatch = emotion.name[language].toLowerCase().includes(searchTerm);
    const intensityMatch = Object.values(emotion.intensity_levels).some(
      level => level.name.toLowerCase().includes(searchTerm)
    );
    
    return nameMatch || intensityMatch;
  });
}

export function getEmotionIntensityColor(level: 'low' | 'medium' | 'high'): string {
  const colors = {
    low: 'bg-blue-100 text-blue-800',
    medium: 'bg-blue-200 text-blue-900',
    high: 'bg-blue-300 text-blue-950'
  };
  return colors[level];
}
