import React, { useState } from 'react';

const ResultsTable = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const filteredResults = data.results.filter(result =>
    result.url.toLowerCase().includes(searchTerm.toLowerCase()) &&
    result.status.toString().includes(searchStatus)
  );

  return (
    <div>
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Search URL..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-1 p-2 mr-2 border border-gray-400 rounded"
        />
        <input
          type="text"
          placeholder="Search Status..."
          value={searchStatus}
          onChange={(e) => setSearchStatus(e.target.value)}
          className="flex-1 p-2 border border-gray-400 rounded"
        />
      </div>
      <table className="min-w-full bg-gray-800 text-white border border-gray-700">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">URL</th>
            <th className="py-2 px-4 border-b">Status</th>
            <th className="py-2 px-4 border-b">Length</th>
          </tr>
        </thead>
        <tbody>
          {filteredResults.map((result, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">
                <a href={result.url} target="_blank" rel="noopener noreferrer" className="text-blue-400">
                  {result.url}
                </a>
              </td>
              <td className="py-2 px-4 border-b">{result.status}</td>
              <td className="py-2 px-4 border-b">{result.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultsTable;
