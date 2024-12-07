import React from 'react';
import { Play, Eye } from 'lucide-react';
import { YogaPose } from '../types/yoga';
import { formatViews } from '../utils/formatters';

interface YogaPoseCardProps {
  pose: YogaPose;
}

export function YogaPoseCard({ pose }: YogaPoseCardProps) {
  return (
    <div className="bg-beige-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-beige-900">{pose.name}</h3>
          <p className="text-beige-600 text-sm italic">{pose.sanskritName}</p>
        </div>
        <span className="px-3 py-1 text-xs rounded-full bg-beige-100 text-beige-700">
          {pose.level}
        </span>
      </div>
      
      <ul className="mb-4 space-y-1">
        {pose.benefits.map((benefit, index) => (
          <li key={index} className="text-sm text-beige-700">• {benefit}</li>
        ))}
      </ul>

      <div className="flex items-center justify-between text-sm text-beige-600">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4" />
          <span>{formatViews(pose.views)}</span>
        </div>
        <a
          href={pose.videoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 bg-beige-200 hover:bg-beige-300 rounded-lg text-beige-900 transition-colors"
        >
          <Play className="w-4 h-4" />
          Watch ({pose.duration})
        </a>
      </div>
    </div>
  );
}