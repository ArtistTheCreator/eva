import type { RootState } from '@root/utils/store';

import moment from 'moment';

import * as react from 'react';
import * as redux from 'react-redux';
import { useImages } from './useImages';


export const useTestState = () => {
    const images = useImages();
    const store = redux.useSelector((state: RootState) => state.tests.tests[0]);
    
    const [startTime, setStartTime] = react.useState(moment());
    const [endTime, setEndTime] = react.useState(moment());

    const [step, setStep] = react.useState<'init' | 'start' | 'complete' | 'error'>('init');
    const [picked, setPicked] = react.useState<number[]>([]);
    const [error, setError] = react.useState(0);

    react.useEffect(() => {
        if (store?.rules.maxError && error + 1 > store.rules.maxError) {
            setStep('complete');
            setEndTime(moment());
        }
    }, [error])

    react.useEffect(() => {
        if (picked.length === images.length) {
            setStep('complete');
            setEndTime(moment());
        }
    }, [picked])

    return {
        step,
        setStep,
        picked,
        setPicked,
        error,
        time: endTime.diff(startTime, 'seconds'),
        setError,
        onStart: () => {
            setStep('start');
            setStartTime(moment());
        },
        onRestart: () => {
            setPicked([]);
            setError(0);
            setStep('start');
            setStartTime(moment());
        }
    }
};
