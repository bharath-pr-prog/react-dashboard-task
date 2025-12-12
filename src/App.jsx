import Sidebar from './Sidebar';
import DashboardContent from './DashboardContent'; // Import the new content

export default function App() {
  return (
    <div className="flex h-screen w-full bg-gray-50">
      
      {/* 1. Sidebar Component (Left Side) */}
      <Sidebar /> 
      
      {/* 2. Main Content Component (Right Side) */}
      <DashboardContent />
      
    </div>
  )
}