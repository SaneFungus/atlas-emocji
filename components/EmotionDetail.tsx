import React from 'react';
import { Emotion } from '@/lib/types';
import { getEmotionIntensityColor } from '@/lib/emotions';

interface EmotionDetailProps {
  emotion: Emotion;
  onClose?: () => void;
}

export function EmotionDetail({ emotion, onClose }: EmotionDetailProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">{emotion.name.pl}</h2>
        {onClose && (
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
        )}
      </div>

      {/* Poziomy intensywności */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Poziomy intensywności</h3>
        <div className="space-y-4">
          {Object.entries(emotion.intensity_levels).map(([level, data]) => (
            <div 
              key={level}
              className={`${getEmotionIntensityColor(level as 'low' | 'medium' | 'high')} p-4 rounded-lg`}
            >
              <h4 className="font-medium text-lg mb-2">{data.name}</h4>
              <p className="mb-2">{data.description}</p>
              <ul className="list-disc list-inside">
                {data.physical_signs.map((sign, index) => (
                  <li key={index}>{sign}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Manifestacje fizyczne */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Manifestacje fizyczne</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Twarz</h4>
            <div className="space-y-2">
              <div>
                <h5 className="font-medium">Oczy:</h5>
                <ul className="list-disc list-inside">
                  {emotion.physical_manifestations.face.eyes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Usta:</h5>
                <ul className="list-disc list-inside">
                  {emotion.physical_manifestations.face.mouth.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Ciało</h4>
            <div className="space-y-2">
              <div>
                <h5 className="font-medium">Postawa:</h5>
                <ul className="list-disc list-inside">
                  {emotion.physical_manifestations.body.posture.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h5 className="font-medium">Ruchy:</h5>
                <ul className="list-disc list-inside">
                  {emotion.physical_manifestations.body.movement.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manifestacje psychologiczne */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Manifestacje psychologiczne</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Poznawcze</h4>
            <ul className="list-disc list-inside">
              {emotion.psychological_manifestations.cognitive.thought_patterns.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Emocjonalne</h4>
            <ul className="list-disc list-inside">
              {emotion.psychological_manifestations.emotional.core_feelings.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
