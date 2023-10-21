// Interference Test. (60 images)
import type { FC } from 'react';
import type { RootState } from '@root/utils/store';

// import * as utils from '@root/utils/app';
import * as react from 'react';
import * as redux from 'react-redux';

import * as Ant from 'antd';
import Preview from './preview';
import Start from './start';
import Error from './error';
import Complete from './complete';


const Test1Run: FC = () => {
    const [state, setState] = react.useState<'init' | 'start' | 'complete' | 'error'>('init');
    const [picked, setPicked] = react.useState<number[]>([]);
    const [error, setError] = react.useState(0);

    const store = redux.useSelector((state: RootState) => state.tests.tests[0]);

    if (!store) return <Ant.Empty description="Test Not Found" />;

    const onStart = () => setState('start');
    const onError = (errorCount: number, pickedCount: number) => {
        if (store.rules.maxError && errorCount > store.rules.maxError) setState('error');
    };
    // const onSuccess = () => setState('complete');
    const onRestart = () => {
        setPicked([]);
        setError(0);
        setState('start');
    }

    react.useEffect(() => {
        onError(error, picked.length)
    }, [error]);


    return (
        <div>
            {state === 'init' && <Preview onStart={onStart} />}
            {state === 'error' && <Error onRestart={onRestart} />}
            {state === 'complete' && <Complete />}
            {state === 'start' && (
                <Start 
                    // onError={onError} 
                    // onSuccess={onSuccess}
                    picked={picked}
                    setPicked={setPicked}
                    error={error}
                    setError={setError}
                />
            )}
        </div>
    );
};

export default Test1Run;