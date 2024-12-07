import React from 'react';
import { Search } from 'lucide-react';
import { commonProblems } from '../data/yogaData';

interface ProblemInputProps {
  selectedProblem: string;
  onProblemSelect: (problem: string) => void;
}

export function ProblemInput({ selectedProblem, onProblemSelect }: ProblemInputProps) {
  return (
    <div className="w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-beige-500 w-5 h-5" />
        <select
          value={selectedProblem}
          onChange={(e) => onProblemSelect(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-beige-50 border border-beige-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-beige-300 appearance-none text-beige-900"
        >
          <option value="">Select your concern...</option>
          {commonProblems.map((problem) => (
            <option key={problem.id} value={problem.id}>
              {problem.description}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}