import React, { useState } from 'react';
import { Flower } from 'lucide-react';
import { ProblemInput } from './components/ProblemInput';
import { YogaPoseCard } from './components/YogaPoseCard';
import { yogaPoses } from './data/yogaData';
import { YogaPose } from './types/yoga';

function App() {
  const [selectedProblem, setSelectedProblem] = useState('');
  const [suggestions, setSuggestions] = useState<YogaPose[]>([]);
  const [loading, setLoading] = useState(false);

  const handleProblemSelect = async (problem: string) => {
    setSelectedProblem(problem);
    setLoading(true);
    
    try {
      // Get poses from our predefined data
      const poses = problem ? yogaPoses[problem] || [] : [];
      setSuggestions(poses);
    } catch (error) {
      console.error('Error getting poses:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-beige-100">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Flower className="w-10 h-10 text-beige-700" />
            <h1 className="text-3xl font-bold text-beige-900">Yoga Guide</h1>
          </div>
          <p className="text-beige-700 max-w-md mx-auto">
            Discover personalized yoga poses and expert tutorials tailored to your needs
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <ProblemInput
            selectedProblem={selectedProblem}
            onProblemSelect={handleProblemSelect}
          />
        </div>

        {loading ? (
          <div className="text-center text-beige-600">
            <div className="animate-pulse">Finding the perfect poses for you...</div>
          </div>
        ) : suggestions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((pose, index) => (
              <YogaPoseCard key={index} pose={pose} />
            ))}
          </div>
        ) : (
          <div className="text-center text-beige-600">
            {selectedProblem 
              ? "No poses found for this concern. Please try another option."
              : "Select a concern above to get personalized yoga recommendations"}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;