import { useState } from 'react';
import FileUpload from '../components/FileUpload';
import ResultsTable from '../components/ResultsTable';

const Home = () => {
  const [data, setData] = useState(null);
  const [isFileUploaded, setIsFileUploaded] = useState(false);

  const handleFileUpload = (uploadedData) => {
    setData(uploadedData);
    setIsFileUploaded(true);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <h1 className="text-2xl font-bold mb-8">FFUF Dashboard</h1>
      {!isFileUploaded && <FileUpload onFileUpload={handleFileUpload} />}
      {data && <ResultsTable data={data} />}
    </div>
  );
};

export default Home;
