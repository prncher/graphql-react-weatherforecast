import React, { Suspense } from 'react';
import { Address } from '../graphql-server/src/watherAPI'
const WeatherForecast = React.lazy(()=> import('./WeatherForecast'))
const FormInput = React.lazy(() => import('./FormInput'))
const defaultAddress = {
  street: '',
  city: '',
  state: ''
}

function App() {
  const [address, setAddress] = React.useState<Address>(defaultAddress)

  return (
    <React.Fragment>
      <Suspense fallback={<>Loading</>}>
        <FormInput {...{setAddress}} />
        <WeatherForecast {...{address}} />
      </Suspense>
    </React.Fragment>
  );
}

export default App;
