import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import TipCard from './TipCard';
import { ClipLoader } from 'react-spinners';

const BrowseTips = () => {
  const tips = useLoaderData();
  const [difficulty, setDifficulty] = useState('All');
  const [viewMode, setViewMode] = useState('card'); 
  const [sortOrder, setSortOrder] = useState('asc'); 

  if (!tips) {
    return (
      <div className="flex justify-center items-center h-30 font-bold gap-2">
        <ClipLoader color="#22c55e" size={30} />
        <ClipLoader color="#22c55e" size={40} />
        <ClipLoader color="#22c55e" size={50} />
      </div>
    );
  }

  const filteredTips = difficulty === 'All'
    ? tips
    : tips.filter(tip => tip.difficulty === difficulty);

  const sortedTips = [...filteredTips].sort((a, b) => {
    const titleA = a.Title?.toLowerCase() || '';
    const titleB = b.Title?.toLowerCase() || '';
    return sortOrder === 'asc'
      ? titleA.localeCompare(titleB)
      : titleB.localeCompare(titleA);
  });

  return (
    <div className="p-4 ">
      <div className="mb-4 flex flex-wrap items-center gap-4 justify-between  mx-12">
        <div className="flex items-center gap-2">
          <label className="text-lg font-semibold text-green-700">Difficulty:</label>
          <select
            className="select select-bordered max-w-xs"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="All">All</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setSortOrder(prev => prev === 'asc' ? 'desc' : 'asc')}
            className="btn btn-sm bg-green-600 text-white"
          >
            Sort: {sortOrder === 'asc' ? 'A-Z' : 'Z-A'}
          </button>

          <button
            onClick={() => setViewMode(prev => prev === 'table' ? 'card' : 'table')}
            className="btn btn-sm bg-amber-400 text-white"
          >
            View: {viewMode === 'table' ? 'Card' : 'Table'}
          </button>
        </div>
      </div>

      {viewMode === 'table' ? (
        <div className="overflow-x-auto border-2 border-green-600 mt-4">
          <table className="table w-full">
            <thead className='bg-amber-400 text-white'>
              <tr>
                <th>Title</th>
                <th>Image</th>
                <th>Plant Type</th>
                <th>Category</th>
                <th>Difficulty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {sortedTips.length > 0 ? (
                sortedTips.map(tip => <TipCard key={tip._id} tip={tip} view={viewMode} />)
              ) : (
                <tr><td colSpan="6" className="text-center py-6">No tips found for selected difficulty.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 mx-10  md:grid-cols-4 gap-6 mt-4">
          {sortedTips.length > 0 ? (
            sortedTips.map(tip => <TipCard key={tip._id} tip={tip} view="card" />)
          ) : (
            <p className="text-center col-span-full py-6">No tips found for selected difficulty.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default BrowseTips;
