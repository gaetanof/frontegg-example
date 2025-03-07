import { withAuth } from './hoc/withAuth.jsx';
import AppContent from './components/AppContent.jsx';
const App = withAuth(AppContent);

export default App;
