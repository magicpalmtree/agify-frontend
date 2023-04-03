import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import HistoryItem from './components/HistoryItem';
import CustomButton from './components/CustomButton';
import InputField from './components/InputField';
import { RootState } from './store';
import { addPredict, Predict } from './store/historyReducer';
import mainApiService from './services/axios';

function App() {
  const dispatch = useDispatch();
  const history = useSelector((state: RootState) => state.history);
  const [fetching, setFetching] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string>('');
  const [age, setAge] = useState<number | null>(null);

  const handleSubmit = async () => {
    if(fetching || firstName === '') return;
    setFetching(true);
    try {      
      const { age } : Predict = await mainApiService.post('/predict', { firstName });
      dispatch(addPredict({ firstName, age }));
      setAge(age);
    } catch(error) {
      console.log(error);
    }
    setFetching(false);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(null);
    setFirstName(event.target.value);
  }

  return (
    <div className='mx-auto max-w-7xl px-4 py-6 sm:py-8 lg:py-24 font-nunito'>
      <div className='flex flex-col space-y-24'>
        <div className='max-w-[345px]'>
          <h1 className='font-regular text-black'>Agify</h1>
          <p className='font-semi text-gray-700 mt-2'>A simple API for predicting the age of a person given their name.</p>
        </div>
        <div className='space-y-6'>
          { age != null ? <HistoryItem firstName={firstName} age={age} large /> : <h2 className='text-gray-700 font-regular'>Enter a name</h2> }
          <div>
            <div className='text-black'>First Name</div>
            <div className='flex flex-row items-center space-x-2 mt-1 max-w-[345px]'>
              <div className='flex-1'>
                <InputField onChange={handleChange} />
              </div>
              <div className='flex-shrink-0'>
                <CustomButton loading={fetching} onClick={handleSubmit}>Submit</CustomButton>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h5 className='text-gray-900 font-bold mb-2'>History</h5>
          <div className='space-y-2'>
            { history.predicts.map((predict: Predict, index) => <HistoryItem key={index} firstName={predict.firstName} age={predict.age} />) }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
