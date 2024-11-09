import React from 'react';
import { Emotion } from '@/lib/types';
import { getEmotionIntensityColor } from '@/lib/emotions';

interface EmotionCardProps {
  emotion: Emotion;
  onClick?: () => void;
}

export function EmotionCard({ emotion, onClick }: EmotionCardProps) {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-xl font-semibold mb-4">{emotion.name.pl}</h3>
      <div className="space-y-2">
        {Object.entries(emotion.intensity_levels).map(([level, data]) => (
          <div 
            key={level}
            className={`${getEmotionIntensityColor(level as 'low' | 'medium' | 'high')} p-2 rounded`}
          >
            <span className="font-medium">{data.name}</span>
            <p className="text-sm">{data.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export function EmotionGrid({ emotions }: { emotions: Emotion[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {emotions.map((emotion) => (
        <EmotionCard key={emotion.id} emotion={emotion} />
      ))}
    </div>
  );
}
