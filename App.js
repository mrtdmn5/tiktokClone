import { Amplify } from 'aws-amplify'
import awsconfig from './src/aws-exports'

import Navigation from "./src/screens/Home/Navigation"
Amplify.configure(awsconfig)






export default function App() {
  return (
    <Navigation></Navigation>
  );
}
